import { useState } from 'react'
import type { Page } from '../App'
import { useMobile } from '../MobileContext'
import ArenaIcon, { type ArenaIconName } from '../components/ArenaIcon'

type Item = { id: string; name: string; price: number; category: 'package' | 'experience'; icon: ArenaIconName }

const catalog: Item[] = [
  { id: 'ugp', name: 'Ultimate Gamer Pass', price: 3000, category: 'package', icon: 'gamepad' },
  { id: 'vip', name: 'VIP Gaming Experience', price: 5000, category: 'package', icon: 'bolt' },
  { id: 'etp', name: 'Esports Training Package', price: 1500, category: 'package', icon: 'trophy' },
  { id: 'bpp', name: 'Birthday Party Package', price: 2500, category: 'package', icon: 'cake' },
  { id: 'vr', name: 'Virtual Reality Experience', price: 750, category: 'experience', icon: 'headset' },
  { id: 'rsc', name: 'Racing Simulator Challenge', price: 850, category: 'experience', icon: 'racing' },
  { id: 'erc', name: 'Escape Room Challenge', price: 950, category: 'experience', icon: 'unlock' },
]

function getDiscount(count: number) {
  if (count >= 4) return 0.15
  if (count === 3) return 0.10
  if (count === 2) return 0.05
  return 0
}

function getDiscountLabel(count: number) {
  if (count >= 4) return '15% multi-booking discount applied'
  if (count === 3) return '10% multi-booking discount applied'
  if (count === 2) return '5% multi-booking discount applied'
  return 'Add more bookings to save'
}

type FormData = { name: string; email: string; phone: string; date: string; notes: string }

export default function CalculatePage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()
  const [selected, setSelected] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', date: '', notes: '' })

  const toggle = (id: string) => setSelected((prev) => {
    const next = { ...prev }
    if (next[id]) delete next[id]; else next[id] = 1
    return next
  })

  const selectedItems = catalog.filter((c) => selected[c.id])
  const totalBookings = selectedItems.length
  const subtotal = selectedItems.reduce((sum, c) => sum + c.price, 0)
  const discount = getDiscount(totalBookings)
  const discountAmount = subtotal * discount
  const total = subtotal - discountAmount

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#1A1A2E' }}>
        <div className="text-center px-6" style={{ maxWidth: 380 }}>
          <div className="flex justify-center mb-5" style={{ color: '#39FF14' }}><ArenaIcon name="gamepad" size={48} /></div>
          <div className="font-display font-900 glow-green mb-3" style={{ fontSize: '1.8rem', color: '#39FF14' }}>BOOKING CONFIRMED</div>
          <div className="font-mono-arena text-xs tracking-widest mb-5" style={{ color: '#00E5FF' }}>
            REF: NLG-{Math.random().toString(36).slice(2, 8).toUpperCase()}
          </div>
          <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif' }}>
            Thanks, <strong style={{ color: '#F5F5F7' }}>{form.name}</strong>! Confirmation sent to <strong style={{ color: '#F5F5F7' }}>{form.email}</strong>. Total: <strong style={{ color: '#00E5FF' }}>R{total.toLocaleString()}</strong>.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <button onClick={() => { setSubmitted(false); setSelected({}); setForm({ name: '', email: '', phone: '', date: '', notes: '' }) }}
              className="btn-primary py-3 rounded text-xs">Book Another Session</button>
            <button onClick={() => navigate('home')} className="btn-outline py-3 rounded text-xs">Back to Home</button>
          </div>
        </div>
      </div>
    )
  }

  const QuoteSidebar = () => (
    <div className="circuit-border rounded-lg overflow-hidden" style={{ background: 'rgba(15,52,96,0.6)' }}>
      <div className="px-5 py-3" style={{ background: 'rgba(138,43,226,0.15)', borderBottom: '1px solid rgba(138,43,226,0.3)' }}>
        <div className="font-display text-xs font-700 tracking-widest" style={{ color: '#00E5FF' }}>LIVE QUOTE SUMMARY</div>
      </div>
      <div className="p-5">
        {selectedItems.length === 0 ? (
          <div className="text-center py-6">
            <div className="flex justify-center mb-2" style={{ color: '#00E5FF' }}><ArenaIcon name="gamepad" size={30} /></div>
            <div className="font-mono-arena tracking-wider" style={{ fontSize: 10, color: 'rgba(245,245,247,0.35)' }}>SELECT ITEMS TO SEE QUOTE</div>
          </div>
        ) : (
          <>
            <div className="space-y-2 mb-4">
              {selectedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(245,245,247,0.75)', fontFamily: 'Exo 2, sans-serif' }}>
                    <ArenaIcon name={item.icon} size={14} /> {item.name}
                  </span>
                  <span className="font-mono-arena text-xs" style={{ color: '#F5F5F7' }}>R{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex justify-between text-xs">
                <span style={{ color: 'rgba(245,245,247,0.5)', fontFamily: 'Exo 2, sans-serif' }}>Subtotal ({totalBookings})</span>
                <span className="font-mono-arena" style={{ color: '#F5F5F7' }}>R{subtotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-xs">
                  <span style={{ color: '#39FF14', fontFamily: 'Exo 2, sans-serif' }}>Discount ({(discount * 100).toFixed(0)}%)</span>
                  <span className="font-mono-arena" style={{ color: '#39FF14' }}>−R{discountAmount.toLocaleString()}</span>
                </div>
              )}
            </div>
            <div className="mt-3 p-3 rounded" style={{ background: 'rgba(26,26,46,0.8)' }}>
              <div className="flex justify-between items-end">
                <span className="font-display text-xs font-700" style={{ color: 'rgba(245,245,247,0.6)' }}>TOTAL</span>
                <span className="font-display font-900 glow-cyan" style={{ fontSize: '1.8rem', color: '#00E5FF' }}>R{total.toLocaleString()}</span>
              </div>
              <div className="mt-1 text-xs" style={{ color: discount > 0 ? '#39FF14' : 'rgba(245,245,247,0.35)', fontFamily: 'Exo 2, sans-serif' }}>
                {getDiscountLabel(totalBookings)}
              </div>
            </div>
          </>
        )}
        <button type="submit" form="booking-form"
          disabled={selectedItems.length === 0}
          className="btn-primary w-full py-4 rounded text-xs mt-4 disabled:opacity-40 disabled:cursor-not-allowed">
          Submit Booking Request
        </button>
        {totalBookings > 0 && totalBookings < 4 && (
          <div className="mt-3 p-3 rounded text-center"
            style={{ background: 'rgba(57,255,20,0.06)', border: '1px solid rgba(57,255,20,0.2)' }}>
            <p style={{ fontSize: 11, color: '#39FF14', fontFamily: 'Exo 2, sans-serif' }}>
              Add {4 - totalBookings} more to unlock {totalBookings === 3 ? '15%' : totalBookings === 2 ? '10%' : '5%'} discount
            </p>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div>
      {/* Header */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#39FF14' }}>— INSTANT QUOTE</div>
          <h1 className="font-display font-900 mb-4"
            style={{ fontSize: isMobile ? '2.2rem' : '3rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#F5F5F7' }}>CALCULATE</span>
            <br />
            <span className="glow-green" style={{ color: '#39FF14' }}>YOUR FEES</span>
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif', maxWidth: 440 }}>
            Select your packages and experiences. Discounts apply automatically — the more you book, the more you save.
          </p>
        </div>
      </section>

      {/* Discount tiers */}
      <section className="py-4" style={{ background: '#16213E', borderBottom: '1px solid rgba(138,43,226,0.2)' }}>
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-4 gap-2">
          {[
            { bookings: '1', discount: '0%', color: 'rgba(245,245,247,0.4)' },
            { bookings: '2', discount: '5% off', color: '#00E5FF' },
            { bookings: '3', discount: '10% off', color: '#8A2BE2' },
            { bookings: '4+', discount: '15% off', color: '#39FF14' },
          ].map((tier) => (
            <div key={tier.bookings} className="text-center p-2 rounded"
              style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.2)' }}>
              <div className="font-display font-900" style={{ fontSize: isMobile ? '1rem' : '1.3rem', color: tier.color }}>{tier.discount}</div>
              <div className="font-mono-arena mt-0.5" style={{ fontSize: 9, color: 'rgba(245,245,247,0.45)' }}>{tier.bookings} booking{tier.bookings === '1' ? '' : 's'}</div>
            </div>
          ))}
        </div>
      </section>

      <form id="booking-form" onSubmit={(e) => { e.preventDefault(); if (selectedItems.length > 0) setSubmitted(true) }}>
        <div className="max-w-7xl mx-auto px-5 py-10">
          <div className={`${isMobile ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-10'}`}>
            <div className={isMobile ? '' : 'lg:col-span-2 space-y-8'}>
              {/* Gaming packages */}
              <div>
                <div className="font-mono-arena text-xs mb-4 tracking-widest" style={{ color: '#00E5FF' }}>
                  — GAMING PACKAGES <span style={{ color: 'rgba(245,245,247,0.35)' }}>R1 500 each</span>
                </div>
                <div className="space-y-3">
                  {catalog.filter((c) => c.category === 'package').map((item) => (
                    <button type="button" key={item.id} onClick={() => toggle(item.id)}
                      className="w-full p-4 rounded-lg text-left transition-all duration-200"
                      style={{
                        background: selected[item.id] ? 'rgba(0,229,255,0.08)' : 'rgba(15,52,96,0.4)',
                        border: selected[item.id] ? '2px solid #00E5FF' : '2px solid rgba(138,43,226,0.25)',
                        boxShadow: selected[item.id] ? '0 0 12px rgba(0,229,255,0.15)' : 'none',
                      }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span style={{ color: '#00E5FF' }}><ArenaIcon name={item.icon} size={22} /></span>
                          <div>
                            <div className="font-display text-xs font-700" style={{ color: '#F5F5F7' }}>{item.name}</div>
                            <div className="font-mono-arena mt-0.5" style={{ fontSize: 10, color: '#00E5FF' }}>R{item.price.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center"
                          style={{ borderColor: selected[item.id] ? '#00E5FF' : 'rgba(255,255,255,0.2)', background: selected[item.id] ? '#00E5FF' : 'transparent' }}>
                          {selected[item.id] && <ArenaIcon name="check" size={14} />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Individual experiences */}
              <div>
                <div className="font-mono-arena text-xs mb-4 tracking-widest" style={{ color: '#8A2BE2' }}>
                  — INDIVIDUAL EXPERIENCES <span style={{ color: 'rgba(245,245,247,0.35)' }}>R750 each</span>
                </div>
                <div className="space-y-3">
                  {catalog.filter((c) => c.category === 'experience').map((item) => (
                    <button type="button" key={item.id} onClick={() => toggle(item.id)}
                      className="w-full p-4 rounded-lg text-left transition-all duration-200"
                      style={{
                        background: selected[item.id] ? 'rgba(138,43,226,0.1)' : 'rgba(15,52,96,0.4)',
                        border: selected[item.id] ? '2px solid #8A2BE2' : '2px solid rgba(138,43,226,0.25)',
                        boxShadow: selected[item.id] ? '0 0 12px rgba(138,43,226,0.2)' : 'none',
                      }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span style={{ color: '#A855F7' }}><ArenaIcon name={item.icon} size={22} /></span>
                          <div>
                            <div className="font-display text-xs font-700" style={{ color: '#F5F5F7' }}>{item.name}</div>
                            <div className="font-mono-arena mt-0.5" style={{ fontSize: 10, color: '#8A2BE2' }}>R{item.price.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center"
                          style={{ borderColor: selected[item.id] ? '#8A2BE2' : 'rgba(255,255,255,0.2)', background: selected[item.id] ? '#8A2BE2' : 'transparent' }}>
                          {selected[item.id] && <ArenaIcon name="check" size={14} />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quote sidebar — mobile inline position */}
              {isMobile && <QuoteSidebar />}

              {/* Contact details */}
              <div>
                <div className="font-mono-arena text-xs mb-4 tracking-widest" style={{ color: '#39FF14' }}>— YOUR DETAILS</div>
                <div className="space-y-3">
                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Jason Naidoo', required: true },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'jason@email.com', required: true },
                    { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+27 11 000 0000', required: true },
                    { key: 'date', label: 'Preferred Date', type: 'date', placeholder: '', required: true },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block font-mono-arena text-xs mb-1.5 tracking-wider" style={{ color: 'rgba(245,245,247,0.5)' }}>
                        {field.label}
                      </label>
                      <input type={field.type} required={field.required} placeholder={field.placeholder}
                        value={form[field.key as keyof FormData]}
                        onChange={(e) => setForm((p) => ({ ...p, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded text-sm outline-none"
                        style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.3)', color: '#F5F5F7', fontFamily: 'Exo 2, sans-serif' }}
                        onFocus={(e) => { e.target.style.borderColor = '#00E5FF' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(138,43,226,0.3)' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono-arena text-xs mb-1.5 tracking-wider" style={{ color: 'rgba(245,245,247,0.5)' }}>
                      Additional Notes (optional)
                    </label>
                    <textarea rows={3} placeholder="Any special requests, group size, accessibility needs..."
                      value={form.notes}
                      onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                      className="w-full px-4 py-3 rounded text-sm outline-none resize-none"
                      style={{ background: 'rgba(15,52,96,0.5)', border: '1px solid rgba(138,43,226,0.3)', color: '#F5F5F7', fontFamily: 'Exo 2, sans-serif' }}
                      onFocus={(e) => { e.target.style.borderColor = '#00E5FF' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(138,43,226,0.3)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Submit on mobile */}
              {isMobile && (
                <button type="submit" disabled={selectedItems.length === 0}
                  className="btn-primary w-full py-4 rounded text-xs disabled:opacity-40 disabled:cursor-not-allowed">
                  Submit Booking Request
                </button>
              )}
            </div>

            {/* Desktop sidebar */}
            {!isMobile && (
              <div className="lg:sticky lg:top-24 self-start">
                <QuoteSidebar />
              </div>
            )}
          </div>
        </div>
      </form>

      <footer style={{ background: '#0F3460', borderTop: '1px solid rgba(138,43,226,0.3)' }} className="py-6">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="font-display text-xs tracking-widest" style={{ color: 'rgba(245,245,247,0.3)' }}>
            © 2026 NEXT LEVEL GAMING & ESPORTS ARENA
          </div>
        </div>
      </footer>
    </div>
  )
}
