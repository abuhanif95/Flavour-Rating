import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold bebas-neue mb-6 text-gray-800">
          About Our Mission
        </h1>
        <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-8 shadow-sm shadow-orange-500/50"></div>
        <p className="text-xl text-gray-600 leading-relaxed">
          We're building a smarter way to connect food lovers with their perfect
          dining experiences. Our platform combines cutting-edge technology with
          a genuine love for culinary exploration.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 bg-white p-8 rounded-3xl shadow-xl shadow-orange-900/5 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Driven by Data & Taste
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By leveraging machine learning algorithms and user feedback, we're
            creating a community where personal tastes, dietary needs, and
            dining ambitions are accurately understood.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Trust & Transparency",
              "Community Focus",
              "Advanced AI Analytics",
            ].map((item, i) => (
              <motion.li
                whileHover={{ x: 5 }}
                key={i}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
                </div>
                <span className="font-medium text-gray-800">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="aspect-square bg-white rounded-3xl overflow-hidden relative shadow-2xl shadow-orange-900/10 border-4 border-white"
        >
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="People eating at a restaurant"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
}
