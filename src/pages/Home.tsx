import { useState } from 'react'

export default function Home() {
  const [_activeTab, setActiveTab] = useState<'it' | 'sec' | 'dev' | 'sales'>('it')

  return (
    <>


    {/* Hero Section */}
    <section
        className="lg:pt-48 lg:pb-20 overflow-hidden dark:bg-[#0f1218] transition-colors duration-300 bg-white pt-48 pb-20 relative">
        {/* UnicornStudio Embed Background */}
        <div data-us-project="X0ErZR3QhPzMHfKgBbJJ" className="absolute top-0 left-0 z-10 w-full h-full"></div>
        {/* Overlay for Contrast */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-white/80 dark:bg-[#0f1218]/80"></div>
        {/* UnicornStudio Script */}
        

        <div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
            {/* Hero Header (Centered) */}
            <div className="text-center max-w-4xl mr-auto mb-16 ml-auto space-y-8">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#395e8b]/5 dark:bg-[#395e8b]/10 border border-[#395e8b]/20 dark:border-[#395e8b]/30 text-[#547aa1] text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0942e] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0942e]"></span>
                    </span>
                    Based in Miami, Automating the World
                </div>

                <h1
                    className="lg:text-7xl dark:text-white leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight">
                    Simplify workflows.
                    <div className="w-full mt-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0942e] to-[#e28b2b]"><span
                                className="" id="tw-content-aura">Amplify potential</span> <span
                                className="font-light text-[#f0942e] text-left"
                                style={{ WebkitTextFillColor: "#f0942e", animation: "blink 1s step-end infinite" }}>
                                |
                            </span>
                            
                            
                        </span>
                    </div>
                </h1>

                <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    We build AI automation, custom web experiences, and digital systems that eliminate manual work — so your team focuses on growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center">
                    <a href="#"
                        className="group inline-flex items-center justify-center transition-all duration-300 hover:shadow-[0_0px_30px_rgba(249,115,22,0.6)] hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden text-base font-medium text-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative"
                        style={{ background: "linear-gradient(to right, #f0942e, #e28b2b) padding-box,                 conic-gradient(from var(--border-angle), #f0942e 75%, #ffffff 30%, #f0942e 50%, #ffffff 80%) border-box", border: "1.25px solid transparent", animation: "spin-border 3s linear infinite" }}>
                        
                        <span className="flex items-center gap-2 z-10 relative">
                            Start Automating
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M5 12h14" className=""></path>
                                <path d="m12 5 7 7-7 7" className=""></path>
                            </svg>
                        </span>
                    </a>
                    <div className="component-container mx-5 py-1 relative">
                        
                        <div className="hidden sm:flex">
                            <button
                                className="group hover:shadow-sky-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:border-sky-600/60 bg-gradient-to-br from-sky-100/40 via-black-100/60 to-white/80 rounded-full pt-2.5 pr-4 pb-2.5 pl-5 relative shadow-2xl backdrop-blur-xl"
                                style={{ position: "relative" }}>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out via-sky-600/30">
                                </div>
                                <div
                                    className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-black/10 via-black/0 to-black/10 opacity-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0">
                                </div>
                                <div className="z-10 flex gap-3 relative items-center">
                                    <div className="flex-1 text-left">
                                        <p
                                            className="group-hover:text-blue transition-colors duration-300 text-sm font-bold text-black font-geist drop-shadow-sm">
                                            See our Work
                                        </p>
                                    </div>
                                    <div
                                        className="group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 opacity-40">
                                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                            className="w-4 h-4 text-black">
                                            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinejoin="round"
                                                strokeLinecap="round" className=""></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Tabbed Workflow Canvas */}
            <div
                className="relative w-full rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl bg-[#0B0E14] overflow-hidden flex flex-col z-10">

                {/* Tabs Header */}
                <div className="grid grid-cols-2 md:grid-cols-4 w-full border-b border-white/10">
                    {/* Tab 1: IT Ops */}
                    <button onClick={() => setActiveTab('it')} id="tab-it"
                        className="tab-btn relative group p-6 text-left transition-all duration-300 hover:bg-white/5 border-t-2 tab-active">
                        <h3 className="text-white font-medium text-sm mb-1">IT Ops can</h3>
                        <div className="flex items-center gap-2 text-xs text-orange-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="zap" aria-hidden="true"
                                className="lucide lucide-zap w-3 h-3">
                                <path
                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                </path>
                            </svg>
                            <span>On-board new employees</span>
                        </div>
                    </button>

                    {/* Tab 2: Sec Ops */}
                    <button onClick={() => setActiveTab('sec')} id="tab-sec"
                        className="tab-btn relative group p-6 text-left transition-all duration-300 border-t-2 border-transparent hover:bg-white/5">
                        <h3 className="text-white font-medium text-sm mb-1">Sec Ops can</h3>
                        <div className="flex items-center gap-2 text-xs text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="shield-alert" aria-hidden="true"
                                className="lucide lucide-shield-alert w-3 h-3">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                </path>
                                <path d="M12 8v4"></path>
                                <path d="M12 16h.01"></path>
                            </svg>
                            <span>Enrich security tickets</span>
                        </div>
                    </button>

                    {/* Tab 3: Dev Ops */}
                    <button onClick={() => setActiveTab('dev')} id="tab-dev"
                        className="tab-btn relative group p-6 text-left transition-all duration-300 border-t-2 border-transparent hover:bg-white/5">
                        <h3 className="text-white font-medium text-sm mb-1">Dev Ops can</h3>
                        <div className="flex items-center gap-2 text-xs text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="terminal" aria-hidden="true"
                                className="lucide lucide-terminal w-3 h-3">
                                <path d="M12 19h8"></path>
                                <path d="m4 17 6-6-6-6"></path>
                            </svg>
                            <span>Natural language to API</span>
                        </div>
                    </button>

                    {/* Tab 4: Sales */}
                    <button onClick={() => setActiveTab('sales')} id="tab-sales"
                        className="tab-btn relative group p-6 text-left transition-all duration-300 border-t-2 border-transparent hover:bg-white/5">
                        <h3 className="text-white font-medium text-sm mb-1">Sales can</h3>
                        <div className="flex items-center gap-2 text-xs text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="bar-chart-3" aria-hidden="true"
                                className="lucide lucide-bar-chart-3 w-3 h-3">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                            <span>Customer insights from reviews</span>
                        </div>
                    </button>
                </div>

                {/* Canvas Area */}
                <div className="relative w-full h-[550px] bg-[#0B0E14] cursor-grab active:cursor-grabbing select-none group"
                    id="workflow-canvas">
                    {/* Dot Grid Background */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
                    </div>

                    {/* SVG Layer for Connections */}
                    <svg id="connections-layer"
                        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                        <path d="M 230 260 C 265 260, 265 260, 300 260" className="connection-line"></path>
                        <circle cx="230" cy="260" r="3" fill="#475569"></circle>
                        <path d="M 480 260 C 515 260, 515 250, 550 250" className="connection-line"></path>
                        <circle cx="480" cy="260" r="3" fill="#475569"></circle>
                        <path d="M 730 250 C 765 250, 765 180, 800 180" className="connection-line"></path>
                        <rect x="746" y="207" width="38" height="16" rx="4" fill="#0B0E14" stroke="#334155"></rect><text
                            x="765" y="215" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle"
                            dominant-baseline="middle">true</text>
                        <circle cx="730" cy="250" r="3" fill="#475569"></circle>
                        <path d="M 730 250 C 765 250, 765 340, 800 340" className="connection-line"></path>
                        <rect x="742.5" y="287" width="45" height="16" rx="4" fill="#0B0E14" stroke="#334155"></rect>
                        <text x="765" y="295" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle"
                            dominant-baseline="middle">false</text>
                        <circle cx="730" cy="250" r="3" fill="#475569"></circle>
                        <path d="M 390 320 C 390 370, 260 370, 260 400" className="connection-line"
                            style={{ strokeDasharray: "6, 4" }}></path>
                        <circle cx="390" cy="320" r="3" fill="#475569"></circle>
                        <path d="M 390 320 C 390 370, 380 370, 380 400" className="connection-line"
                            style={{ strokeDasharray: "6, 4" }}></path>
                        <circle cx="390" cy="320" r="3" fill="#475569"></circle>
                        <path d="M 390 320 C 390 370, 560 370, 560 400" className="connection-line"
                            style={{ strokeDasharray: "6, 4" }}></path>
                        <circle cx="390" cy="320" r="3" fill="#475569"></circle>
                        <path d="M 390 320 C 390 370, 680 370, 680 400" className="connection-line"
                            style={{ strokeDasharray: "6, 4" }}></path>
                        <circle cx="390" cy="320" r="3" fill="#475569"></circle>
                    </svg>

                    {/* Nodes Container (Injected by JS) */}
                    <div id="nodes-container" className="absolute inset-0 w-full h-full z-10">
                        <div id="n1"
                            className="workflow-node absolute w-48 bg-[#161b22] border border-white/10 rounded-lg shadow-lg z-10 hover:border-white/30"
                            style={{ left: "50px", top: "200px", width: "180px" }}>
                            <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg bg-orange-500 opacity-80"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div
                                        className="p-2 rounded-md bg-orange-500/10 border-orange-500/20 text-orange-400 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" data-lucide="file-edit"
                                            aria-hidden="true" className="lucide lucide-file-edit w-5 h-5">
                                            <path
                                                d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34">
                                            </path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                            <path
                                                d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z">
                                            </path>
                                        </svg>
                                    </div>

                                </div>
                                <h3 className="text-white font-medium text-sm leading-tight">On 'Create User'</h3>
                                <p className="text-[11px] text-gray-500 font-mono mt-1">form submission</p>
                            </div>
                            {/* Handles */}

                            <div
                                className="absolute right-0 top-1/2 -mr-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>

                        </div>
                        <div id="n2"
                            className="workflow-node absolute w-48 bg-[#161b22] border border-white/10 rounded-lg shadow-lg z-10 hover:border-white/30"
                            style={{ left: "300px", top: "200px", width: "180px" }}>
                            <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg bg-gray-600 opacity-80"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 rounded-md bg-white/5 border-white/10 text-gray-400 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" data-lucide="bot"
                                            aria-hidden="true" className="lucide lucide-bot w-5 h-5">
                                            <path d="M12 8V4H8"></path>
                                            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                            <path d="M2 14h2"></path>
                                            <path d="M20 14h2"></path>
                                            <path d="M15 13v2"></path>
                                            <path d="M9 13v2"></path>
                                        </svg>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                                    </div>
                                </div>
                                <h3 className="text-white font-medium text-sm leading-tight">AI Agent</h3>
                                <p className="text-[11px] text-gray-500 font-mono mt-1">Tools Agent</p>
                            </div>
                            {/* Handles */}
                            <div
                                className="absolute left-0 top-1/2 -ml-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>
                            <div
                                className="absolute right-0 top-1/2 -mr-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>
                            <div
                                className="absolute bottom-0 left-1/2 -mb-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-x-[-50%]">
                            </div>
                        </div>
                        <div id="n3"
                            className="workflow-node absolute w-48 bg-[#161b22] border border-white/10 rounded-lg shadow-lg z-10 hover:border-white/30"
                            style={{ left: "550px", top: "200px", width: "180px" }}>
                            <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg bg-green-500 opacity-80"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div
                                        className="p-2 rounded-md bg-green-500/10 border-green-500/20 text-green-400 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" data-lucide="split"
                                            aria-hidden="true" className="lucide lucide-split w-5 h-5">
                                            <path d="M16 3h5v5"></path>
                                            <path d="M8 3H3v5"></path>
                                            <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
                                            <path d="m15 9 6-6"></path>
                                        </svg>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                                    </div>
                                </div>
                                <h3 className="text-white font-medium text-sm leading-tight">Is manager?</h3>

                            </div>
                            {/* Handles */}
                            <div
                                className="absolute left-0 top-1/2 -ml-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>
                            <div
                                className="absolute right-0 top-1/2 -mr-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>

                        </div>
                        <div id="n4"
                            className="workflow-node absolute w-48 bg-[#161b22] border border-white/10 rounded-lg shadow-lg z-10 hover:border-white/30"
                            style={{ left: "800px", top: "120px", width: "180px" }}>
                            <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg bg-gray-600 opacity-80"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 rounded-md bg-white/5 border-white/10 text-gray-400 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" data-lucide="slack"
                                            aria-hidden="true" className="lucide lucide-slack w-5 h-5">
                                            <rect width="3" height="8" x="13" y="2" rx="1.5"></rect>
                                            <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
                                            <rect width="3" height="8" x="8" y="14" rx="1.5"></rect>
                                            <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
                                            <rect width="8" height="3" x="14" y="13" rx="1.5"></rect>
                                            <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
                                            <rect width="8" height="3" x="2" y="8" rx="1.5"></rect>
                                            <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
                                        </svg>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                                    </div>
                                </div>
                                <h3 className="text-white font-medium text-sm leading-tight">Add to channel</h3>
                                <p className="text-[11px] text-gray-500 font-mono mt-1">invite: channel</p>
                            </div>
                            {/* Handles */}
                            <div
                                className="absolute left-0 top-1/2 -ml-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>


                        </div>
                        <div id="n5"
                            className="workflow-node absolute w-48 bg-[#161b22] border border-white/10 rounded-lg shadow-lg z-10 hover:border-white/30"
                            style={{ left: "800px", top: "280px", width: "180px" }}>
                            <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg bg-gray-600 opacity-80"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 rounded-md bg-white/5 border-white/10 text-gray-400 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" data-lucide="slack"
                                            aria-hidden="true" className="lucide lucide-slack w-5 h-5">
                                            <rect width="3" height="8" x="13" y="2" rx="1.5"></rect>
                                            <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
                                            <rect width="3" height="8" x="8" y="14" rx="1.5"></rect>
                                            <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
                                            <rect width="8" height="3" x="14" y="13" rx="1.5"></rect>
                                            <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
                                            <rect width="8" height="3" x="2" y="8" rx="1.5"></rect>
                                            <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
                                        </svg>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                                    </div>
                                </div>
                                <h3 className="text-white font-medium text-sm leading-tight">Update profile</h3>
                                <p className="text-[11px] text-gray-500 font-mono mt-1">update: user</p>
                            </div>
                            {/* Handles */}
                            <div
                                className="absolute left-0 top-1/2 -ml-1.5 w-3 h-3 bg-[#0B0E14] border-2 border-gray-600 rounded-full translate-y-[-50%]">
                            </div>


                        </div>
                        <div id="t1" className="workflow-node absolute flex flex-col items-center justify-center z-10"
                            style={{ left: "200px", top: "400px", width: "120px", background: "transparent", border: "none", boxShadow: "none" }}>
                            <div
                                className="w-12 h-12 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center mb-2 hover:border-white/30 transition-colors shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" data-lucide="brain-circuit" aria-hidden="true"
                                    className="lucide lucide-brain-circuit w-6 h-6 text-gray-400">
                                    <path
                                        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                                    </path>
                                    <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                    <path d="M12 13h4"></path>
                                    <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                                    <path d="M12 8h8"></path>
                                    <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                                    <circle cx="16" cy="13" r=".5"></circle>
                                    <circle cx="18" cy="3" r=".5"></circle>
                                    <circle cx="20" cy="21" r=".5"></circle>
                                    <circle cx="20" cy="8" r=".5"></circle>
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-medium text-xs">Anthropic Chat</h3>
                                <p className="text-[10px] text-gray-500 font-mono mt-0.5">Model</p>
                            </div>
                        </div>
                        <div id="t2" className="workflow-node absolute flex flex-col items-center justify-center z-10"
                            style={{ left: "320px", top: "400px", width: "120px", background: "transparent", border: "none", boxShadow: "none" }}>
                            <div
                                className="w-12 h-12 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center mb-2 hover:border-white/30 transition-colors shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" data-lucide="database" aria-hidden="true"
                                    className="lucide lucide-database w-6 h-6 text-gray-400">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-medium text-xs">Postgres Chat</h3>
                                <p className="text-[10px] text-gray-500 font-mono mt-0.5">Memory</p>
                            </div>
                        </div>
                        <div id="t3" className="workflow-node absolute flex flex-col items-center justify-center z-10"
                            style={{ left: "500px", top: "400px", width: "120px", background: "transparent", border: "none", boxShadow: "none" }}>
                            <div
                                className="w-12 h-12 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center mb-2 hover:border-white/30 transition-colors shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" data-lucide="shield" aria-hidden="true"
                                    className="lucide lucide-shield w-6 h-6 text-gray-400">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                    </path>
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-medium text-xs">Entra ID</h3>
                                <p className="text-[10px] text-gray-500 font-mono mt-0.5">getAll: user</p>
                            </div>
                        </div>
                        <div id="t4" className="workflow-node absolute flex flex-col items-center justify-center z-10"
                            style={{ left: "620px", top: "400px", width: "120px", background: "transparent", border: "none", boxShadow: "none" }}>
                            <div
                                className="w-12 h-12 rounded-full bg-[#161b22] border border-white/10 flex items-center justify-center mb-2 hover:border-white/30 transition-colors shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" data-lucide="trello" aria-hidden="true"
                                    className="lucide lucide-trello w-6 h-6 text-gray-400">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                    <rect width="3" height="9" x="7" y="7"></rect>
                                    <rect width="3" height="5" x="14" y="7"></rect>
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-medium text-xs">Jira Software</h3>
                                <p className="text-[10px] text-gray-500 font-mono mt-0.5">create: user</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    


    {/* Drag Logic Script */}
    
    





    {/* Trusted By / Marquee */}
    <section className="border-y dark:border-white/5 dark:bg-white/[0.02] bg-slate-50 border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
            <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-wide uppercase">
                Powering future-ready businesses
            </p>
            <div
                className="flex flex-wrap justify-center items-center gap-12 opacity-50 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="box" aria-hidden="true" className="lucide lucide-box text-[#f0942e]">
                        <path
                            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z">
                        </path>
                        <path d="m3.3 7 8.7 5 8.7-5"></path>
                        <path d="M12 22V12"></path>
                    </svg>
                    Stripe
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="triangle" aria-hidden="true" className="lucide lucide-triangle text-[#547aa1]">
                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    </svg>
                    Vercel
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="hexagon" aria-hidden="true"
                        className="lucide lucide-hexagon text-slate-900 dark:text-white">
                        <path
                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                        </path>
                    </svg>
                    Linear
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="circle-dashed" aria-hidden="true"
                        className="lucide lucide-circle-dashed text-[#f0942e]">
                        <path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
                        <path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path>
                        <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path>
                        <path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path>
                        <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path>
                        <path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path>
                        <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
                        <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path>
                    </svg>
                    OpenAI
                </div>
            </div>
        </div>
    </section>

    {/* Services Section */}
    <section
        className="dark:bg-[#0b0e14] dark:border-white/5 overflow-hidden transition-colors duration-300 bg-slate-50 border-slate-200 border-t pt-24 pb-24 relative"
        id="services-section">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">
                    Our Services
                </h2>
                <p className="text-lg text-slate-500 dark:text-gray-400">
                    From automation to AI to web — every service we offer is built to reduce friction and create measurable outcomes.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 gap-x-8 gap-y-8 items-start">
                {/* Left: Service Navigation */}
                <div className="lg:col-span-5 flex flex-col gap-4 gap-x-4 gap-y-4" id="service-nav-container"><button
                        className="group w-full text-left p-4 rounded-xl transition-all duration-300 relative flex items-center gap-5 border-2 cursor-pointer bg-white dark:bg-[#161b22] border-blue-200 dark:border-blue-500/30 shadow-lg scale-[1.02] z-10 bg-blue-50 dark:bg-blue-900/20">
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-blue-600 text-white shadow-md group-hover:rotate-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="settings-2" aria-hidden="true"
                                className="lucide lucide-settings-2 w-6 h-6">
                                <path d="M14 17H5"></path>
                                <path d="M19 7h-9"></path>
                                <circle cx="17" cy="17" r="3"></circle>
                                <circle cx="7" cy="7" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <span
                                className="block font-medium text-lg transition-all duration-300 group-hover:font-semibold text-slate-900 dark:text-white font-semibold">
                                Business Process Automation
                            </span>
                            <div className="text-xs font-medium text-blue-500 dark:text-blue-400 mt-0.5">Active Selection
                            </div>
                        </div>
                        <div className="ml-auto text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg></div>
                    </button><button
                        className="group w-full text-left p-4 rounded-xl transition-all duration-300 relative flex items-center gap-5 border-2 cursor-pointer bg-transparent border-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md hover:scale-[1.01] opacity-70 hover:opacity-100">
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white dark:bg-white/10 text-slate-400 group-hover:text-orange-500 shadow-sm group-hover:rotate-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="brain-circuit" aria-hidden="true"
                                className="lucide lucide-brain-circuit w-6 h-6">
                                <path
                                    d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                                </path>
                                <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                <path d="M12 13h4"></path>
                                <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                                <path d="M12 8h8"></path>
                                <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                                <circle cx="16" cy="13" r=".5"></circle>
                                <circle cx="18" cy="3" r=".5"></circle>
                                <circle cx="20" cy="21" r=".5"></circle>
                                <circle cx="20" cy="8" r=".5"></circle>
                            </svg>
                        </div>
                        <div>
                            <span
                                className="block font-medium text-lg transition-all duration-300 group-hover:font-semibold text-slate-600 dark:text-gray-300">
                                AI Integration
                            </span>

                        </div>
                        <div
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg></div>
                    </button><button
                        className="group w-full text-left p-4 rounded-xl transition-all duration-300 relative flex items-center gap-5 border-2 cursor-pointer bg-transparent border-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md hover:scale-[1.01] opacity-70 hover:opacity-100">
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white dark:bg-white/10 text-slate-400 group-hover:text-emerald-500 shadow-sm group-hover:rotate-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="globe" aria-hidden="true"
                                className="lucide lucide-globe w-6 h-6">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                        </div>
                        <div>
                            <span
                                className="block font-medium text-lg transition-all duration-300 group-hover:font-semibold text-slate-600 dark:text-gray-300">
                                Web Design &amp; App Development
                            </span>

                        </div>
                        <div
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg></div>
                    </button><button
                        className="group w-full text-left p-4 rounded-xl transition-all duration-300 relative flex items-center gap-5 border-2 cursor-pointer bg-transparent border-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md hover:scale-[1.01] opacity-70 hover:opacity-100">
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white dark:bg-white/10 text-slate-400 group-hover:text-purple-500 shadow-sm group-hover:rotate-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" data-lucide="share-2" aria-hidden="true"
                                className="lucide lucide-share-2 w-6 h-6">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                        </div>
                        <div>
                            <span
                                className="block font-medium text-lg transition-all duration-300 group-hover:font-semibold text-slate-600 dark:text-gray-300">
                                Social Media Management
                            </span>

                        </div>
                        <div
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg></div>
                    </button></div>

                {/* Right: Service Display Card */}
                <div className="lg:col-span-7 relative h-full">
                    <div
                        className="relative w-full h-full min-h-[550px] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500 bg-white dark:bg-[#161b22]">
                        {/* Dynamic Background with Grid */}
                        <div id="service-card-bg"
                            className="absolute inset-0 transition-colors duration-500 z-0 bg-blue-50/50 dark:bg-blue-900/10">
                        </div>
                        <div
                            className="absolute inset-0 bg-grid-pattern z-0 opacity-40 mix-blend-multiply dark:mix-blend-normal">
                        </div>

                        {/* Large Background Number */}
                        <div id="service-bg-number"
                            className="absolute -top-12 right-0 text-[200px] leading-none font-bold select-none pointer-events-none transition-colors duration-500 opacity-[0.07] dark:opacity-[0.1] font-geist tracking-tighter text-blue-500 dark:text-blue-400">
                            01</div>

                        <div className="flex flex-col md:p-12 h-full z-10 pt-10 pr-10 pb-10 pl-10 relative service-fade-enter-active"
                            id="service-content-wrapper">
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-white/5 mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-sparkles text-slate-600 dark:text-slate-300">
                                    <path
                                        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
                                    </path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                </svg>
                                <span
                                    className="text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 uppercase">
                                    Featured Service
                                </span>
                            </div>

                            {/* Title & Desc */}
                            <h3 id="service-title"
                                className="text-4xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
                                Business Process Automation</h3>
                            <p id="service-desc"
                                className="text-lg text-slate-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg">
                                Eliminate manual bottlenecks with self-healing, event-driven architectures. We build
                                workflows that run 24/7 without supervision.</p>

                            {/* Features Grid */}
                            <div id="service-features"
                                className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12 border-t border-slate-200/60 dark:border-white/5 pt-8">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500"></div>
                                    <span className="text-base text-slate-700 dark:text-gray-300 font-medium">Custom API
                                        Integrations</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500"></div>
                                    <span className="text-base text-slate-700 dark:text-gray-300 font-medium">Error
                                        Handling</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500"></div>
                                    <span className="text-base text-slate-700 dark:text-gray-300 font-medium">Instant
                                        Sync</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500"></div>
                                    <span className="text-base text-slate-700 dark:text-gray-300 font-medium">Cron
                                        Jobs</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto flex items-center gap-6">
                                <button id="service-cta"
                                    className="inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-xl text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-blue-600 hover:bg-blue-700">
                                    Automate Operations
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-arrow-right">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </button>
                                <a href="#"
                                    className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white font-medium transition-colors">
                                    View Case Studies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Logic for Services Section */}
        
    </section>
    <section
        className="overflow-hidden bg-gradient-to-b from-indigo-100/60 via-slate-50 to-blue-100/30 pt-12 pb-12 relative">

        {/* Ambient Glows (Purple/Blue based on screenshot) */}
        <div
            className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none -z-10">
        </div>
        <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none -z-10">
        </div>

        <div className="max-w-max mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 gap-x-16 gap-y-16 items-center">

                {/* Left Content */}
                <div className="max-w-xl">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-600 text-xs font-semibold tracking-wide mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Web Design + AI Automation
                    </div>

                    {/* Headline (Updated Style) */}
                    <h2 className="leading-tight sm:text-7xl text-6xl font-bold text-slate-900 tracking-tight mb-8">
                        Is your website an
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">asset</span>
                        or an
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">expense?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        Most websites are digital brochures that collect dust. We build intelligent platforms that
                        capture leads,
                        answer questions, and sync data directly to your CRM—24/7, without lifting a finger.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-10">
                        {/* Item 1 */}
                        <div className="flex gap-5 group">
                            <div
                                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-message-square-text">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    <path d="M13 8H7"></path>
                                    <path d="M17 12H7"></path>
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Intelligent Chatbots</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm">
                                    Embed custom AI agents trained on your data to handle support and qualify leads
                                    instantly.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-5 group">
                            <div
                                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-refresh-cw">
                                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                    <path d="M21 3v5h-5"></path>
                                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                    <path d="M3 21v-5h5"></path>
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Seamless CRM Sync</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm">
                                    Forms that don't just email you—they create deals in HubSpot, Salesforce, or
                                    Pipedrive automatically.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-5 group gap-x-5 gap-y-5">
                            <div
                                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-purple-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-mic">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                    <line x1="12" x2="12" y1="19" y2="22"></line>
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Voice AI Receptionists</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm">
                                    Deploy voice agents to handle inbound calls, schedule appointments, and route
                                    requests.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-start">
                            <button type="button" className="button">
                                <div className="points_wrapper">
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                    <i className="point"></i>
                                </div>

                                <span className="inner">Get Free Audit <svg className="icon" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg></span>
                                


































































                            </button>

                        </div>
                    </div>
                </div>

                {/* Right Visual: Futuristic 3D Dashboard */}
                <div
                    className="flex lg:justify-end group w-full h-[800px] relative perspective-[1200px] space-y-20 items-center justify-center">
                    {/* New Localized Grid Background */}
                    <div
                        className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-20 [mask-image:radial-gradient(closest-side,black_40%,transparent)]">
                    </div>

                    {/* Background Glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse">
                    </div>

                    {/* Main Rotatable Container */}
                    <div className="[transform-style:preserve-3d] transition-transform duration-200 ease-out w-[600px] h-[500px] relative"
                        style={{ transform: "rotateX(10deg) rotateY(-15deg)" }}
                        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); const x = e.clientX - r.left; const y = e.clientY - r.top; const rx = ((r.height/2-y)/(r.height/2))*10; const ry = ((x-r.width/2)/(r.width/2))*10; e.currentTarget.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateX(10deg) rotateY(-15deg)'; }}>

                        {/* Animated Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ transform: "translateZ(-10px)" }}>
                            <g>
                                <path d="M100,100 C200,100 200,250 300,250" fill="none" stroke="rgba(56, 189, 248, 0.2)"
                                    strokeWidth="1">
                                </path>
                                <circle r="3" fill="#38bdf8">
                                    <animateMotion dur="4s" repeatCount="indefinite"
                                        path="M100,100 C200,100 200,250 300,250" keyPoints="0;1" keyTimes="0;1"
                                        calcMode="linear"></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite">
                                    </animate>
                                </circle>
                            </g>
                            <g>
                                <path d="M500,120 C400,120 400,250 300,250" fill="none" stroke="rgba(56, 189, 248, 0.2)"
                                    strokeWidth="1">
                                </path>
                                <circle r="3" fill="#38bdf8">
                                    <animateMotion dur="5s" repeatCount="indefinite"
                                        path="M500,120 C400,120 400,250 300,250" keyPoints="0;1" keyTimes="0;1"
                                        calcMode="linear"></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite">
                                    </animate>
                                </circle>
                            </g>
                            <g>
                                <path d="M100,400 C200,400 200,250 300,250" fill="none" stroke="rgba(56, 189, 248, 0.2)"
                                    strokeWidth="1">
                                </path>
                                <circle r="3" fill="#38bdf8">
                                    <animateMotion dur="6s" repeatCount="indefinite"
                                        path="M100,400 C200,400 200,250 300,250" keyPoints="0;1" keyTimes="0;1"
                                        calcMode="linear"></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite">
                                    </animate>
                                </circle>
                            </g>
                            <g>
                                <path d="M500,380 C400,380 400,250 300,250" fill="none" stroke="rgba(56, 189, 248, 0.2)"
                                    strokeWidth="1">
                                </path>
                                <circle r="3" fill="#38bdf8">
                                    <animateMotion dur="4.5s" repeatCount="indefinite"
                                        path="M500,380 C400,380 400,250 300,250" keyPoints="0;1" keyTimes="0;1"
                                        calcMode="linear"></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="4.5s"
                                        repeatCount="indefinite"></animate>
                                </circle>
                            </g>
                            <g>
                                <path d="M300,50 C300,50 300,150 300,150" fill="none" stroke="rgba(56, 189, 248, 0.2)"
                                    strokeWidth="1">
                                </path>
                                <circle r="3" fill="#38bdf8">
                                    <animateMotion dur="3s" repeatCount="indefinite"
                                        path="M300,50 C300,50 300,150 300,150" keyPoints="0;1" keyTimes="0;1"
                                        calcMode="linear"></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite">
                                    </animate>
                                </circle>
                            </g>
                        </svg>

                        {/* Center Card */}
                        <div className="absolute top-1/2 left-1/2 w-[380px] h-[240px] bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-xl shadow-[0_0_50px_rgba(79,70,229,0.3)] [transform-style:preserve-3d]"
                            style={{ transform: "translate(-50%, -50%) translateZ(0px)" }}>
                            <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                <div className="ml-auto w-20 h-1.5 rounded-full bg-white/10"></div>
                            </div>
                            <div className="p-5 flex flex-col h-[calc(100%-32px)]">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="">
                                        <div className="h-2 w-24 bg-indigo-500/50 rounded mb-2 animate-pulse"></div>
                                        <div className="h-2 w-16 bg-white/10 rounded"></div>
                                    </div>
                                    <div
                                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] rounded border border-indigo-500/30 font-medium">
                                        LIVE</div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 flex-1">
                                    <div
                                        className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                                        <div className="p-1.5 bg-cyan-500/20 w-fit rounded-md text-cyan-400 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-users">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className=""></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4" className=""></circle>
                                            </svg>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-cyan-500 w-[75%]"></div>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                                        <div className="p-1.5 bg-purple-500/20 w-fit rounded-md text-purple-400 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-chart-column">
                                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                                <path d="M18 17V9"></path>
                                                <path d="M13 17V5"></path>
                                                <path d="M8 17v-3"></path>
                                            </svg>
                                        </div>
                                        <div className="flex items-end gap-1 h-6">
                                            <div className="w-1.5 bg-purple-500/40 h-[40%] rounded-t-sm"></div>
                                            <div className="w-1.5 bg-purple-500/60 h-[70%] rounded-t-sm"></div>
                                            <div className="w-1.5 bg-purple-500 h-[50%] rounded-t-sm"></div>
                                            <div className="w-1.5 bg-purple-500/80 h-[90%] rounded-t-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 h-8 bg-white/5 rounded flex items-center px-3 justify-between">
                                    <div className="h-1.5 w-32 bg-white/10 rounded"></div>
                                    <div
                                        className="h-4 w-12 bg-indigo-600 rounded text-[8px] text-white flex items-center justify-center font-medium">
                                        SYNC</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Mail (Top Left) */}
                        <div className="[transform-style:preserve-3d] w-[140px] h-[90px] absolute top-[10%] left-[5%]"
                            style={{ transform: "translateZ(20px) rotateY(-1deg)" }}>
                            <div
                                className="animate-[float_6s_ease-in-out_1s_infinite] overflow-hidden flex flex-col bg-slate-900/60 w-full h-full border-white/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md justify-between">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                                </div>
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                            <rect x="2" y="4" width="20" height="16" rx="2" className=""></rect>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]">
                                    </div>
                                </div>
                                <div className="space-y-1.5 relative z-10">
                                    <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                                    <div className="h-1.5 w-[60%] bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats (Top Right) */}
                        <div className="[transform-style:preserve-3d] w-[150px] h-[100px] absolute top-[12%] right-[5%]"
                            style={{ transform: "translateZ(25px) rotateY(-1deg)" }}>
                            <div
                                className="animate-[float_6s_ease-in-out_2.5s_infinite] overflow-hidden flex flex-col bg-slate-900/60 w-full h-full border-white/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                                </div>
                                <div className="flex items-center gap-2 mb-2 relative z-10">
                                    <div className="p-1 bg-emerald-500/20 rounded text-emerald-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-emerald-200 font-mono">+24.5%</span>
                                </div>
                                <div
                                    className="flex-1 flex gap-1 z-10 pb-1 relative gap-x-1 gap-y-1 items-end justify-between">
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "40%", opacity: "0.6" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "65%", opacity: "0.65" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "45%", opacity: "0.7" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "80%", opacity: "0.75" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "55%", opacity: "0.8" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "90%", opacity: "0.85" }}></div>
                                    <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-400 rounded-t-sm transition-all duration-300"
                                        style={{ height: "75%", opacity: "0.9" }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Database (Bottom Left) */}
                        <div className="[transform-style:preserve-3d] w-[160px] h-[90px] absolute bottom-[15%] left-[8%]">
                            <div
                                className="animate-[float_6s_ease-in-out_0.5s_infinite] overflow-hidden text-[8px] text-pink-300/80 font-mono bg-slate-900/60 w-full h-full border-white/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md space-y-1">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                                </div>
                                <div className="flex items-center gap-2 mb-2 pb-1 border-b border-white/5 relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-database text-pink-400">
                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                                    </svg>
                                    <span className="">API_STATUS: OK</span>
                                </div>
                                <p className="opacity-70 relative z-10">{'{ "leads": 420,'}</p>
                                <p className="opacity-70 relative z-10">{'  "sync": true }'}</p>
                                <div className="h-1 w-full bg-pink-500/20 rounded-full mt-1 overflow-hidden relative z-10">
                                    <div className="h-full bg-pink-500 w-[80%] animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating AI Assistant (Bottom Right) */}
                        <div className="[transform-style:preserve-3d] w-[130px] h-[110px] absolute right-[10%] bottom-[12%]"
                            style={{ transform: "translateZ(20px) rotateY(-1deg)" }}>
                            <div
                                className="animate-[float_6s_ease-in-out_3s_infinite] overflow-hidden flex flex-col text-center bg-slate-900/60 w-full h-full border-white/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md items-center justify-center">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                                </div>
                                <div className="relative mb-2 z-10">
                                    <div className="absolute inset-0 bg-violet-500 blur-lg opacity-40 animate-pulse"></div>
                                    <div className="relative p-2 bg-violet-600 rounded-full text-white shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
                                            <path d="M12 20v2"></path>
                                            <path d="M12 2v2"></path>
                                            <path d="M17 20v2"></path>
                                            <path d="M17 2v2"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M2 17h2"></path>
                                            <path d="M2 7h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="M20 17h2"></path>
                                            <path d="M20 7h2"></path>
                                            <path d="M7 20v2"></path>
                                            <path d="M7 2v2" className=""></path>
                                            <rect x="4" y="4" width="16" height="16" rx="2" className=""></rect>
                                            <rect x="8" y="8" width="8" height="8" rx="1" className=""></rect>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-[10px] font-semibold text-white mb-1 tracking-tight z-10">AI Assistant
                                </div>
                                <div className="flex gap-0.5 z-10">
                                    <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce"
                                        style={{ animationDelay: "0s" }}></span>
                                    <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.2s" }}></span>
                                    <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.4s" }}></span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Secure Badge (Top Center) */}
                        <div className="absolute top-[0%] left-1/2 w-[100px] h-[40px] [transform-style:preserve-3d]"
                            style={{ transform: "translate(-50%, 0) translateZ(20px)" }}>
                            <div
                                className="w-full h-full animate-[float_6s_ease-in-out_4s_infinite] bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden flex items-center justify-center gap-2 text-cyan-300">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-shield-check z-10">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                                        className=""></path>
                                    <path d="m9 12 2 2 4-4" className=""></path>
                                </svg>
                                <span className="text-[9px] font-semibold tracking-wider z-10">SECURE</span>
                            </div>
                        </div>

                        {/* Depth Glow */}
                        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 1px, transparent 1px)", backgroundSize: "20px 20px", transform: "translateZ(-50px) scale(1.5)" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </section>
    <section className="lg:py-32 dark:bg-[#0b0e14] overflow-hidden group bg-white pt-24 pb-24 relative">
        {/* Subtle Background Grid */}
        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none">
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                    Social media is just the
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative inline-block">
                        tip of the iceberg
                        {/* Underline decoration */}
                        <svg className="absolute w-full h-2.5 -bottom-1 left-0 text-blue-500 opacity-60" viewBox="0 0 200 9"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00025 6.99997C25.7501 9.75 60.6503 9 100 9C139.35 9 174.25 9.75 198.001 6.99997C126.75 1.74998 11.0003 1.74998 2.00025 6.99997Z"
                                fill="currentColor" className=""></path>
                        </svg>
                    </span>.
                </h2>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                    Most agencies focus on vanity metrics—likes, shares, and follows. We are the part you don't see: the
                    infrastructure that actually drives revenue. We analyze your entire business model to eliminate
                    waste and maximize profit.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: The Iceberg Visual */}
                <div
                    className="relative h-[600px] w-full flex items-center justify-center select-none perspective-[1000px]">

                    {/* Water Surface Line */}
                    <div
                        className="absolute top-[40%] left-[-20%] right-[-20%] h-[1px] bg-blue-200/50 dark:bg-blue-500/20 z-0">
                    </div>
                    <div
                        className="absolute top-[40%] left-[-20%] right-[-20%] h-[200px] bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none z-0">
                    </div>

                    {/* Iceberg Container */}
                    <div
                        className="relative w-[340px] h-[500px] z-10 drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]">

                        {/* Iceberg SVG Shape */}
                        <svg viewBox="0 0 340 500" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full filter drop-shadow-xl">
                            <defs>
                                {/* Top Gradient */}
                                <linearGradient id="ice-top" x1="170" y1="0" x2="170" y2="200"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#f8fafc"></stop>
                                    <stop offset="1" stopColor="#e2e8f0"></stop>
                                </linearGradient>
                                {/* Bottom Gradient (Deep) */}
                                <linearGradient id="ice-bottom" x1="170" y1="200" x2="170" y2="500"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3b82f6"></stop>
                                    <stop offset="0.6" stopColor="#2563eb"></stop>
                                    <stop offset="1" stopColor="#1e40af"></stop>
                                </linearGradient>
                                {/* Shine Effect */}
                                <linearGradient id="ice-shine" x1="0" y1="0" x2="100%" y2="100%">
                                    <stop stopColor="white" stop-opacity="0.2"></stop>
                                    <stop offset="1" stopColor="transparent" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>

                            {/* Top Part (Visible) */}
                            <path d="M170 40 L240 120 L260 200 L80 200 L110 100 Z" fill="url(#ice-top)" stroke="white"
                                strokeWidth="2" stroke-opacity="0.5" className=""></path>

                            {/* Bottom Part (Underwater) */}
                            <path d="M80 200 L260 200 L280 350 C290 420 220 480 170 490 C120 480 50 420 60 350 Z"
                                fill="url(#ice-bottom)" className=""></path>

                            {/* Subtle Texture/Highlight on Bottom */}
                            <path d="M80 200 L170 490 L120 200 Z" fill="white" fill-opacity="0.05" className=""></path>
                        </svg>

                        {/* Floating Badge: Vanity Metrics (Top Left) */}
                        <div
                            className="absolute top-[15%] -left-[10%] bg-white dark:bg-[#1e293b] py-2 px-4 rounded-lg shadow-lg border border-slate-100 dark:border-white/10 flex items-center gap-2 animate-[float_4s_ease-in-out_infinite]">
                            <div className="p-1 rounded bg-slate-100 dark:bg-white/10 text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-thumbs-up">
                                    <path d="M7 10v12"></path>
                                    <path
                                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z">
                                    </path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Vanity Metrics</span>
                        </div>

                        {/* Floating Badge: Viral Posts (Top Right) */}
                        <div
                            className="absolute top-[22%] -right-[15%] bg-white dark:bg-[#1e293b] py-2 px-4 rounded-lg shadow-lg border border-slate-100 dark:border-white/10 flex items-center gap-2 animate-[float_5s_ease-in-out_1s_infinite]">
                            <div className="p-1 rounded bg-pink-50 dark:bg-pink-500/10 text-pink-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-sparkles">
                                    <path
                                        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
                                    </path>
                                </svg>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Viral Posts</span>
                        </div>

                        {/* Underwater Badge 1: Data Infra */}
                        <div
                            className="absolute top-[50%] -left-[20%] bg-white dark:bg-[#1e293b] py-2.5 px-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-indigo-50 dark:border-indigo-500/20 flex items-center gap-2.5 z-20 animate-[float_6s_ease-in-out_2s_infinite]">
                            <div
                                className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-database">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">Data Infrastructure</span>
                        </div>

                        {/* Underwater Badge 2: Revenue */}
                        <div
                            className="absolute top-[80%] -right-[25%] bg-white dark:bg-[#1e293b] py-2.5 px-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-emerald-50 dark:border-emerald-500/20 flex items-center gap-2.5 z-20 animate-[float_5s_ease-in-out_0.5s_infinite]">
                            <div
                                className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-circle-dollar-sign">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                    <path d="M12 18V6"></path>
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">Revenue Optimization</span>
                        </div>

                        {/* Underwater Badge 3: Agents (Center) */}
                        <div
                            className="absolute top-[88%] left-[10%] bg-white dark:bg-[#1e293b] py-2.5 px-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-purple-50 dark:border-purple-500/20 flex items-center gap-2.5 z-20 animate-[float_7s_ease-in-out_1.5s_infinite]">
                            <div
                                className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-bot">
                                    <path d="M12 8V4H8"></path>
                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                    <path d="M2 14h2"></path>
                                    <path d="M20 14h2"></path>
                                    <path d="M15 13v2"></path>
                                    <path d="M9 13v2"></path>
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white">Autonomous Agents</span>
                        </div>

                    </div>
                </div>

                {/* Right Column: Content Points */}
                <div className="space-y-12">

                    {/* Feature 1 */}
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0">
                            <div
                                className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-search-check">
                                    <path d="m8 11 2 2 4-4"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                Holistic Marketing Audits</h3>
                            <p className="text-[16px] text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                We don't guess. We look at every single touchpoint of your business—from email sequences
                                to ad spend—to determine exactly what fits your company and industry.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0">
                            <div
                                className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-trending-down">
                                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                                    <polyline points="16 17 22 17 22 11"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                                Eliminating Wasted Spend</h3>
                            <p className="text-[16px] text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                Social media ads are expensive if they target the wrong people. We identify operational
                                bottlenecks and marketing waste, cutting costs while increasing efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0">
                            <div
                                className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-sm border border-orange-100 dark:border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-crosshair">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="22" x2="18" y1="12" y2="12"></line>
                                    <line x1="6" x2="2" y1="12" y2="12"></line>
                                    <line x1="12" x2="12" y1="6" y2="2"></line>
                                    <line x1="12" x2="12" y1="22" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <h3
                                className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                                Strategy First, Automation Second</h3>
                            <p className="text-[16px] text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                Automation is useless without a plan. We build the strategy that brings in the of
                                qualified leads first, then we deploy the AI to handle them.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section
        className="lg:py-32 dark:bg-[#0f1218] overflow-hidden transition-colors duration-300 bg-slate-50 pt-24 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                <div className="max-w-2xl">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Latest Thinking
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                        Insights from the
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">frontier</span>.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                        Deep dives into automation, AI agents, and the future of digital infrastructure.
                    </p>
                </div>

                <div className="hidden md:flex gap-2">
                    <button id="bs-ext-prev"
                        className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-arrow-left">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                    </button>
                    <button id="bs-ext-next"
                        className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-arrow-right">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* 3D Card Slider Container */}
            <div id="blog-slider-wrap" className="relative group perspective-[1000px]">

                {/* The Card */}
                <div
                    className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-500 transform-style-3d hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">

                    <div className="grid lg:grid-cols-12 min-h-[550px]">

                        {/* Content Side (Left) */}
                        <div
                            className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between relative order-2 lg:order-1">
                            {/* Ambient Background Glow */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-100 transition-colors duration-700 bg-blue-500/10"
                                    id="bs-glow"></div>
                            </div>

                            <div className="relative z-10 space-y-8">
                                {/* Meta */}
                                <div className="flex items-center gap-4 animate-fade-in-up" style={{ transition: "none" }}>
                                    <span id="bs-category"
                                        className="px-3 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 uppercase tracking-wider border border-slate-200 dark:border-white/5">AI
                                        Technology</span>
                                    <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></div>
                                    <span id="bs-read-time"
                                        className="text-sm text-slate-500 dark:text-gray-500 font-mono">5 min read</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                                    style={{ transition: "none" }}>
                                    <a href="#" id="bs-title"
                                        className="hover:underline decoration-2 underline-offset-4 decoration-blue-500/30">The
                                        Future of Autonomous Agents in Enterprise</a>
                                </h3>

                                {/* Excerpt */}
                                <p id="bs-excerpt"
                                    className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-xl"
                                    style={{ transition: "none" }}>Manual data entry is obsolete. Learn how multi-agent
                                    systems are self-organizing to enrich leads, schedule meetings, and update deal
                                    stages without human intervention.</p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100 dark:border-white/5 relative z-10 animate-fade-in-up"
                                style={{ animationDelay: "100ms" }}>
                                <div className="flex items-center gap-4" style={{ transition: "none" }}>
                                    <div className="relative">
                                        <img id="bs-avatar"
                                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&amp;q=80"
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-[#161b22]"
                                            alt="Author" />
                                        <div
                                            className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#161b22] rounded-full">
                                        </div>
                                    </div>
                                    <div className="">
                                        <p id="bs-author" className="text-sm font-bold text-slate-900 dark:text-white">Alex
                                            Morgan</p>
                                        <p id="bs-date" className="text-xs text-slate-500 dark:text-gray-500 font-medium">
                                            Oct 24, 2023</p>
                                    </div>
                                </div>

                                <a href="#"
                                    className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Read Full Article
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Image Side (Right) */}
                        <div
                            className="lg:col-span-5 relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden bg-slate-100 dark:bg-black">
                            <div className="absolute inset-0 bg-slate-200 dark:bg-[#0b0e14] animate-pulse z-0"></div>

                            {/* Image with Parallax Effect */}
                            <img id="bs-image"
                                src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out z-10 scale-105"
                                alt="Blog Visual" style={{ transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }} />

                            {/* Overlay Gradients */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 lg:hidden">
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 z-20 hidden lg:block">
                            </div>

                            {/* Floating Badge on Image */}
                            <div className="absolute top-6 right-6 z-30">
                                <div
                                    className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-sparkles text-yellow-300">
                                        <path
                                            d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
                                        </path>
                                    </svg>
                                    <span className="text-xs font-semibold text-white">Featured</span>
                                </div>
                            </div>

                            {/* In-Card Navigation (Mobile/Small Screens) */}
                            <div
                                className="absolute bottom-0 right-0 left-0 p-4 flex justify-between items-center z-30 lg:hidden">
                                <div className="flex gap-2">
                                    <button id="bs-mobile-prev"
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-chevron-left">
                                            <path d="m15 18-6-6 6-6"></path>
                                        </svg>
                                    </button>
                                    <button id="bs-mobile-next"
                                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Decorative Elements behind slider */}
                <div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none -z-10">
                </div>
                <div
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10">
                </div>

            </div>
        </div>

        

        
    </section>
    <section id="roadmap-section"
        className="relative bg-white dark:bg-[#0f1218] font-jakarta border-t border-slate-200 dark:border-white/5 transition-colors duration-300">

        {/* Mobile/Tablet Layout (Vertical Stack) */}
        <div className="lg:hidden py-20 px-6 max-w-2xl mx-auto">
            {/* Header matching desktop */}
            <div className="text-center mb-16">
                <div
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 mb-8">
                    How We Work
                </div>
                <h2
                    className="font-jakarta text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[0.95] mb-6">
                    How we work.
                    <span
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-500">No
                        surprises.</span>
                </h2>
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                    Every engagement starts with understanding your operations — not selling you a solution. Here's how we go from first call to running systems.
                </p>
            </div>

            {/* Mobile Steps - clean vertical timeline */}
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-20 dark:opacity-30"></div>

                <div className="space-y-12">
                    {/* Step 1: Research & Discovery */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-lg font-bold text-blue-600 dark:text-blue-400">
                            01
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                            Discovery &amp; Audit</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-[15px] mb-4">
                            We map your current workflows, identify the highest-impact bottlenecks, and define exactly what to build — before writing a single line of code.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Workflow Mapping
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Bottleneck Analysis
                            </span>
                        </div>
                    </div>

                    {/* Step 2: Product Design */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            02
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                            Strategy &amp; Design</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-[15px] mb-4">
                            We design the solution architecture, select the right tools, and map data flows — so the build phase moves fast with no costly rework.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Tech Stack Selection
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Integration Planning
                            </span>
                        </div>
                    </div>

                    {/* Step 3: Product Development */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-lg font-bold text-purple-600 dark:text-purple-400">
                            03
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                            Build &amp; Integrate</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-[15px] mb-4">
                            We build in your environment, connect to your existing tools, and test every edge case before cutover — no surprises on go-live day.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Custom Automation
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                API Connections
                            </span>
                        </div>
                    </div>

                    {/* Step 4: Launch & Iterate */}
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            04
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                            Launch &amp; Optimize</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-[15px] mb-4">
                            We deploy, document, and monitor every system we build — and stay on to refine as your business grows and new opportunities surface.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Seamless Deployment
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full px-3 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                Analytics &amp; Optimization
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Desktop Scroll Layout */}
        <div className="hidden lg:block" id="roadmap-track" style={{ height: "600vh" }}>
            <div className="sticky flex flex-col overflow-hidden h-screen top-0">
                {/* Background Elements */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none">
                </div>
                <div
                    className="absolute top-0 w-full h-32 bg-gradient-to-b from-white dark:from-[#0f1218] to-transparent z-10 pointer-events-none">
                </div>

                {/* Header Section: Visible initially, gets covered */}
                <div id="rm-header"
                    className="absolute inset-0 flex flex-col items-center justify-center z-0 w-full max-w-7xl mx-auto px-6"
                    style={{ opacity: "1", transform: "scale(1)" }}>
                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-0 dark:opacity-100">
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="mb-10 w-fit">
                            <div
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                                How We Work
                            </div>
                        </div>

                        {/* Headline */}
                        <h2
                            className="mb-12 font-jakarta text-6xl md:text-8xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[0.95] lg:leading-[0.9]">
                            How we work.
                            <span
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-500">No
                                surprises.</span>
                        </h2>

                        {/* Subtext */}
                        <div className="flex max-w-2xl flex-col gap-6">
                            <p
                                className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
                                Every engagement starts with understanding your operations — not selling you a solution. Here's how we go from first call to running systems.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Scroll Indicator */}
                    <div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
                        <span
                            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Scroll
                            to explore</span>
                        <div className="h-10 w-px bg-gradient-to-b from-slate-300 to-transparent dark:from-white/20"></div>
                    </div>
                </div>

                {/* Sliding Content Section: Starts below view, slides up */}
                <div className="dark:bg-[#0f1218] will-change-transform dark:shadow-[0_-50px_100px_rgba(0,0,0,0.5)] z-20 bg-slate-50 w-full h-full absolute top-0 right-0 bottom-0 left-0 shadow-[0_-50px_100px_rgba(0,0,0,0.1)] translate-y-full"
                    style={{ transform: "translateY(100%)" }} id="rm-content">
                    {/* Styles for custom keyframe animations */}
                    

                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-20 gap-y-20 items-center">

                        {/* Left: Steps Text */}
                        <div className="relative h-[400px] hidden lg:block">
                            {/* Step 0 */}
                            <div className="step-text flex flex-col transition-all duration-700 ease-out opacity-100 absolute top-0 right-0 bottom-0 left-0 translate-y-0 justify-center"
                                data-index="0" style={{ opacity: "1", transform: "translateY(0px)" }}>
                                <div
                                    className="dark:text-[#1e232b] -left-6 -top-10 -z-10 select-none text-8xl font-semibold text-slate-100 mb-6 absolute">
                                    01</div>
                                <h3 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                                    Discovery &amp; Audit</h3>
                                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                    We map your current workflows, identify the highest-impact bottlenecks, and define exactly what to build — before writing a single line of code.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        Workflow Mapping
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        Bottleneck Analysis
                                    </li>
                                </ul>
                            </div>

                            {/* Step 1 */}
                            <div className="step-text absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out opacity-0 translate-y-12"
                                data-index="1" style={{ opacity: "1", transform: "translateY(0px)" }}>
                                <div
                                    className="text-8xl font-semibold text-slate-100 dark:text-[#1e232b] mb-6 absolute -left-6 -top-10 -z-10 select-none">
                                    02</div>
                                <h3 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                                    Strategy &amp; Design</h3>
                                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                    We design the solution architecture, select the right tools, and map data flows — so the build phase moves fast with no costly rework.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        Tech Stack Selection
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        Integration Planning
                                    </li>
                                </ul>
                            </div>

                            {/* Step 2 */}
                            <div className="step-text flex flex-col transition-all duration-700 ease-out opacity-0 absolute top-0 right-0 bottom-0 left-0 translate-y-12 justify-center"
                                data-index="2" style={{ opacity: "1", transform: "translateY(0px)" }}>
                                <div
                                    className="text-8xl font-semibold text-slate-100 dark:text-[#1e232b] mb-6 absolute -left-6 -top-10 -z-10 select-none">
                                    03</div>
                                <h3 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                                    Build &amp; Integrate</h3>
                                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                    We build in your environment, connect to your existing tools, and test every edge case before cutover — no surprises on go-live day.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        Custom Automation
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg></div>
                                        API Connections
                                    </li>
                                </ul>
                            </div>

                            {/* Step 3 */}
                            <div className="step-text flex flex-col transition-all duration-700 ease-out opacity-0 absolute top-0 right-0 bottom-0 left-0 translate-y-12 justify-center"
                                data-index="3" style={{ opacity: "1", transform: "translateY(0px)" }}>
                                <div
                                    className="dark:text-[#1e232b] -left-6 -top-10 -z-10 select-none text-8xl font-semibold text-slate-100 mb-6 absolute">
                                    04</div>
                                <h3 className="dark:text-white text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                                    Launch &amp; Optimize</h3>
                                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                                    We deploy, document, and monitor every system we build — and stay on to refine as your business grows and new opportunities surface.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        Seamless Deployment
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                                        <div
                                            className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-check">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        Analytics &amp; Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Visuals (Perspective Card) */}
                        <div
                            className="flex group w-full h-[550px] relative perspective-[1200px] items-center justify-center">
                            <div
                                className="relative w-[340px] md:w-[420px] h-[520px] transition-all duration-700 rotate-y-[-10deg] group-hover:rotate-y-0 preserve-3d">

                                {/* Dynamic Visuals Container */}
                                <div id="roadmap-visuals"
                                    className="absolute inset-0 rounded-2xl shadow-2xl bg-[#0B0E14] border border-white/10 overflow-hidden">

                                    {/* Shared Background Grid (Persistent) */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                                        style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
                                    </div>

                                    {/* Visual 0: Research & Discovery (The Blueprint) */}
                                    <div className="visual-slide absolute inset-0 transition-opacity duration-700 opacity-100"
                                        data-index="0">
                                        <div className="absolute inset-0 p-6 flex flex-col">
                                            {/* Header Wireframe */}
                                            <div
                                                className="h-14 w-full border-2 border-dashed border-slate-700/60 rounded-lg mb-4 flex items-center px-4 gap-3">
                                                <div
                                                    className="w-8 h-8 rounded-full border-2 border-dashed border-slate-700/60">
                                                </div>
                                                <div className="h-2 w-24 bg-slate-800/50 rounded"></div>
                                                <div
                                                    className="ml-auto h-8 w-20 border-2 border-dashed border-slate-700/60 rounded">
                                                </div>
                                            </div>
                                            {/* Main Layout Wireframe */}
                                            <div className="flex-1 flex gap-4">
                                                {/* Sidebar */}
                                                <div
                                                    className="w-16 h-full border-2 border-dashed border-slate-700/60 rounded-lg flex flex-col items-center py-4 gap-3">
                                                    <div
                                                        className="w-8 h-8 rounded border-2 border-dashed border-slate-700/60">
                                                    </div>
                                                    <div
                                                        className="w-8 h-8 rounded border-2 border-dashed border-slate-700/60">
                                                    </div>
                                                    <div
                                                        className="w-8 h-8 rounded border-2 border-dashed border-slate-700/60">
                                                    </div>
                                                </div>
                                                {/* Content */}
                                                <div
                                                    className="flex-1 h-full border-2 border-dashed border-slate-700/60 rounded-lg relative overflow-hidden">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="text-center space-y-2 opacity-50">
                                                            <div
                                                                className="w-12 h-12 border-2 border-dashed border-blue-500/50 rounded-full mx-auto flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    data-lucide="pen-tool" aria-hidden="true"
                                                                    className="lucide lucide-pen-tool w-6 h-6 text-blue-500/50">
                                                                    <path
                                                                        d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z">
                                                                    </path>
                                                                    <path
                                                                        d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18">
                                                                    </path>
                                                                    <path d="m2.3 2.3 7.286 7.286"></path>
                                                                    <circle cx="11" cy="11" r="2"></circle>
                                                                </svg>
                                                            </div>
                                                            <p
                                                                className="text-[10px] font-mono text-blue-500/50 uppercase tracking-widest">
                                                                Structure</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Floating Connection Nodes (Abstract) */}
                                            <div
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none">
                                                <div
                                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]">
                                                </div>
                                                <div
                                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual 1: Product Design (The Skeleton) */}
                                    <div className="visual-slide absolute inset-0 transition-opacity duration-700 opacity-0"
                                        data-index="1">
                                        <div className="absolute inset-0 p-6 flex flex-col">
                                            {/* Header Skeleton */}
                                            <div
                                                className="h-14 w-full bg-[#161b22] border border-white/5 rounded-lg mb-4 flex items-center px-4 gap-3 shadow-lg">
                                                <div className="w-8 h-8 rounded-full bg-slate-800/80 animate-pulse"></div>
                                                <div className="h-2 w-24 bg-slate-800/50 rounded"></div>
                                                <div
                                                    className="ml-auto h-8 w-20 bg-blue-500/10 rounded border border-blue-500/20">
                                                </div>
                                            </div>
                                            {/* Main Layout Skeleton */}
                                            <div className="flex-1 flex gap-4">
                                                {/* Sidebar */}
                                                <div
                                                    className="w-16 h-full bg-[#161b22] border border-white/5 rounded-lg flex flex-col items-center py-4 gap-4 shadow-lg">
                                                    <div className="w-8 h-8 rounded bg-slate-800/50"></div>
                                                    <div className="w-8 h-8 rounded-full bg-slate-800/30"></div>
                                                    <div className="w-8 h-8 rounded-full bg-slate-800/30"></div>
                                                </div>
                                                {/* Content Area */}
                                                <div
                                                    className="flex-1 h-full bg-[#161b22] border border-white/5 rounded-lg p-4 relative overflow-hidden shadow-lg">
                                                    {/* Charts Placeholders */}
                                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                                        <div
                                                            className="h-24 bg-slate-800/20 rounded-lg border border-white/5">
                                                        </div>
                                                        <div
                                                            className="h-24 bg-slate-800/20 rounded-lg border border-white/5">
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="h-32 bg-slate-800/20 rounded-lg border border-white/5 w-full">
                                                    </div>

                                                    {/* Cursor Interaction */}
                                                    <div
                                                        className="absolute top-1/3 right-1/4 animate-[float_4s_ease-in-out_infinite]">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            className="text-purple-500 fill-purple-500/20 drop-shadow-lg">
                                                            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                                                                stroke="currentColor" strokeWidth="2"
                                                                strokeLinejoin="round"></path>
                                                        </svg>
                                                        <div
                                                            className="absolute left-4 top-4 bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                                                            Alex</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual 2: Development (The Code) */}
                                    <div className="visual-slide absolute inset-0 transition-opacity duration-700 opacity-0"
                                        data-index="2">
                                        <div
                                            className="absolute inset-0 bg-[#0d1117]/95 backdrop-blur-sm p-6 font-mono text-xs flex flex-col">
                                            {/* Simulated Code Overlay */}
                                            <div className="flex-1 text-slate-500 space-y-1 overflow-hidden opacity-60">
                                                <div className="flex"><span className="text-purple-400">import</span>&nbsp;<span
                                                        className="text-white">React</span>&nbsp;<span
                                                        className="text-purple-400">from</span>&nbsp;<span
                                                        className="text-green-400">'react'</span>;</div>
                                                <div className="flex"><span className="text-purple-400">import</span>&nbsp;{
                                                    <span className="text-yellow-200">Stats</span> }&nbsp;<span
                                                        className="text-purple-400">from</span>&nbsp;<span
                                                        className="text-green-400">'@/components'</span>;</div>

                                                <div className="flex"><span className="text-blue-400">const</span>&nbsp;<span
                                                        className="text-yellow-200">Dashboard</span>&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
                                                </div>
                                                <div className="pl-4 text-slate-400">// Fetching live metrics</div>
                                                <div className="pl-4 flex"><span
                                                        className="text-blue-400">const</span>&nbsp;data&nbsp;=&nbsp;<span
                                                        className="text-yellow-200">useQuery</span>(<span
                                                        className="text-green-400">'metrics'</span>);</div>
                                                <div className="pl-4 flex"><span
                                                        className="text-purple-400">return</span>&nbsp;(</div>
                                                <div className="pl-8 text-white">&lt;Layout&gt;</div>
                                                <div className="pl-12 text-white">&lt;Grid&gt;</div>
                                                <div className="pl-16 text-white">&lt;StatsCard data={'{data}'} /&gt;</div>
                                                <div className="pl-16 text-white">&lt;Chart type="line" /&gt;</div>
                                                <div className="pl-12 text-white">&lt;/Grid&gt;</div>
                                                <div className="pl-8 text-white">&lt;/Layout&gt;</div>
                                                <div className="pl-4">);</div>
                                                <div>{'};'}</div>
                                            </div>

                                            {/* Build Terminal */}
                                            <div
                                                className="mt-4 h-32 bg-black/50 rounded-lg border border-slate-700/50 p-3 font-mono text-[10px] relative overflow-hidden">
                                                <div
                                                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-[loading_2s_ease-in-out_infinite]">
                                                </div>
                                                <div className="text-green-400 space-y-1">
                                                    <div>&gt; next build</div>
                                                    <div className="text-slate-400">Creating an optimized production
                                                        build...</div>
                                                    <div className="text-slate-400">Compiled successfully in 842ms</div>
                                                    <div className="text-blue-400">Finalizing page optimization...</div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-green-500">✓</span>
                                                        <span className="text-white">Ready for deployment</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual 3: Launch (The Product) */}
                                    <div className="visual-slide absolute inset-0 transition-opacity duration-700 opacity-0"
                                        data-index="3">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B0E14] to-black">
                                            {/* Live UI */}
                                            <div className="absolute inset-0 p-6 flex flex-col">
                                                {/* Real Header */}
                                                <div
                                                    className="h-14 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg mb-4 flex items-center px-4 gap-3 shadow-lg">
                                                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&amp;q=80"
                                                        className="w-8 h-8 rounded-full border-2 border-emerald-500/50" />
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-white">Alex Morgan</span>
                                                        <span className="text-[9px] text-emerald-400">Online • Admin</span>
                                                    </div>
                                                    <button
                                                        className="ml-auto px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded shadow-lg shadow-blue-500/20 transition-all">
                                                        Export Report
                                                    </button>
                                                </div>

                                                {/* Real Content */}
                                                <div className="flex-1 flex gap-4">
                                                    {/* Functional Sidebar */}
                                                    <div
                                                        className="w-16 h-full bg-white/5 border border-white/10 rounded-lg flex flex-col items-center py-4 gap-4 shadow-lg">
                                                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                data-lucide="layout-dashboard" aria-hidden="true"
                                                                className="lucide lucide-layout-dashboard w-4 h-4">
                                                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                                            </svg></div>
                                                        <div
                                                            className="p-2 text-slate-500 hover:text-white transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                data-lucide="users" aria-hidden="true"
                                                                className="lucide lucide-users w-4 h-4">
                                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
                                                                </path>
                                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                                <circle cx="9" cy="7" r="4"></circle>
                                                            </svg></div>
                                                        <div
                                                            className="p-2 text-slate-500 hover:text-white transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                data-lucide="settings" aria-hidden="true"
                                                                className="lucide lucide-settings w-4 h-4">
                                                                <path
                                                                    d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915">
                                                                </path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg></div>
                                                    </div>

                                                    {/* Real Dashboard */}
                                                    <div className="flex-1 h-full flex flex-col gap-4">
                                                        {/* Stats Row */}
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div
                                                                className="bg-white/5 border border-white/10 p-3 rounded-lg relative overflow-hidden group">
                                                                <div
                                                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                                </div>
                                                                <div
                                                                    className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                                                                    Revenue</div>
                                                                <div className="text-xl font-bold text-white mb-1">$42,593
                                                                </div>
                                                                <div
                                                                    className="text-[10px] text-emerald-400 flex items-center gap-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" strokeWidth="2"
                                                                        strokeLinecap="round" strokeLinejoin="round"
                                                                        data-lucide="trending-up" aria-hidden="true"
                                                                        className="lucide lucide-trending-up w-3 h-3">
                                                                        <path d="M16 7h6v6"></path>
                                                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                                                    </svg> +12.5%
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="bg-white/5 border border-white/10 p-3 rounded-lg relative overflow-hidden group">
                                                                <div
                                                                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                                </div>
                                                                <div
                                                                    className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                                                                    Users</div>
                                                                <div className="text-xl font-bold text-white mb-1">1,240
                                                                </div>
                                                                <div
                                                                    className="text-[10px] text-emerald-400 flex items-center gap-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" strokeWidth="2"
                                                                        strokeLinecap="round" strokeLinejoin="round"
                                                                        data-lucide="trending-up" aria-hidden="true"
                                                                        className="lucide lucide-trending-up w-3 h-3">
                                                                        <path d="M16 7h6v6"></path>
                                                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                                                    </svg> +8.2%
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Chart Area */}
                                                        <div
                                                            className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 relative group">
                                                            <div className="flex items-center justify-between mb-4">
                                                                <div className="text-xs font-semibold text-white">Traffic
                                                                    Overview</div>
                                                                <div className="flex gap-1">
                                                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                                    <div className="w-2 h-2 rounded-full bg-purple-500">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* CSS Bar Chart */}
                                                            <div
                                                                className="absolute bottom-3 left-3 right-3 h-24 flex items-end justify-between gap-1">
                                                                <div
                                                                    className="w-full bg-blue-500/30 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-500">
                                                                </div>
                                                                <div
                                                                    className="w-full bg-blue-500/30 rounded-t-sm h-[70%] group-hover:h-[50%] transition-all duration-500">
                                                                </div>
                                                                <div
                                                                    className="w-full bg-blue-500/30 rounded-t-sm h-[50%] group-hover:h-[80%] transition-all duration-500">
                                                                </div>
                                                                <div
                                                                    className="w-full bg-blue-500/30 rounded-t-sm h-[85%] group-hover:h-[65%] transition-all duration-500">
                                                                </div>
                                                                <div
                                                                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Live Badge Overlay */}
                                            <div className="absolute top-4 right-4 z-20">
                                                <div
                                                    className="bg-green-500/20 border border-green-500/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span
                                                        className="text-[10px] font-bold text-green-400 tracking-wide">SYSTEM
                                                        LIVE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Progress Line Indicator (Inside Content) */}
                    <div
                        className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-0.5 bg-slate-200 dark:bg-white/10 hidden lg:block">
                        <div id="roadmap-progress-bar"
                            className="absolute top-0 w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-100 ease-out"
                            style={{ height: "0%", top: "0%" }}></div>
                    </div>

                    {/* Enhanced Scroll Script */}
                    
                </div>

                
            </div>
        </div>

        

        
    </section>

    </>
  )
}
