import { useState } from 'react'
import type { Page } from '../App'
import { useMobile } from '../MobileContext'

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Overview', page: 'overview' },
  { label: 'Experiences', page: 'individual' },
  { label: 'Calculate Fees', page: 'calculate' },
  { label: 'Contact', page: 'contact' },
]

export default function Nav({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <nav style={{
      background: 'rgba(22, 33, 62, 0.95)',
      borderBottom: '1px solid rgba(138, 43, 226, 0.35)',
      backdropFilter: 'blur(12px)',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center gap-2" aria-label="Go to home page">
          <div style={{
            width: 32, height: 32,
            background: 'linear-gradient(135deg, #8A2BE2, #00E5FF)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="#F5F5F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {!isMobile && (
            <span className="font-display text-xs font-700 tracking-widest text-white hidden sm:block" style={{ letterSpacing: '0.12em' }}>
              NEXT LEVEL
            </span>
          )}
          {isMobile && (
            <span className="font-display text-xs font-700 tracking-widest text-white" style={{ letterSpacing: '0.1em' }}>
              NEXT LEVEL
            </span>
          )}
        </button>

        {/* Desktop links — hidden in mobile shell */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button key={l.page} onClick={() => navigate(l.page)}
                aria-current={current === l.page ? 'page' : undefined}
                className="px-3 py-2 text-xs font-600 tracking-wider transition-all duration-200 rounded"
                style={{
                  fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.07em',
                  color: current === l.page ? '#00E5FF' : 'rgba(245,245,247,0.65)',
                  background: current === l.page ? 'rgba(0,229,255,0.08)' : 'transparent',
                  borderBottom: current === l.page ? '2px solid #00E5FF' : '2px solid transparent',
                }}>
                {l.label}
              </button>
            ))}
          </div>
        )}

        {/* Book Now — desktop only */}
        {!isMobile && (
          <button onClick={() => navigate('calculate')}
            className="hidden md:block btn-primary px-4 py-2 text-xs rounded">
            Book Now
          </button>
        )}

        {/* Hamburger — always shown on mobile shell, or on small screens */}
        {(isMobile || true) && (
          <button
            className={isMobile ? 'text-white p-2' : 'md:hidden text-white p-2'}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5" style={{ background: open ? '#00E5FF' : '#F5F5F7' }} />
              <span className="block w-3.5 h-0.5" style={{ background: open ? '#00E5FF' : '#F5F5F7' }} />
              <span className="block w-5 h-0.5" style={{ background: open ? '#00E5FF' : '#F5F5F7' }} />
            </div>
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#16213E', borderTop: '1px solid rgba(138,43,226,0.25)' }}>
          {links.map((l) => (
            <button key={l.page} onClick={() => { navigate(l.page); setOpen(false) }}
              aria-current={current === l.page ? 'page' : undefined}
              className="block w-full text-left px-5 py-3 text-xs font-600 tracking-wider border-b"
              style={{
                fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.08em',
                color: current === l.page ? '#00E5FF' : 'rgba(245,245,247,0.7)',
                borderColor: 'rgba(138,43,226,0.15)',
              }}>
              {l.label}
            </button>
          ))}
          <div className="p-4">
            <button onClick={() => { navigate('calculate'); setOpen(false) }}
              className="btn-primary w-full py-3 text-xs rounded">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
