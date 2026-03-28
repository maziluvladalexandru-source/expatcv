import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Dutch CV Format That Gets Interviews | ExpatCV",
  description:
    "Learn the exact Dutch CV format that gets interviews. Photo rules, ideal length, structure, and what Dutch employers actually expect from your CV.",
  keywords: [
    "dutch cv format",
    "cv netherlands",
    "dutch resume format",
    "cv format netherlands",
    "expat cv dutch",
  ],
  openGraph: {
    title: "How to Write a Dutch CV Format That Gets Interviews",
    description:
      "Learn the exact Dutch CV format that gets interviews. Photo rules, ideal length, structure, and what Dutch employers actually expect from your CV.",
    type: "article",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Dutch CV Format That Gets Interviews",
    description:
      "Learn the exact Dutch CV format that gets interviews. Photo rules, ideal length, structure, and what Dutch employers actually expect from your CV.",
  },
  alternates: {
    canonical: "/blog/dutch-cv-format",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Dutch CV Format That Gets Interviews",
  description:
    "Learn the exact Dutch CV format that gets interviews. Photo rules, ideal length, structure, and what Dutch employers actually expect from your CV.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: {
    "@type": "Organization",
    name: "ExpatCV",
  },
  publisher: {
    "@type": "Organization",
    name: "ExpatCV",
  },
};

export default function DutchCVFormatArticle() {
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
            <time dateTime="2026-03-25">March 25, 2026</time>
            <span className="text-blue-200/30">|</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            How to Write a Dutch CV Format That Gets Interviews
          </h1>
        </div>
      </nav>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-base sm:text-lg text-gray-800">
            You moved to the Netherlands with years of experience, solid skills, and a CV that worked perfectly in your
            home country. But here? Silence. No callbacks. No interviews. The problem isn&apos;t your experience - it&apos;s
            your <strong>Dutch CV format</strong>.
          </p>
          <p>
            The Netherlands has specific expectations for how a CV should look, what it should include, and how long it
            should be. If your CV doesn&apos;t follow these rules, Dutch recruiters might skip it in seconds - even if
            you&apos;re a perfect fit for the role. Let&apos;s fix that.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            How Long Should a Dutch CV Be?
          </h2>
          <p>
            In the Netherlands, the ideal CV length is <strong>one to two pages</strong>. For most professionals with
            5-15 years of experience, two pages is perfectly fine. If you&apos;re early in your career, stick to one page.
          </p>
          <p>
            This is different from countries like the US (where one page is the strict rule) or academic environments
            (where multi-page CVs are normal). Dutch employers want enough detail to understand your experience, but
            not so much that they&apos;re wading through irrelevant information.
          </p>
          <p>
            <strong>Tip:</strong> If your CV is three or more pages, you need to cut. Remove roles from more than 10-15
            years ago unless they&apos;re directly relevant. Cut the long job descriptions and focus on achievements.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Should You Include a Photo on Your Dutch CV?
          </h2>
          <p>
            This is one of the most common questions expats have, and the answer is: <strong>it depends, but usually yes</strong>.
          </p>
          <p>
            In the Netherlands, including a professional headshot on your CV is common and generally expected. About
            70-80% of CVs in the Dutch market include a photo. It&apos;s not legally required, and some international
            companies (especially in tech) don&apos;t care either way. But for most Dutch employers, a photo makes your
            CV feel complete.
          </p>
          <p>
            If you do include a photo, make sure it&apos;s:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A professional headshot (not a selfie, not a cropped group photo)</li>
            <li>Recent - taken within the last 1-2 years</li>
            <li>Neutral background, good lighting</li>
            <li>Business casual dress (no need for a suit unless you&apos;re in finance or law)</li>
          </ul>
          <p>
            If you&apos;re applying to American tech companies with Dutch offices (think Booking.com, Uber, Adyen),
            skipping the photo is fine. For traditional Dutch companies, include it.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            The Ideal Dutch CV Structure
          </h2>
          <p>
            Here&apos;s the section order that Dutch recruiters expect:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Personal details</strong> - Full name, phone number, email, city (not full address), LinkedIn URL.
              Date of birth and nationality are optional but still common in the Netherlands. Do not include your BSN number.
            </li>
            <li>
              <strong>Personal profile / summary</strong> - 3-4 sentences about who you are professionally. This is your
              elevator pitch. Mention your years of experience, key skills, and what you&apos;re looking for. Example:
              &quot;Marketing professional with 8 years of experience in digital campaigns and brand strategy. Relocated to
              Amsterdam and looking to bring international perspective to a growing Dutch company.&quot;
            </li>
            <li>
              <strong>Work experience</strong> - Most recent first. For each role: job title, company name, dates, and
              3-5 bullet points focused on achievements. Use numbers when possible: &quot;Increased conversion rate by 23%&quot;
              is much better than &quot;Responsible for improving conversions.&quot;
            </li>
            <li>
              <strong>Education</strong> - Degree, institution, year of graduation. If you studied outside the Netherlands,
              briefly mention the country. You can add a one-line note about what your degree is equivalent to in the Dutch
              system (e.g., &quot;Equivalent to HBO/WO level&quot;).
            </li>
            <li>
              <strong>Skills</strong> - Technical skills, software, tools. Keep it relevant to the job. Don&apos;t list
              &quot;Microsoft Word&quot; unless you&apos;re applying for an admin role.
            </li>
            <li>
              <strong>Languages</strong> - This is more important in the Netherlands than in many countries. List each
              language with your level (Native, Fluent, Professional, Basic). If you&apos;re learning Dutch, include it -
              even &quot;Dutch (A2 - currently studying)&quot; shows effort and is appreciated.
            </li>
            <li>
              <strong>Certifications and courses</strong> - Optional, but useful if you have relevant ones.
            </li>
          </ol>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            What Dutch Employers Actually Look For
          </h2>
          <p>
            Dutch hiring managers tend to value a few things more than employers in other countries:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct, honest communication.</strong> Dutch business culture is famously straightforward. Your CV
              should be too. Don&apos;t oversell yourself with vague superlatives like &quot;dynamic results-driven
              professional.&quot; Just state what you did and what happened.
            </li>
            <li>
              <strong>Cultural fit and soft skills.</strong> The Netherlands values teamwork, consensus, and flat
              hierarchies. If you&apos;ve worked in international teams or cross-cultural environments, mention it.
            </li>
            <li>
              <strong>Language skills.</strong> Even if the job is in English, showing that you&apos;re learning Dutch
              (or speak other languages) is a strong signal that you&apos;re committed to integrating.
            </li>
            <li>
              <strong>Relevance over volume.</strong> Don&apos;t list every job you&apos;ve ever had. Dutch recruiters
              want to see relevant experience, clearly presented. Tailor your CV for each application.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Formatting Tips for a Clean Dutch CV
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use a clean, modern font like Calibri, Arial, or Helvetica. No Comic Sans, no fancy script fonts.</li>
            <li>Keep font size between 10-12pt for body text.</li>
            <li>Use clear section headings with consistent formatting.</li>
            <li>White space is your friend - don&apos;t cram everything together.</li>
            <li>Save and send as PDF (unless the job ad specifically asks for Word format).</li>
            <li>Name your file professionally: &quot;CV_YourName_2026.pdf&quot; - not &quot;document(3).docx&quot;.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            Common Mistakes to Avoid
          </h2>
          <p>
            Here are the most common mistakes we see expats make with their Dutch CV format:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using a US-style one-page resume with no personal details</li>
            <li>Including a full home address (city is enough)</li>
            <li>Writing in the third person (&quot;John is a motivated professional...&quot;)</li>
            <li>Listing every job since university - focus on the last 10-15 years</li>
            <li>Using fancy templates with graphics that confuse ATS software</li>
            <li>Forgetting to mention language skills</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">
            A Quick Dutch CV Checklist
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>1-2 pages maximum</li>
            <li>Professional photo (recommended)</li>
            <li>Personal profile at the top</li>
            <li>Work experience with measurable achievements</li>
            <li>Education with degree equivalence noted</li>
            <li>Language section with proficiency levels</li>
            <li>Clean, ATS-friendly formatting</li>
            <li>Saved as PDF</li>
          </ul>

          <p>
            Getting your <strong>Dutch CV format</strong> right is the single biggest thing you can do to improve your
            response rate as an expat in the Netherlands. It doesn&apos;t matter how qualified you are if your CV gets
            filtered out before anyone reads it.
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
