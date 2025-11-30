export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "month",
      featured: false,
      description: "Perfect for trying it out",
      features: ["5 meal plans per month", "Basic recipes", "Single user", "Email support"],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "₹199",
      period: "month",
      featured: true,
      description: "Most popular choice",
      features: [
        "Unlimited meal plans",
        "Weekly grocery lists",
        "Nutrition breakdown for every meal",
        "Priority support",
        "Custom dietary preferences",
      ],
      cta: "Choose Pro",
    },
    {
      name: "Family",
      price: "₹399",
      period: "month",
      featured: false,
      description: "For the whole family",
      features: [
        "Up to 4 family members",
        "Shared grocery list",
        "Personal preferences per member",
        "Family meal planning",
        "24/7 support",
      ],
      cta: "Choose Family",
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-balance mb-4">Plans for Every Lifestyle</h2>
          <p className="text-xl text-gray-600 text-balance">Start free, upgrade when you're ready. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition duration-200 ${
                plan.featured
                  ? "bg-green-50 border-2 border-green-500 shadow-xl scale-105 md:scale-100"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/ {plan.period}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition duration-200 hover:-translate-y-1 hover:shadow-lg mb-8 ${
                  plan.featured
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
