import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ashan Perera",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1681569685377-dd0dba4b0414?w=400&h=400&fit=crop",
    quote:
      "LearnTrade allowed me to explore stock trading without the risk. The demo money and hands-on approach made it so easy to build my confidence in real trading.",
  },
  {
    name: "Malini Silva",
    role: "Aspiring Trader",
    image:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?w=400&h=400&fit=crop",
    quote:
      "I was intimidated by the stock market at first, but with LearnTrade, I got a realistic trading experience and better understanding in just a few weeks.",
  },
  {
    name: "Rajitha Fernando",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1596574027589-b1264b9c720d?w=400&h=400&fit=crop",
    quote:
      "LearnTrade helped me master trading at my own pace. The virtual trading environment is spot-on, and I now have the skills to confidently dive into real markets.",
  },
  {
    name: "Sandeep Wijesinghe",
    role: "Financial Analyst",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
    quote:
      "What I love most about LearnTrade is its simplicity. The risk-free environment, coupled with real-time market data, made it so easy to gain practical trading knowledge.",
  },
  {
    name: "Dilanika Mendis",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=400&h=400&fit=crop",
    quote:
      "Thanks to LearnTrade’s free 3-day trial, I was able to get a real feel for trading before committing. I now use it regularly for continued learning and growth.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Traders Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of successful traders who have mastered the market with
          LearnTrade
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <h3 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
