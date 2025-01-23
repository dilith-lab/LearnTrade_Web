import { Check } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "0",
    period: "/3 Days",
    features: [
      "Real-time market data access",
      "Rs. 25,000 virtual money",
      "Portfolio management tools",
      "Transaction history tracking",
      "Buy and Sell functionality (3-day access)",
    ],
    cta: "Continue Free Version",
    popular: false,
  },
  {
    name: "PLUS",
    price: "100",
    period: "/7 Days",
    features: [
      "Real-time market data access",
      "Rs. 25,000 virtual money",
      "Portfolio management tools",
      "Transaction history tracking",
      "Buy and Sell functionality (7-day access)",
    ],
    cta: "Upgrade to Plus",
    popular: false,
  },
  {
    name: "PREMIUM",
    price: "1,000",
    period: "/year",
    features: [
      "Real-time market data access",
      "Rs. 25,000 virtual money",
      "Portfolio management tools",
      "Transaction history tracking",
      "Buy and Sell functionality (365-day access)",
    ],
    cta: "Upgrade to Premium",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Trading Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Rs. {plan.price}</span>
                {plan.period && (
                  <span
                    className={plan.popular ? "text-blue-100" : "text-gray-500"}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check
                      className={`h-5 w-5 mr-2 ${
                        plan.popular ? "text-blue-200" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? "text-blue-100" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://learntrade.efficia.lk/app/views/register.php"
                target="_blank"
                className={`block text-center py-3 px-6 rounded-lg transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
