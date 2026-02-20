import Link from "next/link";

export default function WhatWeDo() {
  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">WEST COAST DEALS</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white">About</Link>
            <Link href="/what-we-do" className="text-white">What We Do</Link>
            <Link href="/wholesale" className="text-white/80 hover:text-white">Wholesale</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl text-white mb-6">WHAT WE DO</h1>
          <p className="text-xl text-white/70">Live commerce and traditional ecommerce</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-gray-900 mb-6">LIVE STREAMING COMMERCE</h2>
          <p className="text-lg text-gray-600 mb-8">
            We specialize in live streaming e-commerce, creating engaging shopping experiences where buyers can interact in real-time, ask questions, and bid on products they love.
          </p>

          <h3 className="font-display text-2xl text-gray-900 mb-4 mt-12">HOW WE SELL</h3>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-display text-xl text-accent">LIVE SELLING</h4>
              <p className="text-gray-600">Real-time auction-style sales with engaged audiences. Interactive shopping experiences that drive conversions and build community.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-display text-xl text-gray-900">TRADITIONAL ECOMMERCE</h4>
              <p className="text-gray-600">Established marketplace presence for authenticated products. Meeting customers where they shop with verified, quality inventory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} West Coast Deals LLC</p>
      </footer>
    </main>
  );
}
