// src/app/api/auth/profile/route.ts
// PUT endpoint for updating user profile

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function PUT(req: Request) {
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

    // 2. Parse Request Body
    const body = await req.json();
    const { firstName, lastName, phone, email } = body;

    // 3. Validate required fields
    if (!firstName || !lastName) {
      return NextResponse.json({ 
        error: "First name and last name are required" 
      }, { status: 400 });
    }

    // 4. Check if email is being changed and if it's already in use
    if (email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: email,
          NOT: { id: userPayload.userId }
        }
      });

      if (existingUser) {
        return NextResponse.json({ 
          error: "Email is already in use" 
        }, { status: 409 });
      }
    }

    // 5. Update User Profile
    const updatedUser = await prisma.user.update({
      where: { id: userPayload.userId },
      data: {
        firstName: firstName,
        lastName: lastName,
        phone: phone || null,
        // Note: Email changes may require additional verification
        ...(email && { email: email })
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: "Profile updated successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error("[Profile Update Error]", error);
    return NextResponse.json({ 
      error: "Update failed" 
    }, { status: 500 });
  }
}

// GET endpoint to fetch current user profile
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

    // 2. Fetch User Profile
    const user = await prisma.user.findUnique({
      where: { id: userPayload.userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        phoneVerified: true,
        twoFactorEnabled: true,
        emailVerified: true,
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
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);

  } catch (error) {
    console.error("[Profile GET Error]", error);
    return NextResponse.json({ 
      error: "Failed to fetch profile" 
    }, { status: 500 });
  }
}
