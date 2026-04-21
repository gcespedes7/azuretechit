import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WebDesign from './pages/WebDesign'
import Automation from './pages/Automation'
import AIIntegration from './pages/AIIntegration'
import SocialMedia from './pages/SocialMedia'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="automation" element={<Automation />} />
          <Route path="ai-integration" element={<AIIntegration />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
