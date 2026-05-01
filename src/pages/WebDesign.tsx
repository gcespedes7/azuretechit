import { Link } from 'react-router-dom'
import { RefreshCw, Gauge, Code2, Layout, Database, Globe, BarChart3, ShieldCheck, CloudOff, AlertTriangle, X, Lock, TrendingUp, Zap, Check } from 'lucide-react'

export default function WebDesign() {
  return (
    <>
      <main className="pt-[76px]">

        {/* ============ HERO SECTION ============ */}
        <section className="relative min-h-[90vh] flex items-center bg-[#0B0E14] overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"
              className="w-full h-full object-cover"
              alt="Web design mockup and interface design on screen"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 120%, rgba(240,148,46,0.12) 0%, transparent 70%)' }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0942e]/10 border border-[#f0942e]/20 text-[#f0942e] text-sm font-medium tracking-wide uppercase mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                Digital Infrastructure
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Is your website an <span className="text-[#f0942e] italic">asset</span> or an expense?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                Most websites are just the tip of the iceberg—pretty but disconnected. We build conversion-driven digital infrastructure that integrates deep beneath the surface.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#f0942e] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] transition-all duration-300">
                  Convert Visitors Into Clients
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <a href="#evolution" className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  See the Difference
                </a>
              </div>
            </div>

            {/* Iceberg Visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-8 bg-[#395e8b]/10 blur-3xl rounded-full"></div>
                <svg
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none"
                  style={{ top: '-28px', width: '340px', height: '480px', zIndex: 0, opacity: 0.38 }}
                  viewBox="0 0 340 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="icebergTipGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#eaf5ff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#b8d8f0" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="icebergBodyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7aaed4" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#395e8b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1e3558" stopOpacity="0.85" />
                    </linearGradient>
                    <linearGradient id="waterLineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#395e8b" stopOpacity="0" />
                      <stop offset="30%" stopColor="#7aaed4" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#b8d8f0" stopOpacity="0.9" />
                      <stop offset="70%" stopColor="#7aaed4" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#395e8b" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="tipFacetGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#c8e8ff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <polygon points="170,4 220,82 248,118 226,148 170,132 114,148 92,118 120,82" fill="url(#icebergTipGrad)" />
                  <polygon points="170,4 120,82 92,118 114,148 170,132" fill="#cce4f7" fillOpacity="0.6" />
                  <polygon points="170,4 220,82 248,118 226,148 170,132" fill="url(#tipFacetGrad)" fillOpacity="0.5" />
                  <polygon points="170,4 145,52 168,68 185,54" fill="#ffffff" fillOpacity="0.55" />
                  <rect x="0" y="148" width="340" height="7" fill="url(#waterLineGrad)" />
                  <rect x="20" y="158" width="300" height="2" rx="1" fill="#7aaed4" fillOpacity="0.35" />
                  <polygon points="92,148 114,148 170,132 226,148 248,148 278,220 295,300 280,380 240,440 200,470 170,478 140,470 100,440 60,380 44,300 60,220" fill="url(#icebergBodyGrad)" />
                  <polygon points="92,148 60,220 44,300 60,380 100,440 140,470 170,478 170,132 114,148" fill="#2d5078" fillOpacity="0.4" />
                  <polygon points="248,148 278,220 295,300 280,380 240,440 200,470 170,478 170,132 226,148" fill="#7aaed4" fillOpacity="0.18" />
                  <line x1="170" y1="148" x2="155" y2="260" stroke="#b8d8f0" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="155" y1="260" x2="175" y2="370" stroke="#b8d8f0" strokeWidth="1" strokeOpacity="0.25" />
                  <line x1="210" y1="180" x2="230" y2="310" stroke="#7aaed4" strokeWidth="1" strokeOpacity="0.3" />
                </svg>

                <div className="relative" style={{ zIndex: 1 }}>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-2xl p-6 pb-4 mx-8">
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-red-500/90 text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-lg">The Expense</div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                        <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Visible UI</span>
                      </div>
                      <div className="flex justify-center gap-2">
                        <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                        <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="mt-3 h-12 bg-white/5 rounded-lg border border-white/5"></div>
                    </div>
                  </div>
                  <div className="relative h-8 overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-4">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#395e8b]/50 to-transparent"></div>
                    </div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[9px] text-[#395e8b]/60 font-medium tracking-wider uppercase bg-[#0B0E14] px-2">Surface</div>
                  </div>
                  <div className="relative backdrop-blur-xl border border-[#395e8b]/20 rounded-b-3xl p-8 mx-0" style={{ background: 'linear-gradient(180deg, rgba(57,94,139,0.05) 0%, rgba(57,94,139,0.15) 100%)' }}>
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#f0942e] text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-lg shadow-[#f0942e]/30">The Asset</div>
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1.5 bg-[#395e8b]/20 border border-[#395e8b]/30 rounded-full text-xs font-medium text-[#7aaed4]">CRM Sync</span>
                        <span className="px-3 py-1.5 bg-[#395e8b]/20 border border-[#395e8b]/30 rounded-full text-xs font-medium text-[#7aaed4]">Lead Scoring</span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1.5 bg-[#395e8b]/20 border border-[#395e8b]/30 rounded-full text-xs font-medium text-[#7aaed4]">Edge Computing</span>
                        <span className="px-3 py-1.5 bg-[#395e8b]/20 border border-[#395e8b]/30 rounded-full text-xs font-medium text-[#7aaed4]">Dynamic Content</span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1.5 bg-[#f0942e]/10 border border-[#f0942e]/20 rounded-full text-xs font-medium text-[#f0942e]">Analytics</span>
                        <span className="px-3 py-1.5 bg-[#f0942e]/10 border border-[#f0942e]/20 rounded-full text-xs font-medium text-[#f0942e]">A/B Testing</span>
                        <span className="px-3 py-1.5 bg-[#f0942e]/10 border border-[#f0942e]/20 rounded-full text-xs font-medium text-[#f0942e]">SEO Engine</span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-[10px] text-gray-400 font-medium">90% of business value is generated here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ VALUE PROPS ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 text-[#547aa1] text-sm font-medium mb-4">
                Engineered for Performance
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">
                Beyond templates. Beyond brochures.
              </h2>
              <p className="text-slate-500 dark:text-gray-400 max-w-2xl">
                We build high-performance digital tools that drive measurable revenue growth—not just pretty pages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:shadow-lg hover:border-[#f0942e]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-[#395e8b]/10 dark:bg-[#395e8b]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-6 h-6 text-[#395e8b]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Seamless CRM Sync</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">Stop manual data entry. Our systems bridge the gap between user interaction and your sales pipeline in real time—every lead captured, every touchpoint tracked.</p>
              </div>
              <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:shadow-lg hover:border-[#f0942e]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-[#f0942e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="w-6 h-6 text-[#f0942e]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">SEO Performance</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">Built for Core Web Vitals. We ensure lightning-fast load times that satisfy both Google and your most impatient customers.</p>
              </div>
              <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:shadow-lg hover:border-[#f0942e]/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-[#395e8b]/10 dark:bg-[#395e8b]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-[#395e8b]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Modern Tech Stack</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">Built on modern frameworks with clean architecture — fast to load, easy to update, and built to scale as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ EVOLUTION OF THE WEB ============ */}
        <section id="evolution" className="py-24 bg-gray-50 dark:bg-[#161b22] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0942e]/5 dark:bg-[#f0942e]/10 border border-[#f0942e]/20 text-[#f0942e] text-sm font-medium mb-4">The Transformation</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">Evolution of the Web</h2>
              <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">Witness the difference between a brochure and a business engine.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
              {/* Left: OLD MODEL */}
              <div className="relative bg-gray-100 dark:bg-[#0f1218] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-40"></div>
                  <span className="text-sm font-semibold text-slate-400 dark:text-gray-500 tracking-wide uppercase">Old Model: Digital Brochure</span>
                </div>
                <div className="space-y-6 opacity-50 grayscale">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-gray-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-gray-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="flex-1 h-6 bg-slate-200 dark:bg-gray-700 rounded-md"></div>
                  </div>
                  <div className="h-8 bg-slate-300 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-40 bg-slate-200 dark:bg-gray-800 rounded-xl w-full flex items-center justify-center">
                    <CloudOff className="w-12 h-12 text-slate-400 dark:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-5/6"></div>
                    <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="mt-8 p-5 bg-white dark:bg-[#161b22] rounded-xl border border-red-200 dark:border-red-500/20 flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-gray-400">Disconnected from sales. Hard to update. Static.</p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-xs text-slate-400 dark:text-gray-500 flex items-center gap-1.5"><X className="w-3 h-3 text-red-400" /> No analytics integration</li>
                      <li className="text-xs text-slate-400 dark:text-gray-500 flex items-center gap-1.5"><X className="w-3 h-3 text-red-400" /> Manual lead management</li>
                      <li className="text-xs text-slate-400 dark:text-gray-500 flex items-center gap-1.5"><X className="w-3 h-3 text-red-400" /> Slow loading speeds</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right: AZURETECH MODEL */}
              <div className="relative bg-[#0B0E14] p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#f0942e] shadow-[0_0_12px_rgba(240,148,46,0.6)]"></div>
                  <span className="text-sm font-semibold text-[#f0942e] tracking-wide uppercase">Azuretech Model: Revenue Asset</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f0942e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#395e8b]"></div>
                    </div>
                    <div className="flex-1 h-6 bg-white/10 rounded-md flex items-center px-3">
                      <span className="text-[10px] text-white/40 flex items-center gap-1"><Lock className="w-2.5 h-2.5" /> azuretech.ai</span>
                    </div>
                    <div className="h-5 w-16 bg-[#f0942e]/30 rounded-full flex items-center justify-center text-[9px] font-bold text-[#f0942e]">LIVE</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-8 bg-white/10 rounded w-1/2"></div>
                    <div className="h-6 w-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>SYNC
                    </div>
                  </div>
                  <div className="h-40 bg-white/5 rounded-xl border border-white/10 w-full relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0942e]/10 to-[#395e8b]/10"></div>
                    <div className="relative flex flex-col items-center">
                      <Zap className="w-10 h-10 text-[#f0942e]" />
                      <span className="text-xs font-bold tracking-[0.2em] mt-2 text-white/60">OPTIMIZED ASSET</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-[#f0942e]/20">
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Conversion Rate</div>
                      <div className="text-2xl font-bold text-[#f0942e]">+340%</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-[#f0942e]/20">
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">LCP Speed</div>
                      <div className="text-2xl font-bold text-[#f0942e]">0.8s</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-5 bg-[#f0942e] rounded-xl flex items-center gap-4 shadow-xl shadow-[#f0942e]/20">
                  <TrendingUp className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-sm font-semibold text-white">Integrated. Scalable. Profit-generating.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT WE BUILD ============ */}
        <section className="py-24 bg-white dark:bg-[#0f1218] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 text-[#547aa1] text-sm font-medium mb-4">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">
                  Websites that work <span className="text-[#f0942e]">harder</span> than your best salesperson
                </h2>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed mb-8">
                  We do not just design pages—we engineer revenue systems. Every element is optimized for conversion, from the first pixel to the final handshake with your CRM.
                </p>
                <ul className="space-y-4">
                  {[
                    'Conversion-first UX design backed by user behavior data',
                    'Headless CMS for instant content updates without developers',
                    'Edge-deployed for sub-second load times globally',
                    'Built-in analytics, lead scoring, and pipeline automation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#f0942e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#f0942e]" />
                      </div>
                      <span className="text-slate-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative bg-gray-50 dark:bg-[#161b22] rounded-2xl border border-gray-200 dark:border-white/10 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0942e]/5 blur-3xl rounded-full pointer-events-none"></div>
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-gray-500 tracking-wider uppercase mb-6">Tech Stack</h4>
                  <div className="space-y-4">
                    {[
                      { icon: <Layout className="w-5 h-5 text-[#f0942e]" />, name: 'Next.js / React', sub: 'Frontend Framework', pct: '95%', color: '#f0942e' },
                      { icon: <Database className="w-5 h-5 text-[#395e8b]" />, name: 'Headless CMS', sub: 'Content Management', pct: '88%', color: '#395e8b' },
                      { icon: <Globe className="w-5 h-5 text-emerald-500" />, name: 'Edge Computing', sub: 'Global CDN Deployment', pct: '92%', color: '#10b981' },
                      { icon: <BarChart3 className="w-5 h-5 text-[#f0942e]" />, name: 'Analytics & Lead Scoring', sub: 'Revenue Intelligence', pct: '90%', color: '#f0942e' },
                      { icon: <ShieldCheck className="w-5 h-5 text-[#395e8b]" />, name: 'Enterprise Security', sub: 'SOC 2 Ready Infrastructure', pct: '97%', color: '#395e8b' },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center">{row.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{row.name}</div>
                          <div className="text-xs text-slate-400 dark:text-gray-500">{row.sub}</div>
                        </div>
                        <div className="h-1.5 w-24 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: row.pct, backgroundColor: row.color }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS BAR ============ */}
        <section className="py-16 bg-[#0B0E14] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">40+</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">Sites Launched</div></div>
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">98</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">Avg. Lighthouse Score</div></div>
              <div><div className="text-4xl font-bold text-[#f0942e] mb-2">2×</div><div className="text-sm text-white/50 uppercase tracking-widest font-medium">Avg. Conversion Lift</div></div>
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
                'Our old site took 8 seconds to load. The new one is under 1.5 seconds and we started getting form submissions within the first week.',
                "Every lead that fills out our contact form now lands directly in our CRM with a follow-up email already sent. We don't miss anything anymore.",
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Web Design FAQ</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: 'How long does a website project take?', a: 'Most projects are delivered in 3–5 weeks. A focused landing page or service site can be live in 2 weeks. Larger multi-page builds with CRM integration and custom functionality typically run 4–6 weeks depending on the number of pages and complexity of integrations.' },
                { q: 'Do you work with our existing brand or start from scratch?', a: "Both. If you have existing brand guidelines, logos, and colors we'll work within them. If you're starting fresh or your brand needs a refresh, we'll develop the visual identity as part of the project. Either way, the goal is a site that looks intentional — not like a template." },
                { q: 'Will the site work on mobile?', a: "Yes — every site we build is mobile-first. We design and test at 375px, 768px, 1024px, and 1440px breakpoints. More than half of web traffic comes from mobile, so we treat mobile performance as a requirement, not an afterthought." },
                { q: 'Can we update the content ourselves after launch?', a: "Yes. We build with a headless CMS so you can update text, images, blog posts, and service pages without touching code. We'll walk you through the editor at handoff so your team is confident managing the site from day one." },
                { q: 'Do you handle hosting?', a: "Yes. We can deploy and manage hosting on your behalf using reliable, fast infrastructure. If you already have a hosting provider you prefer, we can work with that too. We'll make sure the deployment is clean, the domain is configured correctly, and SSL is active before handing off." },
                { q: 'How do you measure whether a website is actually working?', a: "We set up conversion tracking, form submission goals, and Google Analytics before launch. You'll be able to see exactly how many visitors are coming, where they're coming from, and what percentage are converting into leads — not just traffic numbers." },
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
        <section className="py-24 bg-[#f0942e]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to build your digital engine?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop thinking about your website as a design project. Start thinking about it as your most powerful employee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-10 py-4 bg-[#0B0E14] text-white rounded-xl font-medium text-lg hover:bg-[#161b22] hover:scale-[1.02] transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                Book Strategy Session
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link to="/about" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-medium text-lg hover:bg-white/10 transition-all duration-300">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
