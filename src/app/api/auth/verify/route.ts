import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/auth?error=invalid", req.url)
      );
    }

    const magicLink = await prisma.magicLink.findUnique({
      where: { token },
    });

    if (!magicLink || magicLink.used || magicLink.expiresAt < new Date()) {
      return NextResponse.redirect(
        new URL("/auth?error=expired", req.url)
      );
    }

    await prisma.magicLink.update({
      where: { id: magicLink.id },
      data: { used: true },
    });

    let user = await prisma.user.findUnique({
      where: { email: magicLink.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email: magicLink.email },
      });
    }

    const sessionToken = uuid();
    await prisma.session.create({
      data: {
        userId: user.id,
        token: sessionToken,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });

    const cookieStore = await cookies();
    cookieStore.set("session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return NextResponse.redirect(new URL("/dashboard", req.url));
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.redirect(
      new URL("/auth?error=server", req.url)
    );
  }
}
