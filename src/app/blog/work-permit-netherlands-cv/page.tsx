import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSN, Work Permit & Your CV: What Dutch Employers Check First | ExpatCV",
  description:
    "Should you put your visa status or BSN on your CV? Learn what Dutch employers need to know about work permits, the 30% ruling, and legal requirements.",
  keywords: [
    "work permit netherlands cv",
    "bsn cv netherlands",
    "30 percent ruling cv",
    "visa status dutch cv",
    "work authorization netherlands",
  ],
  openGraph: {
    title: "BSN, Work Permit & Your CV: What Dutch Employers Check First",
    description:
      "Should you put your visa status or BSN on your CV? Learn what Dutch employers need to know about work permits, the 30% ruling, and legal requirements.",
    type: "article",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSN, Work Permit & Your CV: What Dutch Employers Check First",
    description:
      "Should you put your visa status or BSN on your CV? Learn what Dutch employers need to know about work permits, the 30% ruling, and legal requirements.",
  },
  alternates: {
    canonical: "/blog/work-permit-netherlands-cv",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BSN, Work Permit & Your CV: What Dutch Employers Check First",
  description:
    "Should you put your visa status or BSN on your CV? Learn what Dutch employers need to know about work permits, the 30% ruling, and legal requirements.",
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
  author: {
    "@type": "Organization",
    name: "ExpatCV",
  },
  publisher: {
    "@type": "Organization",
    name: "ExpatCV",
  },
};

export default function WorkPermitCVArticle() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <nav className="hero-bg relative">
        <div className="hero-grid" />
        <div className="hero-radial" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <Link
            href="/blog"
            className="text-blue-300 hover:text-white text-sm transition inline-flex items-center gap-1 mb-4"
          >
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-blue-200/60 mb-3">
            <time dateTime="2026-03-14">March 14, 2026</time>
            <span className="text-blue-200/30">|</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            BSN, Work Permit & Your CV: What Dutch Employers Check First
          </h1>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-base sm:text-lg text-gray-800">
            One of the most confusing parts of job hunting in the Netherlands as an expat is figuring out what
            legal information belongs on your CV - and what doesn&apos;t. Should you mention your work permit?
            Your BSN number? Your visa type? The 30% ruling? Let&apos;s clear this up once and for all.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            What Is the BSN and Should It Be on Your CV?
          </h2>
          <p>
            The BSN (Burgerservicenummer) is your Dutch citizen service number. It&apos;s a unique personal
            identifier used for taxes, healthcare, government services, and employment. Think of it like a
            Social Security Number in the US or a National Insurance Number in the UK.
          </p>
          <p>
            <strong>Should it be on your CV? Absolutely not.</strong>
          </p>
          <p>
            Your BSN is sensitive personal data protected under GDPR. No employer needs your BSN to evaluate
            your application. They&apos;ll collect it later during the official hiring process - when they need
            it for payroll and tax registration. Putting your BSN on a CV that gets emailed around to recruiters
            and HR departments is a data security risk.
          </p>
          <p>
            We see this mistake often with expats from countries where national ID numbers are commonly included
            on CVs (like Turkey, India, or Brazil). In the Netherlands, leave it off.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Work Permits: What Employers Actually Need to Know
          </h2>
          <p>
            Here&apos;s the reality: Dutch employers need to know one thing about your legal status -
            <strong>can you legally work in the Netherlands?</strong> That&apos;s it. They don&apos;t need the
            details of your visa type, permit number, or immigration history on your CV.
          </p>
          <p>
            However, it&apos;s smart to address work authorization briefly, because many employers (especially
            smaller companies) worry about the hassle of sponsoring visas. If you already have the right to
            work, make it easy for them to see that.
          </p>
          <p>
            Here&apos;s how to handle it based on your situation:
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            If you&apos;re an EU/EEA citizen:
          </h3>
          <p>
            You have automatic right to work in the Netherlands. You can mention this simply:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>&quot;EU citizen - no work permit required&quot;</li>
            <li>&quot;Nationality: [EU country] - authorized to work in the Netherlands&quot;</li>
          </ul>
          <p>
            This removes any doubt immediately. It&apos;s a small line but it can make a big difference,
            especially if your name doesn&apos;t immediately signal EU citizenship to a Dutch recruiter.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            If you have a work permit or residence permit:
          </h3>
          <p>
            Mention that you&apos;re authorized to work, without going into visa specifics:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>&quot;Valid work permit - authorized to work in the Netherlands&quot;</li>
            <li>&quot;Residence permit holder - no sponsorship required&quot;</li>
          </ul>
          <p>
            The phrase &quot;no sponsorship required&quot; is particularly powerful because it tells employers
            they won&apos;t need to deal with immigration paperwork. For many smaller Dutch companies, this
            is the deciding factor between calling you or not.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            If you need sponsorship (e.g., Highly Skilled Migrant visa):
          </h3>
          <p>
            Be honest but strategic. Don&apos;t lead with the visa requirement - lead with your value. Then
            mention the visa situation briefly:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>&quot;Eligible for Highly Skilled Migrant (kennismigrant) visa&quot;</li>
            <li>&quot;Open to employers registered as IND-recognized sponsor&quot;</li>
          </ul>
          <p>
            Many large Dutch companies (ASML, Philips, ING, Booking.com, etc.) are already registered as
            recognized sponsors with the IND (Dutch Immigration and Naturalization Service). For these companies,
            sponsoring a highly skilled migrant is a routine process. Mentioning &quot;kennismigrant&quot;
            specifically signals that you understand the Dutch system.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The 30% Ruling: Should You Mention It?
          </h2>
          <p>
            The 30% ruling (30%-regeling) is a Dutch tax benefit for highly skilled migrants recruited from
            abroad. If you qualify, your employer can pay 30% of your salary tax-free - effectively a significant
            pay increase. As of 2024, the ruling has been modified (it&apos;s now 30% for the first 20 months,
            then 20% and 10% in subsequent periods), but it&apos;s still very valuable.
          </p>
          <p>
            <strong>Should you mention it on your CV?</strong> It depends on the context.
          </p>
          <p>
            For your CV itself, mentioning the 30% ruling is not standard. It&apos;s a tax/compensation matter
            rather than a qualification. However, there are situations where it&apos;s worth bringing up:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In your cover letter:</strong> You can mention that you&apos;re eligible for the 30% ruling.
              This is relevant because it means the employer can offer you a competitive salary at a lower cost to them.
            </li>
            <li>
              <strong>During salary negotiation:</strong> Definitely bring it up. It affects your net income and
              the employer&apos;s cost calculation.
            </li>
            <li>
              <strong>On your LinkedIn profile:</strong> Some expats add &quot;30% ruling eligible&quot; to their
              headline or summary. This can attract Dutch recruiters searching for international talent.
            </li>
          </ul>
          <p>
            If you&apos;re applying through a recruiter, mention your 30% ruling eligibility early in the
            conversation. It&apos;s a selling point - both for you and for the company.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            What About Nationality and Date of Birth?
          </h2>
          <p>
            In the Netherlands, including your nationality and date of birth on your CV is optional but common.
            There&apos;s no legal requirement to include them, and discrimination based on these factors is
            illegal. However, here&apos;s the practical reality:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nationality:</strong> Including it can be helpful as an expat because it immediately answers
              the &quot;are they authorized to work here?&quot; question (especially for EU citizens). If you&apos;re
              a non-EU citizen with a valid work permit, you might prefer to mention your work authorization instead.
            </li>
            <li>
              <strong>Date of birth:</strong> Many Dutch CVs include this. It&apos;s more common in traditional
              industries. In tech and startups, it&apos;s becoming less common. Include it if you&apos;re comfortable
              with it - leave it out if you&apos;re not.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Documents Employers Will Ask for Later
          </h2>
          <p>
            Don&apos;t put these on your CV, but be prepared to provide them during the hiring process:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>BSN:</strong> Required for payroll - provided after you accept an offer</li>
            <li><strong>Copy of passport or ID:</strong> For identity verification</li>
            <li><strong>Work permit or residence permit:</strong> If applicable, a copy for the employer&apos;s records</li>
            <li><strong>Diploma evaluations:</strong> Some regulated professions require Nuffic credential evaluation</li>
            <li><strong>VOG (Verklaring Omtrent het Gedrag):</strong> A certificate of good conduct, required for some roles (especially in education, healthcare, finance)</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            A Quick Reference: What Goes on Your CV vs. What Doesn&apos;t
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Include on CV</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Leave off CV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-2 pr-4">Work authorization status (one line)</td><td className="py-2">BSN number</td></tr>
                <tr><td className="py-2 pr-4">Nationality (optional)</td><td className="py-2">Visa type / permit number</td></tr>
                <tr><td className="py-2 pr-4">&quot;No sponsorship required&quot; (if true)</td><td className="py-2">Passport details</td></tr>
                <tr><td className="py-2 pr-4">City of residence</td><td className="py-2">Full home address</td></tr>
                <tr><td className="py-2 pr-4">LinkedIn URL</td><td className="py-2">Marital status / children</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The Bottom Line
          </h2>
          <p>
            Dutch employers care about whether you can do the job and whether you can legally work in the Netherlands.
            Address the work authorization question briefly and clearly on your CV. Keep the sensitive stuff (BSN,
            visa details, permit numbers) for the HR onboarding process. And if you&apos;re eligible for the 30%
            ruling, use it as a strategic advantage in your cover letter and salary negotiations.
          </p>
          <p>
            The goal of your CV is to get an interview - not to submit your immigration paperwork. Keep it professional,
            keep it relevant, and let the legal details come later.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Rewrite your CV for the Dutch market in 60 seconds - free
          </h3>
          <p className="text-blue-100/80 mb-6 text-sm sm:text-base max-w-xl mx-auto">
            ExpatCV uses AI to reformat and optimize your CV for Dutch employers and ATS systems. No signup needed to try it.
          </p>
          <Link
            href="/auth"
            className="inline-block bg-white text-blue-700 font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 transition text-sm sm:text-base"
          >
            Fix My CV Now
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ExpatCV. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition">Home</Link>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition">Blog</Link>
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition">Privacy</Link>
            <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
