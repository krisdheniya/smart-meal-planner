export default function HighlightsSection() {
  const highlights = [
    "📅 Weekly meal calendar with breakfast, lunch, and dinner",
    "🛒 Simple grocery list auto-generated from your chosen plan",
    "⚙️ Adjust meals based on allergies and preferences",
    "✨ Smart substitutions to keep meals fresh and exciting",
  ]

  const testimonials = [
    {
      name: "Aarav",
      role: "College Student",
      quote: "I used to skip meals or eat junk. Now I actually enjoy planning my food and stay within budget!",
    },
    {
      name: "Priya",
      role: "Working Professional",
      quote: "Finally a meal planner that saves me time AND money. The recipes are actually delicious and quick.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-balance mb-4">See Your Week at a Glance</h2>
          <p className="text-xl text-gray-600 text-balance">
            Smart Meal Planner organizes your meals into an easy weekly calendar with calorie tracking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bullet points */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">✓</div>
                <p className="text-lg text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>

          {/* Right: Mock screenshot */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-300 p-6">
              <div className="bg-white rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Week of June 10</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    View all
                  </span>
                </div>

                {/* Week grid */}
                <div className="space-y-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                    <div key={day} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{day}</p>
                        <p className="text-xs text-gray-600">Chicken & Rice</p>
                      </div>
                      <span className="text-xs text-gray-500">2100 cal</span>
                    </div>
                  ))}
                </div>

                {/* Calorie progress */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-600">Weekly Avg</span>
                    <span className="text-sm font-bold text-gray-900">1850 kcal</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pt-12 border-t border-gray-200">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {"⭐"
                  .split("")
                  .map((star, i) => <span key={i}>{star}</span>)
                  .slice(0, 5)}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
