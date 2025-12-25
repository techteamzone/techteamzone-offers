import Card from "./ui/Card";
import { offers } from "../data/offers";

export default function Grid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            title={offer.title}
            image={offer.image}
            url={offer.url}
          />
        ))}
      </div>
    </section>
  );
}
