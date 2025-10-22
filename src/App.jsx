import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro.jsx";
import ServiceHub from "./components/ServiceHub.jsx";
import ServicePage from "./pages/ServicePage.jsx";

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/services" element={<ServiceHub />} />
          <Route
            path="/service/:slug"
            element={
              <ServicePage
                sections={[
                  { id: "overview", title: "Overview", text: "We deliver end-to-end solutions with transparent reporting and audit-ready documentation." },
                  { id: "what-we-do", title: "What we do", bullets: ["Site assessment & right-sizing containers","Scheduled collections & smart routing","Recycling & resource recovery","Compliance docs: manifests, certificates, mass-balance"] },
                  { id: "get-started", title: "Get started", text: "Tell us your volumes and collection frequency â€” weâ€™ll recommend containers and schedule.", cta: "mailto:dimecultiva@gmail.com" }
                ]}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
