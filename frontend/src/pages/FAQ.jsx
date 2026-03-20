import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "How does the recommendation system work?",
      a: "Our AI analyzes thousands of reviews and correlates them with your selected preferences (like cuisine type, dietary needs) to find restaurants highly rated by users with similar profiles.",
    },
    {
      q: "Are the ratings authentic?",
      a: "Yes. Our ratings are sourced from aggregated verified reviews, run through sentiment analysis filters to eliminate bots or fake sentiment.",
    },
    {
      q: "Can I find friends in my city?",
      a: "Absolutely. The Friend Match feature lets you discover local users who review similar restaurants and share similar tastes.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl bg-orange-50/30 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold bebas-neue mb-6 text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-500">
          Everything you need to know about Flavour Rating.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const [open, setOpen] = useState(false);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-orange-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300"
            >
              <button
                onClick={() => setOpen(!open)}
                className="w-full px-6 py-5 flex items-center justify-between font-semibold text-left focus:outline-none"
              >
                <span className="text-lg text-gray-700">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 overflow-hidden"
                  >
                    <p className="text-gray-500 pb-5">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
