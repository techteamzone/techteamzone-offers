import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-wide">
          Reward<span className="text-indigo-400">Hub</span>
        </h1>

        <a
          href="#offers"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold"
        >
          View Offers
        </a>
      </div>
    </motion.header>
  )
}
