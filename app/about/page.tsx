import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">WEST COAST DEALS</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/what-we-do" className="text-white/80 hover:text-white">What We Do</Link>
            <Link href="/wholesale" className="text-white/80 hover:text-white">Wholesale</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl text-white mb-6">ABOUT US</h1>
          <p className="text-xl text-white/70">The story behind West Coast Deals</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-gray-900 mb-6">OUR STORY</h2>
          <p className="text-lg text-gray-600 mb-8">
            West Coast Deals started with a simple idea: bring the excitement of in-person sneaker shopping to the digital world through live streaming. What began in a small Portland warehouse has grown into a multi-location operation spanning the West Coast.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Today, we operate out of three warehouses in Portland, Los Angeles, and Mississippi, with a team of over 35 dedicated professionals. We stream over 250 hours weekly across multiple platforms, connecting with thousands of buyers who share our passion for sneakers, streetwear, and sports merchandise.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} West Coast Deals LLC</p>
      </footer>
    </main>
  );
}
