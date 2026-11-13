import type { Page } from '../App'
import { useMobile } from '../MobileContext'
import ArenaIcon from '../components/ArenaIcon'

const gallery = [
  'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=400&fit=crop&auto=format',
]

const specs = [
  { label: 'Duration', value: '45 minutes' },
  { label: 'Min Age', value: '8 years+' },
  { label: 'Max Players', value: '1 per session' },
  { label: 'Headset', value: 'Meta Quest Pro' },
  { label: 'Experience Level', value: 'All levels' },
  { label: 'Languages', value: 'EN / Zulu / Afrikaans' },
]

const included = [
  'Full VR headset & controller setup',
  'Safety briefing & onboarding (5 min)',
  'Choice of 40+ VR titles',
  'Sanitised equipment guarantee',
  'Digital photo of your session',
  'Replay highlights clip (email delivery)',
]

const reviews = [
  { name: 'Sipho M.', rating: 5, date: 'Feb 2026', text: "Absolutely mind-blowing. The VR setup at Next Level is unlike anything else in Joburg." },
  { name: 'Priya K.', rating: 5, date: 'Jan 2026', text: "Brought my 10-year-old for her birthday and she's still talking about it. Staff were patient." },
  { name: 'Dylan R.', rating: 4, date: 'Mar 2026', text: "Incredible tech and great variety of games. Queue was a bit long on Saturday afternoon." },
]

export default function IndividualPage({ navigate }: { navigate: (p: Page) => void }) {
  const isMobile = useMobile()

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden" style={{ background: '#1A1A2E' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${gallery[0]})`,
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22,
        }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,46,0.95) 50%, transparent)' }} />
        <div className="relative max-w-7xl mx-auto px-5">
          <button onClick={() => navigate('overview')}
            className="flex items-center gap-2 mb-6 text-xs tracking-wider"
            style={{ color: 'rgba(245,245,247,0.45)', fontFamily: 'Exo 2, sans-serif' }}>
            ← Back to Overview
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded mb-4"
            style={{ background: 'rgba(138,43,226,0.15)', border: '1px solid rgba(138,43,226,0.4)' }}>
            <span className="font-mono-arena tracking-widest" style={{ fontSize: 10, color: '#8A2BE2' }}>INDIVIDUAL EXPERIENCE</span>
          </div>
          <h1 className="font-display font-900 mb-4"
            style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#F5F5F7' }}>VIRTUAL REALITY</span>
            <br />
            <span className="glow-cyan" style={{ color: '#00E5FF' }}>EXPERIENCE</span>
          </h1>
          <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(245,245,247,0.65)', fontFamily: 'Exo 2, sans-serif', maxWidth: 440 }}>
            Step into another dimension. Our Meta Quest Pro VR arena puts you inside the game — from action-adventures and multiplayer shooters to breathtaking virtual landscapes.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <div>
              <div className="font-display font-900 glow-cyan" style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#00E5FF' }}>R750</div>
              <div className="font-mono-arena" style={{ fontSize: 10, color: 'rgba(245,245,247,0.4)' }}>per session</div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div>
              <div className="font-display text-sm font-700" style={{ color: '#39FF14' }}>45 MIN SESSION</div>
              <div className="text-xs" style={{ color: 'rgba(245,245,247,0.4)', fontFamily: 'Exo 2, sans-serif' }}>All ages & experience levels</div>
            </div>
          </div>
          <button onClick={() => navigate('calculate')} className="btn-primary px-6 py-4 rounded text-xs mt-4">
            Book VR Experience
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
            {gallery.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden circuit-border"
                style={{ aspectRatio: isMobile ? '16/7' : '4/3' }}>
                <img src={src} alt={`VR Experience ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.9)', opacity: 0.88 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16" style={{ background: '#1A1A2E' }}>
        <div className={`max-w-7xl mx-auto px-5 ${isMobile ? '' : 'grid grid-cols-1 lg:grid-cols-3 gap-12'}`}>
          {/* Main */}
          <div className={isMobile ? 'mb-10' : 'lg:col-span-2'}>
            <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#00E5FF' }}>— THE EXPERIENCE</div>
            <h2 className="font-display font-800 mb-5"
              style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', color: '#F5F5F7' }}>
              WHAT TO <span style={{ color: '#00E5FF' }}>EXPECT</span>
            </h2>
            <div className="space-y-3 mb-8">
              {['Our Virtual Reality Experience is designed to be accessible to everyone — first-timers and seasoned VR players alike. Upon arrival, one of our facilitators will walk you through the hardware setup and game selection in 5 minutes.',
                'Choose from over 40 curated titles: beat-saber rhythmic combat, alien invasion shooters, deep-sea exploration, virtual mountain climbing, and multiplayer arena battles. Sessions run for 45 minutes of active play time.',
              ].map((t, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,247,0.7)', fontFamily: 'Exo 2, sans-serif' }}>{t}</p>
              ))}
            </div>
            <div className="font-mono-arena text-xs mb-4 tracking-widest" style={{ color: '#8A2BE2' }}>— WHAT'S INCLUDED</div>
            <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded"
                  style={{ background: 'rgba(15,52,96,0.4)', border: '1px solid rgba(138,43,226,0.2)' }}>
                  <span style={{ color: '#39FF14', flexShrink: 0 }}><ArenaIcon name="check" size={15} /></span>
                  <span className="text-xs" style={{ color: 'rgba(245,245,247,0.75)', fontFamily: 'Exo 2, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs sidebar */}
          <div>
            <div className="circuit-border rounded-lg p-5 mb-4" style={{ background: 'rgba(15,52,96,0.5)' }}>
              <div className="font-mono-arena text-xs mb-4 tracking-widest" style={{ color: '#00E5FF' }}>SESSION SPECS</div>
              <div className="space-y-3">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between border-b pb-2"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span className="text-xs" style={{ color: 'rgba(245,245,247,0.45)', fontFamily: 'Exo 2, sans-serif' }}>{s.label}</span>
                    <span className="font-mono-arena text-xs font-600" style={{ color: '#F5F5F7' }}>{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded text-center" style={{ background: 'rgba(138,43,226,0.1)', border: '1px solid rgba(138,43,226,0.3)' }}>
                <div className="font-display text-3xl font-900 glow-purple" style={{ color: '#8A2BE2' }}>R750</div>
                <div className="font-mono-arena text-xs mt-1" style={{ color: 'rgba(245,245,247,0.4)' }}>per session</div>
                <div className="text-xs mt-2" style={{ color: '#39FF14', fontFamily: 'Exo 2, sans-serif' }}>Multi-booking discounts available</div>
              </div>
            </div>
            <button onClick={() => navigate('calculate')} className="btn-primary w-full py-4 rounded text-xs mb-3">
              Book This Experience
            </button>
            <button onClick={() => navigate('contact')} className="btn-outline w-full py-3 rounded text-xs">
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16" style={{ background: '#16213E' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="font-mono-arena text-xs mb-3 tracking-widest" style={{ color: '#39FF14' }}>— PLAYER REVIEWS</div>
          <h2 className="font-display font-800 mb-8"
            style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', color: '#F5F5F7' }}>
            WHAT <span style={{ color: '#39FF14' }}>PLAYERS SAY</span>
          </h2>
          <div className={`grid gap-5 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
            {reviews.map((r) => (
              <div key={r.name} className="p-5 rounded-lg circuit-border" style={{ background: 'rgba(26,26,46,0.7)' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <ArenaIcon key={i} name="star" size={14} />
                    ))}
                  </div>
                  <span className="font-mono-arena" style={{ fontSize: 10, color: 'rgba(245,245,247,0.3)' }}>{r.date}</span>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(245,245,247,0.7)', fontFamily: 'Exo 2, sans-serif' }}>"{r.text}"</p>
                <div className="font-display text-xs font-700" style={{ color: '#00E5FF' }}>— {r.name}</div>
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
