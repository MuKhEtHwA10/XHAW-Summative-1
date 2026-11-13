import type { Page } from '../App'
import { useMobile } from '../MobileContext'
import ArenaIcon, { type ArenaIconName } from '../components/ArenaIcon'

const packages: { name: string; price: string; icon: ArenaIconName; desc: string }[] = [
  { name: 'Ultimate Gamer Pass', price: 'R3 000', icon: 'gamepad', desc: 'Full-day arena access with all gaming stations.' },
  { name: 'VIP Gaming Experience', price: 'R5 000', icon: 'bolt', desc: 'Reserved VIP lounge with premium setups & catering.' },
  { name: 'Esports Training', price: 'R1 500', icon: 'trophy', desc: 'Coached sessions with pro-level competitive training.' },
  { name: 'Birthday Party Package', price: 'R2 500', icon: 'cake', desc: 'Private arena hire with decorations & gaming.' },
]

export default function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()

  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-center grid-bg overflow-hidden"
        style={{ background: '#1A1A2E', minHeight: isMobile ? '100vh' : '100vh' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: '(c:\\Users\\Student\\Downloads\\2C44D9CB-EA04-458A-B9CC-7F33EDB93A46.jpeg)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18,
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        }} />
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00E5FF, transparent 70%)' }} />

        <div className={`relative max-w-7xl mx-auto px-5 py-20 w-full ${isMobile ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-16'} items-center`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded mb-6"
              style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.3)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#39FF14' }} />
              <span className="font-mono-arena tracking-widest" style={{ fontSize: 10, color: '#00E5FF' }}>JOHANNESBURG — EST. 2023</span>
            </div>

            <h1 className="font-display font-900 leading-none mb-5"
              style={{ fontSize: isMobile ? '2.6rem' : 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#F5F5F7' }}>PLAY AT THE</span>
              <br />
              <span className="glow-cyan" style={{ color: '#00E5FF' }}>NEXT LEVEL</span>
            </h1>

            <p className="mb-8 leading-relaxed" style={{
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              color: 'rgba(245,245,247,0.7)', fontFamily: 'Exo 2, sans-serif',
              maxWidth: isMobile ? '100%' : 480,
            }}>
              Johannesburg's premier gaming & esports arena. Competitive tournaments, VR experiences, corporate events, and birthday parties — all under one roof.
            </p>

            <div className="flex flex-col gap-3" style={{ maxWidth: isMobile ? '100%' : 360 }}>
              <button onClick={() => navigate('calculate')} className="btn-primary px-6 py-4 rounded text-xs">
                Book Your Session
              </button>
              <button onClick={() => navigate('overview')} className="btn-outline px-6 py-4 rounded text-xs">
                Explore Packages
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[['200+', 'Gaming Stations'], ['50+', 'Events/Month'], ['5.0', 'Rated Arena']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display font-800 glow-cyan" style={{ fontSize: isMobile ? '1.4rem' : '1.5rem', color: '#00E5FF' }}>{n}</div>
                  <div className="text-xs mt-1 tracking-wider" style={{ color: 'rgba(245,245,247,0.5)', fontFamily: 'Exo 2, sans-serif' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card — desktop only */}
          {!isMobile && (
            <div className="hidden lg:block relative">
              <div className="circuit-border rounded-lg overflow-hidden"
                style={{ background: 'rgba(15,52,96,0.6)', backdropFilter: 'blur(8px)' }}>
                <img src="https://images.unsplash.com/photo-1758179760341-424a21b64e4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900"
                  alt="Gamers at Next Level Arena" className="w-full h-80 object-cover opacity-90" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-xs tracking-widest" style={{ color: '#00E5FF' }}>LIVE NOW</span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: '#39FF14', fontFamily: 'JetBrains Mono' }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#39FF14' }} />
                      48 PLAYERS ONLINE
                    </span>
                  </div>
                  <div className="font-display text-sm font-700 tracking-wide" style={{ color: '#F5F5F7' }}>
                    FRIDAY NIGHT ESPORTS LEAGUE
                  </div>
                  <div className="mt-1 text-xs" style={{ color: 'rgba(245,245,247,0.5)', fontFamily: 'Exo 2, sans-serif' }}>
                    Call of Duty · Fortnite · FIFA 25 · Valorant
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded"
                style={{ background: 'linear-gradient(135deg, #8A2BE2, #00E5FF)', fontFamily: 'Orbitron' }}>
                <span className="text-xs font-700 tracking-widest text-white">UP TO 15% OFF</span>
              </div>
            </div>
          )}
        </div>

        {/* Live badge — mobile only */}
        {isMobile && (
          <div className="absolute bottom-6 left-5 right-5 p-4 rounded-lg"
            style={{ background: 'rgba(15,52,96,0.85)', border: '1px solid rgba(0,229,255,0.25)', backdropFilter: 'blur(8px)' }}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-display text-xs tracking-widest" style={{ color: '#00E5FF' }}>LIVE NOW</span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: '#39FF14', fontFamily: 'JetBrains Mono' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#39FF14' }} />
                48 ONLINE
              </span>
            </div>
            <div className="font-display text-xs font-700" style={{ color: '#F5F5F7' }}>FRIDAY NIGHT ESPORTS LEAGUE</div>
          </div>
        )}
      </section>

      {/* Packages */}
      <section className="py-16" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-mono-arena text-xs mb-2 tracking-widest" style={{ color: '#8A2BE2' }}>— GAMING PACKAGES</div>
              <h2 className="font-display font-800" style={{ fontSize: isMobile ? '1.6rem' : '2.2rem', color: '#F5F5F7' }}>
                CHOOSE YOUR<br />
                <span className="glow-purple" style={{ color: '#8A2BE2' }}>EXPERIENCE</span>
              </h2>
            </div>
            <button onClick={() => navigate('overview')} className="btn-outline px-4 py-2 text-xs rounded flex-shrink-0">
              View All
            </button>
          </div>

          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
            {packages.map((pkg) => (
              <div key={pkg.name} className="circuit-border rounded-lg p-5 cursor-pointer"
                style={{ background: 'rgba(26, 26, 46, 0.8)' }}
                onClick={() => navigate('overview')}>
                {isMobile ? (
                  <div className="flex items-center gap-4">
                    <span style={{ color: '#00E5FF' }}><ArenaIcon name={pkg.icon} size={30} /></span>
                    <div className="flex-1">
                      <div className="font-display text-xs font-700 tracking-wide mb-1" style={{ color: '#00E5FF' }}>{pkg.name}</div>
                      <div className="text-xs" style={{ color: 'rgba(245,245,247,0.55)', fontFamily: 'Exo 2, sans-serif' }}>{pkg.desc}</div>
                    </div>
                    <div className="font-display text-lg font-900 glow-cyan flex-shrink-0" style={{ color: '#00E5FF' }}>{pkg.price}</div>
                  </div>
                ) : (
                  <>
                    <div className="mb-4" style={{ color: '#00E5FF' }}><ArenaIcon name={pkg.icon} size={30} /></div>
                    <div className="font-display text-xs font-700 tracking-wider mb-2" style={{ color: '#00E5FF' }}>{pkg.name}</div>
                    <div className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,245,247,0.6)', fontFamily: 'Exo 2, sans-serif' }}>{pkg.desc}</div>
                    <div className="font-display text-xl font-900 glow-cyan" style={{ color: '#00E5FF' }}>{pkg.price}</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(245,245,247,0.35)', fontFamily: 'JetBrains Mono' }}>per session</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F3460, #1A1A2E)' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display font-800 mb-4"
            style={{ fontSize: isMobile ? '1.6rem' : '2.2rem', color: '#F5F5F7' }}>
            READY TO <span className="glow-green" style={{ color: '#39FF14' }}>LEVEL UP?</span>
          </h2>
          <p className="mb-8" style={{ fontSize: '0.95rem', color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif' }}>
            Book multiple sessions and save — up to 15% discount on group bookings.
          </p>
          <button onClick={() => navigate('calculate')} className="btn-primary px-8 py-4 rounded text-xs">
            Calculate My Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0F3460', borderTop: '1px solid rgba(138,43,226,0.3)' }} className="py-8">
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-display text-xs tracking-widest text-center mb-4" style={{ color: 'rgba(245,245,247,0.4)' }}>
            © 2026 NEXT LEVEL GAMING & ESPORTS ARENA
          </div>
          <div className={`flex flex-wrap justify-center gap-4 ${isMobile ? '' : ''}`}>
            {(['home', 'about', 'overview', 'contact'] as Page[]).map((p) => (
              <button key={p} onClick={() => navigate(p)} className="text-xs capitalize tracking-wider"
                style={{ color: 'rgba(245,245,247,0.4)', fontFamily: 'Exo 2, sans-serif' }}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
