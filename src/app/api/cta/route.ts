import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireSystemAdmin } from "@/lib/rbac/requireRole";

export async function GET() {
  try {
    const ctas = await prisma.cTA.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(ctas);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch CTAs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Role check: Only SYSTEM_ADMIN can create CTAs
  const authError = await requireSystemAdmin();
  if (authError) return authError;

  try {
    const { page, title, subtitle, buttonText, buttonUrl, gradient } =
      await req.json();

    const newCTA = await prisma.cTA.create({
      data: {
        page,
        title,
        subtitle,
        buttonText,
        buttonUrl,
        gradient,
        // ✅ REQUIRED FIX
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newCTA, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create CTA" },
      { status: 500 }
    );
  }
}
