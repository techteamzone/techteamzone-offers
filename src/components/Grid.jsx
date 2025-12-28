import Card from "./ui/Card"

import { offers } from "../data/offers"

const categories = [
  "Gift Cards",
  "Home Decor & Interior Design",
  "Food & Recipes",
  "Fashion & Beauty",
  "DIY & Hobbies",
  "Crypto",
  "Gaming",
  "Health",
  "Sweepstakes",
]

export default function Grid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {categories.map((category) => {
        const categoryOffers = offers.filter(
          (offer) => offer.category === category
        )

        // যদি offer না থাকে → section দেখাবে না
        if (categoryOffers.length === 0) return null

        return (
          <section key={category}>
            {/* Category Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {category}
            </h2>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryOffers.map((offer) => (
                <Card key={offer.id} offer={offer} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
