// src/components/Intro.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Small reusable button styled like a glass chip.
 */
function MenuButton({ label, to }) {
    return (
        <Link
            to={to}
            className="block rounded-2xl px-4 py-3 text-center font-medium text-white/90
                 backdrop-blur-xl bg-white/10 hover:bg-white/16 transition
                 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,.25)]"
        >
            {label}
        </Link>
    );
}

/**
 * Simple inline rocket icon so we don’t rely on external assets.
 */
function RocketIcon({ className = "h-6 w-6" }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="rGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#B3E5FC" />
                </linearGradient>
            </defs>
            {/* body */}
            <path
                d="M30.5 6.5c6.4 6.4 7.1 18.3 1.5 23.9l-5.7 5.7c-5.6 5.6-17.5 4.9-23.9-1.5c6.4-6.4 7.9-16.6 13.5-22.2l5.7-5.7c1.4-1.4 3.5-1.4 4.9 0z"
                fill="url(#rGrad)"
                stroke="rgba(255,255,255,.55)"
                strokeWidth="1.2"
            />
            {/* window */}
            <circle cx="27.5" cy="14.5" r="3.2" fill="#0EA5E9" />
            {/* fins */}
            <path d="M15 30l6 3-3 6-6-3z" fill="#ef4444" opacity=".9" />
            {/* fire */}
            <path d="M21 39c3 4 8 4 11 0-4 1-7 0-11 0z" fill="#f59e0b" />
        </svg>
    );
}

/**
 * Intro screen with:
 *  - Cloudy "Hello" that fades/evaporates
 *  - Center vertical rope
 *  - Rocket launching up, then menu appears
 */
export default function Intro() {
    const hello = useAnimation();
    const rocket = useAnimation();
    const menu = useAnimation();
    const hint = useAnimation();

    useEffect(() => {
        (async () => {
            // 1) "Hello" appears then fades like clouds
            await hello.start({
                opacity: [0, 1, 0.92, 0.85, 0.7, 0.4, 0],
                filter: [
                    "blur(16px)",
                    "blur(10px)",
                    "blur(12px)",
                    "blur(18px)",
                    "blur(24px)",
                    "blur(30px)",
                    "blur(40px)",
                ],
                transition: { duration: 2.2, ease: "easeOut" },
            });

            // 2) Rocket lifts off up the rope
            await rocket.start({
                y: ["40vh", "22vh", "6vh", "-8vh", "-22vh", "-36vh"],
                scale: [0.9, 1, 1.04, 1.02, 1],
                rotate: [0, -1, 1, 0],
                transition: { duration: 1.6, ease: "easeInOut" },
            });

            // 3) Menu glides in (as if pulled by the rocket)
            await menu.start({
                opacity: [0, 1],
                y: [18, 0],
                transition: { duration: 0.55, ease: "easeOut" },
            });

            // 4) Hint fades in
            hint.start({
                opacity: [0, 1],
                transition: { duration: 0.6, delay: 0.1 },
            });
        })();
    }, []);

    return (
        <main
            className="relative min-h-[100svh] overflow-hidden
                 bg-gradient-to-br from-[#0A0F10] via-[#0F1F1E] to-[#0A0F10] text-white"
        >
            {/* Subtle noise / vignette overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[.08] mix-blend-overlay bg-[radial-gradient(1000px_500px_at_50%_-200px,rgba(255,255,255,.12)_0%,transparent_60%)]" />

            {/* Center rope */}
            <div
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px
                   bg-gradient-to-b from-transparent via-white/40 to-transparent"
            />

            {/* Rocket on the rope */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                initial={{ y: "40vh", opacity: 1 }}
                animate={rocket}
            >
                <div className="translate-y-[-28px]">
                    <RocketIcon className="h-10 w-10 drop-shadow-[0_4px_16px_rgba(255,255,255,.35)]" />
                </div>
            </motion.div>

            {/* "Hello" cloudy text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hello}
                className="absolute left-1/2 top-[22vh] -translate-x-1/2 select-none"
            >
                <div
                    className="text-[12vw] sm:text-7xl font-extrabold tracking-tight"
                    style={{
                        background:
                            "radial-gradient(1000px 320px at 50% 40%, rgba(255,255,255,.95), rgba(255,255,255,.0))",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        textShadow:
                            "0 10px 40px rgba(255,255,255,.35), 0 0 180px rgba(255,255,255,.25)",
                    }}
                >
                    Hello
                </div>
            </motion.div>

            {/* MENU — perfectly centered across all viewports */}
            <div className="absolute top-[26svh] left-0 right-0 px-4">
                <div className="mx-auto max-w-xl">
                    <motion.div
                        className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
                        initial={{ opacity: 0, y: 12 }}
                        animate={menu}
                    >
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MenuButton
                                label="Waste Management"
                                to="/service/waste-management"
                            />
                            <MenuButton
                                label="Industrial Equipment"
                                to="/service/industrial-equipment"
                            />
                            <MenuButton label="PPE" to="/service/ppe" />
                            <MenuButton label="Stationery" to="/service/stationery" />

                            <Link
                                to="/services"
                                className="col-span-2 mt-1 block rounded-2xl px-4 py-3 text-center font-semibold
                           bg-emerald-500/90 hover:bg-emerald-500 text-black
                           border border-emerald-400/70 shadow-[0_8px_24px_rgba(16,185,129,.45)] transition"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hint}
                className="pointer-events-none absolute inset-x-0 bottom-[calc(env(safe-area-inset-bottom,0px)+18px)] text-center text-sm text-white/60"
            >
                Tap a service to continue
            </motion.div>
        </main>
    );
}
