import Link from "next/link";

export default function Wholesale() {
  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">WEST COAST DEALS</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white">About</Link>
            <Link href="/what-we-do" className="text-white/80 hover:text-white">What We Do</Link>
            <Link href="/wholesale" className="text-white">Wholesale</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl text-white mb-6">WHOLESALE</h1>
          <p className="text-xl text-white/70">Partner with the largest live commerce operation on the West Coast</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-gray-900 mb-6">WHY PARTNER WITH US?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-display text-xl text-accent mb-2">MASSIVE REACH</h3>
              <p className="text-gray-600">Access to thousands of engaged buyers across multiple platforms.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-display text-xl text-accent mb-2">FAST TURNAROUND</h3>
              <p className="text-gray-600">We move inventory quickly through our live sales format.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-display text-xl text-accent mb-2">COMPETITIVE PRICING</h3>
              <p className="text-gray-600">Fair prices that work for both parties.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-display text-xl text-accent mb-2">RELIABLE PAYMENTS</h3>
              <p className="text-gray-600">Consistent, on-time payments you can count on.</p>
            </div>
          </div>

          <h2 className="font-display text-4xl text-gray-900 mb-6">WHAT WE BUY</h2>
          <ul className="text-lg text-gray-600 space-y-2 mb-12">
            <li>• Sneakers (Nike, Jordan, Adidas, New Balance, etc.)</li>
            <li>• Streetwear (Supreme, BAPE, Kith, etc.)</li>
            <li>• Sports merchandise and jerseys</li>
            <li>• Women's fashion and accessories</li>
          </ul>

          <h2 className="font-display text-4xl text-gray-900 mb-6">GET IN TOUCH</h2>
          <p className="text-lg text-gray-600 mb-6">
            Interested in partnering with us? Reach out and let's discuss how we can work together.
          </p>
          <a
            href="mailto:wholesale@shopwestcoastdeals.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} West Coast Deals LLC</p>
      </footer>
    </main>
  );
}
