import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    generationsPerMonth: 3,
    priceId: null,
  },
  basic: {
    name: "Basic",
    price: 9,
    generationsPerMonth: 10,
    priceId: process.env.STRIPE_BASIC_PRICE_ID,
  },
  pro: {
    name: "Pro",
    price: 19,
    generationsPerMonth: Infinity,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
  },
} as const;

export type PlanKey = keyof typeof PLANS;
