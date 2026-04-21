import { Link } from 'react-router-dom'
import { MessageSquare, Mic, Map, CalendarClock, Brain, Send, ArrowRight, CheckCircle2, ArrowUpRight, Zap } from 'lucide-react'

export default function AIIntegration() {
  return (
    <>
      <main className="pt-[76px]">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-white dark:bg-[#0f1218] transition-colors duration-300 pt-40 pb-20 lg:pt-48 lg:pb-28">
          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
            style={{
              backgroundSize: '40px 40px',
              backgroundImage: 'linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)',
              maskImage: 'linear-gradient(to bottom,black 40%,transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom,black 40%,transparent 100%)',
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 dark:border-[#395e8b]/30 text-[#547aa1] text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0942e] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0942e]"></span>
                  </span>
                  AI Integration &amp; Consulting
                </div>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
                  Intelligent <span className="text-[#f0942e]">Autonomy</span> for Your Operations.
                </h1>
                <p className="text-lg text-slate-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
                  Scale your business with enterprise-grade AI systems. We bridge the gap between complex neural networks and seamless operational efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="text-white bg-[#f0942e] hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] font-medium rounded-lg text-base px-8 py-4 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Book Your Free AI Readiness Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#f0942e]/10 rounded-full blur-3xl group-hover:bg-[#f0942e]/20 transition-all duration-700"></div>
                <div className="relative bg-white dark:bg-[#161b22] rounded-3xl p-3 shadow-xl dark:shadow-none border border-gray-200 dark:border-white/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80"
                    alt="AI system interface on laptop in dark environment"
                    className="rounded-2xl w-full h-[420px] lg:h-[500px] object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                  />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/70 dark:bg-[#161b22]/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#f0942e] flex items-center justify-center text-white flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-slate-900 dark:text-white">Azuretech Core Engine</div>
                        <div className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-widest font-medium">Active Integration Layer</div>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f0942e] rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CORE OFFERINGS - BENTO GRID ============ */}
        <section className="bg-gray-50 dark:bg-[#161b22] transition-colors duration-300 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">What We Build — and Why It Works</h2>
                <p className="text-slate-500 dark:text-gray-400 text-lg">
                  We don't bolt AI onto broken processes — we integrate it where it creates the most impact: lead qualification, customer support, content, and outreach.
                </p>
              </div>
              <div className="h-px flex-1 bg-gray-200 dark:bg-white/10 mx-8 hidden lg:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* AI Chatbots — 7 col */}
              <div className="md:col-span-7 bg-white dark:bg-[#0f1218] border border-gray-200 dark:border-white/10 rounded-2xl p-10 flex flex-col justify-between group hover:shadow-xl dark:hover:shadow-none transition-all duration-500">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#f0942e]/10 mb-8 flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-[#f0942e]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">AI Chatbots</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                    24/7 lead qualification systems that convert visitors into scheduled meetings while you sleep. Handles objections, qualifies leads, and books calls — without human handoff.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm font-medium text-[#395e8b] dark:text-[#547aa1]">
                      <CheckCircle2 className="w-4 h-4" /> Instant Response
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-[#395e8b] dark:text-[#547aa1]">
                      <CheckCircle2 className="w-4 h-4" /> Multi-Language Support
                    </li>
                  </ul>
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#f0942e] group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Voice AI Agents — 5 col */}
              <div className="md:col-span-5 bg-[#395e8b] text-white rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/15 mb-8 flex items-center justify-center">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Voice AI Agents</h3>
                  <p className="text-white/75 text-lg mb-8 leading-relaxed">
                    Human-grade receptionist automation that manages inbound calls, scheduling, and basic support with zero latency.
                  </p>
                </div>
                <Link to="/contact" className="bg-white text-[#395e8b] px-6 py-3 rounded-xl font-medium w-full hover:bg-white/90 transition-colors text-center inline-block">
                  Explore Voice Tech
                </Link>
              </div>

              {/* Strategic AI Roadmap — full width */}
              <div className="md:col-span-12 bg-white dark:bg-[#0f1218] border border-gray-200 dark:border-white/10 rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#f0942e] font-medium text-sm tracking-widest uppercase mb-4 block">Guidance &amp; Strategy</span>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Strategic AI Roadmap</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                    We audit your current operations, identify the highest-ROI opportunities, and build a phased implementation plan — no buzzwords, no vendor lock-in.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-[#161b22] p-6 rounded-xl border border-gray-100 dark:border-white/5">
                      <div className="text-3xl font-semibold text-[#f0942e] mb-1">90%</div>
                      <div className="text-xs text-slate-500 dark:text-gray-500 uppercase font-medium tracking-wide">Cost Reduction</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#161b22] p-6 rounded-xl border border-gray-100 dark:border-white/5">
                      <div className="text-3xl font-semibold text-[#395e8b] mb-1">4.5x</div>
                      <div className="text-xs text-slate-500 dark:text-gray-500 uppercase font-medium tracking-wide">Throughput Gain</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                    alt="Multiple monitors displaying real-time data and AI system outputs"
                    className="rounded-2xl h-80 w-full object-cover shadow-lg"
                  />
                  <div className="absolute top-4 right-4 bg-[#f0942e] text-white p-3 rounded-xl shadow-xl">
                    <Map className="w-7 h-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OMNICHANNEL VISIBILITY (DARK BG) ============ */}
        <section className="py-24 bg-[#0B0E14] text-white px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f0942e] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#395e8b] rounded-full blur-[150px]"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#f0942e] font-medium tracking-[0.25em] uppercase text-sm">Marketing Automation Core</span>
              <h2 className="text-3xl md:text-5xl font-semibold mt-4 tracking-tight">AI-Driven Marketing, On Autopilot</h2>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                Extend your operational autonomy to the front lines of digital growth through synchronized marketing intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <CalendarClock className="w-7 h-7 text-[#f0942e]" />, title: 'Automated Content Workflows', desc: 'Our AI core maps out 30 days of cross-platform visibility, ensuring your brand stays top-of-mind across Google, LinkedIn, and Facebook without manual intervention.' },
                { icon: <Brain className="w-7 h-7 text-[#f0942e]" />, title: 'AI-Assisted Generation', desc: 'Leverage high-performing copy and visual assets tailored specifically for each platform\'s unique algorithm to maximize engagement lift by up to 94%.' },
                { icon: <Send className="w-7 h-7 text-[#f0942e]" />, title: 'Email & SMS Logic', desc: 'Move beyond templates with hyper-segmented behavioral logic and urgent SMS funnels designed to drive conversion through real-time event alerts.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-10 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all duration-500">
                  <div className="w-14 h-14 bg-[#f0942e]/15 rounded-xl flex items-center justify-center mb-8">{icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-white/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS BAR ============ */}
        <section className="py-16 bg-[#0B0E14] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">50+</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">AI Systems Deployed</div></div>
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">300+</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">Hours Automated / Month</div></div>
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">3 wks</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">Avg. Deployment Time</div></div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Client Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'We were spending 4 hours a day qualifying leads manually. Now the AI handles it and only passes us meetings worth taking.',
                'The AI roadmap session alone was worth it — we finally knew exactly what to build and in what order. No more guessing.',
              ].map((quote) => (
                <div key={quote} className="bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/8 rounded-2xl p-8 relative shadow-sm">
                  <div className="w-full h-0.5 bg-[#f0942e] absolute top-0 left-0 right-0 rounded-t-2xl"></div>
                  <div className="text-6xl text-[#f0942e] opacity-20 font-serif leading-none mb-4">"</div>
                  <blockquote className="text-lg text-slate-700 dark:text-gray-200 leading-relaxed mb-6 font-light">{quote}</blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="w-9 h-9 rounded-full bg-[#f0942e]/15 flex items-center justify-center text-[#f0942e] font-semibold text-sm">C</div>
                    <cite className="not-italic">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Client Name</div>
                      <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest mt-0.5">Role, Company</div>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="py-24 bg-slate-50 dark:bg-[#161b22] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">AI Integration FAQ</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: 'What does AI integration actually mean for a small business?', a: 'It means connecting AI tools to the systems you already use — your CRM, email, calendar, website — so they work together automatically. You stop doing repetitive tasks manually, and the AI handles routing, follow-up, qualification, or content creation in the background.' },
                { q: 'How is this different from just using ChatGPT?', a: 'ChatGPT is a tool you interact with manually. AI integration means building systems that run on their own — triggering automatically when a lead fills out a form, an email arrives, or a deal moves in your CRM. No copy-pasting, no manual prompts.' },
                { q: 'What tools do you integrate with?', a: 'Most major business tools — HubSpot, GoHighLevel, Salesforce, Gmail, Outlook, Slack, Notion, Airtable, Google Sheets, WhatsApp, Calendly, and more. If it has an API or works with Zapier or Make, we can connect it to an AI layer.' },
                { q: 'How long does an AI integration project typically take?', a: 'Most projects go live in 2–4 weeks. A focused chatbot or lead qualification system can be deployed in under 2 weeks. Larger multi-system integrations with custom AI logic typically run 4–6 weeks depending on complexity and the number of tools involved.' },
                { q: 'Do we need technical staff to maintain the systems you build?', a: 'No. We build everything to run without a dedicated technical team. We handle ongoing monitoring and can adjust systems as your business grows. Most clients manage day-to-day use through simple dashboards with no coding required.' },
                { q: "What's the first step?", a: "Book a free AI Readiness Audit. We'll spend 30 minutes reviewing your current workflows, identify 2–3 high-impact automation opportunities, and tell you exactly what we'd build and why — before you commit to anything." },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-white dark:bg-[#0f1218] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                    {q}
                    <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="px-6 py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-[#0B0E14] rounded-[2rem] p-12 md:p-24 overflow-hidden text-center">
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundSize: '32px 32px', backgroundImage: 'radial-gradient(circle at 2px 2px,#e0e3e7 1px,transparent 0)' }}></div>
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f0942e] rounded-full blur-[120px] opacity-20"></div>
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#395e8b] rounded-full blur-[120px] opacity-20"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Ready to Automate Your Competitive Edge?</h2>
                <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed">
                  Our team of AI engineers is ready to audit your current workflow and design a custom integration plan. No fluff, just results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="text-white bg-[#f0942e] hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] font-medium rounded-xl text-lg px-10 py-4 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Book Your Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-medium text-lg hover:bg-white/20 transition-all duration-300 inline-block"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
