const fs = require("fs");
const path = require("path");

const dirs = [
  "frontend/src/components",
  "frontend/src/pages",
  "frontend/src/assets",
];

dirs.forEach((d) => fs.mkdirSync(d, { recursive: true }));

const files = {
  "frontend/vite.config.js": `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`,

  "frontend/src/index.css": `@import "tailwindcss";

@plugin "daisyui";

@theme {
  --color-primary-orange: #ff5722;
  --color-primary-dark: #e64a19;
}

body {
  font-family: 'Roboto', sans-serif;
}
.bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}`,

  "frontend/src/main.jsx": `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`,

  "frontend/src/App.jsx": `import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ReviewAnalysis from "./pages/ReviewAnalysis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/analysis" element={<ReviewAnalysis />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;`,

  "frontend/src/components/Navbar.jsx": `import { Link, NavLink } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Analysis", path: "/analysis" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-base-100/90 backdrop-blur-lg border-b border-base-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
              <UtensilsCrossed className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-base-content bebas-neue">
              Fork & Friends
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  \`text-sm font-medium transition-colors \${
                    isActive
                      ? "text-orange-600"
                      : "text-base-content/70 hover:text-orange-600"
                  }\`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700 text-white rounded-full px-6">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-base-content rounded-lg hover:bg-base-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-base-300 bg-base-100"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    \`block px-4 py-3 rounded-xl text-base font-medium \${
                      isActive
                        ? "bg-orange-50 text-orange-600"
                        : "text-base-content/80 hover:bg-base-200"
                    }\`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button className="w-full btn btn-primary bg-orange-600 border-none hover:bg-orange-700 text-white rounded-xl mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}`,

  "frontend/src/components/Footer.jsx": `import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content/80 border-t border-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-2xl font-bold tracking-tight text-base-content bebas-neue">
              Fork & Friends
            </span>
            <p className="max-w-xs text-sm leading-relaxed">
              Discover your next favorite dining experience. 
              Connecting food lovers with exceptional restaurants using AI-powered recommendations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-base-100 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-base-100 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-base-100 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-base-content mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
              <li><Link to="/analysis" className="hover:text-orange-600 transition-colors">Data Analysis</Link></li>
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base-content mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-orange-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-base-300 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Fork & Friends. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-orange-600 fill-orange-600" /> by Nasim & Team
          </p>
        </div>
      </div>
    </footer>
  );
}`,

  "frontend/src/pages/Home.jsx": `import { motion } from "framer-motion";
import { Utensils, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-base-100 pt-24 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-base-content mb-8 bebas-neue">
                Discover Your True <br />
                <span className="text-orange-600">Dining Style</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-12 max-w-2xl mx-auto">
                Join our premium community of food lovers. Get personalized restaurant recommendations 
                based on your unique taste and connect with friends who share your cravings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analysis" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-8 py-4 h-auto text-lg">
                  Explore Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/about" className="btn btn-outline border-base-300 hover:bg-base-200 text-base-content rounded-full px-8 py-4 h-auto text-lg">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Start className="w-8 h-8 text-orange-600" />,
                title: "Personalized Picks",
                desc: "AI-driven restaurant suggestions that match your specific flavor profile perfectly."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Friend Match",
                desc: "Find dining buddies with similar tastes in your city effortlessly."
              },
              {
                icon: <Utensils className="w-8 h-8 text-orange-600" />,
                title: "Deep Analysis",
                desc: "Explore visual trends and insights about top restaurants across the country."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-base-200/50 border border-base-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                  {i === 0 ? <Star className="w-8 h-8 text-orange-600" /> : feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-base-content/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`,

  "frontend/src/pages/AboutUs.jsx": `export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bebas-neue mb-6">About Our Mission</h1>
        <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-base-content/70 leading-relaxed">
          We're building a smarter way to connect food lovers with their perfect dining experiences. 
          Our platform combines cutting-edge technology with a genuine love for culinary exploration.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Driven by Data & Taste</h2>
          <p className="text-base-content/70">
            By leveraging machine learning algorithms and user feedback, we're creating a community 
            where personal tastes, dietary needs, and dining ambitions are accurately understood.
          </p>
          <ul className="space-y-4">
            {['Trust & Transparency', 'Community Focus', 'Advanced AI Analytics'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-square bg-base-200 rounded-3xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="People eating at a restaurant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}`,

  "frontend/src/pages/FAQ.jsx": `import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How does the recommendation system work?",
      a: "Our AI analyzes thousands of reviews and correlates them with your selected preferences (like cuisine type, dietary needs) to find restaurants highly rated by users with similar profiles."
    },
    {
      q: "Are the ratings authentic?",
      a: "Yes. Our ratings are sourced from aggregated verified reviews, run through sentiment analysis filters to eliminate bots or fake sentiment."
    },
    {
      q: "Can I find friends in my city?",
      a: "Absolutely. The Friend Match feature lets you discover local users who review similar restaurants and share similar tastes."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bebas-neue mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-base-content/70">Everything you need to know about Fork & Friends.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const [open, setOpen] = useState(false);
          return (
            <div key={i} className="border border-base-300 rounded-2xl overflow-hidden bg-base-100 transition-all hover:border-orange-200">
              <button 
                onClick={() => setOpen(!open)}
                className="w-full px-6 py-5 flex items-center justify-between font-semibold text-left focus:outline-none"
              >
                <span className="text-lg">{faq.q}</span>
                <ChevronDown className={\`w-5 h-5 text-base-content/50 transition-transform \${open ? 'rotate-180' : ''}\`} />
              </button>
              <div className={\`px-6 overflow-hidden transition-all \${open ? 'pb-5 max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}>
                <p className="text-base-content/70">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,

  "frontend/src/pages/ReviewAnalysis.jsx": `import { BarChart3, TrendingUp, Users } from "lucide-react";

export default function ReviewAnalysis() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold bebas-neue mb-2">Comprehensive Analysis</h1>
      <p className="text-base-content/70 mb-12">Discover trends, top merchants, and deep analytics.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Total Reviews", value: "2.4M+", icon: <TrendingUp className="w-6 h-6" /> },
          { title: "Active Users", value: "850K", icon: <Users className="w-6 h-6" /> },
          { title: "Top Merchants", value: "14.2K", icon: <BarChart3 className="w-6 h-6" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
              {stat.icon}
            </div>
            <h3 className="text-base-content/70 font-medium mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-base-200/50 border border-base-300 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Top Merchants by City (Demo Data)</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b-orange-200">
                <th className="bg-transparent text-sm">City</th>
                <th className="bg-transparent text-sm">Top Restaurant</th>
                <th className="bg-transparent text-sm">Rating</th>
                <th className="bg-transparent text-sm">Total Reviews</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: "New York, NY", name: "Manhattan Bistro", rating: 4.8, count: 2547 },
                { city: "Los Angeles, CA", name: "Sunset Grill", rating: 4.6, count: 1893 },
                { city: "Seattle, WA", name: "Coffee Corner", rating: 4.9, count: 2987 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-base-100/50 border-b-base-200">
                  <td className="font-medium">{row.city}</td>
                  <td>{row.name}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <span className="text-orange-600 font-bold">{row.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </td>
                  <td className="text-base-content/70">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
};

Object.entries(files).forEach(([filepath, content]) => {
  fs.writeFileSync(path.join(__dirname, filepath), content);
});
console.log("Files generated successfully.");
