export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-green-600 font-semibold text-lg mb-3">Smart Meal Planner</p>
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 text-balance leading-tight">
                Personalized Meal Plans for a Healthier You
              </h1>
            </div>

            <p className="text-lg text-gray-600 text-balance">
              Get affordable, nutritious meals tailored to your goals, schedule, and budget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition duration-200"
              >
                View Features
              </a>
            </div>
          </div>

          {/* Right: Mockup Card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-gray-900 font-bold text-lg">Today's Plan</h3>
                <p className="text-gray-500 text-sm">Monday, Nov 30</p>
              </div>

              <div className="space-y-4">
                {/* Breakfast */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Breakfast</p>
                      <p className="text-gray-600 text-xs">Oats with berries & honey</p>
                    </div>
                    <span className="text-xs font-medium text-gray-600">320 kcal</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      High Fiber
                    </span>
                  </div>
                </div>

                {/* Lunch */}
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Lunch</p>
                      <p className="text-gray-600 text-xs">Grilled chicken salad</p>
                    </div>
                    <span className="text-xs font-medium text-gray-600">450 kcal</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      High Protein
                    </span>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Dinner</p>
                      <p className="text-gray-600 text-xs">Baked salmon with veggies</p>
                    </div>
                    <span className="text-xs font-medium text-gray-600">520 kcal</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      Omega-3 Rich
                    </span>
                  </div>
                </div>
              </div>

              {/* Daily total */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-medium text-sm">Daily Total</span>
                  <span className="text-gray-900 font-bold text-sm">1290 kcal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">1290 / 1800 target kcal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
