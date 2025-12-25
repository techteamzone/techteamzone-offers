import { motion } from "framer-motion";

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black text-white">
      
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_10px_30px_rgba(120,80,255,0.4)]">
              TechTeamZone
            </span>
            <span className="block mt-3 text-gray-300 text-2xl md:text-3xl font-medium">
              Premium Rewards & Campaign Hub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-400 max-w-xl"
          >
            Exclusive reward campaigns for Tier-1 users.  
            Verified offers. Secure redirects. Limited availability.
          </motion.p>

          {/* SEARCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: false }}
            className="mt-8 flex"
          >
            <input
              type="text"
              placeholder="Search rewards (Amazon, Walmart...)"
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full px-5 py-4 rounded-l-xl bg-white/10 border border-white/10 focus:outline-none focus:border-purple-400 backdrop-blur"
            />
            <button
              className="px-6 rounded-r-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:opacity-90 transition"
              onClick={() => window.open("/contact", "_blank")}
            >
              Search
            </button>
          </motion.div>

          {/* EMAIL + ZIP */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <input
              type="email"
              required
              placeholder="Gmail address"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="ZIP Code"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
            <button
              type="submit"
              onClick={() => window.open("/privacy", "_blank")}
              className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-[1.02] transition"
            >
              Unlock Offers
            </button>
          </motion.form>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative"
        >
          <motion.img
            src="/images/hero-banner.png"
            alt="Premium Rewards"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
