import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { sendEmail } from "@/lib/mail";
import { APP_NAME } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      email,
      phone,
      dob,
      ssn,
      address,
      employerName,
      jobTitle,
      monthlyIncome,
      employmentDuration,
      leaseType,
      occupancyType,
      moveInDate,
      leaseDuration,
      occupants,
      pets,
      landlordName,
      landlordContact,
      reasonForMoving,
      referenceName,
      referenceContact,
      consent,
      unitId,   // now required
      userId,
    } = data;

    // Validate required fields
    const missingFields: string[] = [];
    if (!fullName) missingFields.push('fullName');
    if (!email) missingFields.push('email');
    if (!phone) missingFields.push('phone');
    if (!dob) missingFields.push('dob');
    if (!leaseType) missingFields.push('leaseType');
    if (!occupancyType) missingFields.push('occupancyType');
    if (!moveInDate) missingFields.push('moveInDate');
    if (!leaseDuration) missingFields.push('leaseDuration');
    if (!unitId) missingFields.push('unitId');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Fetch unit and include its property with manager details
    const unit = await prisma.unit.findUnique({
      where: { id: String(unitId).trim() },
      include: { 
        property: {
          include: {
            manager: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true
                  }
                }
              }
            }
          }
        }
      },
    });
    if (!unit) {
      return NextResponse.json({ error: 'Unit not found', unitId }, { status: 400 });
    }
    if (!unit.property) {
      return NextResponse.json({ error: 'Property for this unit not found', unitId }, { status: 400 });
    }

    // Validate user if provided
    let user = null;
    if (userId) {
      user = await prisma.user.findUnique({ where: { id: String(userId).trim() } });
      if (!user) return NextResponse.json({ error: 'User not found', userId }, { status: 400 });
    }

    // Safe type casting
    const numericOccupants = occupants ? Number(occupants) : null;
    const numericIncome = monthlyIncome ? parseFloat(monthlyIncome) : null;

    // Create tenant application
    const newApplication = await prisma.tenantapplication.create({
      data: {
        fullName,
        email,
        phone,
        dob: new Date(dob),
        ssn: ssn || null,
        address: address || null,
        employerName: employerName || null,
        jobTitle: jobTitle || null,
        monthlyIncome: numericIncome,
        employmentDuration: employmentDuration || null,
        leaseType,
        occupancyType,
        moveInDate: new Date(moveInDate),
        leaseDuration,
        occupants: numericOccupants,
        pets: pets || null,
        landlordName: landlordName || null,
        landlordContact: landlordContact || null,
        reasonForMoving: reasonForMoving || null,
        referenceName: referenceName || null,
        referenceContact: referenceContact || null,
        consent: !!consent,
        unitId: unit.id,
        propertyId: unit.property.id,
        userId: user?.id || null,
      },
      include: { 
        property: {
          include: {
            manager: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true
                  }
                }
              }
            }
          }
        }, 
        unit: true, 
        user: true 
      },
    });

    // Send notification email to property manager
    if (unit.property.manager?.user?.email) {
      try {
        const managerEmail = unit.property.manager.user.email;
        const managerName = unit.property.manager.user.firstName || 'Property Manager';
        const propertyName = unit.property.name || unit.property.city || 'Unknown Property';
        const unitNumber = unit.unitNumber || 'N/A';
        const moveInDateStr = new Date(moveInDate).toLocaleDateString();
        
        // Create HTML email body as string to avoid JSX parsing issues
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h1>New Tenant Application Received</h1>
            <p>Hello ${managerName},</p>
            <p>A new tenant application has been submitted for your property.</p>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <h3 style="margin-top: 0;">Application Details:</h3>
              <p><strong>Applicant:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Property:</strong> ${propertyName}</p>
              <p><strong>Unit:</strong> ${unitNumber}</p>
              <p><strong>Desired Move-in Date:</strong> ${moveInDateStr}</p>
              <p><strong>Lease Type:</strong> ${leaseType}</p>
            </div>
            
            <p>
              <a 
                href="${process.env.NEXT_PUBLIC_BASE_URL}/property-manager/content/tenants"
                style="
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #003b73;
                  color: #ffffff;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 10px;
                "
              >
                Review Application
              </a>
            </p>
            
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              This is an automated notification from ${APP_NAME}.
            </p>
          </div>
        `;

        // Create plain text version
        const emailText = `
          New Tenant Application Received
        
          Hello ${managerName},
          
          A new tenant application has been submitted for your property.
          
          Application Details:
          - Applicant: ${fullName}
          - Email: ${email}
          - Phone: ${phone}
          - Property: ${propertyName}
          - Unit: ${unitNumber}
          - Desired Move-in Date: ${moveInDateStr}
          - Lease Type: ${leaseType}
          
          Review the application at: ${process.env.NEXT_PUBLIC_BASE_URL}/property-manager/content/tenants
          
          This is an automated notification from ${APP_NAME}.
        `;

        await sendEmail({
          to: managerEmail,
          subject: `New Tenant Application for ${propertyName} - ${APP_NAME}`,
          text: emailText,
        });
        
        console.log(`📧 Notification email sent to property manager: ${managerEmail}`);
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
        // Don't fail the application submission if email fails
      }
    } else {
      console.warn('No property manager email found for notification');
    }

    return NextResponse.json({ success: true, application: newApplication }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error saving tenant application:', error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
}

import { NextRequest } from 'next/server';
import { Prisma } from '@prisma/client';

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Support filtering by propertyId if provided
    const url = new URL(req.url);
    const propertyId = url.searchParams.get("propertyId");

    const where: Prisma.TenantapplicationWhereInput = {
      property: {
        manager: {
          userId: user.id
        }
      }
    };
    if (propertyId) {
      where.propertyId = propertyId;
    }

    const applications = await prisma.tenantapplication.findMany({
      where,
      include: {
        property: true,
        unit: true,
        user: true
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json(applications, { status: 200 });

  } catch (error: unknown) {
    console.error("Error fetching applications:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}
