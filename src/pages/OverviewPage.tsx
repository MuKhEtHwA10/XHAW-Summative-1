import type { Page } from '../App'
import { useMobile } from '../MobileContext'
import ArenaIcon, { type ArenaIconName } from '../components/ArenaIcon'

const gamingPackages: { name: string; price: string; icon: ArenaIconName; tag: string; tagColor: string; duration: string; features: string[]; img: string }[] = [
  { name: 'Ultimate Gamer Pass', price: 'R3 000', icon: 'gamepad', tag: 'MOST POPULAR', tagColor: '#39FF14', duration: 'Full Day', features: ['Access to all 200+ gaming stations', 'Unlimited game library', 'Free soft drinks & snacks', 'Priority seat reservation', 'Locker storage included'], img: 'https://images.unsplash.com/photo-1758410473619-c204b1bcf13a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800' },
  { name: 'VIP Gaming Experience', price: 'R5 000', icon: 'bolt', tag: 'PREMIUM', tagColor: '#8A2BE2', duration: '4 Hours', features: ['Private VIP lounge access', 'Dedicated gaming concierge', 'Premium food & beverage package', 'Exclusive high-spec rigs', 'Branded VIP lanyard'], img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop&auto=format' },
  { name: 'Esports Training Package', price: 'R1 500', icon: 'trophy', tag: 'COMPETITIVE', tagColor: '#00E5FF', duration: '3 Hours', features: ['Pro-coached training session', 'VOD review & strategy analysis', 'Team comms & headset setup', 'Tournament practice mode', 'Performance report card'], img: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&h=300&fit=crop&auto=format' },
  { name: 'Birthday Party Package', price: 'R2 500', icon: 'cake', tag: 'CELEBRATIONS', tagColor: '#FF6B6B', duration: '3 Hours', features: ['Private arena section (20 pax)', 'Themed decorations & setup', 'Birthday cake & catering', 'Group photo session', 'Custom gaming playlist'], img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop&auto=format' },
]

const individualExp: { name: string; price: string; icon: ArenaIconName; duration: string; desc: string; img: string }[] = [
  { name: 'Virtual Reality Experience', price: 'R750', icon: 'headset', duration: '45 min', desc: 'Full immersion in the latest VR titles. From action-adventure to multiplayer arenas — no experience required.', img: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=280&fit=crop&auto=format' },
  { name: 'Racing Simulator Challenge', price: 'R850', icon: 'racing', duration: '30 min', desc: 'Strap in to our pro-grade racing rigs with full-motion sim racing. Formula 1, GT, and rally modes available.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=280&fit=crop&auto=format' },
  { name: 'Escape Room Challenge', price: 'R950', icon: 'unlock', duration: '60 min', desc: 'A hybrid digital escape room that blends gaming puzzles with physical challenges for groups of 2–6 players.', img: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=280&fit=crop&auto=format' },
]

export default function OverviewPage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()

  return (
    <div>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#8A2BE2' }}>— PACKAGES & EXPERIENCES</div>
          <h1 className="font-display font-900 mb-4"
            style={{ fontSize: isMobile ? '2.4rem' : '3.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#F5F5F7' }}>WHAT WE</span>
            <br />
            <span className="glow-purple" style={{ color: '#8A2BE2' }}>OFFER</span>
          </h1>
          <p className="leading-relaxed text-sm" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif', maxWidth: 480 }}>
            From full-day gaming passes to competitive esports training, VR experiences and private events — everything priced clearly with automatic multi-booking discounts.
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-4" style={{ background: 'linear-gradient(90deg, #8A2BE2, #00E5FF)' }}>
        <div className="max-w-7xl mx-auto px-5">
          {isMobile ? (
            <div>
              <div className="font-display text-xs font-700 tracking-wider text-white mb-3 flex items-center justify-center gap-2"><ArenaIcon name="tag" size={15} /> MULTI-BOOKING DISCOUNTS</div>
              <div className="grid grid-cols-4 gap-2">
                {[['0%', '1 booking'], ['5%', '2 bookings'], ['10%', '3 bookings'], ['15%', '4+']].map(([d, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display text-base font-900 text-white">{d}</div>
                    <div className="text-white opacity-80" style={{ fontSize: 9, fontFamily: 'Exo 2, sans-serif' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ArenaIcon name="tag" size={18} />
                <span className="font-display text-sm font-700 tracking-wider text-white">MULTI-BOOKING DISCOUNTS</span>
              </div>
              <div className="flex gap-6">
                {[['No discount', '1 Booking'], ['5% off', '2 Bookings'], ['10% off', '3 Bookings'], ['15% off', '4+ Bookings']].map(([d, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display text-lg font-900 text-white">{d}</div>
                    <div className="text-xs text-white opacity-80" style={{ fontFamily: 'Exo 2, sans-serif' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gaming Packages */}
      <section className="py-16" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#00E5FF' }}>— CATEGORY 1</div>
          <h2 className="font-display font-800 mb-8"
            style={{ fontSize: isMobile ? '1.6rem' : '2rem', color: '#F5F5F7' }}>
            GAMING <span style={{ color: '#00E5FF' }}>PACKAGES</span>
            <span className="font-mono-arena ml-3 font-400" style={{ fontSize: '0.75rem', color: 'rgba(245,245,247,0.4)' }}>From R1 500</span>
          </h2>
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
            {gamingPackages.map((pkg) => (
              <div key={pkg.name} className="circuit-border rounded-lg overflow-hidden"
                style={{ background: 'rgba(26,26,46,0.8)' }}>
                <div className="relative">
                  <img src={pkg.img} alt={pkg.name}
                    className="w-full object-cover"
                    style={{ height: isMobile ? 140 : 180, filter: 'saturate(0.85)' }} />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-700 font-mono-arena tracking-wider"
                    style={{ background: pkg.tagColor, color: '#1A1A2E', fontSize: 10 }}>
                    {pkg.tag}
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded"
                    style={{ background: 'rgba(26,26,46,0.9)', color: 'rgba(245,245,247,0.7)', fontSize: 10, fontFamily: 'JetBrains Mono', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-flex mr-2 align-middle" style={{ color: '#00E5FF' }}><ArenaIcon name={pkg.icon} size={20} /></span>
                      <span className="font-display text-xs font-700 tracking-wide" style={{ color: '#F5F5F7' }}>{pkg.name}</span>
                    </div>
                    <div className="font-display text-xl font-900 glow-cyan flex-shrink-0" style={{ color: '#00E5FF' }}>{pkg.price}</div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs"
                        style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif' }}>
                        <ArenaIcon name="check" size={14} className="flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => navigate('calculate')} className="btn-primary w-full py-3 rounded text-xs">
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Experiences */}
      <section className="py-16" style={{ background: '#1A1A2E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#8A2BE2' }}>— CATEGORY 2</div>
          <h2 className="font-display font-800 mb-8"
            style={{ fontSize: isMobile ? '1.6rem' : '2rem', color: '#F5F5F7' }}>
            INDIVIDUAL <span style={{ color: '#8A2BE2' }}>EXPERIENCES</span>
            <span className="font-mono-arena ml-3 font-400" style={{ fontSize: '0.75rem', color: 'rgba(245,245,247,0.4)' }}>R750 each</span>
          </h2>
          <div className={`grid gap-5 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
            {individualExp.map((exp) => (
              <div key={exp.name} className="circuit-border rounded-lg overflow-hidden cursor-pointer"
                style={{ background: 'rgba(15,52,96,0.4)' }}
                onClick={() => navigate('individual')}>
                <img src={exp.img} alt={exp.name} className="w-full object-cover"
                  style={{ height: isMobile ? 140 : 160 }} />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: '#A855F7' }}><ArenaIcon name={exp.icon} size={22} /></span>
                    <span className="font-mono-arena" style={{ fontSize: 10, color: 'rgba(245,245,247,0.4)' }}>{exp.duration}</span>
                  </div>
                  <h3 className="font-display text-xs font-700 tracking-wide mb-2" style={{ color: '#F5F5F7' }}>{exp.name}</h3>
                  <p className="text-xs mb-3 leading-relaxed" style={{ color: 'rgba(245,245,247,0.55)', fontFamily: 'Exo 2, sans-serif' }}>{exp.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-display text-lg font-900" style={{ color: '#8A2BE2' }}>{exp.price}</div>
                    <span className="text-xs" style={{ color: '#00E5FF', fontFamily: 'Exo 2, sans-serif' }}>Learn more →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
