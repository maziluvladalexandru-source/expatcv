import { prisma } from "./prisma";
import { PLANS, PlanKey } from "./stripe";

export async function checkRateLimit(userId: string, plan: string) {
  const planKey = plan as PlanKey;
  const limit = PLANS[planKey]?.generationsPerMonth ?? 3;

  if (limit === Infinity) {
    return { allowed: true, used: 0, limit: -1, remaining: -1 };
  }

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const used = await prisma.generation.count({
    where: {
      userId,
      createdAt: { gte: startOfMonth },
    },
  });

  return {
    allowed: used < limit,
    used,
    limit,
    remaining: Math.max(0, limit - used),
  };
}
