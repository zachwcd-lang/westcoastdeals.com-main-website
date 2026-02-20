"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="glass rounded-2xl max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              WEST COAST DEALS
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "What We Do", "Wholesale", "Careers"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {item === "Careers" ? (
                    <a
                      href="https://hiring.shopwestcoastdeals.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                    >
                      {item}
                    </a>
                  ) : (
                    <Link
                      href={item === "Home" ? "/" : item === "What We Do" ? "/what-we-do" : `/${item.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                    >
                      {item}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              href="https://hiring.shopwestcoastdeals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="tracking-wide">NOW HIRING</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/warehouse-hero.jpeg"
          alt="Warehouse"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Animated orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="glass-strong rounded-[2.5rem] px-8 py-16 md:px-20 md:py-20"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 text-sm font-medium text-accent/90 border border-accent/20 rounded-full bg-accent/5"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="tracking-[0.2em] text-xs">PORTLAND • LOS ANGELES • MISSISSIPPI</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-7xl md:text-9xl text-white mb-8 leading-[0.9] tracking-tight"
            >
              WEST COAST
              <br />
              <span className="text-accent text-glow">DEALS</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              The future of live commerce. Over $1M in monthly sales across sneakers, streetwear, and sports merchandise.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#what-we-do"
                className="group relative px-10 py-4 bg-accent text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,201,106,0.3)]"
              >
                <span className="relative z-10 tracking-wide">Learn More</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <Link
                href="/wholesale"
                className="px-10 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 tracking-wide"
              >
                Wholesale Inquiries
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative py-24 gradient-mesh">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "10,000+", label: "Pairs in Inventory" },
              { value: "500+", label: "Orders Daily" },
              { value: "$1M+", label: "Monthly Revenue" },
              { value: "3", label: "Locations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-500"
              >
                <div className="font-display text-5xl md:text-6xl text-accent mb-3 group-hover:text-glow transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="relative py-32 gradient-mesh overflow-hidden">
        <div className="orb orb-3" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] text-accent/80 border border-accent/20 rounded-full"
            >
              OUR APPROACH
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display text-6xl md:text-8xl text-white mb-6 tracking-tight"
            >
              WHAT WE DO
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              We're revolutionizing how people buy and sell through live streaming commerce. Real-time engagement, authentic products, and unbeatable deals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-10 group hover:border-accent/30 transition-all duration-500"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs tracking-[0.2em] text-accent bg-accent/10 rounded-full">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                PRIMARY
              </div>
              <h3 className="font-display text-3xl text-white mb-4 tracking-tight">LIVE SELLING</h3>
              <p className="text-white/50 leading-relaxed">
                Real-time auction-style sales with engaged audiences. Interactive shopping experiences that drive conversions and build community.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-10 group hover:border-white/20 transition-all duration-500"
            >
              <h3 className="font-display text-3xl text-white mb-4 tracking-tight">TRADITIONAL ECOMMERCE</h3>
              <p className="text-white/50 leading-relaxed">
                Established marketplace presence for authenticated products. Meeting customers where they shop with verified, quality inventory.
              </p>
            </motion.div>
          </motion.div>

          {/* What We Sell */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="glass-strong rounded-3xl p-12"
          >
            <h3 className="font-display text-4xl text-white mb-12 text-center tracking-tight">WHAT WE SELL</h3>
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                { name: "Women's Apparel", desc: "Trending styles & designer brands" },
                { name: "Women's Accessories", desc: "Bags, jewelry & more" },
                { name: "Sneakers & Footwear", desc: "Nike, Jordan, Adidas, New Balance" },
                { name: "Licensed Sports", desc: "Jerseys, team gear & fan apparel" },
                { name: "Collectibles", desc: "Cards, memorabilia & limited items" },
                { name: "+ More", desc: "New categories added regularly" },
              ].map((cat, i) => (
                <motion.div
                  key={cat.name}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="text-center group cursor-default"
                >
                  <div className="font-display text-xl text-accent mb-2 group-hover:text-glow transition-all duration-300 tracking-wide">
                    {cat.name.toUpperCase()}
                  </div>
                  <p className="text-white/40 text-sm">{cat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="orb orb-1" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] text-accent/80 border border-accent/20 rounded-full"
          >
            PARTNERSHIPS
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-6xl md:text-8xl text-white mb-6 tracking-tight"
          >
            WHOLESALE
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/50 mb-12 max-w-xl mx-auto"
          >
            Looking to move inventory at scale? Partner with the largest live commerce operation on the West Coast.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/wholesale"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,201,106,0.4)]"
            >
              <span className="tracking-wide">Get Started with Wholesale</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="relative py-32 gradient-mesh">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] text-accent/80 border border-accent/20 rounded-full"
              >
                ABOUT US
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl text-white mb-6 leading-[1.1] tracking-tight"
              >
                BUILT IN PORTLAND,
                <br />
                <span className="text-accent text-glow">SCALING NATIONWIDE</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-white/50 mb-10 leading-relaxed"
              >
                What started as a passion for sneakers has grown into a multi-location live commerce operation. With warehouses in Portland, Los Angeles, and Mississippi, we're bringing the excitement of live shopping to audiences across the country.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-accent font-semibold tracking-wide hover:gap-4 transition-all duration-300"
                >
                  Learn our story
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "3", label: "Locations" },
                { value: "35+", label: "Team Members" },
                { value: "250+", label: "Hours Streamed Weekly" },
                { value: "6+", label: "Sales Channels" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-500"
                >
                  <div className="font-display text-4xl text-accent mb-2 group-hover:text-glow transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="glass-strong rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">Now Hiring</span>
              </div>
              <h3 className="font-display text-5xl text-white mb-3 tracking-tight">JOIN THE TEAM</h3>
              <p className="text-white/50">We're looking for passionate people to join our growing operation.</p>
            </div>
            <a
              href="https://hiring.shopwestcoastdeals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-5 bg-accent text-black font-semibold rounded-xl whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,201,106,0.4)]"
            >
              <span className="tracking-wide">View Open Positions</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-white font-bold text-2xl mb-4 tracking-tight">WEST COAST DEALS</div>
              <p className="text-white/40 mb-6">The future of live commerce.</p>
              <div className="flex items-center gap-2 text-accent text-sm tracking-[0.15em]">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                PORTLAND • LOS ANGELES • MISSISSIPPI
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl text-white mb-6 tracking-tight">LINKS</h4>
              <div className="flex flex-col gap-4">
                {["Home", "About", "What We Do", "Wholesale"].map((link) => (
                  <Link
                    key={link}
                    href={link === "Home" ? "/" : link === "What We Do" ? "/what-we-do" : `/${link.toLowerCase()}`}
                    className="text-white/40 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link}
                  </Link>
                ))}
                <a
                  href="https://hiring.shopwestcoastdeals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dim transition-colors duration-300 text-sm tracking-wide"
                >
                  Careers
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl text-white mb-6 tracking-tight">WHOLESALE</h4>
              <p className="text-white/40 mb-6 text-sm">Interested in partnering with us?</p>
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-black text-sm font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,201,106,0.3)] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-white/30 text-sm tracking-wide">
            © {new Date().getFullYear()} West Coast Deals LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
