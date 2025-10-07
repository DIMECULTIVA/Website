import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, HardHat, Factory, AlertTriangle, Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react'

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const NavLink = ({ href, label }) => (
  <a href={href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">{label}</a>
)

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setProgress(scrolled)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="fixed top-0 left-0 h-1 bg-black z-50 transition-[width]" style={{ width: `${progress}%` }} />
}

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      <a
        href="https://wa.me/27663300304?text=Hi%20DIMECULTIVA%2C%20I%27d%20like%20a%20quote."
        className="px-4 py-2 rounded-2xl bg-black text-white shadow hover:bg-zinc-800 transition"
      >
        WhatsApp
      </a>
      <a
        href="tel:+27663300304"
        className="px-4 py-2 rounded-2xl bg-white text-black border border-zinc-300 shadow hover:bg-zinc-100 transition"
      >
        Call
      </a>
    </div>
  )
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)
    // required for Netlify
    data.append('form-name', 'quote')

    try {
      await fetch('/', { method: 'POST', body: data })
      setSubmitted(true)
      form.reset()
      window.track?.('form_submit', { form: 'quote' })
    } catch (err) {
      alert('Submission failed. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-2 text-sm text-zinc-600">
          Your request has been submitted. We’ll email you from <b>dimecultiva@gmail.com</b>.
        </p>
        <a href="/" className="inline-block mt-4 px-4 py-2 rounded-2xl bg-black text-white hover:bg-zinc-800 transition">Back to Home</a>
      </div>
    )
  }

  return (
    <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
      <h3 className="text-lg font-semibold">Request a Quote</h3>
      <form
        name="quote"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-4 grid gap-4"
      >
        <input type="hidden" name="form-name" value="quote" />
        <p className="hidden" aria-hidden="true">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Full name" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900" required />
          <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900" required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="company" placeholder="Company (optional)" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
          <input name="phone" placeholder="Phone" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        </div>
        <textarea name="message" rows="5" placeholder="Tell us what you need (e.g., PPE specs, quantities, delivery location)" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900" required></textarea>
        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-500">We reply within one business day.</p>
          <button type="submit" disabled={sending} className="px-4 py-2 rounded-2xl bg-black text-white hover:bg-zinc-800 transition">
            {sending ? 'Sending...' : 'Send Request'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <ScrollProgressBar />
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-zinc-800 to-black shadow-md" />
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight">DIMECULTIVA</div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">• PPE • Hardware • Industrial • Safety</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about" label="About" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#team" label="Team" />
            <NavLink href="#contact" label="Contact" />
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" onClick={() => window.track?.('cta_contact_click')} className="px-4 py-2 rounded-2xl bg-black text-white hover:bg-zinc-800 transition-transform duration-150 hover:scale-105 active:scale-95">Get a Quote</a>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black" />
        <div className="absolute inset-0 opacity-15" style={{backgroundImage:
          'radial-gradient(60rem 60rem at 10% 10%, rgba(255,255,255,.15) 0, transparent 40%), radial-gradient(40rem 40rem at 90% 30%, rgba(255,255,255,.1) 0, transparent 40%)'}} />
        <Section className="relative py-24 sm:py-28 lg:py-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Reliable Supplier for Safer, Better‑Equipped Workplaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl text-lg/7 text-zinc-200"
          >
            We deliver quality PPE, builders hardware, industrial and safety equipment to construction, mining, education and public services across South Africa.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-2.5 rounded-2xl bg-white text-black hover:bg-zinc-200 font-medium transition-transform duration-150 hover:scale-105 active:scale-95">Explore Services</a>
            <a href="#contact" onClick={() => window.track?.('cta_contact_click')} className="px-5 py-2.5 rounded-2xl bg-black text-white hover:bg-zinc-800 font-medium transition-transform duration-150 hover:scale-105 active:scale-95">Contact Sales</a>
          </div>
          <div className="mt-6 text-xs uppercase tracking-wide text-white/75">100% Black & Youth‑Owned • 51% Women Ownership</div>
        </Section>
      </div>

      {/* About */}
      <Section id="about" className="py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <p className="mt-4 text-zinc-600">
              Established in 2023, DIMECULTIVA (PTY) LTD is a proudly South African company with a firm commitment to excellence, reliability and empowerment. We focus on end‑to‑end procurement solutions with superior quality, and dependable service so our clients remain safe and operationally efficient.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/>Inclusive economic participation & transformation</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/>Multi‑sector supply: construction, mining, industrial, education, public services</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/>Quality‑assured products and responsive turnaround</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/>Customer‑centric, relationship‑driven approach</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
              <h3 className="text-lg font-semibold">At a Glance</h3>
              <div className="mt-4 grid gap-4 text-sm">
                <Row label="Founded" value="2023" />
                <Row label="Ownership" value="100% Black & Youth • 51% Women" />
                <Row label="Sectors" value="Construction, Mining, Industrial, Education, Public" />
                <Row label="Focus" value="PPE, Hardware, Industrial & Safety" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <div className="bg-white border-t border-zinc-200">
        <Section id="services" className="py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight">What We Supply</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">Comprehensive, quality‑assured procurement across four core categories.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard Icon={Shield} title="Personal Protective Equipment (PPE)" bullets={[
              'Head, eye, hearing & respiratory protection',
              'Hand protection & workwear',
              'Fall‑arrest, harnesses & safety boots',
            ]} />
            <ServiceCard Icon={HardHat} title="Builders Hardware" bullets={[
              'Tools, fasteners & fixings',
              'Cement, aggregates & consumables',
              'Site setup & general hardware',
            ]} />
            <ServiceCard Icon={Factory} title="Industrial Equipment" bullets={[
              'Power & pneumatic tools',
              'Material handling & lifting',
              'Generators, compressors & pumps',
            ]} />
            <ServiceCard Icon={AlertTriangle} title="Safety Equipment" bullets={[
              'Fire safety & spill control',
              'Lock‑out/Tag‑out',
              'Signage & first‑aid kits',
            ]} />
          </div>
          <div className="mt-12 overflow-hidden">
            <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-sm text-zinc-500">
              <span>Construction</span><span>•</span><span>Mining</span><span>•</span><span>Industrial</span><span>•</span><span>Education</span><span>•</span><span>Public Services</span><span>•</span><span>Manufacturing</span>
            </div>
          </div>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center gap-2 text-black hover:text-zinc-700 font-medium group">Request a tailored quote <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/></a>
          </div>
        </Section>
      </div>

      {/* Team */}
      <Section id="team" className="py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">We personally oversee every project to ensure quality, reliability and long‑term partnerships.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <TeamCard
                name="Keorapetse Tlhapane"
                role="Chief Executive Officer"
                phone="066 330 0304"
                phoneHref="+27663300304"
              />
              <TeamCard
                name="Oratile Mahlangu"
                role="Managing Director"
                phone="076 308 8254"
                phoneHref="+27763088254"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
            <h3 className="text-lg font-semibold">Why Work With Us</h3>
            <ul className="mt-4 grid gap-3 text-sm text-zinc-700">
              <Bullet>Competitive pricing without compromising quality</Bullet>
              <Bullet>Responsive sourcing and dependable delivery</Bullet>
              <Bullet>Safety‑first mindset aligned to your compliance needs</Bullet>
              <Bullet>Relationship‑driven service and support</Bullet>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <div className="bg-gradient-to-br from-white to-zinc-50 border-t border-zinc-200">
        <Section id="contact" className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-7 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-3 text-zinc-600">Tell us what you need and we’ll send options and pricing.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <ContactRow Icon={Phone} label="Phone" value={<>
                  <a href="tel:+27663300304" className="hover:underline">066 330 0304</a> / <a href="tel:+27763088254" className="hover:underline">076 308 8254</a>
                </>} />
                <ContactRow Icon={Mail} label="Email" value={<a href="mailto:dimecultiva@gmail.com" className="hover:underline">dimecultiva@gmail.com</a>} />
                <ContactRow Icon={MapPin} label="Address" value={<>1561 Riviera Place, Centurion, Pretoria, 0157</>} />
              </div>
            </div>
            <QuoteForm />
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} DIMECULTIVA (PTY) LTD. All rights reserved.</p>
          <div className="text-xs text-zinc-500">Proudly South African • Established 2023</div>
        </Section>
      </footer>

      <FloatingContact />
    </div>
  )
}

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-zinc-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
)

const ServiceCard = ({ Icon, title, bullets }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm h-full p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div className="space-y-3">
      <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center">
        <Icon className="h-6 w-6 text-zinc-900" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />{b}</li>
      ))}
    </ul>
  </div>
)

const TeamCard = ({ name, role, phone, phoneHref }) => {
  const waNumber = (phoneHref || '').replace('+', '')
  const waText = encodeURIComponent(`Hi ${name}, I'd like a quote.`)
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300">
      <div className="space-y-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-zinc-600">{role}</div>
        {phone && (
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 text-zinc-800 hover:underline" onClick={() => window.track?.('call_click', { person: name })}>
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black text-white hover:bg-zinc-800 transition"
              aria-label={`WhatsApp ${name}`}
              title="WhatsApp"
              onClick={() => window.track?.('whatsapp_click', { person: name })}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />{children}</li>
)

const ContactRow = ({ Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 h-9 w-9 rounded-xl bg-zinc-100 flex items-center justify-center">
      <Icon className="h-4 w-4 text-zinc-700" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="text-sm text-zinc-800">{value}</div>
    </div>
  </div>
)
