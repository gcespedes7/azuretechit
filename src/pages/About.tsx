import { Link } from 'react-router-dom'
import { ShieldCheck, Zap, Sparkles, TrendingUp, Crown } from 'lucide-react'

export default function About() {
  return (
    <>
      <main className="pt-24">

        {/* ============ HERO SECTION ============ */}
        <section className="relative overflow-hidden bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 text-[#547aa1] text-xs font-semibold uppercase tracking-widest mb-6">
                  About Azuretech
                </span>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-[#ebebeb] mb-8 leading-[1.1]">
                  Technical Operator.<br />
                  <span className="text-[#f0942e]">Business Strategist.</span>
                </h1>
                <p className="text-lg text-slate-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
                  Azuretech bridges the gap between raw technical capability and high-level commercial outcomes. We don't just build — we engineer growth through operational precision.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-[#f0942e] font-medium">
                    <ShieldCheck className="w-5 h-5" />
                    <span>ROI-First Framework</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#395e8b] dark:text-[#547aa1] font-medium">
                    <Zap className="w-5 h-5" />
                    <span>Rapid Deployment</span>
                  </div>
                </div>
              </div>
              <div className="relative" style={{ transitionDelay: '0.15s' }}>
                <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop&q=80"
                    alt="Modern workspace with clean minimalist design"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#f0942e]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#395e8b]/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FOUNDER SECTION ============ */}
        <section className="bg-gray-50 dark:bg-[#161b22] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-[#ebebeb]">The Architect's Origin</h2>
              <div className="w-20 h-1.5 bg-[#f0942e] rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Founder Image */}
              <div className="md:col-span-4 rounded-xl overflow-hidden bg-white dark:bg-[#0f1218] shadow-sm h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80"
                  alt="Giovanni Cespedes, Founder of Azuretech"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Story Card */}
              <div className="md:col-span-8 p-10 md:p-12 bg-white dark:bg-[#0f1218] border border-gray-200 dark:border-white/10 rounded-xl shadow-sm flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-6 text-slate-900 dark:text-[#ebebeb]">Giovanni Cespedes</h3>
                <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed mb-6 italic border-l-4 border-[#f0942e] pl-5">
                  "Innovation without operational context is just overhead."
                </p>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-8">
                  With a unique background spanning <strong className="text-slate-700 dark:text-gray-200">Public Adjusting, IT infrastructure, and Full-stack Development</strong>, Giovanni built Azuretech on the premise that businesses need more than just code — they need systems that respect the bottom line. His journey through high-stakes adjusting taught him the value of precision; his years in IT taught him the power of scale.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-[#f0942e] font-semibold text-3xl mb-1">10+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-[#f0942e] font-semibold text-3xl mb-1">50+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500">Enterprises Scaled</div>
                  </div>
                  <div>
                    <div className="text-[#f0942e] font-semibold text-3xl mb-1">98%</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PHILOSOPHY SECTION ============ */}
        <section className="relative py-32 md:py-40 overflow-hidden bg-[#0B0E14] text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            ></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f0942e]/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#395e8b]/5 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#f0942e]/30 text-[#f0942e] text-xs font-semibold tracking-widest uppercase mb-12">
              The Brand Ethos
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-12 leading-[1] max-w-5xl mx-auto">
              Our Philosophy: <br />
              <span className="text-[#f0942e]">Simplification</span> over Complexity.
            </h2>
            <div className="flex justify-center">
              <p className="max-w-3xl text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                We believe that the most sophisticated technical solutions are those that feel invisible. Our brand promise is to strip away the technical noise, exposing the lean, high-performing core of your business operations to enable effortless scale.
              </p>
            </div>
          </div>
        </section>

        {/* ============ CORE PRINCIPLES ============ */}
        <section className="bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-[#ebebeb]">Core Principles</h2>
              <p className="text-slate-500 dark:text-gray-400">The non-negotiable standards of Azuretech.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Simplification */}
              <div className="p-10 rounded-xl bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#f0942e]/10 flex items-center justify-center text-[#f0942e] mb-8 group-hover:bg-[#f0942e] group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-[#ebebeb]">Simplification</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                  We strip away the noise. Complexity is a liability. Our goal is to create lean, high-performing systems that anyone on your team can manage.
                </p>
              </div>
              {/* ROI-First */}
              <div className="p-10 rounded-xl bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group text-center flex flex-col items-center" style={{ transitionDelay: '0.1s' }}>
                <div className="w-16 h-16 rounded-2xl bg-[#f0942e]/10 flex items-center justify-center text-[#f0942e] mb-8 group-hover:bg-[#f0942e] group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-[#ebebeb]">ROI-First</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                  If it doesn't move the needle, we don't build it. Every line of code and every strategic shift is measured against your bottom-line performance.
                </p>
              </div>
              {/* Client-First Partnership */}
              <div className="p-10 rounded-xl bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group text-center flex flex-col items-center" style={{ transitionDelay: '0.2s' }}>
                <div className="w-16 h-16 rounded-2xl bg-[#f0942e]/10 flex items-center justify-center text-[#f0942e] mb-8 group-hover:bg-[#f0942e] group-hover:text-white transition-all duration-300">
                  <Crown className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-[#ebebeb]">Client-First Partnership</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                  We work as an extension of your team, not just a vendor you invoice. Proactive communication, deep integration, and a long-term commitment to what we build together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Working With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="space-y-3">
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  Do you work with small businesses or only larger companies?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  Primarily small to mid-sized businesses — typically 2 to 50 employees — that are growing fast enough to feel the pain of manual processes but don't have a full technical team in-house. We're not the right fit for enterprise procurement cycles, but we're exactly right for founders and operators who need things built and working quickly.
                </div>
              </details>
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  What industries do you specialize in?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  We've worked across professional services, real estate, e-commerce, healthcare, law, and service-based businesses. The automation problems are remarkably similar across industries — manual follow-up, disconnected tools, repetitive reporting — so we adapt quickly. We're not niche-locked.
                </div>
              </details>
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  How do you price your services?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  Project-based for builds (websites, automation systems, AI integrations) and retainer-based for ongoing management and support. We scope everything clearly upfront so you know the number before any work starts. No surprise invoices, no scope creep billed without conversation.
                </div>
              </details>
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  Do you work remotely or only in Miami?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  Fully remote-capable. We're headquartered in Miami but work with clients across the US. All discovery, strategy, and project management happens over calls and async communication — we've found it's often more efficient than on-site meetings.
                </div>
              </details>
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  What makes Azuretech different from a typical agency?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  Most agencies specialize in one thing — design, or development, or marketing. We sit at the intersection of all three plus operations and AI. That means we see the full picture: how a website connects to your CRM, how your CRM connects to your email flows, and where manual work is costing you time and money. We don't just deliver a file — we build systems.
                </div>
              </details>
              <details className="group bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  What does an engagement typically look like from start to finish?
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  It starts with a free Discovery Audit — a 30–45 minute call where we map your current workflows and identify the highest-impact opportunities. From there, we scope the project, agree on deliverables and timeline, build in phases with regular check-ins, and hand off with documentation and a walkthrough. Most clients are live within 3–5 weeks.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ============ CTA SECTION ============ */}
        <section className="bg-gray-50 dark:bg-[#161b22] transition-colors duration-300 py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#8e4e00] to-[#f0942e] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#f0942e]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">Ready to evolve your operations?</h2>
              <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's map out what automation can do for your business — no sales pitch, just an honest look at what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-[#f0942e] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Get Started Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/40 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                  Book a Strategy Session
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
