import {
  Wallet,
  Shield,
  DollarSign,
  Trophy,
  Gift,
  Star,
  Lightbulb,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Risk-Free Learning Environment",
    description:
      "Trade with demo accounts and gain experience without risking any real money.",
  },
  {
    icon: DollarSign,
    title: "Affordable Subscription",
    description:
      "Enjoy unlimited access for just LKR 1000 per year after a 3-day free trial.",
  },
  {
    icon: Trophy,
    title: "Real-Time Market Data",
    description:
      "Learn with real-time Colombo Stock Exchange data in a beginner-friendly setup.",
  },
  {
    icon: Gift,
    title: "Virtual Starting Capital",
    description:
      "Begin with Rs. 25,000 in virtual money to kickstart your trading journey.",
  },
  {
    icon: Shield,
    title: "Confidence Building",
    description:
      "Test strategies in a safe environment to prepare for real-world trading.",
  },
  {
    icon: Star,
    title: "Dividends and Investing",
    description:
      "Explore how investments can grow wealth and simulate earning dividends.",
  },
  {
    icon: Lightbulb,
    title: "Educational Resources",
    description:
      "Understand trading dynamics with real-time examples and guided learning.",
  },
  {
    icon: Heart,
    title: "User-Friendly Design",
    description:
      "Navigate an intuitive platform tailored for beginners to learn at their own pace.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose LearnTrade?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
