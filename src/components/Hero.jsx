import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-[#0b0f1a] to-black">
      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[160px]" />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        style={{ perspective: "1400px" }}
      >
        {/* BRAND NAME */}
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, x: -160, rotateY: -60 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 origin-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              TechTeamZone
            </span>
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Premium Rewards Hub
            </span>
          </h1>

          <p className="text-white/70 text-lg max-w-md">
            Enterprise-grade reward discovery platform built for scale.
          </p>

          <motion.a
            href="#offers"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-xl hover:shadow-2xl transition"
          >
            Explore Offers
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/hero-banner.png"
            alt="Brand visual"
            className="w-[320px] md:w-[420px] drop-shadow-[0_50px_100px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>
    </section>
  )
}
