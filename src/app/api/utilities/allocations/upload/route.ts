import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { utilityAiJobStore } from "@rentflow/utilities";
import { AllocationMethod } from "@rentflow/utilities";

const UPLOAD_DIR = path.join(process.cwd(), "local_backups", "utility_ai_uploads");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const billId = formData.get("billId");
    const propertyId = formData.get("propertyId");
    const providerName = formData.get("providerName");
    const method = formData.get("method");
    const totalAmount = formData.get("totalAmount");
    const dueDate = formData.get("dueDate");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, error: "INVALID_FILE" },
        { status: 400 }
      );
    }

    if (typeof billId !== "string" || typeof propertyId !== "string") {
      return NextResponse.json(
        { success: false, error: "INVALID_INPUT", message: "billId and propertyId are required" },
        { status: 400 }
      );
    }

    if (typeof providerName !== "string" || typeof method !== "string") {
      return NextResponse.json(
        { success: false, error: "INVALID_INPUT", message: "providerName and method are required" },
        { status: 400 }
      );
    }

    if (typeof totalAmount !== "string" || typeof dueDate !== "string") {
      return NextResponse.json(
        { success: false, error: "INVALID_INPUT", message: "totalAmount and dueDate are required" },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { success: false, error: "INVALID_FILE_TYPE" },
        { status: 400 }
      );
    }

    const jobId = randomUUID();
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const fileName = `${jobId}.pdf`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    const arrayBuffer = await file.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));

    const job = await utilityAiJobStore.create({
      id: jobId,
      billId,
      propertyId,
      providerName: providerName as "KPLC" | "NAIROBI_WATER" | "OTHER",
      method: method as AllocationMethod,
      totalAmount: Number(totalAmount),
      dueDate,
      createdAt: new Date().toISOString(),
      status: "PROCESSING_AI",
      filePath,
    });

    return NextResponse.json({
      success: true,
      data: {
        jobId: job.id,
        status: job.status,
        statusUrl: `/api/utilities/allocations/status?jobId=${job.id}`,
      },
    });
  } catch (error) {
    console.error("AI upload error:", error);
    return NextResponse.json(
      { success: false, error: "UPLOAD_FAILED" },
      { status: 500 }
    );
  }
}
