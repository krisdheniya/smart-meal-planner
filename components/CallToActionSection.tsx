"use client"

import { type FormEvent, useState } from "react"

export default function CallToActionSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simple submission handler - logs to console
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="cta" className="py-20 md:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-green-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Ready to Eat Smarter?</h2>
          <p className="text-lg text-green-50 text-balance mb-8">
            Join the waitlist and get early access to Smart Meal Planner. No spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition duration-200 hover:-translate-y-1 hover:shadow-lg whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>

          {submitted && <p className="text-green-100 mt-4 text-sm">✓ Thanks! Check your email for updates.</p>}
        </div>
      </div>
    </section>
  )
}
