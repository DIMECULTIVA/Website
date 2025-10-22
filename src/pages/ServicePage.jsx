// src/pages/ServicePage.jsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import BackButton from "../components/BackButton.jsx";

/**
 * Service data (copy can be edited any time).
 * Images use high-quality remote sources so the page looks real without bundling assets.
 * You can replace with /assets/*.jpg if you’ve added local images to /public.
 */
const SERVICE_CONFIG = {
    "waste-management": {
        title: "Waste Management",
        tagline: "Integrated collection, sorting, recycling and compliant disposal.",
        hero:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        ],
        bullets: [
            "General, recyclable, hazardous & medical waste streams",
            "On-site separation, containers & scheduled pickups",
            "Licensed transporters & audited downstream partners",
            "Compliance reporting, manifests & CoCs",
        ],
    },
    "industrial-equipment": {
        title: "Industrial Equipment",
        tagline: "Sourcing, rental and maintenance to keep operations moving.",
        hero:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504669222569-0c01c0b31f2f?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
        ],
        bullets: [
            "Power tools, lifting & material handling",
            "Compressors, generators & pumps",
            "Planned maintenance and spares logistics",
            "On-site delivery and rapid turnaround",
        ],
    },
    ppe: {
        title: "PPE",
        tagline: "Certified personal protective equipment for every risk profile.",
        hero:
            "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1580983561371-7c1f1b51a2b6?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
        ],
        bullets: [
            "Head, eye, hearing & respiratory protection",
            "Hand protection, workwear & safety footwear",
            "Fall-arrest systems & high-visibility apparel",
            "Bulk supply & consignment options",
        ],
    },
    stationery: {
        title: "Stationery",
        tagline: "Corporate stationery & consumables delivered to your desk.",
        hero:
            "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517682163659-e3b0b87f0e2f?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531346878377-6d43a58a0b15?q=80&w=1600&auto=format&fit=crop",
        ],
        bullets: [
            "Paper, toners, writing & filing systems",
            "Office machines and accessories",
            "Monthly auto-replenishment schedules",
            "Branding & custom kits for teams",
        ],
    },
};

export default function ServicePage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const svc = SERVICE_CONFIG[slug];

    // Animations: title appears, then evaporates, then content fades in
    const titleAnim = useAnimation();
    const veilAnim = useAnimation();
    const contentAnim = useAnimation();

    useEffect(() => {
        if (!svc) {
            navigate("/services", { replace: true });
            return;
        }

        (async () => {
            // Intro title in/out
            await titleAnim.start({
                opacity: [0, 1, 1, 0],
                filter: ["blur(18px)", "blur(0px)", "blur(0px)", "blur(26px)"],
                transition: { duration: 1.8, times: [0, 0.25, 0.65, 1], ease: "easeOut" },
            });

            // Glass veil soften → pull back
            await veilAnim.start({
                backdropFilter: [
                    "blur(24px) saturate(120%)",
                    "blur(10px) saturate(110%)",
                    "blur(6px) saturate(100%)",
                ],
                backgroundColor: ["rgba(255,255,255,.10)", "rgba(255,255,255,.06)", "rgba(255,255,255,.05)"],
                transition: { duration: 0.6, ease: "easeOut" },
            });

            // Reveal content
            contentAnim.start({
                opacity: [0, 1],
                y: [10, 0],
                transition: { duration: 0.5, ease: "easeOut" },
            });
        })();
    }, [slug]);

    if (!svc) return null;

    return (
        <main className="relative min-h-[100svh] text-white">
            {/* Gradient bg */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0A0F10] via-[#0F1F1E] to-[#0A0F10]" />

            {/* Hero image */}
            <div className="relative h-[44svh] sm:h-[52svh] overflow-hidden">
                <img
                    src={svc.hero}
                    alt={`${svc.title} hero`}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Title that fades in then out */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={titleAnim}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     text-4xl sm:text-6xl font-extrabold tracking-tight text-center"
                    style={{
                        textShadow: "0 10px 40px rgba(0,0,0,.5), 0 0 80px rgba(255,255,255,.2)",
                    }}
                >
                    {svc.title}
                </motion.h1>
            </div>

            {/* Glass veil container that softens after title exits */}
            <motion.section
                animate={veilAnim}
                className="relative -mt-10 mx-auto max-w-6xl rounded-3xl border border-white/15
                   bg-white/10 backdrop-blur-xl p-5 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,.35)]"
            >
                <BackButton />

                <motion.div initial={{ opacity: 0, y: 10 }} animate={contentAnim}>
                    {/* Breadcrumbs */}
                    <nav className="text-sm text-white/70 mb-5">
                        <Link className="hover:underline" to="/">Home</Link>
                        <span className="mx-2">/</span>
                        <Link className="hover:underline" to="/services">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{svc.title}</span>
                    </nav>

                    {/* Intro copy */}
                    <p className="text-white/85 text-lg leading-relaxed max-w-3xl">
                        {svc.tagline}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                        {svc.bullets.map((b, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md
                           text-white/90 flex items-start gap-3"
                            >
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                                {b}
                            </div>
                        ))}
                    </div>

                    {/* Gallery */}
                    <div className="mt-8 grid md:grid-cols-3 gap-4">
                        {svc.gallery.map((src, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                            >
                                <img
                                    src={src}
                                    alt={`${svc.title} visual ${i + 1}`}
                                    className="h-56 w-full object-cover hover:scale-[1.03] transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                        <Link
                            to="/#contact"
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3
                         font-semibold text-black bg-emerald-500 hover:bg-emerald-400
                         border border-emerald-300/70 shadow-[0_10px_30px_rgba(16,185,129,.35)] transition"
                        >
                            Request a Quote
                        </Link>
                        <a
                            href="mailto:dimecultiva@gmail.com?subject=Service%20Enquiry"
                            className="text-white/80 hover:underline"
                        >
                            Or email us directly
                        </a>
                    </div>
                </motion.div>
            </motion.section>

            {/* Footer spacer */}
            <div className="h-10" />
        </main>
    );
}
