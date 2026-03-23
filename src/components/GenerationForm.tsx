"use client";

import { useState } from "react";
import UpgradePrompt from "./UpgradePrompt";
import Toast from "./Toast";

type GenerationType = "cv_rewrite" | "cover_letter" | "linkedin_bio";

interface Props {
  type: GenerationType;
  onUsageUpdate?: () => void;
}

const config: Record<
  GenerationType,
  {
    title: string;
    description: string;
    endpoint: string;
    filename: string;
    fields: { name: string; label: string; placeholder: string; rows: number }[];
    buildBody: (values: Record<string, string>) => Record<string, string>;
  }
> = {
  cv_rewrite: {
    title: "CV Rewriter",
    description: "Paste your CV text below and we'll rewrite it for the Dutch/EU job market.",
    endpoint: "/api/ai/cv-rewrite",
    filename: "cv-rewrite",
    fields: [
      {
        name: "cvText",
        label: "Your CV",
        placeholder: "Paste your full CV text here...",
        rows: 12,
      },
    ],
    buildBody: (v) => ({ cvText: v.cvText }),
  },
  cover_letter: {
    title: "Cover Letter Generator",
    description: "Paste your CV and a job posting — we'll generate a tailored cover letter.",
    endpoint: "/api/ai/cover-letter",
    filename: "cover-letter",
    fields: [
      {
        name: "cvText",
        label: "Your CV",
        placeholder: "Paste your full CV text here...",
        rows: 8,
      },
      {
        name: "jobPosting",
        label: "Job Posting",
        placeholder: "Paste the job description/posting here...",
        rows: 8,
      },
    ],
    buildBody: (v) => ({ cvText: v.cvText, jobPosting: v.jobPosting }),
  },
  linkedin_bio: {
    title: "LinkedIn Bio Optimizer",
    description: "Paste your current LinkedIn summary and we'll optimize it for the Dutch market.",
    endpoint: "/api/ai/linkedin-bio",
    filename: "linkedin-bio",
    fields: [
      {
        name: "bio",
        label: "Current LinkedIn Bio",
        placeholder: "Paste your LinkedIn About/Summary section here...",
        rows: 8,
      },
    ],
    buildBody: (v) => ({ bio: v.bio }),
  },
};

export default function GenerationForm({ type, onUsageUpdate }: Props) {
  const cfg = config[type];
  const [values, setValues] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error" | "limit">("idle");
  const [limitInfo, setLimitInfo] = useState({ used: 0, limit: 0 });
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setOutput("");
    setToast(null);

    try {
      const res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cfg.buildBody(values)),
      });

      const data = await res.json();

      if (res.status === 429) {
        setStatus("limit");
        setLimitInfo({ used: data.used, limit: data.limit });
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setOutput(data.output);
      setStatus("done");
      setToast({ message: `${cfg.title} generated successfully!`, type: "success" });
      onUsageUpdate?.();
    } catch {
      setStatus("error");
      setToast({ message: "Generation failed. Please try again.", type: "error" });
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cfg.filename}-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{cfg.title}</h2>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{cfg.description}</p>

      {status === "limit" && (
        <UpgradePrompt used={limitInfo.used} limit={limitInfo.limit} />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {cfg.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <textarea
              required
              rows={field.rows}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, [field.name]: e.target.value }))
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y text-gray-900 text-sm sm:text-base"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Generating..." : "Generate"}
        </button>
      </form>

      {status === "error" && (
        <div className="mt-4 bg-red-50 text-red-700 p-4 rounded-lg text-sm">
          Something went wrong. Please try again.
        </div>
      )}

      {output && (
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Result</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {copied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button
                onClick={handleDownload}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Download as .txt
              </button>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 whitespace-pre-wrap text-gray-800 leading-relaxed text-sm sm:text-base overflow-x-auto">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
