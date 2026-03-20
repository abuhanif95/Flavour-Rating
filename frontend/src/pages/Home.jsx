import { motion } from "framer-motion";
import { Utensils, Star, Users, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div
            className="absolute top-48 -left-24 w-72 h-72 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-md mb-8">
                <span className="flex w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                  Premium Dining App
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 bebas-neue leading-tight">
                Discover Your True <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-500 to-orange-500">
                  Dining Style
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Join our premium community of food lovers. Get personalized
                restaurant recommendations based on your unique taste and
                connect with friends who share your cravings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/analysis"
                  className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-medium rounded-full px-8 py-4 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all transform hover:-translate-y-0.5 text-lg"
                >
                  Explore Analysis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium border border-gray-200 rounded-full px-8 py-4 shadow-sm hover:shadow-md transition-all text-lg"
                >
                  <Play className="w-5 h-5 text-rose-500 fill-rose-100" />
                  How it Works
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto mt-12 lg:mt-0 px-4 sm:px-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-900/20 border-8 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1544025162-84185eee9324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Premium Dining Hero"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/0 to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center`}
                          style={{
                            backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        10k+ Foodies
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Joined this week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 text-rose-500">
                    <Star className="w-5 h-5 fill-rose-500" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-1/2 -right-6 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bebas-neue"
            >
              Elevate Your Dining Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Discover the next generation of restaurant discovery with our
              premium features designed exclusively for true culinary
              enthusiasts.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: <Star className="w-7 h-7 text-rose-500" />,
                title: "Personalized Picks",
                desc: "AI-driven restaurant suggestions that match your specific flavor profile perfectly.",
                gradient: "from-rose-50 to-orange-50",
              },
              {
                icon: <Users className="w-7 h-7 text-amber-500" />,
                title: "Friend Match",
                desc: "Find dining buddies with similar tastes in your city effortlessly and naturally.",
                gradient: "from-amber-50 to-orange-50",
              },
              {
                icon: <Utensils className="w-7 h-7 text-orange-500" />,
                title: "Deep Analysis",
                desc: "Explore visual trends and insights about top restaurants across the country.",
                gradient: "from-orange-50 to-rose-50",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle gradient hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
