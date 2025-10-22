import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

export default function Intro() {
  const rocket = useAnimation();
  const hello = useAnimation();
  const rope = useAnimation();
  const menu = useAnimation();

  useEffect(() => {
    (async () => {
      await hello.start({ opacity: [0,1], filter: ["blur(10px)","blur(0px)"], y: [20,0], transition: { duration: 0.9, ease: "easeOut" } });
      rocket.start({ y: ["20vh","-35vh"], rotate: [-6,-2], transition: { duration: 1.6, ease: [0.2,0.8,0.2,1] } });
      hello.start({ opacity: [1,0], filter: ["blur(0px)","blur(14px)"], scale: [1,1.08,0.96,0.6], transition: { duration: 0.75, ease: "easeOut" } });
      rope.start({ opacity: [0,1], height: ["0%","40%"], transition: { duration: 0.5, ease: "easeOut" } });
      await menu.start({ opacity: [0,1], y: [20,0], transition: { duration: 0.5, ease: "easeOut", delay: 0.05 } });
    })();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={hello}>
        <div className="select-none text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white/90 drop-shadow-[0_10px_40px_rgba(16,185,129,.25)]">Hello</div>
      </motion.div>
      <motion.div className="absolute left-1/2 top-[58%] -translate-x-1/2 z-10" initial={{ y: "20vh", rotate: -6 }} animate={rocket}>
        <Rocket />
      </motion.div>
      <motion.div className="absolute left-1/2 top-[22%] -translate-x-1/2 w-px bg-white/40" style={{ borderRadius: 1 }} initial={{ opacity: 0, height: "0%" }} animate={rope} />
      <div className="absolute bottom-6 w-full text-center text-sm text-zinc-400">Tap a service to continue</div>
      <motion.div className="absolute left-1/2 top-[26%] -translate-x-1/2 w-[92%] max-w-xl glass p-4 sm:p-5" initial={{ opacity: 0, y: 20 }} animate={menu}>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <MenuButton label="Waste Management" to="/service/waste-management" />
          <MenuButton label="Industrial Equipment" to="/service/industrial-equipment" />
          <MenuButton label="PPE" to="/service/ppe" />
          <MenuButton label="Stationery" to="/service/stationery" />
          <Link className="col-span-2 btn-primary mt-1 text-center" to="/services">Explore Services</Link>
        </div>
      </motion.div>
    </div>
  );
}

function MenuButton({ label, to }) {
  return (<Link to={to} className="glass card-hover text-center py-3 rounded-xl text-sm sm:text-base">{label}</Link>);
}

function Rocket() {
  return (
    <svg width="80" height="80" viewBox="0 0 64 64" className="drop-shadow-2xl">
      <defs>
        <linearGradient id="r1" x1="0" x2="1">
          <stop offset="0%" stopColor="#a3e635" /><stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <motion.path d="M32 52 C26 58, 38 58, 32 64" fill="url(#r1)" initial={{ opacity: 0.7, scaleY: 0.6 }} animate={{ opacity: [0.8,0.3,0.8], scaleY: [0.7,1,0.7] }} transition={{ duration: 0.7, repeat: Infinity }} />
      <path d="M32 8 L42 28 L32 24 L22 28 Z" fill="#fff" opacity=".9" />
      <circle cx="32" cy="20" r="4" fill="#111" />
      <path d="M22 28 L16 36 L26 30 Z" fill="#a3e635" />
      <path d="M42 28 L48 36 L38 30 Z" fill="#10b981" />
    </svg>
  );
}
