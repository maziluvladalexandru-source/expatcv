"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function AuthForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const error = searchParams.get("error");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/auth/magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("sent");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "sent") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
          <p className="text-gray-600 mb-4">
            We sent a sign-in link to <strong>{email}</strong>.
            <br />
            Click the link in the email to sign in.
          </p>
          <p className="text-sm text-gray-500">The link expires in 15 minutes.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <Link href="/" className="text-2xl font-bold text-blue-600 block text-center mb-6">
          ExpatCV
        </Link>

        {error === "expired" && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">
            That link has expired. Please request a new one.
          </div>
        )}
        {error === "invalid" && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">
            Invalid sign-in link. Please try again.
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Sign in to ExpatCV
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and we&apos;ll send you a magic link.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-gray-900"
          />

          {status === "error" && (
            <p className="text-red-600 text-sm mb-4">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Magic Link"}
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          No password needed. We&apos;ll email you a secure sign-in link.
        </p>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <AuthForm />
    </Suspense>
  );
}
