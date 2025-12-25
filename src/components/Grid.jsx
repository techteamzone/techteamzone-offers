import Card from "./ui/Card";
import { offers } from "../data/offers";

export default function Grid() {
  return (
    <section className="relative py-16">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-100" />

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
          🔥 Top Reward Offers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              title={offer.title}
              image={offer.image}
              url={offer.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
