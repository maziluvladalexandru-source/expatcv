import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { generateCoverLetter } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();
    const { cvText, jobPosting } = await req.json();

    if (!cvText || !jobPosting) {
      return NextResponse.json(
        { error: "CV text and job posting are required" },
        { status: 400 }
      );
    }

    const rateLimit = await checkRateLimit(
      session.user.id,
      session.user.plan
    );

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Monthly generation limit reached",
          upgrade: true,
          used: rateLimit.used,
          limit: rateLimit.limit,
        },
        { status: 429 }
      );
    }

    const output = await generateCoverLetter(cvText, jobPosting);

    await prisma.generation.create({
      data: {
        userId: session.user.id,
        type: "cover_letter",
        input: JSON.stringify({ cvText, jobPosting }),
        output,
      },
    });

    return NextResponse.json({ output, usage: rateLimit });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Cover letter error:", error);
    return NextResponse.json(
      { error: "Failed to generate cover letter" },
      { status: 500 }
    );
  }
}
