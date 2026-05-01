import { useState } from 'react'
import { Link } from 'react-router-dom'

const TABS = ['INTAKE', 'ANALYSIS', 'SYNCING', 'GROWTH'] as const
type Tab = typeof TABS[number]

const TAB_CONTENT: Record<Tab, { cards: { step: string; title: string; desc: string; accent: string }[] }> = {
  INTAKE: {
    cards: [
      { step: 'Step 1', title: 'Capture', desc: 'Multi-channel leads from Facebook, Google, and web forms are unified into a single, actionable stream.', accent: '#f0942e' },
      { step: 'Step 2', title: 'Enrich & Score', desc: 'AI automatically gathers company data and scores leads based on your ideal customer profile before entry.', accent: '#395e8b' },
      { step: 'Step 3', title: 'CRM Routing', desc: 'Leads are instantly assigned to the right closer in your CRM with full context pre-populated.', accent: '#395e8b' },
      { step: 'Step 4', title: 'Nurture', desc: 'Immediate personalized SMS and email follow-ups trigger to ensure no lead goes cold.', accent: 'featured' },
    ],
  },
  ANALYSIS: {
    cards: [
      { step: 'Step 1', title: 'Data Aggregation', desc: 'Consolidate scattered metrics from CRM, ad platforms, and web analytics into unified dashboards.', accent: '#f0942e' },
      { step: 'Step 2', title: 'Pattern Recognition', desc: 'AI surfaces hidden trends in your pipeline data that human analysts typically miss.', accent: '#395e8b' },
      { step: 'Step 3', title: 'Predictive Scoring', desc: 'Forecast deal outcomes and revenue timelines using historical conversion patterns.', accent: '#395e8b' },
      { step: 'Step 4', title: 'Actionable Alerts', desc: 'Automated notifications when KPIs deviate from targets or anomalies appear.', accent: 'featured' },
    ],
  },
  SYNCING: {
    cards: [
      { step: 'Step 1', title: 'Platform Bridging', desc: 'Bi-directional sync between your CRM, project management, and communication tools in real time.', accent: '#f0942e' },
      { step: 'Step 2', title: 'Data Normalization', desc: 'Automatically clean, deduplicate, and standardize records across all connected platforms.', accent: '#395e8b' },
      { step: 'Step 3', title: 'Event Propagation', desc: 'When a record updates in one system, every connected tool reflects the change instantly.', accent: '#395e8b' },
      { step: 'Step 4', title: 'Conflict Resolution', desc: 'Smart merge logic handles simultaneous edits and version conflicts without data loss.', accent: 'featured' },
    ],
  },
  GROWTH: {
    cards: [
      { step: 'Step 1', title: 'Revenue Attribution', desc: 'Track every dollar back to its source campaign, channel, and touchpoint with precision.', accent: '#f0942e' },
      { step: 'Step 2', title: 'Expansion Signals', desc: 'AI identifies upsell and cross-sell opportunities from customer behavior and usage patterns.', accent: '#395e8b' },
      { step: 'Step 3', title: 'Retention Automation', desc: 'Proactive churn prevention workflows trigger when engagement scores dip below thresholds.', accent: '#395e8b' },
      { step: 'Step 4', title: 'Scale Infrastructure', desc: 'Automatically provision and optimize workflows as your volume grows from hundreds to millions.', accent: 'featured' },
    ],
  },
}

export default function Automation() {
  const [activeTab, setActiveTab] = useState<Tab>('INTAKE')

  return (
    <>
      <main className="pt-[76px]">

        {/* ============ HERO ============ */}
        <section className="relative min-h-[85vh] flex items-center bg-[#0B0E14] overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Dark circuit board representing automated infrastructure" />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 120%, rgba(240,148,46,0.12) 0%, transparent 70%)' }}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0942e]/10 border border-[#f0942e]/20 text-[#f0942e] text-sm font-medium tracking-wide uppercase mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Business Process Automation
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Stop Wasting Time on <span className="text-[#f0942e]">Manual Work.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                We build automation that runs 24/7 — handling the repetitive work your team shouldn't be doing, while keeping every tool in your stack in sync.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#f0942e] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] transition-all duration-300">
                  Book Strategy Session
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden md:block relative">
              <div className="absolute -inset-8 bg-[#f0942e]/10 blur-3xl rounded-full"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl p-8 rounded-xl border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#f0942e] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-[#f0942e] to-transparent"></div>
                    <div className="w-36 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-white/60">Lead Capturing...</div>
                  </div>
                  <div className="flex items-center gap-4 justify-end">
                    <div className="w-36 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-white/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>CRM Synced
                    </div>
                    <div className="h-0.5 w-12 bg-gradient-to-l from-[#395e8b] to-transparent"></div>
                    <div className="w-12 h-12 rounded-lg bg-[#395e8b] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#395e8b]/80 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-[#395e8b]/80 to-transparent"></div>
                    <div className="w-36 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-white/60">
                      <span className="w-2 h-2 rounded-full bg-[#f0942e] mr-2"></span>Email Sent
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/40">Pipeline Status</span>
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>All Systems Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM SECTION ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gray-50 dark:bg-[#161b22] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-10 border-l-4 border-[#f0942e]">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Hours Lost to Repetitive Tasks.</h2>
                <p className="text-lg text-slate-500 dark:text-gray-400 leading-relaxed mb-8">
                  The average operations team spends <span className="font-semibold text-slate-700 dark:text-gray-200">30% of their week</span> on manual data entry, lead sorting, and tool-switching. This isn't just inefficient — it's a <span className="font-semibold text-[#f0942e]">critical bottleneck</span> preventing you from scaling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Human Error Risks', 'Slow Lead Response', 'Siloed Tech Stack', 'Team Burnout'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f0942e]/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0942e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="bg-white dark:bg-[#0f1218] rounded-xl p-8 border border-gray-200 dark:border-white/10 text-center md:text-left min-w-[200px]">
                  <div className="text-5xl md:text-6xl font-semibold text-[#f0942e] mb-2 tracking-tight">12+</div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 leading-snug">Hours saved per employee,<br />every single week.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CORE AUTOMATION ECOSYSTEMS (Tabbed) ============ */}
        <section id="automation-ecosystems" className="py-24 bg-gray-50 dark:bg-[#161b22] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 text-[#547aa1] text-xs font-medium tracking-wide uppercase mb-4">
                Intelligence Pipelines
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Core Automation Ecosystems</h2>
              <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
                Four automation systems built for the most common bottlenecks we see across sales, ops, marketing, and revenue.
              </p>
            </div>

            {/* Tab bar */}
            <div className="relative flex items-end justify-center gap-0 border-b border-gray-200 dark:border-white/10 mb-10 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex flex-col items-center gap-1 px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 whitespace-nowrap cursor-pointer bg-none border-none outline-none ${activeTab === tab ? 'text-[#f0942e]' : 'text-slate-400 dark:text-gray-500 hover:text-slate-300'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f0942e] rounded-t"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TAB_CONTENT[activeTab].cards.map((card, i) => (
                card.accent === 'featured' ? (
                  <div key={i} className="bg-[#f0942e] text-white p-8 rounded-xl flex flex-col h-full hover:shadow-lg hover:shadow-[#f0942e]/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </div>
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">{card.step}</div>
                    <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed flex-grow">{card.desc}</p>
                    <div className="mt-6">
                      <Link to="/contact" className="w-full py-3 bg-white text-[#f0942e] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300 text-sm">
                        Begin Journey
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-white/10 p-8 rounded-xl flex flex-col h-full hover:shadow-lg transition-all duration-300 group" style={{ '--hover-border': card.accent } as React.CSSProperties}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 flex-shrink-0" style={{ backgroundColor: card.accent + '1a' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: card.accent }}>{card.step}</div>
                    <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed flex-grow">{card.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ============ SYSTEMS APPROACH (Bento Grid) ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Systems Approach</h2>
              <div className="w-20 h-1 bg-[#f0942e] rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[#395e8b] font-medium tracking-wide text-xs uppercase mb-3 block">Process Design</span>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">Workflow Mapping</h3>
                    <p className="text-slate-500 dark:text-gray-400 max-w-lg leading-relaxed">
                      Before we build, we audit. We map every touchpoint in your current manual process to find hidden inefficiencies and data leaks.
                    </p>
                  </div>
                  <div className="mt-8">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" className="w-full h-48 object-cover rounded-lg" alt="Professional reviewing workflow automation on multiple screens" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-[#f0942e] text-white rounded-xl p-8 md:p-10 flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6 opacity-90"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                <h3 className="text-2xl font-semibold mb-4">Custom Automations</h3>
                <p className="text-white/80 text-sm leading-relaxed">Tailored scripts and low-code solutions that handle complex logic where standard tools fail.</p>
              </div>
              <div className="md:col-span-4 bg-[#395e8b] text-white rounded-xl p-8 md:p-10 flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6 opacity-90"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m10 10-2 2 2 2" /><path d="m14 14 2-2-2-2" /></svg>
                <h3 className="text-2xl font-semibold mb-4">Deep Integrations</h3>
                <p className="text-white/80 text-sm leading-relaxed">Connecting your CRM, ERP, and marketing tools via API to create a "Single Source of Truth."</p>
              </div>
              <div className="md:col-span-8 bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Ongoing Optimization</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                      Automation isn't "set and forget." We monitor flows, adjust for new tool updates, and refine logic as you scale.
                    </p>
                    <button className="mt-6 text-[#f0942e] font-medium flex items-center gap-2 hover:gap-3 text-sm transition-all cursor-pointer">
                      Learn About Maintenance
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                    </button>
                  </div>
                  <div className="bg-white dark:bg-[#0f1218] border border-gray-200 dark:border-white/10 p-5 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Uptime Performance</span>
                      <span className="text-xs font-semibold text-[#f0942e]">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-[#f0942e] h-full rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-[10px] text-slate-400 dark:text-gray-500">Last 30 days</span>
                      <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>Operational
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS SECTION ============ */}
        <section className="py-24 md:py-32 bg-[#0B0E14] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(240,148,46,0.06) 0%, transparent 70%)' }}></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
              <div><div className="text-5xl md:text-6xl font-bold text-[#f0942e] mb-3">50+</div><div className="text-sm text-gray-400 uppercase tracking-widest">Hours saved per client / month</div></div>
              <div><div className="text-5xl md:text-6xl font-bold text-[#f0942e] mb-3">400+</div><div className="text-sm text-gray-400 uppercase tracking-widest">Workflows built and deployed</div></div>
              <div><div className="text-5xl md:text-6xl font-bold text-[#f0942e] mb-3">3 wks</div><div className="text-sm text-gray-400 uppercase tracking-widest">Average time from call to live</div></div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="py-24 md:py-32 bg-white dark:bg-[#0f1218] relative overflow-hidden transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Client Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '"We stopped losing leads between our CRM and email tool. Everything syncs automatically now — it just works."',
                '"The reporting we used to build manually every Monday now runs itself. That alone saved us 3 hours a week."',
              ].map((quote) => (
                <div key={quote} className="bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/8 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-none relative">
                  <div className="text-[80px] leading-none text-[#f0942e] opacity-20 absolute top-4 left-6 select-none font-serif">"</div>
                  <blockquote className="text-lg text-slate-700 dark:text-gray-200 leading-relaxed mb-8 pt-6 font-light">{quote}</blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/8">
                    <div className="w-9 h-9 rounded-full bg-[#f0942e]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#f0942e]">C</span>
                    </div>
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
        <section className="py-20 px-6 bg-white dark:bg-[#0f1218]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What is business process automation?', a: 'Business process automation (BPA) uses software to handle repetitive, rule-based tasks that would otherwise require manual effort — things like data entry, follow-up emails, lead routing, invoice generation, and report building. The goal is to free your team for higher-value work while reducing errors and delays.' },
                { q: 'How long does it take to build and deploy an automation?', a: 'Most single-workflow automations are live within 1–2 weeks. More complex multi-system integrations typically run 3–5 weeks. We work in phases — you see progress quickly and can provide feedback before full deployment.' },
                { q: 'Do we need to change our existing tools?', a: "Usually not. We connect to what you already use — HubSpot, GoHighLevel, Salesforce, Gmail, Slack, Notion, Google Sheets, and hundreds more. We build around your stack, not on top of it." },
                { q: 'What happens after the automation is built?', a: "We monitor all workflows for 30 days post-launch. After that, you have the option to retain us for ongoing management or take over with full documentation. Either way, nothing goes dark without your knowledge." },
              ].map(({ q, a }) => (
                <details key={q} className="border border-slate-200 dark:border-white/8 rounded-xl p-5">
                  <summary className="flex justify-between items-center font-semibold text-slate-900 dark:text-white cursor-pointer list-none">
                    {q}
                    <span className="text-[#f0942e] text-xl font-light ml-4 shrink-0 select-none">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-24 bg-gray-50 dark:bg-[#161b22] transition-colors duration-300 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#8e4e00] to-[#f0942e] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#f0942e]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">Ready to stop doing it manually?</h2>
              <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's map out what automation can do for your business — no sales pitch, just an honest audit of what's costing you time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-white text-[#f0942e] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                  Book Strategy Session
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link to="/contact" className="border-2 border-white/40 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center">
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
