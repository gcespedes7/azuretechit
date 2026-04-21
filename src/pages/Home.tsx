import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, ShieldAlert, Terminal, BarChart3, FileEdit, Bot, Split,
  MessageSquare, BrainCircuit, Database, Shield, Kanban, Search, FileText, Phone,
  Cloud, GitBranch, Star, Users, Mail, Sparkles, Cpu, Settings2, Globe,
  Share2, Box, Triangle, Hexagon, CircleDashed, MessageSquareText, RefreshCw,
  Mic, SearchCheck, TrendingDown, Crosshair, ArrowLeft, ThumbsUp,
  CircleDollarSign, ArrowUpRight, ChevronLeft, ChevronRight, Check,
  TrendingUp, LayoutDashboard, Settings
} from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────
interface WorkflowNode {
  id: string
  label: string
  icon: string
  x: number
  y: number
  type?: string
}
interface WorkflowConnection {
  from: string
  to: string
}
interface WorkflowData {
  nodes: WorkflowNode[]
  connections: WorkflowConnection[]
  toolNodes: WorkflowNode[]
}

// ── Workflow data ────────────────────────────────────────────────────────────
const workflows: Record<string, WorkflowData> = {
  it: {
    nodes: [
      { id: 'trigger', label: 'IT Alert Received', icon: 'zap', x: 120, y: 200 },
      { id: 'classify', label: 'AI Classifier', icon: 'brain-circuit', x: 320, y: 200 },
      { id: 'ticket', label: 'Create Ticket', icon: 'file-text', x: 520, y: 120 },
      { id: 'notify', label: 'Notify Team', icon: 'message-square', x: 520, y: 280 },
      { id: 'resolve', label: 'Auto-Resolve', icon: 'check', x: 720, y: 200 },
    ],
    connections: [
      { from: 'trigger', to: 'classify' },
      { from: 'classify', to: 'ticket' },
      { from: 'classify', to: 'notify' },
      { from: 'ticket', to: 'resolve' },
      { from: 'notify', to: 'resolve' },
    ],
    toolNodes: [
      { id: 't1', label: 'PagerDuty', icon: 'phone', x: 80, y: 60 },
      { id: 't2', label: 'Jira', icon: 'kanban', x: 240, y: 60 },
      { id: 't3', label: 'Slack', icon: 'message-square', x: 400, y: 60 },
      { id: 't4', label: 'GitHub', icon: 'git-branch', x: 560, y: 60 },
    ],
  },
  sec: {
    nodes: [
      { id: 'trigger', label: 'Threat Detected', icon: 'shield-alert', x: 120, y: 200 },
      { id: 'analyze', label: 'AI Analysis', icon: 'search', x: 320, y: 200 },
      { id: 'block', label: 'Auto-Block', icon: 'shield', x: 520, y: 120 },
      { id: 'alert', label: 'Security Alert', icon: 'bell', x: 520, y: 280 },
      { id: 'report', label: 'Incident Report', icon: 'file-text', x: 720, y: 200 },
    ],
    connections: [
      { from: 'trigger', to: 'analyze' },
      { from: 'analyze', to: 'block' },
      { from: 'analyze', to: 'alert' },
      { from: 'block', to: 'report' },
      { from: 'alert', to: 'report' },
    ],
    toolNodes: [
      { id: 't1', label: 'Crowdstrike', icon: 'crosshair', x: 80, y: 60 },
      { id: 't2', label: 'Splunk', icon: 'search-check', x: 240, y: 60 },
      { id: 't3', label: 'Okta', icon: 'users', x: 400, y: 60 },
      { id: 't4', label: 'AWS', icon: 'cloud', x: 560, y: 60 },
    ],
  },
  dev: {
    nodes: [
      { id: 'trigger', label: 'Code Commit', icon: 'git-branch', x: 120, y: 200 },
      { id: 'test', label: 'Run Tests', icon: 'terminal', x: 320, y: 200 },
      { id: 'build', label: 'Build & Deploy', icon: 'cpu', x: 520, y: 120 },
      { id: 'notify', label: 'Notify Dev', icon: 'message-square', x: 520, y: 280 },
      { id: 'monitor', label: 'Monitor', icon: 'bar-chart-3', x: 720, y: 200 },
    ],
    connections: [
      { from: 'trigger', to: 'test' },
      { from: 'test', to: 'build' },
      { from: 'test', to: 'notify' },
      { from: 'build', to: 'monitor' },
      { from: 'notify', to: 'monitor' },
    ],
    toolNodes: [
      { id: 't1', label: 'GitHub', icon: 'git-branch', x: 80, y: 60 },
      { id: 't2', label: 'Vercel', icon: 'triangle', x: 240, y: 60 },
      { id: 't3', label: 'Datadog', icon: 'bar-chart-3', x: 400, y: 60 },
      { id: 't4', label: 'Slack', icon: 'message-square', x: 560, y: 60 },
    ],
  },
  sales: {
    nodes: [
      { id: 'trigger', label: 'Lead Captured', icon: 'users', x: 120, y: 200 },
      { id: 'score', label: 'AI Scoring', icon: 'brain-circuit', x: 320, y: 200 },
      { id: 'crm', label: 'Update CRM', icon: 'database', x: 520, y: 120 },
      { id: 'email', label: 'Send Email', icon: 'mail', x: 520, y: 280 },
      { id: 'follow', label: 'Follow-Up Task', icon: 'check', x: 720, y: 200 },
    ],
    connections: [
      { from: 'trigger', to: 'score' },
      { from: 'score', to: 'crm' },
      { from: 'score', to: 'email' },
      { from: 'crm', to: 'follow' },
      { from: 'email', to: 'follow' },
    ],
    toolNodes: [
      { id: 't1', label: 'HubSpot', icon: 'trending-up', x: 80, y: 60 },
      { id: 't2', label: 'Gmail', icon: 'mail', x: 240, y: 60 },
      { id: 't3', label: 'LinkedIn', icon: 'share-2', x: 400, y: 60 },
      { id: 't4', label: 'Calendly', icon: 'settings-2', x: 560, y: 60 },
    ],
  },
}

// ── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    key: 'blue',
    title: 'Web Design & Development',
    desc: 'Custom websites that convert — fast, beautiful, and built to scale your business.',
    icon: Globe,
    features: ['Custom Design', 'React + TypeScript', 'SEO Optimized', 'Mobile First'],
    cta: 'See Our Work',
    href: '/web-design',
  },
  {
    key: 'orange',
    title: 'Business Automation',
    desc: 'Eliminate repetitive work with intelligent workflows that run 24/7 without you.',
    icon: Zap,
    features: ['n8n Workflows', 'API Integrations', 'CRM Sync', 'AI-Powered'],
    cta: 'Automate Now',
    href: '/automation',
  },
  {
    key: 'emerald',
    title: 'AI Integration',
    desc: 'Embed intelligence into your products and processes with practical AI solutions.',
    icon: BrainCircuit,
    features: ['LLM Integration', 'AI Agents', 'Data Pipelines', 'Custom Models'],
    cta: 'Explore AI',
    href: '/ai-integration',
  },
  {
    key: 'purple',
    title: 'Social Media Management',
    desc: 'Consistent, on-brand content that grows your audience and drives real engagement.',
    icon: Share2,
    features: ['Content Strategy', 'Daily Posting', 'Analytics', 'Brand Voice'],
    cta: 'Grow Social',
    href: '/social-media',
  },
]

const serviceThemes: Record<string, { accent: string; glow: string; badge: string; btn: string }> = {
  blue: {
    accent: 'text-sky-400',
    glow: 'shadow-sky-500/20',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    btn: 'bg-sky-500 hover:bg-sky-400 text-white',
  },
  orange: {
    accent: 'text-orange-400',
    glow: 'shadow-orange-500/20',
    badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    btn: 'bg-orange-500 hover:bg-orange-400 text-white',
  },
  emerald: {
    accent: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    btn: 'bg-emerald-500 hover:bg-emerald-400 text-white',
  },
  purple: {
    accent: 'text-purple-400',
    glow: 'shadow-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    btn: 'bg-purple-500 hover:bg-purple-400 text-white',
  },
}

// ── Blog posts data ──────────────────────────────────────────────────────────
const blogPosts = [
  {
    title: 'Why Every Business Needs an AI Strategy in 2025',
    category: 'AI & Strategy',
    readTime: '5 min read',
    excerpt: 'The companies pulling ahead aren\'t bigger — they\'re smarter. Here\'s how to build an AI strategy that actually works for your business.',
    author: 'Gabriel Cespedes',
    date: 'Apr 12, 2025',
    color: 'from-sky-600 to-blue-800',
  },
  {
    title: 'Automate or Die: The Case for Workflow Automation',
    category: 'Automation',
    readTime: '7 min read',
    excerpt: 'Manual processes are killing your margins. Learn how smart automation can save 20+ hours a week and cut operational costs by 40%.',
    author: 'Gabriel Cespedes',
    date: 'Mar 28, 2025',
    color: 'from-orange-600 to-amber-800',
  },
  {
    title: 'Building a Website That Actually Converts',
    category: 'Web Design',
    readTime: '6 min read',
    excerpt: 'Most websites look fine and perform terribly. Here\'s the conversion framework we use on every client site.',
    author: 'Gabriel Cespedes',
    date: 'Mar 15, 2025',
    color: 'from-emerald-600 to-teal-800',
  },
]

// ── Roadmap steps ────────────────────────────────────────────────────────────
const roadmapSteps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'We learn your business inside out',
    desc: 'Deep-dive call to map your current workflow, pain points, tech stack, and goals. No templates — we build a picture unique to you.',
    items: ['Business audit', 'Workflow mapping', 'Competitor analysis', 'Goal alignment'],
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategy',
    subtitle: 'We design your transformation plan',
    desc: 'Custom roadmap with prioritized quick wins and long-term architecture. You get a detailed plan before we write a single line of code.',
    items: ['Custom roadmap', 'Tech stack selection', 'ROI projections', 'Timeline planning'],
    icon: LayoutDashboard,
  },
  {
    num: '03',
    title: 'Build',
    subtitle: 'We execute with precision',
    desc: 'Rapid, iterative builds with weekly demos. You see progress every step of the way — no black-box development.',
    items: ['Weekly demos', 'Iterative development', 'Quality testing', 'Performance tuning'],
    icon: Settings2,
  },
  {
    num: '04',
    title: 'Launch',
    subtitle: 'We deploy and stand by you',
    desc: 'Go-live support, team training, and ongoing optimization. We\'re not done when the site goes live — we\'re just getting started.',
    items: ['Go-live support', 'Team training', 'Monitoring setup', 'Ongoing optimization'],
    icon: Sparkles,
  },
]

// ── NodeIcon helper ───────────────────────────────────────────────────────────
function NodeIcon({ name, cls = 'w-4 h-4' }: { name: string; cls?: string }) {
  const p = { className: cls }
  switch (name) {
    case 'zap': return <Zap {...p} />
    case 'shield-alert': return <ShieldAlert {...p} />
    case 'terminal': return <Terminal {...p} />
    case 'bar-chart-3': return <BarChart3 {...p} />
    case 'file-edit': return <FileEdit {...p} />
    case 'bot': return <Bot {...p} />
    case 'split': return <Split {...p} />
    case 'message-square': return <MessageSquare {...p} />
    case 'brain-circuit': return <BrainCircuit {...p} />
    case 'database': return <Database {...p} />
    case 'shield': return <Shield {...p} />
    case 'kanban': return <Kanban {...p} />
    case 'search': return <Search {...p} />
    case 'file-text': return <FileText {...p} />
    case 'phone': return <Phone {...p} />
    case 'cloud': return <Cloud {...p} />
    case 'git-branch': return <GitBranch {...p} />
    case 'star': return <Star {...p} />
    case 'users': return <Users {...p} />
    case 'mail': return <Mail {...p} />
    case 'sparkles': return <Sparkles {...p} />
    case 'cpu': return <Cpu {...p} />
    case 'settings-2': return <Settings2 {...p} />
    case 'globe': return <Globe {...p} />
    case 'share-2': return <Share2 {...p} />
    case 'box': return <Box {...p} />
    case 'triangle': return <Triangle {...p} />
    case 'hexagon': return <Hexagon {...p} />
    case 'circle-dashed': return <CircleDashed {...p} />
    case 'message-square-text': return <MessageSquareText {...p} />
    case 'refresh-cw': return <RefreshCw {...p} />
    case 'mic': return <Mic {...p} />
    case 'search-check': return <SearchCheck {...p} />
    case 'trending-down': return <TrendingDown {...p} />
    case 'crosshair': return <Crosshair {...p} />
    case 'arrow-left': return <ArrowLeft {...p} />
    case 'thumbs-up': return <ThumbsUp {...p} />
    case 'circle-dollar-sign': return <CircleDollarSign {...p} />
    case 'arrow-up-right': return <ArrowUpRight {...p} />
    case 'check': return <Check {...p} />
    case 'trending-up': return <TrendingUp {...p} />
    case 'layout-dashboard': return <LayoutDashboard {...p} />
    case 'settings': return <Settings {...p} />
    default: return <Zap {...p} />
  }
}

// ── WorkflowCanvas sub-component ──────────────────────────────────────────────
function WorkflowCanvas({ tab }: { tab: string }) {
  const data = workflows[tab]
  const nodeMap: Record<string, WorkflowNode> = {}
  data.nodes.forEach(n => { nodeMap[n.id] = n })

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Tool nodes row */}
      <div className="absolute top-4 left-0 right-0 flex gap-3 px-6">
        {data.toolNodes.map(t => (
          <div key={t.id} className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-xs text-slate-300">
            <NodeIcon name={t.icon} cls="w-3 h-3 text-sky-400" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {data.connections.map((c, i) => {
          const from = nodeMap[c.from]
          const to = nodeMap[c.to]
          if (!from || !to) return null
          const x1 = from.x + 70
          const y1 = from.y + 20
          const x2 = to.x
          const y2 = to.y + 20
          const mx = (x1 + x2) / 2
          return (
            <g key={i}>
              <path
                d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="4 3"
              />
              <circle r="3" fill="#38bdf8" opacity="0.7">
                <animateMotion dur="2.5s" repeatCount="indefinite">
                  <mpath href={`#path-${tab}-${i}`} />
                </animateMotion>
              </circle>
              <path
                id={`path-${tab}-${i}`}
                d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                fill="none"
                stroke="none"
              />
            </g>
          )
        })}
      </svg>

      {/* Main nodes */}
      {data.nodes.map(node => (
        <div
          key={node.id}
          className="absolute flex items-center gap-2 bg-slate-800/90 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 shadow-lg"
          style={{ left: node.x, top: node.y, minWidth: '140px' }}
        >
          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center">
            <NodeIcon name={node.icon} cls="w-4 h-4 text-sky-400" />
          </span>
          <span className="text-xs font-medium leading-tight">{node.label}</span>
        </div>
      ))}
    </div>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────
const phrases = [
  'Amplify potential.',
  'Automate everything.',
  'Build smarter.',
  'Scale faster.',
  'Deliver results.',
]

export default function Home() {
  // Typewriter
  const [typedText, setTypedText] = useState('Amplify potential.')
  const pIdxRef = useRef(0)
  const cIdxRef = useRef(phrases[0].length)
  const isDeletingRef = useRef(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    function tick() {
      const phrase = phrases[pIdxRef.current]
      const isDeleting = isDeletingRef.current
      const current = cIdxRef.current

      if (isDeleting) {
        cIdxRef.current = current - 1
        setTypedText(phrase.substring(0, cIdxRef.current))
        if (cIdxRef.current === 0) {
          isDeletingRef.current = false
          pIdxRef.current = (pIdxRef.current + 1) % phrases.length
          timeout = setTimeout(tick, 400)
        } else {
          timeout = setTimeout(tick, 50)
        }
      } else {
        cIdxRef.current = current + 1
        setTypedText(phrases[pIdxRef.current].substring(0, cIdxRef.current))
        if (cIdxRef.current === phrases[pIdxRef.current].length) {
          isDeletingRef.current = true
          timeout = setTimeout(tick, 2200)
        } else {
          timeout = setTimeout(tick, 80)
        }
      }
    }
    timeout = setTimeout(tick, 2200)
    return () => clearTimeout(timeout)
  }, [])

  // Workflow tabs
  const [activeTab, setActiveTab] = useState<'it' | 'sec' | 'dev' | 'sales'>('it')

  // Service carousel
  const [activeService, setActiveService] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Blog slider
  const [blogIndex, setBlogIndex] = useState(0)

  // Roadmap scroll
  const [roadmapStep, setRoadmapStep] = useState(0)
  const roadmapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleScroll() {
      if (!roadmapRef.current) return
      const rect = roadmapRef.current.getBoundingClientRect()
      const total = roadmapRef.current.offsetHeight - window.innerHeight
      if (total <= 0) return
      const scrolled = -rect.top
      const fraction = Math.max(0, Math.min(1, scrolled / total))
      const step = Math.min(roadmapSteps.length - 1, Math.floor(fraction * roadmapSteps.length))
      setRoadmapStep(step)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3D tilt
  function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (-y / rect.height) * 12
    const rotY = (x / rect.width) * 12
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }
  function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
    ;(e.currentTarget as HTMLDivElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const activeTheme = serviceThemes[services[activeService].key]
  const ActiveServiceIcon = services[activeService].icon

  return (
    <>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
        }
        @keyframes loading {
          0% { width: 0% }
          100% { width: 100% }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6 }
          100% { transform: scale(1.8); opacity: 0 }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px) }
          to { opacity: 1; transform: translateY(0) }
        }
        .animate-slide-up { animation: slide-up 0.6s ease forwards; }
        .typewriter-cursor { animation: blink 0.9s step-end infinite; }
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4s ease-in-out infinite 1s; }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020b18]">
        {/* UnicornStudio animated background */}
        <div
          className="absolute inset-0 w-full h-full"
          data-us-project="mMSzNNvSdN82dL3h8XFl"
          data-us-scale="1"
          data-us-dpr="1"
          data-us-lazyload="false"
          style={{ zIndex: 0 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b18]/40 via-transparent to-[#020b18]" style={{ zIndex: 1 }} />

        <div className="relative container mx-auto px-6 lg:px-12 py-32 pt-48" style={{ zIndex: 2 }}>
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-sky-400 pulse-ring inline-block" />
              <span className="text-sky-300 text-sm font-medium">AI-Powered Business Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Technology built to{' '}
              <span className="text-sky-400">
                {typedText}
                <span className="typewriter-cursor text-sky-300">|</span>
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Azuretech partners with growing businesses to deliver custom websites, intelligent automation, and AI integrations that drive real, measurable results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5"
              >
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/web-design"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
              {[
                { val: '50+', label: 'Projects Delivered' },
                { val: '40%', label: 'Avg Cost Reduction' },
                { val: '20h+', label: 'Saved Per Week' },
                { val: '100%', label: 'Client Satisfaction' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white">{s.val}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="bg-slate-900/50 border-y border-slate-800/60 py-12 overflow-hidden">
        <div className="container mx-auto px-6 mb-6 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Trusted by businesses across industries</p>
        </div>
        <div className="flex gap-12 items-center justify-center flex-wrap px-6">
          {['Microsoft', 'HubSpot', 'Slack', 'AWS', 'Vercel', 'GitHub', 'OpenAI', 'Stripe'].map(b => (
            <span key={b} className="text-slate-500 font-semibold text-lg hover:text-slate-300 transition-colors duration-200 cursor-default">{b}</span>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW SECTION ── */}
      <section className="py-24 bg-[#030d1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Automation for every team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Pick your department and see exactly how we eliminate manual work with intelligent workflows.</p>
          </div>

          {/* Tab bar */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {[
              { key: 'it', label: 'IT Ops', icon: <Cpu className="w-4 h-4" /> },
              { key: 'sec', label: 'Security', icon: <Shield className="w-4 h-4" /> },
              { key: 'dev', label: 'DevOps', icon: <Terminal className="w-4 h-4" /> },
              { key: 'sales', label: 'Sales', icon: <TrendingUp className="w-4 h-4" /> },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key as typeof activeTab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === t.key
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/40'
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Canvas */}
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
            <WorkflowCanvas tab={activeTab} />
          </div>
        </div>
      </section>

      {/* ── SERVICES CAROUSEL ── */}
      <section className="py-24 bg-[#020b18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Services that move the needle</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Four core offerings. One team. Endless ways to grow.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service selector */}
            <div className="flex flex-col gap-3">
              {services.map((s, i) => {
                const Icon = s.icon
                const theme = serviceThemes[s.key]
                return (
                  <button
                    key={s.key}
                    onClick={() => setActiveService(i)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                      activeService === i
                        ? `bg-slate-800 border-slate-600 shadow-xl ${theme.glow}`
                        : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-800/40'
                    }`}
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeService === i ? 'bg-slate-700' : 'bg-slate-800'}`}>
                      <Icon className={`w-5 h-5 ${theme.accent}`} />
                    </span>
                    <div>
                      <div className={`font-semibold ${activeService === i ? 'text-white' : 'text-slate-400'}`}>{s.title}</div>
                      {activeService === i && <div className="text-slate-400 text-sm mt-0.5 line-clamp-1">{s.desc}</div>}
                    </div>
                    {activeService === i && (
                      <ArrowRight className={`w-4 h-4 ml-auto flex-shrink-0 ${theme.accent}`} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Active service detail */}
            <div className={`bg-slate-900 border border-slate-700/60 rounded-2xl p-8 shadow-2xl ${activeTheme.glow}`} key={activeService}>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <ActiveServiceIcon className={`w-7 h-7 ${activeTheme.accent}`} />
                </span>
                <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">{services[activeService].desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {services[activeService].features.map(f => (
                  <div key={f} className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg border ${activeTheme.badge}`}>
                    <Check className="w-3.5 h-3.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                to={services[activeService].href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${activeTheme.btn}`}
              >
                {services[activeService].cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeService === i ? 'w-8 h-2 bg-sky-500' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSET / DASHBOARD SECTION ── */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Asset Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                Know exactly what you own, what you spend, and where it all goes
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Most businesses have no idea how many tools they're paying for — or which ones are actually being used. Our Asset & Expense Intelligence layer gives you a living map of your entire tech stack in real time.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  'Auto-discover every SaaS subscription',
                  'Flag unused licenses and ghost accounts',
                  'Consolidate overlapping tools',
                  'Track spend against actual usage',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/automation"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:-translate-y-0.5"
              >
                Explore Automation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3D Dashboard visual */}
            <div
              className="relative cursor-pointer select-none"
              style={{ transition: 'transform 0.15s ease' }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/60">
                {/* Dashboard header */}
                <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-orange-400" />
                    <span className="text-white text-sm font-semibold">Asset Intelligence</span>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Live</span>
                </div>

                <div className="p-6">
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Total Tools', val: '47', change: '+3', up: true },
                      { label: 'Monthly Spend', val: '$8,240', change: '-12%', up: false },
                      { label: 'Unused Licenses', val: '14', change: 'Action needed', up: false },
                    ].map(m => (
                      <div key={m.label} className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/40">
                        <div className="text-slate-500 text-xs mb-1">{m.label}</div>
                        <div className="text-white font-bold text-lg">{m.val}</div>
                        <div className={`text-xs ${m.up ? 'text-sky-400' : 'text-orange-400'}`}>{m.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Spend bar chart */}
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/40">
                    <div className="text-slate-400 text-xs mb-3">Spend by Category</div>
                    {[
                      { cat: 'Productivity', pct: 75, color: 'bg-sky-500' },
                      { cat: 'Security', pct: 55, color: 'bg-orange-500' },
                      { cat: 'Dev Tools', pct: 40, color: 'bg-emerald-500' },
                      { cat: 'Marketing', pct: 30, color: 'bg-purple-500' },
                    ].map(r => (
                      <div key={r.cat} className="flex items-center gap-3 mb-2">
                        <span className="text-slate-400 text-xs w-24 text-right">{r.cat}</span>
                        <div className="flex-1 bg-slate-700/50 rounded-full h-2">
                          <div className={`${r.color} h-2 rounded-full`} style={{ width: `${r.pct}%` }} />
                        </div>
                        <span className="text-slate-400 text-xs w-8">{r.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ICEBERG SECTION ── */}
      <section className="py-24 bg-[#030d1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">The Iceberg Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">What you see vs. what we see</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Most businesses focus on the surface. We work at every layer — from what your customers see to the infrastructure keeping it running.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Above water */}
            <div className="bg-sky-500/5 border border-sky-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-sky-400" />
                <span className="text-sky-300 font-semibold">Above the Surface</span>
              </div>
              <ul className="flex flex-col gap-3">
                {['Website & landing pages', 'Social media presence', 'Email campaigns', 'Client-facing dashboards'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Below water */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Below the Surface</span>
              </div>
              <ul className="flex flex-col gap-3">
                {['CRM & sales automation', 'AI-powered workflows', 'Security & compliance', 'Data pipelines & integrations'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG SLIDER ── */}
      <section className="py-24 bg-[#020b18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Insights</span>
              <h2 className="text-4xl font-bold text-white mt-2">From the blog</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setBlogIndex(prev => (prev - 1 + blogPosts.length) % blogPosts.length)}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setBlogIndex(prev => (prev + 1) % blogPosts.length)}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => {
              const offset = (i - blogIndex + blogPosts.length) % blogPosts.length
              return (
                <div
                  key={i}
                  className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-500 ${
                    offset === 0
                      ? 'border-sky-500/40 shadow-xl shadow-sky-500/10 scale-100 opacity-100'
                      : 'border-slate-700/40 opacity-60 scale-95'
                  }`}
                >
                  {/* Image placeholder with gradient */}
                  <div className={`h-44 bg-gradient-to-br ${post.color} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">{post.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug mb-3">{post.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80">
                      <span className="text-slate-500 text-xs">{post.author}</span>
                      <button className="text-sky-400 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer">
                        Read more <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Blog dots */}
          <div className="flex justify-center gap-2 mt-8">
            {blogPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => setBlogIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  blogIndex === i ? 'w-6 h-2 bg-sky-500' : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">How we work together</h2>
            <p className="text-slate-400 max-w-xl mx-auto">A clear, repeatable process that keeps you in control from day one to launch day.</p>
          </div>

          {/* Desktop: sticky scroll (tall container) */}
          <div
            ref={roadmapRef}
            className="hidden lg:block relative"
            style={{ height: `${roadmapSteps.length * 100}vh` }}
          >
            <div className="sticky top-24 flex gap-16 items-start">
              {/* Progress bar */}
              <div className="flex flex-col items-center gap-0 pt-2">
                {roadmapSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                      i <= roadmapStep
                        ? 'bg-sky-500 border-sky-500 text-white'
                        : 'bg-slate-900 border-slate-700 text-slate-500'
                    }`}>
                      {i < roadmapStep ? <Check className="w-4 h-4" /> : step.num}
                    </div>
                    {i < roadmapSteps.length - 1 && (
                      <div className={`w-0.5 h-24 transition-all duration-700 ${i < roadmapStep ? 'bg-sky-500' : 'bg-slate-800'}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Active step content */}
              <div className="flex-1 max-w-2xl" key={roadmapStep}>
                {(() => {
                  const step = roadmapSteps[roadmapStep]
                  const Icon = step.icon
                  return (
                    <div className="animate-slide-up">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-sky-400" />
                        </span>
                        <div>
                          <div className="text-slate-500 text-sm">{step.num}</div>
                          <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sky-300 font-medium mb-4">{step.subtitle}</p>
                      <p className="text-slate-400 leading-relaxed mb-8 text-lg">{step.desc}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.items.map(item => (
                          <div key={item} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/40 rounded-xl px-4 py-3">
                            <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>

          {/* Mobile: static cards */}
          <div className="lg:hidden flex flex-col gap-8">
            {roadmapSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm">{step.num}</span>
                    <span className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.items.map(item => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 bg-[#020b18]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-sky-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Book a free 30-minute discovery call. No pressure, no pitch — just a clear picture of what's possible for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-xl shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5"
            >
              Book Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
