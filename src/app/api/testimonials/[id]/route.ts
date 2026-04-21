import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { requireSystemAdmin } from "@rentflow/iam";

const prisma = new PrismaClient();


export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // Role check: Only SYSTEM_ADMIN can update testimonials
  const authError = await requireSystemAdmin();
  if (authError) return authError;

  const { id } = await params;
  const body = await req.json();
  const updated = await prisma.testimonial.update({
    where: { id: Number(id) },
    data: {
      name: body.name,
      role: body.role,
      image: body.image,
      text: body.text,
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // Role check: Only SYSTEM_ADMIN can delete testimonials
  const authError = await requireSystemAdmin();
  if (authError) return authError;

  const { id } = await params;
  await prisma.testimonial.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: "Testimonial deleted successfully" });
}
