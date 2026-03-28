import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Mistakes Expats Make on Their CV in the Netherlands | ExpatCV",
  description:
    "Avoid these common CV mistakes that get expats rejected in the Netherlands. From wrong format to missing language skills, here's what Dutch recruiters hate.",
  keywords: [
    "expat cv mistakes netherlands",
    "cv mistakes dutch",
    "common cv errors netherlands",
    "expat resume mistakes",
    "dutch cv tips",
  ],
  openGraph: {
    title: "Top 10 Mistakes Expats Make on Their CV in the Netherlands",
    description:
      "Avoid these common CV mistakes that get expats rejected in the Netherlands. From wrong format to missing language skills, here's what Dutch recruiters hate.",
    type: "article",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Mistakes Expats Make on Their CV in the Netherlands",
    description:
      "Avoid these common CV mistakes that get expats rejected in the Netherlands.",
  },
  alternates: {
    canonical: "/blog/expat-cv-mistakes-netherlands",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top 10 Mistakes Expats Make on Their CV in the Netherlands",
  description:
    "Avoid these common CV mistakes that get expats rejected in the Netherlands. From wrong format to missing language skills, here's what Dutch recruiters hate.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: {
    "@type": "Organization",
    name: "ExpatCV",
  },
  publisher: {
    "@type": "Organization",
    name: "ExpatCV",
  },
};

export default function ExpatCVMistakesArticle() {
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
            <time dateTime="2026-03-18">March 18, 2026</time>
            <span className="text-blue-200/30">|</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Top 10 Mistakes Expats Make on Their CV in the Netherlands
          </h1>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-base sm:text-lg text-gray-800">
            Moving to the Netherlands is exciting. Job hunting in the Netherlands? Not so much. Especially when your
            CV — which worked perfectly back home — is silently getting you rejected. After helping hundreds of expats
            rewrite their CVs for the Dutch job market, we&apos;ve seen the same mistakes come up again and again.
            Here are the top 10 <strong>expat CV mistakes in the Netherlands</strong> and how to fix them.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            1. Using Your Home Country&apos;s CV Format
          </h2>
          <p>
            This is the biggest one. A one-page American resume, a multi-page Indian biodata, a UK-style CV with
            no photo — none of these match what Dutch employers expect. The Netherlands has its own conventions:
            1-2 pages, professional photo, personal summary at the top, and a clear language section.
          </p>
          <p>
            <strong>Fix:</strong> Research the Dutch CV format specifically, or use a tool like ExpatCV that
            automatically reformats your CV for the Dutch market.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            2. No Professional Photo
          </h2>
          <p>
            In the US, UK, and many other countries, putting a photo on your CV is unusual or even discouraged
            (due to discrimination concerns). In the Netherlands, it&apos;s standard practice. About 70-80% of
            CVs include a headshot. Not including one can make your CV feel incomplete to a Dutch recruiter.
          </p>
          <p>
            <strong>Fix:</strong> Add a professional headshot. Business casual, neutral background, good lighting.
            It doesn&apos;t need to be studio-quality — a well-lit phone photo with a plain wall behind you works.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            3. Forgetting the Language Section
          </h2>
          <p>
            This might be the most underrated section on a Dutch CV. The Netherlands is a multilingual country,
            and employers care about which languages you speak and at what level. Leaving this out is a missed
            opportunity, especially if you speak multiple languages.
          </p>
          <p>
            <strong>Fix:</strong> Add a dedicated &quot;Languages&quot; section. List each language with your
            level: Native, Fluent, Professional working proficiency, or Basic. If you&apos;re learning Dutch,
            include it: &quot;Dutch (A2 — currently in classes)&quot; shows effort and commitment.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            4. Writing a Novel Instead of a CV
          </h2>
          <p>
            Some expats try to include everything they&apos;ve ever done. Every internship from 2008. Every
            conference attended. Every skill acquired. Dutch recruiters don&apos;t have time for this. They
            spend an average of 6-8 seconds scanning a CV on first pass.
          </p>
          <p>
            <strong>Fix:</strong> Keep it to 1-2 pages. Focus on the last 10-15 years. For each role, include
            3-5 bullet points with measurable achievements. If a past role isn&apos;t relevant to what you&apos;re
            applying for, either cut it or reduce it to one line.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            5. Vague, Fluffy Language
          </h2>
          <p>
            Dutch culture values directness and honesty. &quot;Dynamic, results-oriented professional with a
            passion for excellence&quot; means absolutely nothing to a Dutch recruiter. They want to know what
            you actually did and what the results were.
          </p>
          <p>
            <strong>Fix:</strong> Replace vague statements with specific, quantified achievements.
            Instead of &quot;Responsible for managing a team,&quot; write &quot;Managed a team of 12 across
            3 countries, delivering a product launch 2 weeks ahead of schedule.&quot; Numbers and outcomes are
            what matter.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            6. Including Irrelevant Personal Information
          </h2>
          <p>
            Some countries expect your CV to include marital status, religion, number of children, or your
            parents&apos; names. In the Netherlands, this information is not expected and can feel inappropriate.
            On the flip side, don&apos;t include your full home address either — just your city is enough.
          </p>
          <p>
            <strong>Fix:</strong> Personal details should include: name, phone, email, city, LinkedIn URL.
            Date of birth and nationality are optional but acceptable. Everything else — leave it out.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            7. Using a Fancy Template That Breaks ATS
          </h2>
          <p>
            You downloaded a beautiful CV template from Canva or Etsy. It has columns, icons, progress bars for
            skills, and a colorful sidebar. It looks great on screen. But when a Dutch company&apos;s ATS tries
            to parse it, everything breaks. Your name ends up in the wrong field. Your work history disappears.
            Your skills are unreadable.
          </p>
          <p>
            <strong>Fix:</strong> Use a clean, single-column layout. Standard fonts (Calibri, Arial, Helvetica).
            No tables, text boxes, or graphics in the body. Your CV should look good AND be machine-readable.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            8. Not Explaining Your Foreign Degree
          </h2>
          <p>
            A Dutch recruiter might not know what a &quot;Bachelor of Technology from IIT Bombay&quot; or a
            &quot;Licenciatura from UNAM&quot; means in the Dutch education system. If they can&apos;t quickly
            understand your qualification level, they might move on.
          </p>
          <p>
            <strong>Fix:</strong> Add a brief note explaining the equivalence. For example: &quot;Bachelor of
            Technology (equivalent to WO Bachelor level)&quot; or &quot;Master&apos;s degree (equivalent to WO
            Master).&quot; You can get official credential evaluations from Nuffic (the Dutch organization for
            internationalization in education) if needed.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            9. Sending the Same CV to Every Job
          </h2>
          <p>
            This is a universal mistake, but it hits harder as an expat. When you&apos;re already competing
            with local candidates who understand the market better, sending a generic CV is a recipe for
            rejection. Each job posting has specific keywords and requirements that your CV should reflect.
          </p>
          <p>
            <strong>Fix:</strong> Tailor your CV for each application. Adjust your personal summary to match the
            role. Reorder your skills to put the most relevant ones first. Mirror the language from the job
            description. Yes, this takes more time — but 5 tailored applications beat 50 generic ones.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            10. Listing Your BSN or Visa Details
          </h2>
          <p>
            Some expats include their BSN (Burgerservicenummer), visa type, or work permit details directly on
            their CV. While it&apos;s understandable — you want to show you can legally work in the Netherlands —
            this information doesn&apos;t belong on your CV. It&apos;s sensitive personal data and it&apos;s
            handled during the hiring process, not the application stage.
          </p>
          <p>
            <strong>Fix:</strong> Instead, you can mention something like &quot;EU citizen&quot; or &quot;Eligible
            to work in the Netherlands&quot; in your personal details section if you want to preempt any concerns.
            Save the specific visa and BSN details for after you get the interview.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Bonus: Not Proofreading
          </h2>
          <p>
            Spelling mistakes and grammatical errors are a fast track to the rejection pile, especially when
            English isn&apos;t your first language and you&apos;re applying to English-speaking roles. Dutch
            recruiters (who typically speak excellent English) will notice.
          </p>
          <p>
            <strong>Fix:</strong> Use spell-check. Have a native English speaker review your CV. Or use an AI
            tool to catch errors and improve clarity.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The Bottom Line
          </h2>
          <p>
            Most <strong>expat CV mistakes in the Netherlands</strong> come down to one thing: assuming that
            what works in your home country works here too. It doesn&apos;t. The Dutch job market has its own
            rules, expectations, and quirks. The good news is that these mistakes are easy to fix once you
            know what to look for.
          </p>
          <p>
            Take 30 minutes to review your CV against this list. Better yet, use a tool that does it automatically.
            Your next interview could be one format change away.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Rewrite your CV for the Dutch market in 60 seconds — free
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
