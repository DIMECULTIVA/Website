// src/components/ServiceHub.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "./BackButton.jsx";

const CARDS = [
    {
        slug: "waste-management",
        title: "Waste Management",
        blurb:
            "Integrated collection, separation, recycling and compliant disposal for all waste streams.",
        img: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop",
    },
    {
        slug: "industrial-equipment",
        title: "Industrial Equipment",
        blurb:
            "Power tools, lifting, generators, compressors and maintenance support to keep you moving.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    },
    {
        slug: "ppe",
        title: "PPE",
        blurb:
            "Certified head, eye, hearing, respiratory, hand protection, footwear and fall-arrest systems.",
        img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=1600&auto=format&fit=crop",
    },
    {
        slug: "stationery",
        title: "Stationery",
        blurb:
            "Corporate stationery, consumables and office essentials with scheduled auto-replenishment.",
        img: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1600&auto=format&fit=crop",
    },
];

function ServiceCard({ slug, title, blurb, img, i }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 * i, ease: "easeOut" }}
            className="group overflow-hidden rounded-3xl border border-white/12 bg-white/7 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.35)]"
        >
            <Link to={`/service/${slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 rounded-3xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute left-0 right-0 bottom-0 p-5">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow">
                            {title}
                        </h3>
                    </div>
                </div>
                <div className="p-5 text-white/85">
                    <p className="text-sm leading-relaxed">{blurb}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-emerald-300 font-medium">
                        View details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="translate-x-0 group-hover:translate-x-0.5 transition">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function ServiceHub() {
    return (
        <main className="relative min-h-[100svh] text-white">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A0F10] via-[#0F1F1E] to-[#0A0F10]" />
            {/* Subtle spotlight */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.10] bg-[radial-gradient(900px_400px_at_50%_-150px,rgba(255,255,255,.18)_0%,transparent_60%)]" />

            <BackButton />

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <motion.header
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8 sm:mb-10"
                >
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Services</h1>
                    <p className="mt-3 text-white/80 max-w-2xl">
                        Select a service to dive into a dedicated page with process, capabilities, compliance and
                        imagery — designed with a clean glass UI and smooth transitions.
                    </p>
                </motion.header>

                <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                    {CARDS.map((c, i) => (
                        <ServiceCard key={c.slug} {...c} i={i} />
                    ))}
                </div>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        to="/#contact"
                        className="inline-flex items-center justify-center rounded-2xl px-5 py-3
                       font-semibold text-black bg-emerald-500 hover:bg-emerald-400
                       border border-emerald-300/70 shadow-[0_10px_30px_rgba(16,185,129,.35)] transition"
                    >
                        Request a Quote
                    </Link>
                    <p className="text-white/70 text-sm">
                        Prefer email?{" "}
                        <a className="underline hover:text-white" href="mailto:dimecultiva@gmail.com?subject=Service%20Enquiry">
                            dimecultiva@gmail.com
                        </a>
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
