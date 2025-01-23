import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is LearnTrade?",
    answer:
      "LearnTrade is a web-based trading platform that allows new and inexperienced traders to practice trading on the Sri Lankan stock market with virtual money. It provides a risk-free environment to learn trading and investment strategies.",
  },
  {
    question: "Is LearnTrade completely free?",
    answer:
      "LearnTrade offers a 3-day free trial with limited features, including Rs. 25,000 in virtual money for practicing trading. After the free trial, you can choose from the Plus or Premium plans for full access to all features and unlimited use.",
  },
  {
    question:
      "What are the differences between the Free, Plus, and Premium plans?",
    answer:
      "The Free plan gives limited access to trading features for 3 days, including Buy and Sell functionality. Both Plus and Premium plans offer the same features without any restrictions to enhance your learning experience.",
  },
  {
    question: "Can I practice buying and selling stocks?",
    answer:
      "Yes, you can buy and sell stocks within your virtual portfolio. The Free plan allows you to practice these features for 3 days, the Plus plan provides 7 days of access to Buy and Sell, while the Premium plan offers unlimited access to these features for a full year.",
  },
  {
    question: "How much virtual money do I get in the demo account?",
    answer:
      "Users receive Rs. 25,000 in virtual money to help with more in-depth practice and learning.",
  },
  {
    question: "How do I start using LearnTrade?",
    answer:
      "To start, simply sign up on our website at LearnTrade and create an account. You will get immediate access to our demo platform and can begin trading right away.",
  },
  {
    question: "How long does the Free trial last?",
    answer:
      "The Free trial lasts for 3 days. During this time, you can explore the full functionality of the platform, including trading with virtual money, portfolio management, and more.",
  },
  {
    question: "What happens after my Free trial ends?",
    answer:
      "After your Free trial ends, you can continue learning by subscribing to the Plus or Premium plans.",
  },
  {
    question: "What features are available with the Plus and Premium plans?",
    answer:
      "Both Plus and Premium plans offer full access to real-time market data, advanced portfolio management, transaction tracking, and unlimited access to the Buy and Sell features. The main difference between the two plans is the duration—Plus is available for 7 days, while Premium is a yearly subscription.",
  },
  {
    question: "Is my data secure on LearnTrade?",
    answer:
      "Yes, we take data security seriously. LearnTrade uses encryption and secure server practices to ensure your personal data and trading information are safe at all times.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
