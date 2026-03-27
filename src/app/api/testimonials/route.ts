import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { requireSystemAdmin } from "@/lib/rbac/requireRole";

const prisma = new PrismaClient();


export async function GET() {
  const sections = await prisma.testimonial.findMany();
  return NextResponse.json(sections);
}

export async function POST(req: Request) {
  // Role check: Only SYSTEM_ADMIN can create testimonials
  const authError = await requireSystemAdmin();
  if (authError) return authError;

  try {
    const body = await req.json();
    const { name, role, image, text } = body;
    
    if (!name || !text) {
      return NextResponse.json({ error: "Name and text are required" }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        role: role || null,
        image: image || null,
        text,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Failed to create testimonial:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
