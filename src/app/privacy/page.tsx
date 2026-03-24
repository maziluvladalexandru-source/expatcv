import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ExpatCV",
  description: "Privacy Policy for ExpatCV. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="hero-bg relative">
        <div className="hero-grid" />
        <div className="hero-radial" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <Link
            href="/"
            className="text-blue-300 hover:text-white text-sm transition inline-flex items-center gap-1 mb-4"
          >
            &larr; Back to ExpatCV
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-blue-200/60 mt-2 text-sm">Last updated: March 24, 2026</p>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              ExpatCV (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and protect your personal data when you
              use our platform at expatcv.nl. We process data in accordance with the General Data Protection
              Regulation (GDPR) and applicable Dutch data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">2. Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account information:</strong> Your email address, used for authentication
                and communication.
              </li>
              <li>
                <strong>CV content:</strong> The text and information you submit for AI processing,
                including your CV, job postings, and LinkedIn bio text.
              </li>
              <li>
                <strong>Payment information:</strong> Billing details processed securely through Stripe.
                We do not store your full credit card number on our servers.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you interact with the Service,
                including generation history and feature usage.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <p>Your data is used for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>AI Processing:</strong> Your submitted CV content is sent to OpenAI&apos;s API for
                AI-powered rewriting and generation. OpenAI processes this data according to their API data
                usage policies and does not use API inputs to train their models.
              </li>
              <li>
                <strong>Email Communication:</strong> We use Resend to send transactional emails such as
                authentication links and account notifications.
              </li>
              <li>
                <strong>Payment Processing:</strong> Stripe handles all payment transactions securely.
                Stripe&apos;s privacy policy governs the handling of your payment data.
              </li>
              <li>
                <strong>Service Improvement:</strong> Aggregated, anonymized usage data may be used to
                improve the Service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">4. Data Retention</h2>
            <p>
              <strong>CV content</strong> submitted for AI processing is not stored permanently after
              generation is complete. The generated outputs may be stored in your generation history
              if you have a paid plan, and can be deleted by you at any time.
            </p>
            <p className="mt-2">
              <strong>Account data</strong> (email address) is retained for as long as your account
              is active. Upon account deletion, your personal data is removed within 30 days.
            </p>
            <p className="mt-2">
              <strong>Payment records</strong> are retained as required by Dutch tax and accounting
              regulations (typically 7 years).
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>We share data with the following third-party processors:</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Provider</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Purpose</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">OpenAI</td>
                    <td className="border border-gray-200 px-4 py-2">AI text processing</td>
                    <td className="border border-gray-200 px-4 py-2">CV content, job postings, LinkedIn text</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Stripe</td>
                    <td className="border border-gray-200 px-4 py-2">Payment processing</td>
                    <td className="border border-gray-200 px-4 py-2">Email, billing information</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Resend</td>
                    <td className="border border-gray-200 px-4 py-2">Transactional email</td>
                    <td className="border border-gray-200 px-4 py-2">Email address</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">6. Your Rights Under GDPR</h2>
            <p>As a data subject under the GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
              <li><strong>Right to Restriction:</strong> Request restriction of processing of your personal data.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format.</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data for certain purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@expatcv.nl" className="text-blue-600 hover:text-blue-800 underline">
                privacy@expatcv.nl
              </a>. We will respond within 30 days as required by GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data,
              including encryption in transit (TLS/SSL), secure authentication, and access controls. However,
              no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              ExpatCV uses essential cookies required for authentication and session management. We do not
              use advertising or tracking cookies. No cookie consent banner is required for strictly
              necessary cookies under GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">9. International Transfers</h2>
            <p>
              Some of our third-party processors (OpenAI, Stripe, Resend) are based in the United States.
              Data transfers to the US are conducted under appropriate safeguards, including Standard
              Contractual Clauses (SCCs) and the EU-US Data Privacy Framework where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
            <p>
              ExpatCV is not intended for use by individuals under the age of 16. We do not knowingly collect
              personal data from children. If you believe a child has provided us with personal data, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              via email or a prominent notice on the Service. The &quot;Last updated&quot; date at the top of this
              page indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">12. Supervisory Authority</h2>
            <p>
              If you believe your data protection rights have been violated, you have the right to lodge a
              complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at{" "}
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                autoriteitpersoonsgegevens.nl
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">13. Contact</h2>
            <p>
              For any privacy-related questions or to exercise your GDPR rights, contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@expatcv.nl" className="text-blue-600 hover:text-blue-800 underline">
                privacy@expatcv.nl
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-xs sm:text-sm">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="/terms" className="hover:text-gray-700 transition">Terms of Service</Link>
            <span>&middot;</span>
            <Link href="/privacy" className="hover:text-gray-700 transition">Privacy Policy</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} ExpatCV. Built for expats, by expats.</p>
        </div>
      </footer>
    </div>
  );
}
