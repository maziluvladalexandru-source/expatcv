"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GenerationForm from "@/components/GenerationForm";
import UpgradePrompt from "@/components/UpgradePrompt";

type Tab = "cv_rewrite" | "cover_letter" | "linkedin_bio";

interface UserData {
  user: {
    id: string;
    email: string;
    name: string | null;
    plan: string;
  };
  usage: {
    allowed: boolean;
    used: number;
    limit: number;
    remaining: number;
  };
}

interface HistoryItem {
  id: string;
  type: string;
  output: string;
  createdAt: string;
}

const tabs: { key: Tab; label: string; shortLabel: string; icon: string }[] = [
  { key: "cv_rewrite", label: "CV Rewriter", shortLabel: "CV", icon: "📄" },
  { key: "cover_letter", label: "Cover Letter", shortLabel: "Letter", icon: "✉️" },
  { key: "linkedin_bio", label: "LinkedIn Bio", shortLabel: "LinkedIn", icon: "💼" },
];

const typeLabels: Record<string, string> = {
  cv_rewrite: "CV Rewrite",
  cover_letter: "Cover Letter",
  linkedin_bio: "LinkedIn Bio",
};

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("cv_rewrite");
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch("/api/user");
      if (res.status === 401) {
        router.push("/auth");
        return;
      }
      const data = await res.json();
      setUserData(data);
    } catch {
      router.push("/auth");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const fetchHistory = useCallback(async () => {
    setHistoryLoading(true);
    try {
      const res = await fetch("/api/generations");
      if (res.ok) {
        const data = await res.json();
        setHistory(data.generations);
      }
    } catch {
      // silently fail
    } finally {
      setHistoryLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (showHistory) {
      fetchHistory();
    }
  }, [showHistory, fetchHistory]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  const handleCopyHistory = async (id: string, output: string) => {
    await navigator.clipboard.writeText(output);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteHistory = async (id: string) => {
    try {
      const res = await fetch("/api/generations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setHistory((prev) => prev.filter((item) => item.id !== id));
      }
    } catch {
      // silently fail
    }
  };

  const handleDownloadHistory = (type: string, output: string, date: string) => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}-${date.slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!userData) return null;

  const { user, usage } = userData;
  const planLabel =
    user.plan === "pro" ? "Pro" : user.plan === "basic" ? "Basic" : "Free";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold text-blue-600">
            ExpatCV
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">{user.email}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                user.plan === "pro"
                  ? "bg-purple-100 text-purple-700"
                  : user.plan === "basic"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {planLabel}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs sm:text-sm text-gray-500 hover:text-gray-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        {/* Usage Counter */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Usage This Month
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                {usage.limit === -1
                  ? `${usage.used} generations used (Unlimited)`
                  : `${usage.used} of ${usage.limit} generations used`}
              </p>
            </div>
            {usage.limit !== -1 && (
              <div className="w-full sm:w-48">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      usage.used >= usage.limit
                        ? "bg-red-500"
                        : usage.used >= usage.limit * 0.8
                        ? "bg-yellow-500"
                        : "bg-blue-600"
                    }`}
                    style={{
                      width: `${Math.min(100, (usage.used / usage.limit) * 100)}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {usage.remaining} remaining
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Upgrade prompt for free users near limit */}
        {!usage.allowed && usage.limit !== -1 && (
          <UpgradePrompt used={usage.used} limit={usage.limit} />
        )}

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4 sm:mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition border-b-2 ${
                    activeTab === tab.key
                      ? "border-blue-600 text-blue-600 bg-blue-50/50"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-1 sm:mr-2">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {tabs.map((tab) => (
              <div key={tab.key} className={activeTab === tab.key ? "block" : "hidden"}>
                <GenerationForm
                  type={tab.key}
                  onUsageUpdate={() => {
                    fetchUser();
                    if (showHistory) fetchHistory();
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* My History */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">My History</h2>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${showHistory ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showHistory && (
            <div className="border-t border-gray-200">
              {historyLoading ? (
                <div className="p-6 text-center text-gray-500 animate-pulse">Loading history...</div>
              ) : history.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">
                  No generations yet. Create your first one above!
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {history.map((item) => (
                    <div key={item.id} className="px-4 sm:px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                            {typeLabels[item.type] || item.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(item.createdAt).toLocaleDateString("en-NL", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleCopyHistory(item.id, item.output)}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {copiedId === item.id ? "Copied!" : "Copy"}
                          </button>
                          <button
                            onClick={() => handleDownloadHistory(item.type, item.output, item.createdAt)}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Download
                          </button>
                          <button
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                            className="text-xs text-gray-500 hover:text-gray-700 font-medium"
                          >
                            {expandedId === item.id ? "Collapse" : "View"}
                          </button>
                          <button
                            onClick={() => handleDeleteHistory(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      {expandedId !== item.id && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {item.output.slice(0, 150)}...
                        </p>
                      )}
                      {expandedId === item.id && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 whitespace-pre-wrap text-gray-800 text-sm leading-relaxed mt-2 max-h-96 overflow-y-auto">
                          {item.output}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
