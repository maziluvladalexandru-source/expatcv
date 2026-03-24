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

const tabs: { key: Tab; label: string; shortLabel: string; icon: string; description: string }[] = [
  { key: "cv_rewrite", label: "CV Rewriter", shortLabel: "CV", icon: "\u{1F4C4}", description: "Rewrite your CV for the Dutch/EU job market" },
  { key: "cover_letter", label: "Cover Letter", shortLabel: "Letter", icon: "\u{2709}\u{FE0F}", description: "Generate tailored cover letters from your CV + job posting" },
  { key: "linkedin_bio", label: "LinkedIn Bio", shortLabel: "LinkedIn", icon: "\u{1F4BC}", description: "Optimize your LinkedIn summary for the Dutch market" },
];

const typeLabels: Record<string, string> = {
  cv_rewrite: "CV Rewrite",
  cover_letter: "Cover Letter",
  linkedin_bio: "LinkedIn Bio",
};

const typeBadgeColors: Record<string, string> = {
  cv_rewrite: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  cover_letter: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  linkedin_bio: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
};

function groupHistoryByDate(items: HistoryItem[]): Record<string, HistoryItem[]> {
  const groups: Record<string, HistoryItem[]> = {};
  for (const item of items) {
    const date = new Date(item.createdAt);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let label: string;
    if (date.toDateString() === today.toDateString()) {
      label = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      label = "Yesterday";
    } else {
      label = date.toLocaleDateString("en-NL", { year: "numeric", month: "long", day: "numeric" });
    }

    if (!groups[label]) groups[label] = [];
    groups[label].push(item);
  }
  return groups;
}

function OnboardingTooltip({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6 relative">
      <button
        onClick={onDismiss}
        className="absolute top-3 right-3 text-white/60 hover:text-white transition"
        aria-label="Dismiss"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Welcome to ExpatCV!</h3>
      <p className="text-blue-100 text-sm mb-3">
        You have 3 AI-powered tools to help you land jobs in the Netherlands:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        <div className="bg-white/10 rounded-lg p-2.5">
          <span className="font-medium text-white">{"\u{1F4C4}"} CV Rewriter</span>
          <p className="text-blue-200 text-xs mt-0.5">Adapts your CV for EU standards</p>
        </div>
        <div className="bg-white/10 rounded-lg p-2.5">
          <span className="font-medium text-white">{"\u{2709}\u{FE0F}"} Cover Letter</span>
          <p className="text-blue-200 text-xs mt-0.5">Tailored letters from CV + job post</p>
        </div>
        <div className="bg-white/10 rounded-lg p-2.5">
          <span className="font-medium text-white">{"\u{1F4BC}"} LinkedIn Bio</span>
          <p className="text-blue-200 text-xs mt-0.5">Optimize for the Dutch market</p>
        </div>
      </div>
      <p className="text-blue-200 text-xs mt-3">Pick a tool above and paste your content to get started.</p>
    </div>
  );
}

function EmptyState({ onSelectTab }: { onSelectTab: (tab: Tab) => void }) {
  return (
    <div className="text-center py-8 sm:py-12 px-4">
      <div className="text-4xl sm:text-5xl mb-4">{"\u{1F680}"}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to land your dream job?</h3>
      <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base">
        Choose one of our AI tools below to get started. Each is tailored for expats looking to work in the Netherlands.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
        <button
          onClick={() => onSelectTab("cv_rewrite")}
          className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500/50 rounded-xl p-4 sm:p-5 text-left transition group"
        >
          <div className="text-2xl mb-2">{"\u{1F4C4}"}</div>
          <h4 className="font-semibold text-white group-hover:text-blue-400 transition text-sm sm:text-base">CV Rewriter</h4>
          <p className="text-gray-500 text-xs mt-1">Rewrite your CV for the Dutch/EU job market</p>
        </button>
        <button
          onClick={() => onSelectTab("cover_letter")}
          className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-emerald-500/50 rounded-xl p-4 sm:p-5 text-left transition group"
        >
          <div className="text-2xl mb-2">{"\u{2709}\u{FE0F}"}</div>
          <h4 className="font-semibold text-white group-hover:text-emerald-400 transition text-sm sm:text-base">Cover Letter</h4>
          <p className="text-gray-500 text-xs mt-1">Generate tailored cover letters from your CV + job posting</p>
        </button>
        <button
          onClick={() => onSelectTab("linkedin_bio")}
          className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-purple-500/50 rounded-xl p-4 sm:p-5 text-left transition group"
        >
          <div className="text-2xl mb-2">{"\u{1F4BC}"}</div>
          <h4 className="font-semibold text-white group-hover:text-purple-400 transition text-sm sm:text-base">LinkedIn Bio</h4>
          <p className="text-gray-500 text-xs mt-1">Optimize your LinkedIn summary for the Dutch market</p>
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("cv_rewrite");
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);
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
        if (data.generations.length === 0) {
          setShowEmptyState(true);
        }
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

  // Check onboarding and load history on mount
  useEffect(() => {
    if (userData) {
      const dismissed = localStorage.getItem("expatcv_onboarding_dismissed");
      if (!dismissed) {
        setShowOnboarding(true);
      }
      // Always fetch history to determine empty state
      fetchHistory();
    }
  }, [userData, fetchHistory]);

  useEffect(() => {
    if (showHistory && history.length === 0) {
      fetchHistory();
    }
  }, [showHistory, fetchHistory, history.length]);

  const dismissOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("expatcv_onboarding_dismissed", "true");
  };

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

  const handleTabFromEmptyState = (tab: Tab) => {
    setActiveTab(tab);
    setShowEmptyState(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!userData) return null;

  const { user, usage } = userData;
  const planLabel =
    user.plan === "pro" ? "Pro" : user.plan === "basic" ? "Basic" : "Free";

  const groupedHistory = groupHistoryByDate(history);
  const isNewUser = usage.used === 0 && history.length === 0;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold text-blue-400">
            ExpatCV
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">{user.email}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                user.plan === "pro"
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : user.plan === "basic"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-gray-800 text-gray-400 border border-gray-700"
              }`}
            >
              {planLabel}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        {/* Onboarding tooltip for first-time users */}
        {showOnboarding && <OnboardingTooltip onDismiss={dismissOnboarding} />}

        {/* Usage Progress Bar */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-white">
                Usage This Month
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">
                {usage.limit === -1
                  ? `${usage.used} generations used (Unlimited)`
                  : `${usage.used} of ${usage.limit} generations used`}
              </p>
            </div>
            {usage.limit !== -1 && (
              <div className="w-full sm:w-64">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-mono font-semibold text-white">
                    {usage.used}/{usage.limit}
                  </span>
                  <span className="text-xs text-gray-500">
                    {usage.remaining} remaining
                  </span>
                </div>
                <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      usage.used >= usage.limit
                        ? "bg-red-500"
                        : usage.used >= usage.limit * 0.8
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                    style={{
                      width: `${Math.min(100, (usage.used / usage.limit) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Upgrade prompt for users at limit */}
        {!usage.allowed && usage.limit !== -1 && (
          <UpgradePrompt used={usage.used} limit={usage.limit} />
        )}

        {/* Tabs + Content */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden mb-4 sm:mb-6">
          {/* Tab bar */}
          <div className="border-b border-gray-800">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setShowEmptyState(false);
                  }}
                  className={`flex-1 px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all border-b-2 ${
                    activeTab === tab.key
                      ? "border-blue-500 text-blue-400 bg-blue-500/5"
                      : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
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
            {/* Show empty state for brand new users */}
            {isNewUser && showEmptyState ? (
              <EmptyState onSelectTab={handleTabFromEmptyState} />
            ) : (
              tabs.map((tab) => (
                <div key={tab.key} className={activeTab === tab.key ? "block" : "hidden"}>
                  <GenerationForm
                    type={tab.key}
                    onUsageUpdate={() => {
                      fetchUser();
                      fetchHistory();
                      setShowEmptyState(false);
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-white">My History</h2>
              {history.length > 0 && (
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                  {history.length}
                </span>
              )}
            </div>
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
            <div className="border-t border-gray-800">
              {historyLoading ? (
                <div className="p-6 text-center text-gray-500 animate-pulse">Loading history...</div>
              ) : history.length === 0 ? (
                <div className="p-8 sm:p-12 text-center">
                  <div className="text-3xl mb-3">{"\u{1F4DD}"}</div>
                  <p className="text-gray-400 text-sm font-medium">No generations yet</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Your generated CVs, cover letters, and LinkedIn bios will appear here.
                  </p>
                </div>
              ) : (
                <div>
                  {Object.entries(groupedHistory).map(([dateLabel, items]) => (
                    <div key={dateLabel}>
                      {/* Date group header */}
                      <div className="px-4 sm:px-6 py-2 bg-gray-800/50 border-b border-gray-800">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {dateLabel}
                        </span>
                      </div>
                      <div className="divide-y divide-gray-800/50">
                        {items.map((item) => (
                          <div key={item.id} className="px-4 sm:px-6 py-4 hover:bg-gray-800/30 transition">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span
                                  className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                    typeBadgeColors[item.type] || "bg-gray-700 text-gray-300"
                                  }`}
                                >
                                  {typeLabels[item.type] || item.type}
                                </span>
                                <span className="text-xs text-gray-600">
                                  {new Date(item.createdAt).toLocaleTimeString("en-NL", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleCopyHistory(item.id, item.output)}
                                  className="text-xs px-2.5 py-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition"
                                  title="Copy to clipboard"
                                >
                                  {copiedId === item.id ? (
                                    <span className="text-emerald-400">Copied!</span>
                                  ) : (
                                    <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  )}
                                </button>
                                <button
                                  onClick={() => handleDownloadHistory(item.type, item.output, item.createdAt)}
                                  className="text-xs px-2.5 py-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition"
                                  title="Download as .txt"
                                >
                                  <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                  className="text-xs px-2.5 py-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition"
                                >
                                  {expandedId === item.id ? "Collapse" : "View"}
                                </button>
                                <button
                                  onClick={() => handleDeleteHistory(item.id)}
                                  className="text-xs px-2.5 py-1 rounded-md text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition"
                                  title="Delete"
                                >
                                  <svg className="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            {/* Preview (first 100 chars) when collapsed */}
                            {expandedId !== item.id && (
                              <p className="text-sm text-gray-500 line-clamp-2">
                                {item.output.slice(0, 100)}{item.output.length > 100 ? "..." : ""}
                              </p>
                            )}
                            {/* Full output when expanded */}
                            {expandedId === item.id && (
                              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 sm:p-4 whitespace-pre-wrap text-gray-300 text-sm leading-relaxed mt-2 max-h-96 overflow-y-auto">
                                {item.output}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
