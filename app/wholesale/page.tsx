"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Category = {
  name: string;
  desc: string;
  details: string;
  brands?: string[];
  comingSoon?: boolean;
};

const categories: Category[] = [
  {
    name: "Women's Apparel",
    desc: "Trending styles & designer brands",
    details: "High-quality women's clothing including dresses, tops, activewear, and more. We stock trending styles and established designer brands.",
    brands: ["Various Designer Brands", "Trending Styles", "Activewear"],
  },
  {
    name: "Women's Accessories",
    desc: "Bags, jewelry & more",
    details: "Complete your inventory with premium women's accessories. From handbags to jewelry, we have what your customers want.",
    brands: ["Handbags", "Jewelry", "Sunglasses", "Scarves"],
  },
  {
    name: "Sneakers & Footwear",
    desc: "Nike, Jordan, Adidas, New Balance",
    details: "Authentic sneakers and footwear from the most sought-after brands. All verified, all authentic.",
    brands: ["Nike", "Jordan", "Adidas", "New Balance", "Asics", "Puma"],
  },
  {
    name: "Licensed Sports",
    desc: "Jerseys, team gear & fan apparel",
    details: "Official licensed sports merchandise including jerseys, hats, and fan apparel from all major leagues.",
    brands: ["NFL", "NBA", "MLB", "NHL", "College Teams"],
  },
  {
    name: "Collectibles",
    desc: "Cards, memorabilia & limited items",
    details: "Sports cards, memorabilia, and limited edition collectibles. Perfect for specialty retailers and collectors.",
    brands: ["Trading Cards", "Memorabilia", "Limited Editions"],
  },
  {
    name: "+ More",
    desc: "New categories added regularly",
    details: "We're constantly expanding our inventory. Contact us to learn about new categories and upcoming product lines.",
    comingSoon: true,
  },
];

export default function Wholesale() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formCategory, setFormCategory] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const openForm = (category?: string) => {
    setFormCategory(category || "");
    setFormSubmitted(false);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production this would send to an API
    console.log("Form submitted:", { ...formData, category: formCategory });
    setFormSubmitted(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormCategory("");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setFormSubmitted(false);
  };

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
          <button
            onClick={() => openForm()}
            className="hidden md:inline-flex px-5 py-2.5 bg-accent text-black text-sm font-semibold rounded-lg hover:bg-accent-dim transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center">
        <Image
          src="/images/warehouse-hero.jpeg"
          alt="Warehouse"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-md bg-black/30 rounded-3xl px-8 py-12 md:px-16 md:py-16 border border-white/10 shadow-2xl">
            <span className="inline-block px-5 py-2.5 mb-8 text-sm font-medium text-accent border border-accent/40 rounded-full bg-accent/5 backdrop-blur-sm tracking-wider">
              WHOLESALE PARTNERSHIPS
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-lg">
              WHOLESALE<br />
              <span className="text-accent">INVENTORY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Premium sneakers, apparel, and accessories at wholesale prices. Buy in bulk and boost your margins.
            </p>
            <button
              onClick={() => openForm()}
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-black text-lg font-semibold rounded-xl hover:bg-accent-dim transition-all duration-200 shadow-lg hover:shadow-accent/25 hover:scale-105"
            >
              Request Inventory Access
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="mt-4 text-white/60 text-sm">Get pricing within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent">$1M+</div>
              <div className="text-white/50 text-sm uppercase tracking-wide mt-2">Monthly Sales</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent">1M+</div>
              <div className="text-white/50 text-sm uppercase tracking-wide mt-2">Units Moved</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent">3</div>
              <div className="text-white/50 text-sm uppercase tracking-wide mt-2">Warehouses</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent">100%</div>
              <div className="text-white/50 text-sm uppercase tracking-wide mt-2">Authentic</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Sell */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">WHAT WE SELL</h2>
            <p className="text-xl text-gray-500">Quality inventory at wholesale prices</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat)}
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group"
              >
                <h3 className="font-display text-xl text-gray-900 mb-2 group-hover:text-accent transition-colors">{cat.name.toUpperCase()}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
                <span className="inline-block mt-3 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details →
                </span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openForm()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all"
            >
              Request Inventory List
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">WHY BUY FROM US?</h2>
            <p className="text-xl text-gray-500">Your trusted wholesale partner</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "COMPETITIVE PRICING",
                desc: "Wholesale prices that let you maximize your margins and stay competitive.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: "VOLUME READY",
                desc: "10,000+ units in stock. Order as much as you need, when you need it.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "AUTHENTIC PRODUCTS",
                desc: "100% authentic, verified inventory. Build trust with your customers.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">HOW IT WORKS</h2>
            <p className="text-xl text-gray-500">Three simple steps to start buying</p>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "REACH OUT", desc: "Contact us with what categories you're interested in and your typical order volume." },
              { step: "02", title: "GET ACCESS", desc: "We'll send you our current inventory list with wholesale pricing within 24 hours." },
              { step: "03", title: "PLACE YOUR ORDER", desc: "Select what you want, place your order, and we'll ship directly to you." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex-shrink-0 w-14 h-14 bg-accent text-black font-display text-xl flex items-center justify-center rounded-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-xl text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Inventory Waitlist */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wide">
            Exclusive Access
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-white mb-4">LIVE INVENTORY FEED</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Get real-time access to our full inventory. Browse products, check quantities, and place orders instantly. Available to verified wholesale partners.
          </p>
          <button
            onClick={() => openForm("Live Inventory Feed Access")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-semibold rounded-xl hover:bg-accent-dim transition-all duration-200 shadow-lg hover:shadow-accent/25 hover:scale-105"
          >
            Request Feed Access
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </button>
          <p className="mt-4 text-white/40 text-sm">
            We verify all partners before granting access
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
            READY TO ORDER?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
            Get access to our wholesale inventory today. No minimums to start.
          </p>
          <button
            onClick={() => openForm()}
            className="inline-flex items-center gap-3 px-12 py-5 bg-accent text-black text-lg font-semibold rounded-xl hover:bg-accent-dim transition-all duration-200 shadow-lg hover:shadow-accent/25 hover:scale-105"
          >
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Response in 24 hours
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No minimum order
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% authentic
            </span>
          </div>
        </div>
      </section>

      {/* Also Buy Section */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/60 mb-4">
            Have inventory you want to sell? We're always buying.
          </p>
          <button
            onClick={() => openForm("Selling Inventory")}
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            Contact us about selling your inventory
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} West Coast Deals LLC</p>
      </footer>

      {/* Category Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                {selectedCategory.comingSoon && (
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                    Coming Soon
                  </span>
                )}
                <h3 className="font-display text-2xl text-gray-900">
                  {selectedCategory.name.toUpperCase()}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">{selectedCategory.details}</p>

            {selectedCategory.brands && selectedCategory.brands.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  {selectedCategory.comingSoon ? "Categories" : "Brands & Types"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setSelectedCategory(null);
                openForm(selectedCategory.name);
              }}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-black font-semibold rounded-xl hover:bg-accent-dim transition-all"
            >
              Inquire About {selectedCategory.name}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          onClick={closeForm}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl transform transition-all my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {!formSubmitted ? (
              <>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl text-gray-900">GET IN TOUCH</h3>
                    {formCategory && (
                      <p className="text-accent text-sm mt-1">
                        Interested in: {formCategory}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={closeForm}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-accent text-black font-semibold rounded-xl hover:bg-accent-dim transition-all flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    We'll respond within 24 hours
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-2">REQUEST RECEIVED!</h3>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours with inventory details and pricing.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-sm text-gray-500 mb-3">Want to schedule a call instead?</p>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all text-sm"
                    onClick={() => {
                      // Placeholder for Calendly link
                      alert("Calendly integration coming soon!");
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Call
                  </button>
                </div>

                <button
                  onClick={closeForm}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Close this window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
