export default function Card({ offer }) {
  const { title, image, url } = offer

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl transition" />

      <div className="relative z-10">
        <div className="h-44 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-white mb-3">
            {title}
          </h3>

          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
            Get Offer
          </button>
        </div>
      </div>
    </a>
  )
}
