import { BarChart3, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewAnalysis() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bebas-neue mb-2">
          Comprehensive Analysis
        </h1>
        <p className="text-base-content/70 mb-12">
          Discover trends, top merchants, and deep analytics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Total Reviews",
            value: "2.4M+",
            icon: <TrendingUp className="w-6 h-6" />,
            colors: "from-rose-50 to-rose-100 text-rose-600 border-rose-200",
          },
          {
            title: "Active Users",
            value: "850K",
            icon: <Users className="w-6 h-6" />,
            colors:
              "from-amber-50 to-amber-100 text-amber-600 border-amber-200",
          },
          {
            title: "Top Merchants",
            value: "14.2K",
            icon: <BarChart3 className="w-6 h-6" />,
            colors:
              "from-orange-50 to-orange-100 text-orange-600 border-orange-200",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Soft decorative blur behind icon */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

            <div
              className={`w-14 h-14 bg-gradient-to-br ${stat.colors} rounded-2xl flex items-center justify-center mb-6 shadow-inner border group-hover:scale-110 transition-transform duration-300 relative z-10`}
            >
              {stat.icon}
            </div>
            <h3 className="text-gray-500 font-medium mb-2 relative z-10">
              {stat.title}
            </h3>
            <p className="text-4xl font-bold text-gray-800 tracking-tight relative z-10">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-10 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
          Top Merchants by City (Demo Data)
        </h2>
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
                {
                  city: "New York, NY",
                  name: "Manhattan Bistro",
                  rating: 4.8,
                  count: 2547,
                },
                {
                  city: "Los Angeles, CA",
                  name: "Sunset Grill",
                  rating: 4.6,
                  count: 1893,
                },
                {
                  city: "Seattle, WA",
                  name: "Coffee Corner",
                  rating: 4.9,
                  count: 2987,
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-base-100/50 border-b-base-200">
                  <td className="font-medium">{row.city}</td>
                  <td>{row.name}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <span className="text-orange-600 font-bold">
                        {row.rating}
                      </span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </td>
                  <td className="text-base-content/70">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
