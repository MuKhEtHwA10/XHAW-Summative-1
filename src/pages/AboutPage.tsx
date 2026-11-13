import type { Page } from '../App'
import { useMobile } from '../MobileContext'

const team = [
  { name: 'Jason Naidoo', role: 'Founder & CEO', bio: 'Avid gamer turned entrepreneur. Jason identified a gap in high-performance gaming access in Johannesburg and built Next Level from the ground up in 2023.', },
  { name: 'Lerato Dlamini', role: 'Head of Events', bio: 'Esports tournament organiser with 8 years of competitive event management. Lerato runs over 50 events a month across multiple game titles.', },
  { name: 'Kyle van der Merwe', role: 'Technical Director', bio: "Hardware specialist and network engineer responsible for all 200+ gaming stations, VR rigs, and the arena's ultra-low-latency tournament infrastructure.",  },
]

const milestones = [
  { year: '2023', event: 'Arena founded by Jason Naidoo in Sandton, Johannesburg' },
  { year: '2023', event: 'First major esports tournament — 120 participants' },
  { year: '2024', event: 'Expanded to 200+ stations; VR Experience wing opened' },
  { year: '2024', event: 'Corporate & School Packages launched — 80+ partner schools' },
  { year: '2025', event: "Named Gauteng's #1 Gaming Venue by GameZA Awards" },
  { year: '2026', event: 'Web & mobile platform launch — digital bookings go live' },
]

const teamBackground = 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop&auto=format)'

export default function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#1A1A2E' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=600&fit=crop&auto=format)',
          backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.12,
        }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#8A2BE2' }}>— OUR STORY</div>
          <h1 className="font-display font-900 mb-4"
            style={{ fontSize: isMobile ? '2.4rem' : '3.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#F5F5F7' }}>ABOUT </span>
            <span className="glow-cyan" style={{ color: '#00E5FF' }}>NEXT LEVEL</span>
          </h1>
          <p className="leading-relaxed" style={{
            fontSize: isMobile ? '0.9rem' : '1.05rem',
            color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif', maxWidth: 560,
          }}>
            Born in Johannesburg in 2023, Next Level is more than a venue — it's a community where casual players, competitive esports athletes, families, schools and corporates come together through the power of gaming.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className={`grid gap-10 items-center ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
            <div>
              <img src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=700&h=500&fit=crop&auto=format"
                alt="Arena interior" className="rounded-lg w-full object-cover"
                style={{ height: isMobile ? 200 : 320, border: '1px solid rgba(0,229,255,0.2)' }} />
            </div>
            <div>
              <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#00E5FF' }}>— OUR MISSION</div>
              <h2 className="font-display font-800 mb-4"
                style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: '#F5F5F7' }}>
                MAKING ELITE GAMING<br />
                <span style={{ color: '#8A2BE2' }}>ACCESSIBLE TO ALL</span>
              </h2>
              <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif' }}>
                Jason Naidoo launched Next Level after recognising that access to professional-grade gaming equipment and quality training was limited in Johannesburg. The arena bridges that gap — providing a world-class environment without barriers.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Inclusive', desc: 'Open to all ages and skill levels' },
                  { label: 'Competitive', desc: 'Pro-grade hardware & tournaments' },
                  { label: 'Community', desc: 'Regular events, leagues & social play' },
                  { label: 'Safe', desc: 'Family-friendly with trained staff' },
                ].map((v) => (
                  <div key={v.label} className="p-3 rounded circuit-border" style={{ background: 'rgba(26,26,46,0.6)' }}>
                    <div className="font-display text-xs font-700 mb-1 glow-green" style={{ color: '#39FF14' }}>{v.label}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'rgba(245,245,247,0.55)', fontFamily: 'Exo 2, sans-serif' }}>{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: '#1A1A2E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#8A2BE2' }}>— TIMELINE</div>
          <h2 className="font-display font-800 mb-10"
            style={{ fontSize: isMobile ? '1.6rem' : '2rem', color: '#F5F5F7' }}>
            OUR <span style={{ color: '#8A2BE2' }}>JOURNEY</span>
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 w-px" style={{ left: isMobile ? 52 : 80, background: 'rgba(138,43,226,0.4)' }} />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="font-display text-xs font-700 text-right flex-shrink-0 pt-1"
                    style={{ width: isMobile ? 42 : 64, color: '#00E5FF', fontFamily: 'JetBrains Mono', fontSize: '0.7rem' }}>
                    {m.year}
                  </div>
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full border-2"
                      style={{ background: '#1A1A2E', borderColor: i === milestones.length - 1 ? '#39FF14' : '#8A2BE2' }} />
                  </div>
                  <div className="p-3 rounded flex-1"
                    style={{ background: 'rgba(15,52,96,0.4)', border: '1px solid rgba(138,43,226,0.2)' }}>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,245,247,0.8)', fontFamily: 'Exo 2, sans-serif' }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#00E5FF' }}>— THE TEAM</div>
          <h2 className="font-display font-800 mb-10"
            style={{ fontSize: isMobile ? '1.6rem' : '2rem', color: '#F5F5F7' }}>
            MEET THE <span style={{ color: '#00E5FF' }}>CREW</span>
          </h2>
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
            {team.map((m) => (
              <div key={m.name} className="circuit-border rounded-lg overflow-hidden"
                style={{ background: 'rgba(26,26,46,0.7)' }}>
                {isMobile ? (
                  <div className="flex items-center gap-4 p-4">
                    <div className="rounded-lg flex-shrink-0"
                      style={{
                        width: 72,
                        height: 72,
                        backgroundImage: teamBackground,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'saturate(0.8)',
                      }} />
                    <div>
                      <div className="font-display text-xs font-700 mb-0.5" style={{ color: '#F5F5F7' }}>{m.name}</div>
                      <div className="font-mono-arena mb-2 tracking-wider" style={{ fontSize: 10, color: '#8A2BE2' }}>{m.role}</div>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,245,247,0.6)', fontFamily: 'Exo 2, sans-serif' }}>{m.bio}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-full h-52" style={{
                      backgroundImage: teamBackground,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'saturate(0.8)',
                    }} />
                    <div className="p-5">
                      <div className="font-display text-sm font-700 mb-1" style={{ color: '#F5F5F7' }}>{m.name}</div>
                      <div className="font-mono-arena text-xs mb-3 tracking-wider" style={{ color: '#8A2BE2' }}>{m.role}</div>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,245,247,0.6)', fontFamily: 'Exo 2, sans-serif' }}>{m.bio}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: '#0F3460' }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-display font-800 mb-6"
            style={{ fontSize: isMobile ? '1.4rem' : '1.6rem', color: '#F5F5F7' }}>
            READY TO JOIN THE <span className="glow-cyan" style={{ color: '#00E5FF' }}>COMMUNITY?</span>
          </h2>
          <div className="flex flex-col gap-3">
            <button onClick={() => navigate('calculate')} className="btn-primary py-4 rounded text-xs">Book a Session</button>
            <button onClick={() => navigate('contact')} className="btn-outline py-3 rounded text-xs">Get in Touch</button>
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
