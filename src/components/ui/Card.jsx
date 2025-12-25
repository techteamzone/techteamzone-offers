import { motion } from "framer-motion";

export default function Card({ title, image, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-3">
          {title}
        </h3>

        <div className="w-full rounded-lg bg-black text-white text-center py-2 text-sm font-medium">
          Claim Reward →
        </div>
      </div>
    </motion.a>
  );
}
