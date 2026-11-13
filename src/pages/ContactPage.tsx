import { useState } from 'react'
import type { Page } from '../App'
import { useMobile } from '../MobileContext'
import ArenaIcon, { type ArenaIconName } from '../components/ArenaIcon'

const contactDetails: { icon: ArenaIconName; label: string; value: string }[] = [
  { icon: 'location', label: 'Address', value: '14 Maude Street, Sandton, Johannesburg, 2196' },
  { icon: 'phone', label: 'Phone', value: '+27 11 883 0042' },
  { icon: 'mail', label: 'Email', value: 'info@nextlevelgaming.co.za' },
  { icon: 'clock', label: 'Hours', value: 'Mon–Thu 10:00–22:00 | Fri–Sun 09:00–00:00' },
]

const faqs = [
  { q: 'Do I need to book in advance?', a: 'Walk-ins are welcome but we recommend booking ahead, especially on weekends and for private events. Use our online calculator to submit a request instantly.' },
  { q: 'Are there age restrictions?', a: 'Most experiences are open to ages 8 and up. The Racing Simulator requires a minimum age of 10. All minors under 16 must be accompanied by an adult guardian.' },
  { q: 'How do multi-booking discounts work?', a: '2 bookings = 5% off, 3 bookings = 10% off, 4+ bookings = 15% off. The discount is applied automatically in your quote.' },
  { q: 'Can I host a corporate event?', a: 'Absolutely. We offer private arena hire for corporate team-building events, product launches, and client entertainment. Contact us for a custom quote.' },
  { q: 'What payment methods are accepted?', a: 'We accept EFT, credit/debit card (Visa & Mastercard), and SnapScan. A 50% deposit confirms all bookings. The balance is due on arrival.' },
]

export default function ContactPage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#00E5FF' }}>— GET IN TOUCH</div>
          <h1 className="font-display font-900 mb-4"
            style={{ fontSize: isMobile ? '2.4rem' : '3.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#F5F5F7' }}>CONTACT</span>
            <br />
            <span className="glow-cyan" style={{ color: '#00E5FF' }}>NEXT LEVEL</span>
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif', maxWidth: 440 }}>
            Questions, corporate enquiries, event planning, or just want to say hi — our team typically responds within 2 business hours.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-14" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className={`${isMobile ? 'space-y-10' : 'grid grid-cols-1 lg:grid-cols-5 gap-12'}`}>
            {/* Details */}
            <div className={isMobile ? '' : 'lg:col-span-2'}>
              <div className="font-mono-arena text-xs mb-5 tracking-widest" style={{ color: '#8A2BE2' }}>— REACH US</div>
              <div className="space-y-5 mb-8">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="flex-shrink-0" style={{ color: '#00E5FF' }}><ArenaIcon name={c.icon} size={22} /></div>
                    <div>
                      <div className="font-display text-xs font-700 tracking-wider mb-0.5" style={{ color: 'rgba(245,245,247,0.4)' }}>{c.label}</div>
                      <div className="text-sm leading-relaxed" style={{ color: '#F5F5F7', fontFamily: 'Exo 2, sans-serif' }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden circuit-border relative" style={{ height: 180 }}>
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=300&fit=crop&auto=format"
                  alt="Sandton location" className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.4) hue-rotate(180deg)', opacity: 0.6 }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-3 py-1 rounded font-mono-arena text-xs"
                    style={{ background: 'rgba(0,229,255,0.15)', border: '1px solid #00E5FF', color: '#00E5FF' }}>
                    SANDTON, JHB
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: 'rgba(245,245,247,0.35)' }}>— FOLLOW US</div>
                <div className="flex flex-wrap gap-2">
                  {['Instagram', 'Twitter / X', 'TikTok', 'Discord'].map((s) => (
                    <div key={s} className="px-3 py-2 rounded text-xs cursor-pointer"
                      style={{ background: 'rgba(26,26,46,0.8)', border: '1px solid rgba(138,43,226,0.3)', color: 'rgba(245,245,247,0.5)', fontFamily: 'Exo 2, sans-serif' }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={isMobile ? '' : 'lg:col-span-3'}>
              <div className="circuit-border rounded-lg p-6" style={{ background: 'rgba(26,26,46,0.7)' }}>
                {sent ? (
                  <div className="text-center py-10">
                    <div className="flex justify-center mb-4" style={{ color: '#39FF14' }}><ArenaIcon name="check" size={40} /></div>
                    <div className="font-display font-800 glow-green mb-3" style={{ fontSize: '1.6rem', color: '#39FF14' }}>MESSAGE SENT!</div>
                    <p className="text-sm mb-6" style={{ color: 'rgba(245,245,247,0.6)', fontFamily: 'Exo 2, sans-serif' }}>
                      Thanks, <strong style={{ color: '#F5F5F7' }}>{form.name}</strong>. We'll reply to <strong style={{ color: '#F5F5F7' }}>{form.email}</strong> within 2 hours.
                    </p>
                    <button onClick={() => setSent(false)} className="btn-outline px-6 py-3 rounded text-xs">Send Another</button>
                  </div>
                ) : (
                  <>
                    <div className="font-mono-arena text-xs mb-5 tracking-widest" style={{ color: '#39FF14' }}>— SEND A MESSAGE</div>
                    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
                      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {[
                          { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Sipho Dlamini', required: true },
                          { key: 'email', label: 'Email Address', type: 'email', placeholder: 'sipho@email.com', required: true },
                        ].map((f) => (
                          <div key={f.key}>
                            <label className="block font-mono-arena text-xs mb-1.5 tracking-wider" style={{ color: 'rgba(245,245,247,0.45)' }}>{f.label}</label>
                            <input type={f.type} required={f.required} placeholder={f.placeholder}
                              value={form[f.key as keyof typeof form]}
                              onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                              className="w-full px-4 py-3 rounded text-sm outline-none"
                              style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.3)', color: '#F5F5F7', fontFamily: 'Exo 2, sans-serif' }}
                              onFocus={(e) => { e.target.style.borderColor = '#00E5FF' }}
                              onBlur={(e) => { e.target.style.borderColor = 'rgba(138,43,226,0.3)' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block font-mono-arena text-xs mb-1.5 tracking-wider" style={{ color: 'rgba(245,245,247,0.45)' }}>Subject</label>
                        <select required value={form.subject} onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                          className="w-full px-4 py-3 rounded text-sm outline-none"
                          style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.3)', color: form.subject ? '#F5F5F7' : 'rgba(245,245,247,0.35)', fontFamily: 'Exo 2, sans-serif' }}
                          onFocus={(e) => { e.target.style.borderColor = '#00E5FF' }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(138,43,226,0.3)' }}>
                          <option value="" style={{ color: '#1A1A2E' }}>Select a subject…</option>
                          <option value="booking" style={{ color: '#1A1A2E' }}>Booking Enquiry</option>
                          <option value="corporate" style={{ color: '#1A1A2E' }}>Corporate / School Event</option>
                          <option value="birthday" style={{ color: '#1A1A2E' }}>Birthday Party</option>
                          <option value="esports" style={{ color: '#1A1A2E' }}>Esports Tournament</option>
                          <option value="general" style={{ color: '#1A1A2E' }}>General Question</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono-arena text-xs mb-1.5 tracking-wider" style={{ color: 'rgba(245,245,247,0.45)' }}>Message</label>
                        <textarea required rows={4} placeholder="Tell us more about what you're looking for…"
                          value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                          className="w-full px-4 py-3 rounded text-sm outline-none resize-none"
                          style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.3)', color: '#F5F5F7', fontFamily: 'Exo 2, sans-serif' }}
                          onFocus={(e) => { e.target.style.borderColor = '#00E5FF' }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(138,43,226,0.3)' }}
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full py-4 rounded text-xs">Send Message</button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: '#1A1A2E' }}>
        <div className="max-w-3xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#8A2BE2' }}>— FAQ</div>
          <h2 className="font-display font-800 mb-8"
            style={{ fontSize: isMobile ? '1.6rem' : '2rem', color: '#F5F5F7' }}>
            COMMON <span style={{ color: '#8A2BE2' }}>QUESTIONS</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="circuit-border rounded-lg overflow-hidden" style={{ background: 'rgba(15,52,96,0.4)' }}>
                <button className="w-full px-5 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}>
                  <span className="font-display text-xs font-700 tracking-wide pr-4" style={{ color: '#F5F5F7' }}>{faq.q}</span>
                  <span className="flex-shrink-0 font-mono-arena text-lg"
                    style={{ color: openFaq === i ? '#00E5FF' : 'rgba(245,245,247,0.3)' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4" style={{ borderTop: '1px solid rgba(138,43,226,0.2)' }}>
                    <p className="pt-3 text-xs leading-relaxed" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg, #0F3460, #1A1A2E)' }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display font-800 mb-4"
            style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', color: '#F5F5F7' }}>
            READY TO <span className="glow-cyan" style={{ color: '#00E5FF' }}>PLAY?</span>
          </h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(245,245,247,0.55)', fontFamily: 'Exo 2, sans-serif' }}>
            Skip the queue — get your instant quote and submit your booking request right now.
          </p>
          <button onClick={() => navigate('calculate')} className="btn-primary px-8 py-4 rounded text-xs">
            Calculate My Fees
          </button>
        </div>
      </section>

      <footer style={{ background: '#0F3460', borderTop: '1px solid rgba(138,43,226,0.3)' }} className="py-8">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-xs tracking-widest" style={{ color: 'rgba(245,245,247,0.4)' }}>
            © 2026 NEXT LEVEL GAMING & ESPORTS ARENA
          </div>
          <div className="flex flex-wrap gap-4">
            {(['home', 'about', 'overview', 'calculate'] as Page[]).map((p) => (
              <button key={p} onClick={() => navigate(p)} className="text-xs capitalize tracking-wider"
                style={{ color: 'rgba(245,245,247,0.4)', fontFamily: 'Exo 2, sans-serif' }}>{p}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
