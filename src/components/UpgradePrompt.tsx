"use client";

import { useState } from "react";

export default function UpgradePrompt({ used, limit }: { used: number; limit: number }) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleUpgrade = async (plan: string) => {
    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
        You&apos;ve used {used} of {limit} generations this month
      </h3>
      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
        Upgrade your plan to unlock more AI-powered generations.
      </p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          onClick={() => handleUpgrade("basic")}
          disabled={loading !== null}
          className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition text-sm font-medium disabled:opacity-50"
        >
          {loading === "basic" ? "Loading..." : "Basic - €9/mo (10 gen)"}
        </button>
        <button
          onClick={() => handleUpgrade("pro")}
          disabled={loading !== null}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium disabled:opacity-50"
        >
          {loading === "pro" ? "Loading..." : "Pro - €19/mo (Unlimited)"}
        </button>
      </div>
    </div>
  );
}
