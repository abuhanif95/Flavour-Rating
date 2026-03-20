import { useState } from "react";
import { Search, Heart, MapPin, Coffee, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FriendRecommendation() {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([
    {
      type: "ai",
      text: "Hi there! I'm your Friend Finder AI. I can recommend potential friends based on your food interests and restaurant preferences. What kind of dining buddy are you looking for?",
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
          text: "Based on your request for coffee and bakery enthusiasts, I found a few highly compatible people in your area!",
          friends: [
            {
              name: "Alex J.",
              match: "92%",
              interests: ["Coffee", "Bakeries", "Brunch"],
              avatar:
                "https://xsgames.co/randomusers/assets/avatars/male/32.jpg",
            },
            {
              name: "Sarah M.",
              match: "89%",
              interests: ["Pastries", "Vegan", "Coffee"],
              avatar:
                "https://xsgames.co/randomusers/assets/avatars/female/45.jpg",
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-rose-200/30 to-rose-100/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-orange-100/30 rounded-full blur-3xl opacity-60"></div>
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
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-lg shadow-rose-500/30 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Your Tastes</h3>
                <p className="text-xs text-gray-500 font-medium">
                  For perfect pairing
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-orange-500" /> Favorite
                  Cuisine
                </label>
                <select className="select w-full bg-white border-gray-200 rounded-xl focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all">
                  <option>Italian</option>
                  <option>Japanese</option>
                  <option>Mexican</option>
                  <option>American/Burgers</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" /> Dining Radius
                </label>
                <select className="select w-full bg-white border-gray-200 rounded-xl focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all">
                  <option>Within 5 miles</option>
                  <option>Within 10 miles</option>
                  <option>Anywhere in city</option>
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
                Friend Match AI
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Connect with local foodies based on deep data analysis.
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
                        ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-tr-sm shadow-orange-500/20 shadow-md"
                        : "bg-white border border-gray-100 text-gray-700 rounded-tl-sm"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>

                    {msg.friends && (
                      <div className="mt-4 grid md:grid-cols-2 gap-3">
                        {msg.friends.map((friend, i) => (
                          <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            key={i}
                            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl shadow-orange-900/5 flex items-start gap-4 transition-all"
                          >
                            <img
                              src={friend.avatar}
                              alt="Avatar"
                              className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100"
                            />
                            <div className="w-full">
                              <p className="font-bold flex items-center justify-between text-gray-800">
                                {friend.name}
                                <span className="text-xs text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                                  {friend.match} Match
                                </span>
                              </p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {friend.interests.map((int, j) => (
                                  <span
                                    key={j}
                                    className="text-[10px] bg-slate-50 border border-gray-100 px-2 py-1 rounded-md text-gray-500 font-medium"
                                  >
                                    {int}
                                  </span>
                                ))}
                              </div>
                              <button className="mt-3 text-xs w-full py-2 bg-orange-50 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all rounded-lg font-medium shadow-sm flex items-center justify-center gap-1">
                                <Users className="w-3 h-3" /> Connect
                              </button>
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
                  placeholder="E.g., Find me someone who loves spicy Thai food..."
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
