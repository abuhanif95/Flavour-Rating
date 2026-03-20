import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-orange-50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-3xl font-bold tracking-tight text-gray-800 bebas-neue">
              Flavour Rating
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Discover your next favorite dining experience. Connecting food
              lovers with exceptional restaurants using AI-powered
              recommendations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-orange-50 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-colors shadow-sm shadow-orange-900/5 hover:shadow-md hover:-translate-y-1 transform duration-300"
              >
                <Twitter className="w-5 h-5 text-orange-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-50 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-colors shadow-sm shadow-orange-900/5 hover:shadow-md hover:-translate-y-1 transform duration-300"
              >
                <Github className="w-5 h-5 text-orange-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-50 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-colors shadow-sm shadow-orange-900/5 hover:shadow-md hover:-translate-y-1 transform duration-300"
              >
                <Linkedin className="w-5 h-5 text-orange-600" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-6">Explore</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/analysis"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-6">Legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-500 hover:text-orange-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-orange-100/50 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-medium">
          <p>
            © {new Date().getFullYear()} Flavour Rating. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            SHT and Shiru
          </p>
        </div>
      </div>
    </footer>
  );
}
