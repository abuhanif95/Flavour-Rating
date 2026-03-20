import { useState } from "react";
import { Search, MapPin, Target, User, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessRecommendation() {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([
    {
      type: "ai",
      text: "Hello! I can recommend the perfect business location or give you insights based on foot traffic, reviews, and demographics. What kind of business are you looking to start?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setResponses([...responses, { type: "user", text: query }]);
    setQuery("");

    setTimeout(() => {
      setResponses((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Based on your request, I strongly suggest looking into the Capitol Hill area. It matches your demographic needs and has great foot traffic for your business type. Here are a few top-rated places you can emulate.",
          data: [
            {
              name: "Coffee Roasters",
              rating: 4.8,
              category: "Cafe",
              match: "95%",
            },
            {
              name: "The Book & Bean",
              rating: 4.6,
              category: "Cafe / Retail",
              match: "88%",
            },
          ],
        },
      ]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-100/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-rose-200/30 to-orange-100/30 rounded-full blur-3xl opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-8"
      >
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Focus Area</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Refine parameters
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" /> Location
                  Priority
                </label>
                <select className="select w-full bg-white border-gray-200 rounded-xl focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-all">
                  <option>Downtown</option>
                  <option>Suburbs</option>
                  <option>Commercial District</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-500" /> Target
                  Demographic
                </label>
                <select className="select w-full bg-white border-gray-200 rounded-xl focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-all">
                  <option>Young Professionals</option>
                  <option>Families</option>
                  <option>Students</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-orange-500" /> Investment
                  Level
                </label>
                <select className="select w-full bg-white border-gray-200 rounded-xl focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-all">
                  <option>$$ - Moderate</option>
                  <option>$ - Low</option>
                  <option>$$$ - High</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] h-[70vh] flex flex-col overflow-hidden relative">
            <div className="p-6 md:p-8 border-b border-gray-100 bg-white/50 backdrop-blur-sm z-10">
              <h2 className="text-3xl font-bold bebas-neue text-gray-800 tracking-wide">
                Business AI Analyst
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Ask me anything about market trends or location strategy.
              </p>
            </div>

            <div className="flex-grow p-6 md:p-8 overflow-y-auto space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50 relative z-0">
              {responses.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl p-5 shadow-sm ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-sm shadow-orange-500/20 shadow-md"
                        : "bg-white border border-gray-100 text-gray-700 rounded-tl-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>

                    {msg.data && (
                      <div className="mt-4 grid gap-3">
                        {msg.data.map((item, i) => (
                          <motion.div
                            whileHover={{ y: -2, scale: 1.01 }}
                            key={i}
                            className="bg-white p-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg shadow-orange-900/5 flex items-center justify-between transition-all"
                          >
                            <div>
                              <p className="font-bold text-sm text-gray-800">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {item.category}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-orange-600 font-bold text-sm bg-orange-50 px-2 py-0.5 rounded-md inline-block">
                                {item.match} Match
                              </p>
                              <p className="text-xs text-yellow-500 font-medium mt-1">
                                {item.rating} ★
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <form
              onSubmit={handleSend}
              className="p-4 bg-base-200/50 border-t border-base-300"
            >
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="E.g., I want to open a boutique bakery in a busy neighborhood..."
                  className="w-full input input-bordered bg-base-100 rounded-full pr-12 focus:outline-orange-600"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
