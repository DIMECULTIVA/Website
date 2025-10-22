import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceHub() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <section className="container-px max-w-6xl mx-auto py-16 sm:py-20">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Choose a service</motion.h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[["Waste Management","/service/waste-management"],["Industrial Equipment","/service/industrial-equipment"],["PPE","/service/ppe"],["Stationery","/service/stationery"]].map(([label, to], i) => (
            <motion.div key={label} className="glass card-hover p-5 rounded-2xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i }}>
              <div className="font-semibold">{label}</div>
              <p className="mt-2 text-sm text-zinc-300">Tap to see details, deliverables, and how to get started.</p>
              <Link className="btn-secondary mt-4" to={to}>Open</Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
