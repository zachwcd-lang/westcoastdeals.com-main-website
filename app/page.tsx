"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            WEST COAST DEALS
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white">About</Link>
            <Link href="/what-we-do" className="text-white/80 hover:text-white">What We Do</Link>
            <Link href="/wholesale" className="text-white/80 hover:text-white">Wholesale</Link>
            <a href="https://hiring.shopwestcoastdeals.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">Careers</a>
          </div>
          <a
            href="https://hiring.shopwestcoastdeals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-accent border border-accent/50 rounded-full"
          >
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            NOW HIRING
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <Image
          src="/images/warehouse-hero.jpeg"
          alt="Warehouse"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm text-accent border border-accent/50 rounded-full">
            PORTLAND • LOS ANGELES • MISSISSIPPI
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6">
            WEST COAST<br />
            <span className="text-accent">DEALS</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            The future of live commerce. Over $1M in monthly sales across sneakers, streetwear, and sports merchandise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#what-we-do" className="px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim">
              Learn More
            </a>
            <Link href="/wholesale" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10">
              Wholesale Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-5xl text-accent">10,000+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide mt-2">Pairs in Inventory</div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">500+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide mt-2">Orders Daily</div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">$1M+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide mt-2">Monthly Revenue</div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">3</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide mt-2">Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-6">WHAT WE DO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing how people buy and sell through live streaming commerce. Real-time engagement, authentic products, and unbeatable deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { name: "Whatnot", desc: "Our primary platform for live auction-style sales.", primary: true },
              { name: "TikTok Shop", desc: "Tapping into social commerce with live shopping events.", primary: false },
              { name: "StockX", desc: "Marketplace presence for authenticated sneakers and streetwear.", primary: false },
              { name: "GOAT", desc: "Premium marketplace for verified sneakers and apparel.", primary: false },
            ].map((platform) => (
              <div
                key={platform.name}
                className={`p-8 rounded-xl border ${platform.primary ? "bg-accent/5 border-accent/30" : "bg-white border-gray-200"}`}
              >
                {platform.primary && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                    PRIMARY
                  </span>
                )}
                <h3 className="font-display text-2xl text-gray-900 mb-3">{platform.name.toUpperCase()}</h3>
                <p className="text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
            <h3 className="font-display text-3xl text-gray-900 mb-8 text-center">WHAT WE SELL</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Sneakers", desc: "Nike, Jordan, Adidas, New Balance" },
                { name: "Streetwear", desc: "Supreme, BAPE, Kith" },
                { name: "Sports Merch", desc: "Jerseys, collectibles, team gear" },
                { name: "Women's Fashion", desc: "Designer and trending styles" },
              ].map((cat) => (
                <div key={cat.name}>
                  <div className="font-display text-xl text-accent mb-2">{cat.name.toUpperCase()}</div>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">WHOLESALE PARTNERSHIPS</h2>
          <p className="text-xl text-white/70 mb-10">
            Looking to move inventory at scale? Partner with the largest live commerce operation on the West Coast.
          </p>
          <Link href="/wholesale" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim">
            Get Started with Wholesale
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wide">About Us</span>
              <h2 className="font-display text-5xl text-gray-900 mt-4 mb-6">
                BUILT IN PORTLAND,<br />
                <span className="text-accent">SCALING NATIONWIDE</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                What started as a passion for sneakers has grown into a multi-location live commerce operation. With warehouses in Portland, Los Angeles, and Mississippi, we're bringing the excitement of live shopping to audiences across the country.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                Learn our story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3", label: "Locations" },
                { value: "35+", label: "Team Members" },
                { value: "250+", label: "Hours Streamed Weekly" },
                { value: "6+", label: "Sales Channels" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                  <div className="font-display text-4xl text-accent">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 border border-accent/30 rounded-2xl">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-accent text-sm font-semibold uppercase">Now Hiring</span>
              </div>
              <h3 className="font-display text-4xl text-white mb-2">JOIN THE TEAM</h3>
              <p className="text-white/60">We're looking for passionate people to join our growing operation.</p>
            </div>
            <a
              href="https://hiring.shopwestcoastdeals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dim whitespace-nowrap"
            >
              View Open Positions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-white font-bold text-xl mb-4">WEST COAST DEALS</div>
              <p className="text-gray-400 mb-4">The future of live commerce.</p>
              <span className="text-accent text-sm">PORTLAND • LOS ANGELES • MISSISSIPPI</span>
            </div>
            <div>
              <h4 className="font-display text-xl text-white mb-4">LINKS</h4>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
                <Link href="/what-we-do" className="text-gray-400 hover:text-white">What We Do</Link>
                <Link href="/wholesale" className="text-gray-400 hover:text-white">Wholesale</Link>
                <a href="https://hiring.shopwestcoastdeals.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl text-white mb-4">WHOLESALE</h4>
              <p className="text-gray-400 mb-4">Interested in partnering with us?</p>
              <Link href="/wholesale" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black text-sm font-semibold rounded-lg hover:bg-accent-dim">
                Get Started
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} West Coast Deals LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
