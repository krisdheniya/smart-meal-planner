export default function FeaturesSection() {
  const features = [
    {
      icon: "🥗",
      title: "Personalized Plans",
      description:
        "Tell us your diet preference (Veg, Non-Veg, Vegan, Keto) and we'll create custom weekly meal plans just for you.",
    },
    {
      icon: "💰",
      title: "Budget-Friendly",
      description: "Set your daily or weekly food budget and stay within it without sacrificing nutrition or flavor.",
    },
    {
      icon: "⏱️",
      title: "Quick Recipes",
      description: "Most meals take under 20 minutes to prepare, perfect for busy students and working professionals.",
    },
    {
      icon: "📊",
      title: "Nutrition Dashboard",
      description:
        "Track calories, protein, carbs, and fats for each meal in one beautiful, easy-to-understand interface.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-balance mb-4">Why Smart Meal Planner?</h2>
          <p className="text-xl text-gray-600 text-balance">
            Automate your healthy eating with personalized plans that fit your life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-200"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
