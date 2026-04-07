import { NextResponse } from "next/server";
import { utilityAiJobStore } from "@rentflow/utilities";
import { UtilityAllocationService } from "@rentflow/utilities";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: "JOB_ID_REQUIRED" },
        { status: 400 }
      );
    }

    const job = await utilityAiJobStore.get(jobId);
    if (!job) {
      return NextResponse.json(
        { success: false, error: "JOB_NOT_FOUND" },
        { status: 404 }
      );
    }

    if (job.status === "PROCESSING_AI") {
      const createdAt = new Date(job.createdAt).getTime();
      const elapsedMs = Date.now() - createdAt;

      if (elapsedMs > 2500) {
        const payload = await UtilityAllocationService.calculateAllocations(
          job.propertyId,
          job.billId,
          job.providerName,
          job.totalAmount,
          job.dueDate,
          job.method
        );

        const confidenceScore = job.method === "AI_SUGGESTED" ? 0.82 : 1.0;
        const flags = confidenceScore < 0.9
          ? [{ type: "WARNING", message: "AI confidence below 90%. Please review carefully." }]
          : [{ type: "INFO", message: "AI allocation generated successfully." }];

        const payloadWithSignals = {
          ...payload,
          confidenceScore,
          flags,
        };

        await utilityAiJobStore.update(job.id, {
          status: "PENDING_REVIEW",
          payload: payloadWithSignals,
          confidenceScore,
          flags,
        });

        const updated = await utilityAiJobStore.get(job.id);
        return NextResponse.json({
          success: true,
          status: updated?.status,
          jobId: updated?.id,
          confidenceScore: updated?.confidenceScore,
          flags: updated?.flags,
          payload: updated?.payload,
        });
      }
    }

    return NextResponse.json({
      success: true,
      status: job.status,
      jobId: job.id,
      confidenceScore: job.confidenceScore,
      flags: job.flags,
      payload: job.payload ?? null,
    });
  } catch (error) {
    console.error("AI status error:", error);
    return NextResponse.json(
      { success: false, error: "STATUS_FAILED" },
      { status: 500 }
    );
  }
}
