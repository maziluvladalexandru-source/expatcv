"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("@/components/Globe3D"), { ssr: false });

const features = [
  {
    title: "CV Rewriter",
    description:
      "Upload your CV and get it rewritten for the Dutch job market. ATS-optimized, EU-formatted, and tailored for international companies in the Netherlands.",
    icon: "📄",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Paste a job posting and your CV. Get a compelling cover letter that follows Dutch business conventions and highlights your cross-cultural strengths.",
    icon: "✉️",
  },
  {
    title: "LinkedIn Bio Optimizer",
    description:
      "Transform your LinkedIn summary into a magnet for Dutch recruiters. Optimized with the right keywords for the NL/EU market.",
    icon: "💼",
  },
];

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "",
    description: "Try it out, no commitment",
    features: [
      "3 AI generations per month",
      "CV rewriting",
      "Cover letter generation",
      "LinkedIn bio optimization",
    ],
    excluded: ["Generation history", "PDF export", "Email support"],
    cta: "Fix My CV Free",
    highlighted: false,
  },
  {
    name: "Basic",
    price: "€9",
    period: "/month",
    description: "For active job seekers",
    features: [
      "10 AI generations per month",
      "CV rewriting",
      "Cover letter generation",
      "LinkedIn bio optimization",
      "Full generation history",
    ],
    excluded: ["PDF export", "Email support"],
    cta: "Start Basic",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "€19",
    period: "/month",
    description: "Unlimited power for your job hunt",
    features: [
      "Unlimited AI generations",
      "CV rewriting",
      "Cover letter generation",
      "LinkedIn bio optimization",
      "Full generation history",
      "Export to PDF",
      "Email support",
    ],
    excluded: [],
    cta: "Go Pro",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote: "I moved from Brazil to Amsterdam and had no idea how to format my CV for Dutch companies. ExpatCV rewrote it perfectly. I got 3 interviews in the first week!",
    name: "Lucas M.",
    role: "Software Engineer, Amsterdam",
  },
  {
    quote: "The cover letter generator saved me hours. It knew exactly how to match my experience to Dutch job postings. Landed a role at a fintech in Rotterdam.",
    name: "Priya K.",
    role: "Product Manager, Rotterdam",
  },
  {
    quote: "As an expat from Nigeria, I struggled with LinkedIn visibility in NL. After optimizing my bio with ExpatCV, recruiter messages doubled.",
    name: "Chidi O.",
    role: "Data Analyst, The Hague",
  },
];

const mobileHighlights = [
  { icon: "🎯", label: "ATS-Optimized", desc: "Beat Dutch hiring filters" },
  { icon: "⚡", label: "30 Seconds", desc: "Instant AI rewriting" },
  { icon: "🌍", label: "Expat-Focused", desc: "Built for internationals" },
  { icon: "🇳🇱", label: "Dutch Market", desc: "EU format & keywords" },
];

const dutchVsExpat = [
  {
    label: "CV format",
    dutch: "1-2 pages, structured EU layout",
    expat: "3+ pages, inconsistent formatting",
  },
  {
    label: "Photo",
    dutch: "No photo (most industries)",
    expat: "Photo included or wrong placement",
  },
  {
    label: "Keywords",
    dutch: "Dutch ATS-optimized terms",
    expat: "Generic or region-specific jargon",
  },
  {
    label: "Personal summary",
    dutch: "Concise, role-targeted opening",
    expat: "Vague objective statement",
  },
  {
    label: "Work experience",
    dutch: "Achievements with metrics",
    expat: "List of responsibilities",
  },
  {
    label: "References",
    dutch: "Available on request (not listed)",
    expat: "Full references on CV",
  },
];

const faqs = [
  {
    q: "Do I need to speak Dutch to use ExpatCV?",
    a: "No. ExpatCV works entirely in English. Most international companies in the Netherlands hire in English, and our AI optimizes your CV for those roles. If you need a Dutch-language CV, you can specify that when rewriting.",
  },
  {
    q: "What makes a Dutch CV different from my home country's CV?",
    a: "Dutch CVs typically follow a specific EU format: no photo (for most industries), 1-2 pages max, structured sections, and specific keywords that Dutch ATS systems scan for. Many expat CVs get auto-rejected because they don't match this format.",
  },
  {
    q: "Will my rewritten CV pass Dutch ATS systems?",
    a: "Yes. Our AI specifically optimizes for the ATS software used by Dutch employers and recruiters, including proper formatting, keyword placement, and structure. This is one of the main reasons expats see more interview callbacks after using ExpatCV.",
  },
  {
    q: "How is this different from ChatGPT or other AI tools?",
    a: "Generic AI tools don't understand the Dutch job market. ExpatCV is specifically trained on Dutch hiring conventions, EU CV formats, and the unique challenges expats face. We know what Dutch recruiters look for. A generic AI prompt doesn't.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, absolutely. You can cancel anytime from your dashboard. Your access continues until the end of your billing period. No lock-in contracts, no cancellation fees.",
  },
  {
    q: "I'm still in my home country but planning to move to the Netherlands. Can I use ExpatCV?",
    a: "Definitely. Many of our users start optimizing their CV before arriving in NL. Having a Dutch-market-ready CV before you move gives you a huge head start on your job search.",
  },
];

const comparisonRows = [
  { label: "Time to get a Dutch-ready CV", expatcv: "30 seconds", manual: "5-10 hours of research", recruiter: "1-2 weeks" },
  { label: "Cost", expatcv: "Free to €19/mo", manual: "Free (your time)", recruiter: "€200 to €500+" },
  { label: "Dutch market knowledge", expatcv: "Built-in AI expertise", manual: "You need to learn it yourself", recruiter: "Varies by recruiter" },
  { label: "ATS optimization", expatcv: "Automatic", manual: "Manual guesswork", recruiter: "Sometimes included" },
  { label: "Cover letters included", expatcv: "Yes", manual: "Extra hours per letter", recruiter: "Usually not" },
  { label: "LinkedIn optimization", expatcv: "Yes", manual: "Extra research needed", recruiter: "Rarely" },
  { label: "Available 24/7", expatcv: "Yes", manual: "Depends on your energy", recruiter: "Business hours only" },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with animated background */}
      <section className="hero-bg relative">
        {/* Animated grid background */}
        <div className="hero-grid" />

        {/* Radial glow center */}
        <div className="hero-radial" />

        {/* Globe / world visualization */}
        <div className="globe-container">
          {/* Concentric rings */}
          <div className="globe-ring" style={{ width: '100%', height: '100%' }} />
          <div className="globe-ring" style={{ width: '75%', height: '75%' }} />
          <div className="globe-ring" style={{ width: '50%', height: '50%' }} />
          <div className="globe-ring" style={{ width: '25%', height: '25%' }} />

          {/* Orbiting dashed rings */}
          <div className="globe-orbit" style={{ width: '110%', height: '110%' }} />
          <div className="globe-orbit globe-orbit-reverse" style={{ width: '85%', height: '85%' }} />
          <div className="globe-orbit" style={{ width: '60%', height: '60%' }} />

          {/* SVG continent outlines */}
          <svg
            viewBox="0 0 600 600"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.12 }}
          >
            {/* Europe */}
            <path
              d="M290 200 L310 190 L325 195 L330 210 L320 225 L305 230 L295 220 L285 215 Z"
              fill="none"
              stroke="rgba(59,130,246,0.6)"
              strokeWidth="1.5"
            />
            {/* Africa */}
            <path
              d="M285 260 L310 250 L320 270 L325 310 L310 340 L290 345 L275 320 L270 290 Z"
              fill="none"
              stroke="rgba(59,130,246,0.5)"
              strokeWidth="1.5"
            />
            {/* Americas */}
            <path
              d="M180 180 L200 170 L210 185 L215 210 L205 240 L195 260 L180 280 L170 310 L175 340 L165 350 L155 330 L150 290 L155 250 L160 220 L170 195 Z"
              fill="none"
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="1.5"
            />
            {/* Asia */}
            <path
              d="M340 185 L380 175 L420 190 L440 210 L435 235 L415 250 L390 245 L365 240 L345 225 L335 205 Z"
              fill="none"
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="1.5"
            />
            {/* Australia */}
            <path
              d="M420 330 L450 320 L465 335 L460 355 L440 360 L425 350 Z"
              fill="none"
              stroke="rgba(59,130,246,0.35)"
              strokeWidth="1.5"
            />
          </svg>

          {/* City dots */}
          <div className="globe-dot" style={{ top: '33%', left: '51%' }} /> {/* Amsterdam */}
          <div className="globe-dot" style={{ top: '38%', left: '30%' }} /> {/* New York */}
          <div className="globe-dot" style={{ top: '55%', left: '50%' }} /> {/* Lagos */}
          <div className="globe-dot" style={{ top: '35%', left: '72%' }} /> {/* Mumbai */}
          <div className="globe-dot" style={{ top: '28%', left: '33%' }} /> {/* Toronto */}
          <div className="globe-dot" style={{ top: '57%', left: '73%' }} /> {/* Sydney */}
          <div className="globe-dot" style={{ top: '42%', left: '65%' }} /> {/* Singapore */}
          <div className="globe-dot" style={{ top: '30%', left: '53%' }} /> {/* Berlin */}
        </div>

        {/* Floating geometric shapes */}
        <div className="hero-shape shape-circle" style={{ width: 120, height: 120, top: '10%', left: '5%', animationDelay: '0s' }} />
        <div className="hero-shape shape-circle" style={{ width: 80, height: 80, top: '60%', right: '8%', animationDelay: '3s' }} />
        <div className="hero-shape shape-hexagon" style={{ width: 90, height: 90, top: '15%', right: '12%', animationDelay: '5s' }} />
        <div className="hero-shape shape-hexagon" style={{ width: 60, height: 60, bottom: '20%', left: '10%', animationDelay: '8s' }} />
        <div className="hero-shape shape-triangle" style={{ width: 70, height: 70, top: '40%', left: '3%', animationDelay: '2s' }} />
        <div className="hero-shape shape-triangle" style={{ width: 50, height: 50, bottom: '15%', right: '5%', animationDelay: '7s' }} />
        <div className="hero-shape shape-ring" style={{ width: 140, height: 140, top: '25%', right: '20%', animationDelay: '4s' }} />
        <div className="hero-shape shape-ring" style={{ width: 100, height: 100, bottom: '25%', left: '20%', animationDelay: '6s' }} />
        <div className="hero-shape shape-circle" style={{ width: 40, height: 40, top: '70%', left: '35%', animationDelay: '10s' }} />
        <div className="hero-shape shape-hexagon" style={{ width: 45, height: 45, top: '5%', left: '40%', animationDelay: '12s' }} />

        {/* Vignette overlay */}
        <div className="hero-vignette" />

        {/* Nav */}
        <nav className="relative z-10 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white">ExpatCV</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-medium border border-blue-500/30">
                for Expats
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-4">
              <a href="#how-it-works" className="text-blue-200/70 hover:text-white text-sm transition">
                How It Works
              </a>
              <a href="#pricing" className="text-blue-200/70 hover:text-white text-sm transition">
                Pricing
              </a>
              <a href="#faq" className="text-blue-200/70 hover:text-white text-sm transition">
                FAQ
              </a>
              <Link
                href="/auth"
                className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition border border-blue-400/30"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden relative z-20 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>

          {/* Mobile slide-down menu */}
          <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="px-4 pb-4 pt-2 flex flex-col gap-3 border-t border-white/10 bg-[#0a0f1e]/95 backdrop-blur-md">
              <a
                href="#how-it-works"
                className="text-blue-200/70 hover:text-white text-sm transition py-1"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-blue-200/70 hover:text-white text-sm transition py-1"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-blue-200/70 hover:text-white text-sm transition py-1"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </a>
              <Link
                href="/auth"
                className="text-sm bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-400 transition border border-blue-400/30 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
                100+ expats have fixed their CV with ExpatCV
              </div>
              <h1 className="text-[1.75rem] leading-[1.2] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 sm:leading-tight drop-shadow-lg">
                Your CV is getting rejected by Dutch ATS systems.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Fix it in 30 seconds.
                </span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-blue-100/60 mb-2 sm:mb-3 max-w-2xl leading-relaxed">
                You&apos;re qualified. But Dutch ATS systems can&apos;t read your CV, so recruiters never see it.
                ExpatCV rewrites your CV, cover letters, and LinkedIn for the Dutch market instantly.
              </p>
              <p className="text-xs sm:text-sm text-orange-300/80 mb-6 sm:mb-8 font-medium">
                Stop missing out on jobs because of formatting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md lg:mx-0 mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200/40 backdrop-blur-sm text-sm sm:text-base"
                />
                <Link
                  href={`/auth${email ? `?email=${encodeURIComponent(email)}` : ""}`}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 transition font-medium whitespace-nowrap text-center shadow-lg shadow-blue-500/25 border border-blue-400/30 text-sm sm:text-base"
                >
                  Fix My CV Free
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-blue-200/40 mt-3 lg:text-left text-center">
                No credit card required. 3 free AI generations.
              </p>
            </div>

            {/* Right side - 3D Globe (desktop only) */}
            <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
              <div className="hero-globe-wrapper">
                <Globe3D />
              </div>
            </div>

            {/* Mobile feature highlights (replaces globe on mobile) */}
            <div className="lg:hidden w-full mt-2">
              <div className="grid grid-cols-2 gap-3">
                {mobileHighlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 text-center"
                  >
                    <div className="text-2xl mb-1.5">{h.icon}</div>
                    <div className="text-white font-semibold text-sm">{h.label}</div>
                    <div className="text-blue-200/50 text-xs mt-0.5">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-900 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 text-center">
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white">100+</p>
              <p className="text-gray-400 text-[10px] sm:text-sm mt-1">expats have fixed their CV</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white">3x</p>
              <p className="text-gray-400 text-[10px] sm:text-sm mt-1">more interview callbacks</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white">30 sec</p>
              <p className="text-gray-400 text-[10px] sm:text-sm mt-1">to rewrite your CV</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white">45+</p>
              <p className="text-gray-400 text-[10px] sm:text-sm mt-1">nationalities served</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            Get a Dutch-ready CV in 3 steps
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
            No formatting headaches. No guessing what Dutch employers want. Just results.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "1",
                title: "Upload your CV",
                desc: "Paste your current CV in any format or language. That's all you need to start.",
                icon: "📤",
              },
              {
                step: "2",
                title: "AI rewrites it for the Dutch market",
                desc: "Our AI reformats, optimizes keywords, and restructures everything to match what Dutch employers and ATS systems expect.",
                icon: "🤖",
              },
              {
                step: "3",
                title: "Download and apply",
                desc: "Get your polished, ATS-optimized CV and start applying to Dutch companies with confidence.",
                icon: "🎯",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl sm:text-5xl mb-3">{item.icon}</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/auth"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/20 text-sm sm:text-base"
            >
              Fix My CV Free
            </Link>
          </div>
        </div>
      </section>

      {/* What Dutch recruiters want vs what expats submit */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            What Dutch recruiters want vs. what expats submit
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
            Most expat CVs get auto-rejected before a human ever reads them. Here is why.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium" />
                  <th className="py-3 px-3 sm:px-4 text-center">
                    <div className="bg-green-600 text-white rounded-lg py-2 px-2 sm:px-4 font-bold text-sm sm:text-base">
                      ✅ What Dutch recruiters want
                    </div>
                  </th>
                  <th className="py-3 px-3 sm:px-4 text-center">
                    <div className="bg-red-500 text-white rounded-lg py-2 px-2 sm:px-4 font-bold text-sm sm:text-base">
                      ❌ What expats typically submit
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dutchVsExpat.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 font-medium text-xs sm:text-sm">{row.label}</td>
                    <td className="py-3 px-3 sm:px-4 text-center text-green-700 font-medium text-xs sm:text-sm">{row.dutch}</td>
                    <td className="py-3 px-3 sm:px-4 text-center text-red-600 text-xs sm:text-sm">{row.expat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-700 font-medium mb-4 text-sm sm:text-base">
              ExpatCV fixes all of this automatically. In 30 seconds.
            </p>
            <Link
              href="/auth"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/20 text-sm sm:text-base"
            >
              Fix My CV Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Everything you need to stand out in the Dutch job market
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            Why expats choose ExpatCV
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
            See how we compare to doing it yourself or hiring a recruiter.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium" />
                  <th className="py-3 px-3 sm:px-4 text-center">
                    <div className="bg-blue-600 text-white rounded-lg py-2 px-2 sm:px-4 font-bold text-sm sm:text-base">
                      ExpatCV
                    </div>
                  </th>
                  <th className="py-3 px-3 sm:px-4 text-center text-gray-700 font-semibold text-xs sm:text-sm">
                    Do It Yourself
                  </th>
                  <th className="py-3 px-3 sm:px-4 text-center text-gray-700 font-semibold text-xs sm:text-sm">
                    Hire a Recruiter
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 font-medium text-xs sm:text-sm">{row.label}</td>
                    <td className="py-3 px-3 sm:px-4 text-center text-blue-700 font-semibold text-xs sm:text-sm">{row.expatcv}</td>
                    <td className="py-3 px-3 sm:px-4 text-center text-gray-500 text-xs sm:text-sm">{row.manual}</td>
                    <td className="py-3 px-3 sm:px-4 text-center text-gray-500 text-xs sm:text-sm">{row.recruiter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/auth"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/20 text-sm sm:text-base"
            >
              Fix My CV Free
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Loved by expats across the Netherlands
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm sm:text-base">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
            Start free. Upgrade when you need more generations.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 sm:p-8 rounded-xl border-2 ${
                  plan.highlighted
                    ? "border-blue-600 shadow-lg relative"
                    : "border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3">{plan.description}</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth"
                  className={`block text-center py-3 rounded-lg font-medium transition text-sm sm:text-base ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-bg relative py-12 sm:py-20">
        <div className="hero-grid" />
        <div className="hero-radial" />
        <div className="hero-vignette" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to land your next role in the Netherlands?
          </h2>
          <p className="text-blue-100/60 mb-6 sm:mb-8 text-sm sm:text-lg">
            Join 100+ expats who stopped guessing and started getting interviews.
          </p>
          <Link
            href="/auth"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-400 hover:to-blue-500 transition font-medium shadow-lg shadow-blue-500/25 border border-blue-400/30 text-base sm:text-lg"
          >
            Fix My CV Free
          </Link>
          <p className="text-blue-200/40 mt-3 text-xs sm:text-sm">
            No credit card required. Takes 30 seconds.
          </p>
        </div>
      </section>

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
