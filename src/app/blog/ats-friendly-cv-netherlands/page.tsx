import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS-Friendly CV Tips for Expats in the Netherlands | ExpatCV",
  description:
    "Most Dutch companies use ATS to filter CVs automatically. Learn how to make your CV ATS-friendly with the right keywords, formatting, and structure.",
  keywords: [
    "ats friendly cv netherlands",
    "ats cv tips",
    "applicant tracking system netherlands",
    "cv ats optimization",
    "dutch ats cv",
  ],
  openGraph: {
    title: "ATS-Friendly CV Tips for Expats in the Netherlands",
    description:
      "Most Dutch companies use ATS to filter CVs automatically. Learn how to make your CV ATS-friendly with the right keywords, formatting, and structure.",
    type: "article",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS-Friendly CV Tips for Expats in the Netherlands",
    description:
      "Most Dutch companies use ATS to filter CVs automatically. Learn how to make your CV ATS-friendly with the right keywords, formatting, and structure.",
  },
  alternates: {
    canonical: "/blog/ats-friendly-cv-netherlands",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ATS-Friendly CV Tips for Expats in the Netherlands",
  description:
    "Most Dutch companies use ATS to filter CVs automatically. Learn how to make your CV ATS-friendly with the right keywords, formatting, and structure.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: {
    "@type": "Organization",
    name: "ExpatCV",
  },
  publisher: {
    "@type": "Organization",
    name: "ExpatCV",
  },
};

export default function ATSFriendlyCVArticle() {
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
            <time dateTime="2026-03-22">March 22, 2026</time>
            <span className="text-blue-200/30">|</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            ATS-Friendly CV Tips for Expats in the Netherlands
          </h1>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-base sm:text-lg text-gray-800">
            You spent hours perfecting your CV. You applied to 30 jobs in Amsterdam, Rotterdam, or The Hague. And
            you heard... nothing. Not even a rejection email. What happened? There&apos;s a good chance your CV never
            reached a human. It was filtered out by an <strong>ATS</strong> - an Applicant Tracking System.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            What Is an ATS (and Why Should You Care)?
          </h2>
          <p>
            An Applicant Tracking System is software that companies use to manage job applications. Think of it as a
            digital gatekeeper. When you submit your CV through a company&apos;s career page or a job board like
            LinkedIn, Indeed, or Werkzoeken, your CV goes into the ATS first.
          </p>
          <p>
            The ATS does several things:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Parses your CV into structured data (name, email, experience, skills)</li>
            <li>Searches for keywords that match the job description</li>
            <li>Ranks candidates based on how well their CV matches</li>
            <li>Filters out CVs that don&apos;t meet minimum criteria</li>
          </ul>
          <p>
            In the Netherlands, most medium and large companies use an ATS. Popular ones include Bullhorn, Greenhouse,
            Recruitee (a Dutch company), Workday, and SAP SuccessFactors. Even many Dutch recruitment agencies
            (uitzendbureaus) use them.
          </p>
          <p>
            If your CV isn&apos;t <strong>ATS-friendly</strong>, it might score a 0% match - even if you&apos;re
            perfectly qualified. The recruiter never sees it. You never hear back. You assume the Dutch job market
            is impossible. Sound familiar?
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            How ATS Parsing Actually Works
          </h2>
          <p>
            ATS software reads your CV like a machine, not a human. It looks for specific patterns and structures.
            Here&apos;s what it tries to extract:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact information:</strong> Name, email, phone number</li>
            <li><strong>Work experience:</strong> Job titles, company names, dates of employment</li>
            <li><strong>Education:</strong> Degrees, institutions, graduation dates</li>
            <li><strong>Skills:</strong> Technical and professional skills</li>
            <li><strong>Keywords:</strong> Specific terms from the job description</li>
          </ul>
          <p>
            When the ATS can&apos;t parse your CV correctly, your information ends up in the wrong fields - or gets
            lost entirely. This happens more often than you&apos;d think, especially with creative CV templates.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            10 Rules for an ATS-Friendly CV in the Netherlands
          </h2>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            1. Use a simple, single-column layout
          </h3>
          <p>
            Two-column layouts, sidebars, and text boxes confuse most ATS systems. Stick to a single-column format
            with clear section headings. It might look less &quot;designed,&quot; but it gets parsed correctly -
            which is what actually matters.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            2. Use standard section headings
          </h3>
          <p>
            Use headings that ATS software recognizes: &quot;Work Experience,&quot; &quot;Education,&quot;
            &quot;Skills,&quot; &quot;Languages.&quot; Don&apos;t get creative with names like &quot;My Journey&quot;
            or &quot;Where I&apos;ve Been.&quot; The ATS won&apos;t know what to do with those.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            3. Submit as PDF (usually) or .docx
          </h3>
          <p>
            Most modern ATS systems handle PDF files well. However, some older systems prefer .docx. If the job
            posting specifies a format, follow it. When in doubt, PDF is the safest bet in the Netherlands.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            4. Don&apos;t use tables, text boxes, or graphics
          </h3>
          <p>
            Those skill-level bar charts? The ATS can&apos;t read them. That table-based layout? It might scramble
            your entire work history. Avoid tables, images, icons, and infographics in the body of your CV. Your
            photo is usually fine (it&apos;s expected in the Netherlands), but keep it in the header area.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            5. Match keywords from the job description
          </h3>
          <p>
            This is the single most important ATS tip. Read the job description carefully and use the same terms
            in your CV. If the job says &quot;project management,&quot; don&apos;t write &quot;project
            coordination.&quot; If it says &quot;Python,&quot; write &quot;Python&quot; - not &quot;programming.&quot;
          </p>
          <p>
            For Dutch job postings, pay attention to both English and Dutch keywords. Some roles use mixed language:
            &quot;Salesforce developer met ervaring in Agile.&quot; Mirror the language of the posting.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            6. Spell out acronyms (at least once)
          </h3>
          <p>
            Write &quot;Search Engine Optimization (SEO)&quot; instead of just &quot;SEO.&quot; This way, the ATS
            catches both the full term and the acronym. This is especially important for certifications:
            &quot;Project Management Professional (PMP).&quot;
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            7. Use standard date formats
          </h3>
          <p>
            Use &quot;January 2023 - Present&quot; or &quot;01/2023 - Present.&quot; Don&apos;t use just years
            (&quot;2023 - 2025&quot;) for recent roles - it looks like you&apos;re hiding short tenures. Be
            consistent with your format throughout the CV.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            8. Include a skills section
          </h3>
          <p>
            A dedicated skills section gives the ATS a clear list of your competencies to match against. List
            technical skills, tools, methodologies, and relevant soft skills. Example: &quot;Python, SQL,
            Tableau, Agile/Scrum, Stakeholder Management, Dutch (B1).&quot;
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            9. Don&apos;t stuff keywords
          </h3>
          <p>
            Some people try to game the system by hiding keywords in white text or repeating them excessively.
            Don&apos;t do this. Modern ATS systems detect keyword stuffing, and if a recruiter does see your CV,
            it&apos;ll look ridiculous. Use keywords naturally in context.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2">
            10. Tailor your CV for each application
          </h3>
          <p>
            Yes, this means more work. But sending the same generic CV to 50 jobs is less effective than sending
            10 tailored CVs. Adjust your profile summary, skills section, and bullet points to match each job
            description. This is where AI tools like ExpatCV can save you hours.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            ATS Testing: How to Check Your CV
          </h2>
          <p>
            Want to know if your CV is ATS-friendly? Here&apos;s a simple test: copy and paste your CV into a
            plain text editor (like Notepad). If the text comes out scrambled, with sections out of order or
            missing information, an ATS will have the same problem.
          </p>
          <p>
            You can also try submitting your CV to yourself through a free ATS tool or job board and checking
            how the parsed data looks. If your name ends up in the &quot;company&quot; field or your skills
            section disappears, you know there&apos;s a formatting issue.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Why This Matters Even More for Expats
          </h2>
          <p>
            As an expat in the Netherlands, you&apos;re already at a disadvantage in the ATS game. Here&apos;s why:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your previous job titles might not match Dutch conventions (e.g., &quot;Associate Vice President&quot;
              in banking means something different in the US vs. the Netherlands)
            </li>
            <li>
              Your degree might not be recognized without explanation
            </li>
            <li>
              The CV format from your home country (one page in the US, multi-page in India, photo-less in the UK)
              might not parse correctly for Dutch ATS systems
            </li>
            <li>
              You might miss Dutch-specific keywords or industry terms
            </li>
          </ul>
          <p>
            This is why adapting your CV for the Dutch market isn&apos;t just nice to have - it&apos;s essential.
            An <strong>ATS-friendly CV</strong> tailored to the <strong>Netherlands</strong> job market gives you
            a fighting chance to actually reach a human recruiter.
          </p>

          <p>
            Don&apos;t let a machine reject you before a person gets the chance to say yes. Fix your formatting,
            match your keywords, and start getting the interviews you deserve.
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
