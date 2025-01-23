import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn. Trade. Succeed.
            <br />
            <span className="text-blue-600"> Risk-Free</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master the Sri Lankan Stock Market with our virtual trading
            platform. Start with Rs. 25,000 in virtual money and learn without
            risking real capital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-20">
            <a
              href="https://learntrade.efficia.lk/app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-200/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Hero;
