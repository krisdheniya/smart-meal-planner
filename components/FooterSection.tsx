"use client"

// Footer section with branding, links, and social media

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Smart Meal Planner</h3>
            <p className="text-sm text-gray-400">© {currentYear} All rights reserved.</p>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Home
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition duration-200">
              Features
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition duration-200">
              Pricing
            </a>
            <a href="#cta" className="text-gray-400 hover:text-white transition duration-200">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>Smart Meal Planner helps you eat healthier on any budget.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition duration-200">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
