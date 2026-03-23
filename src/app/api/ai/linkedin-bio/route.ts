import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { optimizeLinkedInBio } from "@/lib/openai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();
    const { bio } = await req.json();

    if (!bio || typeof bio !== "string") {
      return NextResponse.json(
        { error: "LinkedIn bio is required" },
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

    const output = await optimizeLinkedInBio(bio);

    await prisma.generation.create({
      data: {
        userId: session.user.id,
        type: "linkedin_bio",
        input: bio,
        output,
      },
    });

    return NextResponse.json({ output, usage: rateLimit });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("LinkedIn bio error:", error);
    return NextResponse.json(
      { error: "Failed to optimize LinkedIn bio" },
      { status: 500 }
    );
  }
}
