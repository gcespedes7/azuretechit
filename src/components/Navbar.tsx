import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDark() {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#0f1218]/80 backdrop-blur-md transition-colors duration-300">
      <div className="flex flex-wrap max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-900 dark:text-white">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a320b6b1-77f0-4506-8214-fdb9509bc6a0_320w.png?w=800&q=80"
              className="bg-center w-auto h-14 object-cover"
              alt="Azuretech Logo"
            />
          </div>
        </Link>

        {/* Right side: dark toggle + CTA + hamburger */}
        <div className="flex lg:order-2 space-x-3 items-center">

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 text-gray-500 rounded-lg p-2"
          >
            <Moon className="hidden dark:block w-[20px] h-[20px]" aria-hidden="true" />
            <Sun className="block dark:hidden w-[20px] h-[20px]" aria-hidden="true" />
          </button>

          {/* Book Consultation CTA (desktop) */}
          <Link
            to="/contact"
            className="hidden lg:flex text-white bg-[#f0942e] hover:bg-[#e28b2b] hover:shadow-[0_0_20px_rgba(240,148,46,0.4)] focus:ring-4 focus:outline-none focus:ring-[#f0942e]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 items-center gap-2"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex dark:text-gray-400 lg:hidden hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none text-sm text-gray-500 w-10 h-10 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-center"
            aria-controls="navbar-sticky"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>

        {/* Nav links */}
        <div
          id="navbar-sticky"
          className={`${mobileOpen ? 'flex' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 dark:border-white/10 rounded-lg bg-gray-50 dark:bg-white/5 lg:space-x-6 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <Link
                to="/automation"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Automation
              </Link>
            </li>
            <li>
              <Link
                to="/ai-integration"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                AI Integration
              </Link>
            </li>
            <li>
              <Link
                to="/web-design"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Web Design
              </Link>
            </li>
            <li>
              <Link
                to="/social-media"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-slate-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-[#547aa1] lg:dark:hover:text-[#547aa1] lg:p-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
