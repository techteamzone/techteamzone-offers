import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Claim Top Rewards  
          <span className="block text-indigo-400 mt-2">
            From Trusted Brands
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Complete simple steps and unlock exclusive rewards.
          Fast. Secure. No hidden fees.
        </motion.p>

        <motion.a
          href="#offers"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-bold"
        >
          Start Earning →
        </motion.a>
      </div>

      {/* background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px]" />
    </section>
  )
}
