import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Explain Career Gaps on Your CV (Expat Edition) | ExpatCV",
  description:
    "Career gaps are common for expats. Learn how to explain relocation gaps, language study, and other breaks on your CV without hurting your job chances in the Netherlands.",
  keywords: [
    "career gap cv expat",
    "cv gap explanation",
    "career break cv netherlands",
    "expat career gap",
    "employment gap cv",
  ],
  openGraph: {
    title: "How to Explain Career Gaps on Your CV (Expat Edition)",
    description:
      "Career gaps are common for expats. Learn how to explain relocation gaps, language study, and other breaks on your CV without hurting your job chances in the Netherlands.",
    type: "article",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Explain Career Gaps on Your CV (Expat Edition)",
    description:
      "Career gaps are common for expats. Learn how to explain relocation gaps, language study, and other breaks on your CV without hurting your job chances.",
  },
  alternates: {
    canonical: "/blog/career-gap-cv-expat",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Explain Career Gaps on Your CV (Expat Edition)",
  description:
    "Career gaps are common for expats. Learn how to explain relocation gaps, language study, and other breaks on your CV without hurting your job chances in the Netherlands.",
  datePublished: "2026-03-10",
  dateModified: "2026-03-10",
  author: {
    "@type": "Organization",
    name: "ExpatCV",
  },
  publisher: {
    "@type": "Organization",
    name: "ExpatCV",
  },
};

export default function CareerGapArticle() {
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
            <time dateTime="2026-03-10">March 10, 2026</time>
            <span className="text-blue-200/30">|</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            How to Explain Career Gaps on Your CV (Expat Edition)
          </h1>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-base sm:text-lg text-gray-800">
            You moved to a new country. You dealt with visas, housing, language barriers, and culture shock. Of
            course there&apos;s a gap on your CV. As an expat, <strong>career gaps</strong> are not just common -
            they&apos;re almost inevitable. The good news? Dutch employers are more understanding about gaps than
            you might think. The key is knowing how to explain them.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Why Career Gaps Happen for Expats
          </h2>
          <p>
            Before we get into how to explain gaps, let&apos;s normalize them. Here are the most common reasons
            expats have breaks in their employment history:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>International relocation:</strong> Moving countries takes time - finding housing, getting registered at the gemeente, opening a bank account, sorting out insurance, getting your BSN</li>
            <li><strong>Visa and work permit processing:</strong> Waiting for your residence permit or work authorization can take weeks or months</li>
            <li><strong>Language study:</strong> Taking Dutch courses (inburgering or otherwise) to improve your employability</li>
            <li><strong>Job search in a new market:</strong> Learning how the Dutch job market works, networking, adapting your CV</li>
            <li><strong>Following a partner:</strong> Many expats move to the Netherlands because their partner got a job here</li>
            <li><strong>Family reasons:</strong> Childcare, caring for family members, parental leave</li>
            <li><strong>Further education:</strong> Taking courses, certifications, or retraining for the Dutch market</li>
            <li><strong>Freelancing or consulting:</strong> Working on small projects that didn&apos;t make it onto your CV</li>
          </ul>
          <p>
            All of these are completely valid. The trick is presenting them in a way that shows you were productive
            and intentional during the gap - not that you were sitting idle.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The Dutch Perspective on Career Gaps
          </h2>
          <p>
            Here&apos;s something that might surprise you: the Netherlands is more relaxed about career gaps than
            many other countries. Dutch work culture values work-life balance, sabbaticals are relatively common,
            and taking time between jobs isn&apos;t seen as the red flag it might be in, say, the US or Japan.
          </p>
          <p>
            That said, recruiters will still notice gaps and want to understand them. An unexplained gap of 6+
            months will raise questions. The goal isn&apos;t to hide the gap - it&apos;s to frame it honestly
            and positively.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            How to Address Career Gaps on Your CV
          </h2>
          <p>
            There are several practical ways to handle gaps. Choose the approach that fits your situation:
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Option 1: Add the gap as an entry on your CV
          </h3>
          <p>
            If your gap involved productive activities, list it as you would a job. This is especially effective
            for relocation gaps:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-1">International Relocation & Career Transition</p>
            <p className="text-gray-500 text-sm mb-2">June 2025 - December 2025 | Amsterdam, Netherlands</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Relocated from S&atilde;o Paulo to Amsterdam; completed Dutch civic integration requirements</li>
              <li>Completed A2-level Dutch language course at a language school</li>
              <li>Obtained Nuffic credential evaluation for Brazilian engineering degree</li>
              <li>Completed Google Project Management certificate to align skills with EU market expectations</li>
            </ul>
          </div>
          <p>
            This approach turns a &quot;gap&quot; into a story of initiative and preparation. It shows the recruiter
            that you used the time intentionally.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Option 2: Address it in your personal profile
          </h3>
          <p>
            Your personal profile (the 3-4 sentence summary at the top of your CV) is a great place to briefly
            acknowledge a gap without making it the focus:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
            <p className="text-sm italic">
              &quot;Marketing manager with 7 years of experience in brand strategy and digital campaigns.
              Recently relocated to the Netherlands and completed Dutch language training. Looking to bring
              international perspective and cross-cultural communication skills to a growing Dutch company.&quot;
            </p>
          </div>
          <p>
            This approach acknowledges the transition without drawing excessive attention to the timeline.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Option 3: Use years instead of months (carefully)
          </h3>
          <p>
            If you have a short gap (3-6 months), you can use year-only dates instead of month/year. For example,
            if you left a job in September 2024 and started the next in March 2025, listing &quot;2024&quot; and
            &quot;2025&quot; makes the gap less visible.
          </p>
          <p>
            <strong>Be careful with this approach.</strong> It&apos;s fine for short gaps, but using year-only
            dates for your entire CV can look like you&apos;re hiding something. For recent roles (last 5 years),
            include months. For older roles, years are fine.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Option 4: Explain in your cover letter
          </h3>
          <p>
            If you prefer to keep your CV clean and focused on experience, use the cover letter to briefly explain
            the gap. One or two sentences is enough:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
            <p className="text-sm italic">
              &quot;After relocating to the Netherlands with my partner in early 2025, I spent six months settling
              in, learning Dutch, and obtaining my work permit. I&apos;m now fully authorized to work and eager to
              apply my supply chain experience in the Dutch market.&quot;
            </p>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Real Examples: How to Frame Common Expat Gaps
          </h2>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Relocation gap (3-12 months)
          </h3>
          <p>
            <strong>Frame it as:</strong> &quot;International Relocation to the Netherlands&quot; - mention
            language study, credential evaluation, networking, and any courses taken.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Waiting for work permit
          </h3>
          <p>
            <strong>Frame it as:</strong> &quot;Career Transition Period&quot; - emphasize what you did while
            waiting: online courses, volunteering, freelance projects, language study.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Following a partner
          </h3>
          <p>
            <strong>Frame it as:</strong> &quot;International relocation&quot; - you don&apos;t need to explain
            that you moved for your partner. Focus on what you did to prepare for the Dutch job market.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Language study (full-time Dutch courses)
          </h3>
          <p>
            <strong>Frame it as:</strong> &quot;Full-time Dutch Language Training&quot; - this is genuinely
            impressive. Dutch is not easy, and employers respect the commitment. Mention the level achieved
            (A2, B1, etc.) and the institution.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Parental leave
          </h3>
          <p>
            <strong>Frame it as:</strong> &quot;Parental Leave&quot; - in the Netherlands, parental leave is
            respected and normalized. You don&apos;t need to apologize for it. A simple mention is enough.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            Couldn&apos;t find a job for a while
          </h3>
          <p>
            <strong>Frame it as:</strong> Focus on what you did during that time, not on the job search itself.
            Did you take online courses? Volunteer? Do freelance projects? Attend meetups? All of these count
            as productive activities.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            What NOT to Do
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Don&apos;t lie or make up jobs.</strong> Fabricating employment is a serious issue in the
              Netherlands. Background checks are common, especially for professional roles. Getting caught means
              instant rejection - and potential blacklisting.
            </li>
            <li>
              <strong>Don&apos;t over-explain.</strong> A brief, confident explanation is better than a paragraph
              of justification. Recruiters don&apos;t need your life story. They need to know you&apos;re ready
              to work now.
            </li>
            <li>
              <strong>Don&apos;t apologize.</strong> &quot;I&apos;m sorry for the gap in my CV&quot; sounds
              defensive. You relocated to a new country. That takes courage and resilience. Frame it that way.
            </li>
            <li>
              <strong>Don&apos;t leave gaps unexplained.</strong> An unexplained gap invites assumptions.
              A brief explanation - even one line - is always better than silence.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Fill the Gap With Skills
          </h2>
          <p>
            If you&apos;re currently in a gap and reading this article while job hunting, here are some things
            you can start doing today to strengthen your CV:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Take a free online course on Coursera, edX, or LinkedIn Learning (and add it to your CV)</li>
            <li>Start or continue Dutch language classes</li>
            <li>Volunteer with a local organization (this also builds your Dutch network)</li>
            <li>Attend expat networking events and meetups (Amsterdam, Rotterdam, and The Hague have active communities)</li>
            <li>Do freelance or consulting projects (even small ones count)</li>
            <li>Get your credentials evaluated by Nuffic if you haven&apos;t already</li>
          </ul>
          <p>
            Every one of these activities can be listed on your CV and turns dead time into professional
            development.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The Bottom Line
          </h2>
          <p>
            <strong>Career gaps as an expat</strong> are not career killers. They&apos;re a normal part of the
            international experience. Dutch employers understand this - they just want to see that you were
            intentional about your time and that you&apos;re ready to contribute now.
          </p>
          <p>
            Be honest, be brief, and focus on what you did - not on the time that passed. Frame your gap as a
            chapter of growth, not a hole in your history. And remember: moving to a new country and rebuilding
            your career from scratch is one of the most ambitious things a person can do. Don&apos;t sell
            yourself short.
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
