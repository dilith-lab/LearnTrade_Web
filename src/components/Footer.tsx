import { Facebook, Mail } from "lucide-react";
import learntrade_logo from "../assets/images/learntrade_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={learntrade_logo}
                alt="LearnTrade Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">LearnTrade</span>
            </div>
            <p className="text-gray-400">
              Your gateway to mastering the Sri Lankan Stock Market through
              risk-free virtual trading.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://efficia.lk/privacy-policy.html"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://efficia.lk/terms-conditions.html"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://efficia.lk/refund-policy.html"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/efficia.lk"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@learntrade.efficia.lk"
                className="hover:text-blue-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:support@learntrade.efficia.lk"
                className="hover:text-blue-400"
              >
                support@learntrade.efficia.lk
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LearnTrade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
