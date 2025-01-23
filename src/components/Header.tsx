import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import learntrade_logo from "../assets/images/learntrade_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={learntrade_logo}
              alt="LearnTrade Logo"
              className="h-10 w-10"
            />
            <span className="text-3xl font-bold text-gray-900">LearnTrade</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-lg text-gray-600 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-lg text-gray-600 hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-lg text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-lg text-gray-600 hover:text-blue-600"
            >
              FAQ
            </a>
            <Link
              to="/contact"
              className="text-lg text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              to="https://learntrade.efficia.lk/app/"
              target="_blank"
              className="text-lg bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Start Trading
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                Testimonials
              </a>
              <a
                href="https://learntrade.efficia.lk/app/"
                target="_blank"
                className="text-lg bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
              >
                Start Trading
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
