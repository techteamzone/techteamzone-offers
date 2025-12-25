import { motion } from "framer-motion";

export default function Card({ title, image, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl
                 bg-white/70 backdrop-blur-xl
                 border border-white/40
                 shadow-lg hover:shadow-2xl
                 transition-all"
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      bg-gradient-to-br from-indigo-400/40 via-purple-400/30 to-pink-400/40
                      blur-xl transition" />

      <div className="relative z-10">
        <div className="h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover
                       transition-transform duration-500
                       group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3">
            {title}
          </h3>

          <div
            className="w-full rounded-xl py-2.5 text-center text-sm font-semibold
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       text-white shadow-md
                       group-hover:opacity-95 transition"
          >
            Claim Reward →
          </div>
        </div>
      </div>
    </motion.a>
  );
}
