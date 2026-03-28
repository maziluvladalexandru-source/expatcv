import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ExpatCV | CV Tips for Expats in the Netherlands",
  description:
    "Practical CV advice for expats in the Netherlands. Learn about Dutch CV format, ATS optimization, common mistakes, work permits, and more.",
  openGraph: {
    title: "Blog - ExpatCV | CV Tips for Expats in the Netherlands",
    description:
      "Practical CV advice for expats in the Netherlands. Learn about Dutch CV format, ATS optimization, common mistakes, work permits, and more.",
    type: "website",
    siteName: "ExpatCV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - ExpatCV | CV Tips for Expats in the Netherlands",
    description:
      "Practical CV advice for expats in the Netherlands. Learn about Dutch CV format, ATS optimization, common mistakes, work permits, and more.",
  },
};

const articles = [
  {
    slug: "dutch-cv-format",
    title: "How to Write a Dutch CV Format That Gets Interviews",
    excerpt:
      "Photo or no photo? One page or two? Learn exactly what Dutch employers expect from your CV — and how to format it so recruiters actually read it.",
    date: "2026-03-25",
    readTime: "8 min read",
  },
  {
    slug: "ats-friendly-cv-netherlands",
    title: "ATS-Friendly CV Tips for Expats in the Netherlands",
    excerpt:
      "Most Dutch companies use ATS software to filter CVs before a human ever sees them. Here's how to make sure yours gets through.",
    date: "2026-03-22",
    readTime: "9 min read",
  },
  {
    slug: "expat-cv-mistakes-netherlands",
    title: "Top 10 Mistakes Expats Make on Their CV in the Netherlands",
    excerpt:
      "From including your date of birth to writing three-page CVs — these are the errors that get expat CVs rejected in the Netherlands.",
    date: "2026-03-18",
    readTime: "10 min read",
  },
  {
    slug: "work-permit-netherlands-cv",
    title: "BSN, Work Permit & Your CV: What Dutch Employers Check First",
    excerpt:
      "Should you mention your visa status on your CV? What about BSN or the 30% ruling? Here's what Dutch employers actually need to know.",
    date: "2026-03-14",
    readTime: "8 min read",
  },
  {
    slug: "career-gap-cv-expat",
    title: "How to Explain Career Gaps on Your CV (Expat Edition)",
    excerpt:
      "Relocated countries? Took time to learn the language? Career gaps are common for expats — here's how to present them without hurting your chances.",
    date: "2026-03-10",
    readTime: "8 min read",
  },
];

export default function BlogIndex() {
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            ExpatCV Blog
          </h1>
          <p className="text-blue-200/60 mt-2 text-sm sm:text-base">
            Practical CV tips and career advice for expats in the Netherlands
          </p>
        </div>
      </nav>

      {/* Articles list */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group"
            >
              <article className="border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-3">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-gray-300">|</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                  Read article &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ExpatCV. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
              Home
            </Link>
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition">
              Privacy
            </Link>
            <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
