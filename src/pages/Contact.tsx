import { useState } from 'react'
import {
  Search,
  MapPin,
  Zap,
  Languages,
  Brain,
  Layers,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Mail,
  Map,
  ExternalLink,
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  website: string
  goal: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', website: '', goal: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-primary font-semibold">Message sent! We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <>
      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section
        className="transition-colors duration-300 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--color-background, #fff)',
          backgroundImage:
            'radial-gradient(ellipse 50% 60% at 15% 20%, rgba(240,148,46,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 85% 30%, rgba(57,94,139,0.10) 0%, transparent 70%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 dark:border-[#395e8b]/30 text-[#547aa1] text-sm font-medium">
              <Search className="w-3.5 h-3.5" />
              Discovery Audit
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
              No Commitments. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0942e] to-[#e28b2b]">
                Just Clarity.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              Uncover hidden inefficiencies in your business workflow. Our expert team provides a comprehensive roadmap
              to scale through intelligent automation.
            </p>

            {/* Trust Signal Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-[#161b22] rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
                <MapPin className="w-4 h-4 text-[#f0942e]" />
                <span className="text-sm font-medium">Florida Based</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-[#161b22] rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
                <Zap className="w-4 h-4 text-[#f0942e]" />
                <span className="text-sm font-medium">100% Custom</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-[#161b22] rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
                <Languages className="w-4 h-4 text-[#f0942e]" />
                <span className="text-sm font-medium">Bilingual Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FORM SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#161b22] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Book Your Free<br />Automation Audit
                </h2>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                  Stop guessing where your bottlenecks are. In 45 minutes, we'll map your current processes and
                  identify the high-impact automation opportunities that will save you 10+ hours a week.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {/* Process Mapping */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#f0942e]/10 dark:bg-[#f0942e]/15 flex items-center justify-center rounded-lg">
                    <Brain className="w-5 h-5 text-[#f0942e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Process Mapping</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                      We visualize your entire operation from lead to delivery.
                    </p>
                  </div>
                </div>
                {/* Tech Stack Review */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#395e8b]/10 dark:bg-[#395e8b]/15 flex items-center justify-center rounded-lg">
                    <Layers className="w-5 h-5 text-[#547aa1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">Tech Stack Review</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                      A deep dive into your current tools to ensure seamless integration.
                    </p>
                  </div>
                </div>
                {/* ROI Projection */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">ROI Projection</h4>
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                      Estimated cost savings and time recovery for each proposed solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Form UI */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#1c2128] rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-white/10">
                {/* Form Header / Progress Bar */}
                <div className="bg-gray-50 dark:bg-[#161b22] px-6 sm:px-8 py-5 border-b border-gray-200 dark:border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-[#f0942e] uppercase tracking-widest">Step 1 of 3</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">Company Information</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#f0942e] w-1/3 h-full rounded-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Form Body */}
                <form className="p-6 sm:p-8 space-y-6" onSubmit={handleSubmit}>
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300 block">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f0942e]/50 focus:border-[#f0942e]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300 block">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f0942e]/50 focus:border-[#f0942e]"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-slate-700 dark:text-gray-300 block">
                      Business Website
                    </label>
                    <input
                      id="website"
                      type="url"
                      name="website"
                      placeholder="https://yourcompany.com"
                      value={form.website}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f0942e]/50 focus:border-[#f0942e]"
                    />
                  </div>

                  {/* Primary Goal Radio Buttons */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-700 dark:text-gray-300 block">
                      Primary Goal for Automation
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { value: 'customer-support', label: 'Customer Support' },
                        { value: 'lead-generation', label: 'Lead Generation' },
                        { value: 'data-entry', label: 'Data Entry' },
                        { value: 'internal-workflows', label: 'Internal Workflows' },
                      ].map(({ value, label }) => (
                        <label
                          key={value}
                          className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 group ${
                            form.goal === value
                              ? 'border-[#f0942e] bg-[#f0942e]/5 dark:bg-[#f0942e]/10'
                              : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-[#f0942e]/50 hover:bg-[#f0942e]/5 dark:hover:bg-[#f0942e]/5'
                          }`}
                        >
                          <input
                            type="radio"
                            name="goal"
                            value={value}
                            checked={form.goal === value}
                            onChange={handleChange}
                            className="w-4 h-4 flex-shrink-0 accent-[#f0942e]"
                          />
                          <span
                            className={`text-sm font-medium transition-colors ${
                              form.goal === value
                                ? 'text-[#f0942e]'
                                : 'text-slate-700 dark:text-gray-300 group-hover:text-[#f0942e]'
                            }`}
                          >
                            {label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#f0942e] hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm cursor-pointer"
                    >
                      Continue to Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-slate-400 dark:text-gray-500 mt-5 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Your data is 100% secure and will never be shared.
                    </p>
                  </div>
                </form>
              </div>

              {/* Testimonial */}
              <div className="mt-6 p-5 sm:p-6 bg-slate-50 dark:bg-[#161b22] rounded-xl border border-slate-200 dark:border-white/10 relative">
                <div className="w-full h-0.5 bg-[#f0942e] absolute top-0 left-0 right-0 rounded-t-xl"></div>
                <div className="text-4xl text-[#f0942e] opacity-20 font-serif leading-none mb-3">"</div>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4 font-light italic">
                  The audit alone was worth it. We walked out knowing exactly where we were losing time and what to fix
                  first.
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#f0942e]/15 flex items-center justify-center text-[#f0942e] font-semibold text-xs">
                    C
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Client Name</div>
                    <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest mt-0.5">
                      Role, Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CONTACT CARDS GRID */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#0f1218] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Chat With Us */}
            <div className="p-8 bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-white/10 hover:shadow-lg hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#f0942e]/10 dark:bg-[#f0942e]/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#f0942e]/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#f0942e]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Chat With Us</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-3 leading-relaxed">
                Need a quick answer? Speak with our automation specialists right now.
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-5">(786) 762-3499</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#f0942e] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Open Live Chat
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Directly */}
            <div className="p-8 bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-white/10 hover:shadow-lg hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#f0942e]/10 dark:bg-[#f0942e]/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#f0942e]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#f0942e]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Email Directly</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-5 leading-relaxed">
                Send us your detailed brief or RFP and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@azuretech.ai"
                className="inline-flex items-center gap-2 text-[#f0942e] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                hello@azuretech.ai
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Our Base */}
            <div className="p-8 bg-white dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-white/10 hover:shadow-lg hover:border-[#f0942e]/30 dark:hover:border-[#f0942e]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#f0942e]/10 dark:bg-[#f0942e]/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#f0942e]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#f0942e]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Our Base</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-5 leading-relaxed">
                Proudly headquartered in Miami, Florida. Serving businesses globally.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#f0942e] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                View Location
                <Map className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-[#161b22] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Before You Book</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Audit FAQ</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Is the Discovery Audit really free?',
                a: "Yes, completely. No credit card, no commitment. It's a 30–45 minute working session where we look at your actual workflows and identify what's costing you the most time. You'll leave with actionable findings whether or not we end up working together.",
              },
              {
                q: 'What happens after the audit?',
                a: "We send you a written summary of what we found and a recommended scope of work with clear deliverables and pricing. If it makes sense to move forward, we kick off within a week. If it doesn't, you still have the audit findings — no pressure either way.",
              },
              {
                q: 'How long does the audit take?',
                a: "The call is 30–45 minutes. We'll ask about your current tools, your team's daily workflows, and where the most friction is. Come prepared to walk us through a typical day — that's usually where the biggest opportunities are hiding.",
              },
              {
                q: 'Do you work with businesses outside Miami?',
                a: "Yes. We're based in Miami but work with clients across the US entirely remotely. Everything from discovery to delivery is handled over video calls and async communication. Location has never been a barrier for any of our projects.",
              },
              {
                q: 'Is there a minimum project size?',
                a: "We don't publish a hard minimum, but our projects typically start around $1,500 for focused automation builds and go up from there depending on scope. The audit helps us both figure out whether the investment makes sense for where you are right now.",
              },
              {
                q: 'How quickly can you get started after we decide to move forward?',
                a: "Usually within 5–7 business days of signing off. We'll confirm scope, set up a shared project workspace, and schedule the kickoff call. For time-sensitive projects we can often move faster — just flag it when you book.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white dark:bg-[#0f1218] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  {q}
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
