import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ExpatCV",
  description: "Terms of Service for ExpatCV, the AI-powered CV rewriting platform for expats in the Netherlands.",
};

export default function TermsOfService() {
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-blue-200/60 mt-2 text-sm">Last updated: March 24, 2026</p>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to ExpatCV. These Terms of Service (&quot;Terms&quot;) govern your use of the ExpatCV
              platform and services available at expatcv.nl (&quot;Service&quot;). By accessing or using our
              Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>ExpatCV provides the following AI-powered services for expats in the Netherlands:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>CV Rewriting:</strong> Upload your CV and receive an AI-rewritten version optimized for the Dutch job market and ATS systems.</li>
              <li><strong>Cover Letter Generation:</strong> Generate tailored cover letters based on your CV and job postings, following Dutch business conventions.</li>
              <li><strong>LinkedIn Bio Optimization:</strong> Transform your LinkedIn summary to attract Dutch recruiters with market-relevant keywords.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">3. Subscription Plans and Payment</h2>
            <p>ExpatCV offers the following subscription tiers:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Free:</strong> 3 AI generations per month at no cost. No credit card required.</li>
              <li><strong>Basic (€9/month):</strong> 10 AI generations per month, including full generation history.</li>
              <li><strong>Pro (€19/month):</strong> Unlimited AI generations, full generation history, PDF export, and email support.</li>
            </ul>
            <p className="mt-3">
              Paid subscriptions are billed monthly via Stripe. By subscribing to a paid plan, you authorize
              us to charge your payment method on a recurring monthly basis. You may cancel your subscription
              at any time; cancellation takes effect at the end of the current billing period. No refunds are
              provided for partial months.
            </p>
            <p className="mt-2">
              We reserve the right to change our pricing with 30 days&apos; notice. Continued use of the Service
              after a price change constitutes acceptance of the new pricing.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">4. User Responsibilities</h2>
            <p>By using ExpatCV, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate and truthful information in your CV and other submitted content.</li>
              <li>Use the Service only for lawful purposes related to job seeking and career development.</li>
              <li>Not attempt to reverse-engineer, copy, or redistribute the AI-generated outputs as a competing service.</li>
              <li>Not submit content that is illegal, defamatory, or infringes on third-party rights.</li>
              <li>Maintain the security of your account credentials.</li>
              <li>Review and verify all AI-generated content before using it in job applications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">5. No Guarantee of Job Placement</h2>
            <p>
              ExpatCV is a tool designed to improve your job application materials. We do <strong>not</strong> guarantee
              that using our Service will result in job interviews, job offers, or employment. The effectiveness
              of your job search depends on many factors beyond the quality of your CV, including your qualifications,
              experience, market conditions, and employer preferences.
            </p>
            <p className="mt-2">
              AI-generated content is provided as a starting point and suggestion. You are solely responsible for
              reviewing, editing, and verifying all generated content before submitting it to potential employers.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p>
              You retain ownership of the content you submit to ExpatCV (your original CV, personal information, etc.).
              You own the AI-generated outputs created from your content. ExpatCV retains all rights to the underlying
              platform, technology, and AI models used to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">7. Data Handling</h2>
            <p>
              We take your privacy seriously. CV content and other materials you submit are processed by AI to
              generate your outputs and are not stored permanently after generation is complete. For full details
              on how we collect, use, and protect your data, please refer to our{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ExpatCV and its operators shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use of the
              Service. Our total liability shall not exceed the amount you paid for the Service in the 12 months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these Terms. You may
              delete your account at any time. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Netherlands. Any
              disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction
              of the courts of the Netherlands.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">11. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify users of material changes via email
              or a notice on the Service. Continued use after changes take effect constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:support@expatcv.nl" className="text-blue-600 hover:text-blue-800 underline">
                support@expatcv.nl
              </a>.
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
