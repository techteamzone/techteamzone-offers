export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p>
            © {new Date().getFullYear()} TechTeamZone. All rights reserved.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/privacy.html" className="hover:text-white">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white">Terms</a>
            <a href="/about.html" className="hover:text-white">About</a>
            <a href="/contact.html" className="hover:text-white">Contact</a>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed">
          Disclaimer: This website is an independent rewards platform and is not
          affiliated with, sponsored by, or endorsed by any brands shown. All
          trademarks belong to their respective owners. Offers may require
          completion of third-party actions to qualify.
        </p>
      </div>
    </footer>
  )
}

