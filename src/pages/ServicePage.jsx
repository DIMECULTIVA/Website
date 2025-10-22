import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const copy = {
  "waste-management": { title: "Waste Management", lead:"Collections, recycling & compliance. Right-sized containers, transparent reporting, zero-landfill mindset.", image: "/assets/hero-waste.svg", bullets: ["General, recyclable & regulated streams","Skips, bins & compactors","Manifests, weighbridge tickets & certificates"] },
  "industrial-equipment": { title: "Industrial Equipment", lead:"Sourcing & supply of dependable tools and industrial equipment with fast turnaround.", image: "/assets/hero-industrial.svg", bullets: ["Power & pneumatic tools","Material handling","Service & support"] },
  "ppe": { title: "PPE", lead:"Head-to-toe protection from trusted brands: head, eye, hearing, hand protection & workwear.", image: "/assets/hero-ppe.svg", bullets: ["SABS-compliant gear","Bulk pricing","Rapid fulfillment"] },
  "stationery": { title: "Stationery", lead:"Office stationery, paper, consumables and devices tailored to keep teams productive.", image: "/assets/hero-stationery.svg", bullets: ["Curated lists","Contract pricing","Delivery scheduling"] },
};

export default function ServicePage({ sections }) {
  const { slug } = useParams();
  const data = copy[slug];
  const [reveal, setReveal] = useState(true);
  useEffect(() => { const t = setTimeout(() => setReveal(false), 900); return () => clearTimeout(t); }, [slug]);
  if (!data) return <div className="p-8">Not found.</div>;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <section className="container-px max-w-6xl mx-auto py-14 sm:py-18">
        <AnimatePresence mode="wait">
          {reveal ? (
            <motion.div key="title" initial={{ opacity: 0, y: 12, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }} exit={{ opacity: 0, scale: 0.8, filter: "blur(14px)", transition: { duration: 0.45 } }} className="flex items-center justify-center py-24">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white/90">{data.title}</h1>
            </motion.div>
          ) : (
            <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="glass p-5 sm:p-7 rounded-2xl">
                <div className="grid md:grid-cols-5 gap-5">
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                    <p className="mt-2 text-zinc-300">{data.lead}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-zinc-200">{data.bullets.map(b => <li key={b}>â€¢ {b}</li>)}</ul>
                  </div>
                  <div className="md:col-span-2">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                      <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-5">
                {sections.map(s => (
                  <div key={s.id} className="glass p-5 rounded-2xl">
                    <h3 className="font-semibold">{s.title}</h3>
                    {s.text && <p className="mt-2 text-sm text-zinc-300">{s.text}</p>}
                    {s.bullets && <ul className="mt-3 grid gap-2 text-sm text-zinc-200">{s.bullets.map(b => <li key={b}>â€¢ {b}</li>)}</ul>}
                    {s.cta && <a href={s.cta} className="btn-primary mt-4 inline-flex">Get a Quote</a>}
                  </div>
                ))}
              </div>

              <div className="mt-8 glass p-6 rounded-2xl text-center">
                <h4 className="text-lg font-semibold">Ready to start?</h4>
                <p className="mt-2 text-sm text-zinc-300">Tell us your volumes and frequency â€” weâ€™ll recommend containers and schedule.</p>
                <a href="mailto:dimecultiva@gmail.com" className="btn-primary mt-4 inline-flex">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
