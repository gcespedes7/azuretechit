import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="dark:border-white/10 dark:bg-[#0b0e14] transition-colors duration-300 bg-slate-50 border-slate-200 border-t pt-16 pb-12">
      <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

          {/* Col 1-2: Logo + description */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <a href="#" className="flex items-center gap-2.5 mb-6 group">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e565d5c-cee1-4499-9b99-516bcf1cb0ad_320w.png?w=800&q=80"
                alt="Azuretech Logo"
                className="w-25 h-20 object-contain"
              />
              <span className="dark:text-white text-xl font-semibold text-slate-600 tracking-tight">
                AI Automation &amp; Web Services
              </span>
            </a>
            <p className="leading-relaxed dark:text-gray-400 text-sm text-slate-500 max-w-sm">
              Simplifying workflows through white-glove automation. We build the intelligent infrastructure
              that powers the next generation of business.
            </p>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">Services</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/automation" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/ai-integration" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/social-media" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">Company</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/about" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-gray-600">
            © 2026 Azuretech LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:text-gray-600 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:text-gray-600 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:text-gray-600 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <div className="hidden md:flex h-4 w-px bg-slate-200 dark:bg-white/10"></div>
          </div>
        </div>

      </div>
    </footer>
  )
}
