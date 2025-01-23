import React from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">LearnTrade</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("features")}
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className="text-gray-600 hover:text-blue-600"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </button>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <a
              href="https://learntrade.efficia.lk/app/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Start Trading
            </a>
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
              <button
                onClick={() => handleNavigation("features")}
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </button>
              <button
                onClick={() => handleNavigation("pricing")}
                className="text-gray-600 hover:text-blue-600"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation("testimonials")}
                className="text-gray-600 hover:text-blue-600"
              >
                Testimonials
              </button>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
              <a
                href="https://learntrade.efficia.lk/app/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
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
