import { Link } from 'react-router-dom'
import { CalendarCheck, Sparkles, Mail, CheckCircle2, MailCheck, ArrowRight, MessageSquare } from 'lucide-react'

export default function SocialMedia() {
  return (
    <main className="pt-[76px]">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0B0E14] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Social media apps on smartphone representing automated content presence"
          />
        </div>
        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 120%, rgba(240,148,46,0.12) 0%, transparent 70%)' }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0942e]/10 border border-[#f0942e]/20 text-[#f0942e] text-sm font-medium tracking-wide uppercase mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" x2="12" y1="2" y2="15"/>
              </svg>
              Digital Marketing 2.0
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Active Visibility. <br /><span className="text-[#f0942e]">Zero Manual Friction.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
              Eliminate the overhead of manual posting. Azuretech synchronizes your presence across Google, LinkedIn, and Facebook while you focus on closing deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#f0942e] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] transition-all duration-300"
              >
                Start Automating
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Visual: Multi-channel Dashboard Mockup */}
          <div className="hidden md:block relative">
            <div className="absolute -inset-8 bg-[#f0942e]/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl p-8 rounded-xl border border-white/10 shadow-2xl">
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f0942e]/60"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/60"></div>
                  </div>
                  <div className="text-xs font-medium text-white/40 uppercase tracking-widest">Multi-Channel Sync Active</div>
                </div>
                {/* Channel Rows */}
                <div className="space-y-4">
                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-white/80">LinkedIn</span>
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Synced
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* Google */}
                  <div className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-white/80">Google</span>
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Synced
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-blue-700/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-white/80">Facebook</span>
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Synced
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-700 h-full rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Status row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/40">Campaign Status</span>
                  <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>All Channels Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES BENTO GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#161b22] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 text-[#547aa1] text-sm font-medium tracking-wide uppercase mb-4">
              What We Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Core Capabilities</h2>
            <div className="w-16 h-1 bg-[#f0942e] rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Automated Content Workflows (2-col, large) */}
            <div className="md:col-span-2 group relative overflow-hidden bg-white dark:bg-[#0f1218] p-10 rounded-xl hover:shadow-xl transition-all border border-gray-200 dark:border-white/10">
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-[#f0942e]/10 rounded-xl flex items-center justify-center mb-6 text-[#f0942e]">
                    <CalendarCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Automated Content Workflows</h3>
                  <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
                    Define your strategy once. Our system maps out 30 days of cross-platform visibility, ensuring your brand stays top-of-mind without a single manual click.
                  </p>
                </div>
                <div className="w-full md:w-64 h-48 bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                  <img
                    alt="Automated content workflow visualization"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: AI-Assisted Content Generation (1-col, blue accent) */}
            <div className="bg-[#395e8b] text-white p-10 rounded-xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-4">AI-Assisted Content Generation</h3>
                <p className="text-white/70 leading-relaxed">
                  Platform-specific copy, visual assets, and hashtags tailored for each channel's unique algorithm.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-sm font-medium flex items-center gap-2">
                LEARN MORE
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                </svg>
              </div>
            </div>

            {/* Feature 3: Marketing Automation (1-col) */}
            <div className="md:col-span-1 bg-white dark:bg-[#0f1218] p-10 rounded-xl border border-gray-200 dark:border-white/10 group hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#395e8b]/10 dark:bg-[#395e8b]/20 rounded-xl flex items-center justify-center mb-6 text-[#395e8b]">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Marketing Automation</h3>
              <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-6">
                Omni-channel engagement via automated email and SMS sequences that trigger based on user behavior.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#f0942e]" />
                  Drip Campaigns
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#f0942e]" />
                  Behavior Triggers
                </li>
              </ul>
            </div>

            {/* Large Visual CTA Card (2-col) */}
            <div className="md:col-span-2 relative h-[350px] rounded-xl overflow-hidden group">
              <img
                alt="Team collaboration in modern office"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0942e]/90 to-transparent flex flex-col justify-center p-12">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 max-w-md leading-tight">Ready to reclaim your time?</h3>
                <p className="text-white/80 mb-8 max-w-sm">Built for growing businesses that need consistent visibility — without a full-time marketing team.</p>
                <div>
                  <Link to="/contact" className="inline-block px-8 py-3 bg-white text-[#f0942e] rounded-lg font-medium hover:bg-orange-50 transition-colors">
                    Book Your Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL & SMS SECTION */}
      <section className="py-24 bg-[#395e8b] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f0942e] rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#f0942e] font-medium tracking-[0.3em] uppercase text-sm">Email &amp; SMS Automation</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Email &amp; SMS Beyond Templates.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hyper-Segmented Email */}
            <div className="p-10 md:p-12 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <div className="w-14 h-14 bg-[#f0942e]/20 rounded-xl flex items-center justify-center mb-8">
                <MailCheck className="w-7 h-7 text-[#f0942e]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Hyper-Segmented Email</h3>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">
                Dynamic content blocks that change based on individual user behavior. If they clicked a link, their next email evolves automatically.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Abandoned Cart Recovery
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Behavioral Drip Sequences
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Predictive Re-engagement
                </li>
              </ul>
            </div>
            {/* Urgent SMS Logic */}
            <div className="p-10 md:p-12 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <div className="w-14 h-14 bg-[#f0942e]/20 rounded-xl flex items-center justify-center mb-8">
                <MessageSquare className="w-7 h-7 text-[#f0942e]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Urgent SMS Logic</h3>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">
                SMS averages 98% open rates industry-wide. We make sure your campaigns hit at the right moment — timely, non-intrusive, and synced with your email flows.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Two-Way Conversational AI
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Instant Offer Distribution
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[#f0942e] shrink-0" />
                  Real-time Event Alerts
                </li>
              </ul>
            </div>
          </div>
          {/* CTA banner */}
          <div
            className="mt-16 p-10 md:p-12 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div>
              <h4 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">Ready to recover 40+ hours per month?</h4>
              <p className="text-white/50">Let's build your automated marketing infrastructure together.</p>
            </div>
            <Link
              to="/contact"
              className="bg-[#f0942e] text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] transition-all duration-300 whitespace-nowrap"
            >
              Book Your Tech Audit
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left flex-1">
              <div className="text-5xl md:text-6xl font-semibold text-[#f0942e] mb-2 tracking-tight">94%</div>
              <div className="text-slate-500 dark:text-gray-400 font-medium uppercase tracking-widest text-sm">Engagement Lift</div>
            </div>
            <div className="w-px h-16 bg-gray-200 dark:bg-white/10 hidden md:block"></div>
            <div className="text-center md:text-left flex-1">
              <div className="text-5xl md:text-6xl font-semibold text-[#395e8b] mb-2 tracking-tight">2.5k+</div>
              <div className="text-slate-500 dark:text-gray-400 font-medium uppercase tracking-widest text-sm">Campaigns Syncing</div>
            </div>
            <div className="w-px h-16 bg-gray-200 dark:bg-white/10 hidden md:block"></div>
            <div className="text-center md:text-left flex-1">
              <div className="text-5xl md:text-6xl font-semibold tracking-tight mb-2">20hr</div>
              <div className="text-slate-500 dark:text-gray-400 font-medium uppercase tracking-widest text-sm">Saved Weekly per User</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Client Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/8 rounded-2xl p-8 relative shadow-sm">
              <div className="w-full h-0.5 bg-[#f0942e] absolute top-0 left-0 right-0 rounded-t-2xl"></div>
              <div className="text-6xl text-[#f0942e] opacity-20 font-serif leading-none mb-4">"</div>
              <blockquote className="text-lg text-slate-700 dark:text-gray-200 leading-relaxed mb-6 font-light">
                We went from posting once a week manually to having 30 days of content scheduled in one afternoon. It completely changed how we show up online.
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#f0942e]/15 flex items-center justify-center text-[#f0942e] font-semibold text-sm">C</div>
                <cite className="not-italic">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Client Name</div>
                  <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest mt-0.5">Role, Company</div>
                </cite>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-white/8 rounded-2xl p-8 relative shadow-sm">
              <div className="w-full h-0.5 bg-[#f0942e] absolute top-0 left-0 right-0 rounded-t-2xl"></div>
              <div className="text-6xl text-[#f0942e] opacity-20 font-serif leading-none mb-4">"</div>
              <blockquote className="text-lg text-slate-700 dark:text-gray-200 leading-relaxed mb-6 font-light">
                Our email open rates jumped after the sequences were rebuilt. The behavioral triggers actually work — people get the right message at the right time.
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#f0942e]/15 flex items-center justify-center text-[#f0942e] font-semibold text-sm">C</div>
                <cite className="not-italic">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Client Name</div>
                  <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest mt-0.5">Role, Company</div>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-[#161b22] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#f0942e] uppercase tracking-wider mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Social Media FAQ</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What social platforms do you manage?',
                a: 'Google Business Profile, LinkedIn, Facebook, and Instagram. We focus on the platforms where your target audience actually spends time — not every platform for the sake of it. During onboarding we\'ll help you prioritize based on your industry and goals.',
              },
              {
                q: 'Do you create the content or do we?',
                a: 'We handle content creation — copy, visuals, and scheduling. Our AI-assisted workflows generate platform-specific posts based on your services, tone, and audience. You review and approve before anything goes live. Over time the system learns what performs and adjusts accordingly.',
              },
              {
                q: 'How does the AI content generation actually work?',
                a: 'We train the system on your brand voice, services, and audience before generating anything. It produces a full month of posts — formatted differently for each platform — which we review before scheduling. It\'s not generic AI output; it\'s content built around your specific business and goals.',
              },
              {
                q: 'What\'s included in the email and SMS automation?',
                a: 'Behavioral email sequences that trigger based on what contacts do — clicks, page visits, form fills. SMS campaigns for time-sensitive offers or follow-ups. Everything syncs so a contact\'s email history informs their SMS timing, and vice versa. No more disconnected blasts.',
              },
              {
                q: 'How soon before we see results?',
                a: 'Engagement typically improves within the first 30 days as consistent posting builds momentum. Email and SMS results are faster — most clients see open rate and click improvements within the first campaign. Organic social growth takes longer, usually 60–90 days to show compounding effects.',
              },
              {
                q: 'Can this work alongside our existing marketing tools?',
                a: 'Yes. We integrate with most major CRMs and marketing platforms — HubSpot, GoHighLevel, Mailchimp, ActiveCampaign, and others. We\'ll connect the automation to what you already have rather than replacing your stack unless there\'s a clear reason to.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-white dark:bg-[#0f1218] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-medium text-slate-900 dark:text-white list-none">
                  {q}
                  <span className="text-[#f0942e] ml-4 transition-transform duration-200 group-open:rotate-45 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-500 dark:text-gray-400 leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
