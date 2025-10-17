import React from "react";
import { motion } from "framer-motion";
import {
    Recycle, Truck, ShieldCheck, Factory, Building2, Hospital, Cpu,
    Phone, Mail, MapPin, ChevronRight, FileCheck2, BatteryCharging, Boxes
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
    <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </section>
);

const Glass = ({ className = "", children }) => (
    <div className={`rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 shadow-xl ${className}`}>
        {children}
    </div>
);

const Pill = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-300/30 text-emerald-200 px-3 py-1 text-xs">
        {children}
    </span>
);

export default function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-400/30">
            {/* Nav */}
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/40">
                <Section className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-lime-400 shadow-lg" />
                        <div>
                            <div className="text-xl font-extrabold tracking-tight">DIMECULTIVA</div>
                            <div className="text-[11px] uppercase tracking-widest text-zinc-400">
                                Waste Management • Recycling • Compliance
                            </div>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#services" className="hover:text-white text-zinc-300">Services</a>
                        <a href="#industries" className="hover:text-white text-zinc-300">Industries</a>
                        <a href="#compliance" className="hover:text-white text-zinc-300">Compliance</a>
                        <a href="#process" className="hover:text-white text-zinc-300">Process</a>
                        <a href="#contact" className="hover:text-white text-zinc-300">Contact</a>
                    </nav>
                    <div className="hidden md:flex items-center gap-2">
                        <a href="#contact" className="px-4 py-2 rounded-2xl bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition">
                            Request Collection
                        </a>
                    </div>
                </Section>
            </header>

            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_10%,#10b98120,transparent_50%),radial-gradient(40rem_30rem_at_100%_0%,#84cc1625,transparent_50%)]" />
                <Section className="relative py-20 sm:py-24 lg:py-28">
                    <Glass className="p-8 sm:p-10">
                        <Pill>Zero-landfill mindset • Responsible disposal</Pill>
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight"
                        >
                            Full-service Waste Management for Safer, Cleaner Operations
                        </motion.h1>
                        <p className="mt-4 text-zinc-300 max-w-3xl">
                            We collect, sort, recycle and safely dispose of general, recyclable and hazardous waste.
                            Transparent reporting and compliance support so you can focus on your core business.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#services" className="px-5 py-2.5 rounded-2xl bg-white text-zinc-900 font-medium hover:bg-zinc-100">Explore Services</a>
                            <a href="#contact" className="px-5 py-2.5 rounded-2xl bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400">Get a Quote</a>
                        </div>
                    </Glass>
                </Section>
            </div>

            {/* Services */}
            <Section id="services" className="py-16 lg:py-20">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Services</h2>
                    <a href="#contact" className="hidden sm:inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">
                        Request a tailored plan <ChevronRight className="h-4 w-4" />
                    </a>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        Icon={Truck}
                        title="Scheduled Waste Collection"
                        bullets={["General & mixed waste", "Compactors, bins & skips", "On-call & routine routes"]}
                    />
                    <ServiceCard
                        Icon={Recycle}
                        title="Recycling & Resource Recovery"
                        bullets={["Paper, plastics, glass & metals", "Bale & weigh reporting", "Zero-landfill programs"]}
                    />
                    <ServiceCard
                        Icon={ShieldCheck}
                        title="Hazardous & Regulated Waste"
                        bullets={["Manifesting & safe transport", "Licensed partners for treatment", "Spill kits & training"]}
                    />
                    <ServiceCard
                        Icon={Boxes}
                        title="Skips, Bins & Equipment"
                        bullets={["240L wheelie bins to 30m³ skips", "Compactors & balers", "Short/long-term rental"]}
                    />
                    <ServiceCard
                        Icon={BatteryCharging}
                        title="E-waste & Batteries"
                        bullets={["IT asset disposition", "De-gauss & certificates", "Battery collection & recycling"]}
                    />
                    <ServiceCard
                        Icon={FileCheck2}
                        title="Compliance & Reporting"
                        bullets={["Waste categorisation", "Mass balance reporting", "Policy & audit support"]}
                    />
                </div>
            </Section>

            {/* Industries */}
            <div className="border-t border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
                <Section id="industries" className="py-16 lg:py-20">
                    <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <IndustryCard Icon={Factory} label="Manufacturing" />
                        <IndustryCard Icon={Building2} label="Construction & Demolition" />
                        <IndustryCard Icon={Hospital} label="Healthcare (non-infectious streams)" />
                        <IndustryCard Icon={Cpu} label="Tech & Data Centres" />
                    </div>
                </Section>
            </div>

            {/* Compliance */}
            <Section id="compliance" className="py-16 lg:py-20">
                <Glass className="p-6 sm:p-8">
                    <h3 className="text-2xl font-semibold">Compliance & Documentation</h3>
                    <p className="mt-3 text-zinc-300">
                        We align with South African environmental legislation and provide documentation for audits and reporting.
                        That includes waste stream categorisation, safe-transport manifests, and disposal/recycling certificates issued by licensed facilities.
                    </p>
                    <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-zinc-200">
                        <li>• Stream identification & container recommendations</li>
                        <li>• Collection manifests & weighbridge tickets</li>
                        <li>• Certificates of disposal / recycling</li>
                        <li>• Monthly mass-balance & diversion reporting</li>
                    </ul>
                </Glass>
            </Section>

            {/* Process */}
            <Section id="process" className="py-16 lg:py-20">
                <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
                <div className="mt-8 grid md:grid-cols-4 gap-6">
                    {[
                        ["Site Assessment", "We review volumes, streams & layout."],
                        ["Right Containers", "Bins/skips matched to your site."],
                        ["Collection & Sorting", "Scheduled pickups; smart routing."],
                        ["Reporting", "Transparent metrics & certificates."]
                    ].map(([title, body], i) => (
                        <Glass key={i} className="p-5">
                            <div className="text-emerald-300 text-xs">Step {i + 1}</div>
                            <div className="mt-1 font-semibold">{title}</div>
                            <p className="mt-2 text-sm text-zinc-300">{body}</p>
                        </Glass>
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <div className="border-t border-white/10 bg-zinc-950">
                <Section id="contact" className="py-16 lg:py-20">
                    <div className="grid lg:grid-cols-7 gap-10">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                            <p className="mt-3 text-zinc-300">Request a site assessment or a waste collection schedule.</p>
                            <div className="mt-6 grid gap-3 text-sm">
                                <ContactRow Icon={Phone} label="Phone" value={<>
                                    <a className="hover:underline" href="tel:+27120040569">012 004 0569</a>
                                </>} />
                                <ContactRow Icon={Mail} label="Email" value={<a className="hover:underline" href="mailto:dimecultiva@gmail.com">dimecultiva@gmail.com</a>} />
                                <ContactRow Icon={MapPin} label="Address" value={<>1561 Riviera Place, Centurion, Pretoria, 0157</>} />
                            </div>
                        </div>

                        <Glass className="lg:col-span-4 p-6 sm:p-8">
                            <h3 className="text-lg font-semibold">Request a Quote</h3>
                            {/* Netlify form */}
                            <form name="quote" method="POST" data-netlify="true" action="/thank-you.html" className="mt-4 grid gap-4" netlify>
                                <input type="hidden" name="form-name" value="quote" />
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input name="name" placeholder="Full name" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                                    <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input name="company" placeholder="Company (optional)" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                                    <input name="phone" placeholder="Phone" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                                </div>
                                <textarea name="message" rows="5" placeholder="Waste streams, volumes, container needs, collection frequency" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-zinc-400">We reply within one business day.</p>
                                    <button type="submit" className="px-4 py-2 rounded-2xl bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition">Send</button>
                                </div>
                            </form>
                        </Glass>
                    </div>
                </Section>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-zinc-950">
                <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-400">© {new Date().getFullYear()} DIMECULTIVA (PTY) LTD. Waste Management & Environmental Services.</p>
                    <div className="text-xs text-zinc-400 flex items-center gap-4">
                        <a href="/privacy.html" className="hover:text-emerald-300">Privacy</a>
                        <a href="/terms.html" className="hover:text-emerald-300">Terms</a>
                    </div>
                </Section>
            </footer>
        </div>
    );
}

/* Cards */
function ServiceCard({ Icon, title, bullets }) {
    return (
        <Glass className="p-6 h-full">
            <div className="space-y-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {b}
                    </li>
                ))}
            </ul>
        </Glass>
    );
}

function IndustryCard({ Icon, label }) {
    return (
        <Glass className="p-6">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center ring-1 ring-white/15">
                    <Icon className="h-6 w-6 text-emerald-300" />
                </div>
                <div className="font-medium">{label}</div>
            </div>
        </Glass>
    );
}

function ContactRow({ Icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
                <Icon className="h-4 w-4 text-emerald-300" />
            </div>
            <div>
                <div className="text-xs uppercase tracking-wide text-zinc-400">{label}</div>
                <div className="text-sm text-zinc-200">{value}</div>
            </div>
        </div>
    );
}