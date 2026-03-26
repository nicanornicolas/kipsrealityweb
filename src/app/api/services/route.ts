import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireSystemAdmin } from "@/lib/rbac/requireRole";

// GET all services or by categoryId (supports both categoryId and category_id for compatibility)
export async function GET(req: NextRequest) {
  // Support both camelCase and snake_case query params
  const categoryId = req.nextUrl.searchParams.get("categoryId") || req.nextUrl.searchParams.get("category_id");
  try {
    const services = await prisma.service.findMany({
      where: categoryId ? { categoryId: parseInt(categoryId) } : {},
    });
    return NextResponse.json(services);
  } catch (err) {
    return NextResponse.json({ error: "Database error", details: err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  // Role check: Only SYSTEM_ADMIN can create services
  const authError = await requireSystemAdmin();
  if (authError) return authError;

  try {
    const body = await req.json();
    const { categoryId, name, description, features, impact, icon } = body;

    const service = await prisma.service.create({
      data: {
        categoryId: Number(categoryId),
        name,
        description,
        features,
        impact,
        icon,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Database error", details: err }, { status: 500 });
  }
}
