type Props = {
  mobileView: boolean
  setMobileView: (v: boolean) => void
}

export default function ViewToggle({ mobileView, setMobileView }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        background: 'rgba(22,33,62,0.95)',
        border: '1px solid rgba(138,43,226,0.5)',
        borderRadius: 50,
        padding: '4px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(138,43,226,0.15)',
      }}
    >
      {/* Desktop button */}
      <button
        onClick={() => setMobileView(false)}
        title="Desktop view"
        style={{
          width: 44,
          height: 36,
          borderRadius: 46,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          background: !mobileView
            ? 'linear-gradient(135deg, #8A2BE2, #00E5FF)'
            : 'transparent',
          boxShadow: !mobileView ? '0 0 12px rgba(0,229,255,0.35)' : 'none',
        }}
      >
        {/* Desktop icon */}
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <rect x="1" y="1" width="18" height="11" rx="2" stroke={!mobileView ? '#fff' : 'rgba(245,245,247,0.4)'} strokeWidth="1.5"/>
          <path d="M7 15h6M10 12v3" stroke={!mobileView ? '#fff' : 'rgba(245,245,247,0.4)'} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile button */}
      <button
        onClick={() => setMobileView(true)}
        title="Mobile view"
        style={{
          width: 44,
          height: 36,
          borderRadius: 46,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          background: mobileView
            ? 'linear-gradient(135deg, #8A2BE2, #00E5FF)'
            : 'transparent',
          boxShadow: mobileView ? '0 0 12px rgba(0,229,255,0.35)' : 'none',
        }}
      >
        {/* Phone icon */}
        <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
          <rect x="1" y="1" width="11" height="18" rx="2.5" stroke={mobileView ? '#fff' : 'rgba(245,245,247,0.4)'} strokeWidth="1.5"/>
          <path d="M5 17h3" stroke={mobileView ? '#fff' : 'rgba(245,245,247,0.4)'} strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="4.5" y="2.5" width="4" height="1" rx="0.5" fill={mobileView ? '#fff' : 'rgba(245,245,247,0.4)'}/>
        </svg>
      </button>
    </div>
  )
}
