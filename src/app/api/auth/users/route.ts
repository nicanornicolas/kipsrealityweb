// src/app/api/auth/users/route.ts
// GET endpoint for listing all users in the organization

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {
    // 1. Auth Check
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userPayload = verifyAccessToken(token);
    
    if (!userPayload || !userPayload.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // 2. Role Check - Only PROPERTY_MANAGER and SYSTEM_ADMIN can list users
    const allowedRoles = ["PROPERTY_MANAGER", "SYSTEM_ADMIN"];
    if (!userPayload.role || !allowedRoles.includes(userPayload.role)) {
      return NextResponse.json(
        { error: "Forbidden - Only Property Managers and System Admins can list users" },
        { status: 403 }
      );
    }

    // 3. Get organization ID
    let orgId = userPayload.organizationId;
    
    if (!orgId) {
      const userRecord = await prisma.user.findUnique({
        where: { id: userPayload.userId },
        include: { organizationUsers: true }
      });
      
      if (userRecord?.organizationUsers[0]?.organizationId) {
        orgId = userRecord.organizationUsers[0].organizationId;
      } else {
        return NextResponse.json({ error: "No organization found" }, { status: 400 });
      }
    }

    // 4. Fetch all users in the organization
    const users = await prisma.user.findMany({
      where: {
        organizationUsers: {
          some: {
            organizationId: orgId
          }
        }
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        emailVerified: true,
        phoneVerified: true,
        twoFactorEnabled: true,
        createdAt: true,
        updatedAt: true,
        organizationUsers: {
          include: {
            organization: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transform the data to match what the frontend expects
    const transformedUsers = users.map(user => ({
      id: user.id,
      name: user.firstName && user.lastName 
        ? `${user.firstName} ${user.lastName}` 
        : user.email.split('@')[0],
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      role: user.organizationUsers[0]?.role || null,
      emailVerified: user.emailVerified,
      phoneVerified: user.phoneVerified,
      twoFactorEnabled: user.twoFactorEnabled,
      organization: user.organizationUsers[0]?.organization,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }));

    return NextResponse.json(transformedUsers);

  } catch (error) {
    console.error("[Users List Error]", error);
    return NextResponse.json({ 
      error: "Failed to fetch users" 
    }, { status: 500 });
  }
}
