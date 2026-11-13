import { useState } from 'react'
import { MobileContext } from './MobileContext'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OverviewPage from './pages/OverviewPage'
import IndividualPage from './pages/IndividualPage'
import CalculatePage from './pages/CalculatePage'
import ContactPage from './pages/ContactPage'
import ViewToggle from './components/ViewToggle'

export type Page = 'home' | 'about' | 'overview' | 'individual' | 'calculate' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [mobileView, setMobileView] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
  })

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const content = (
    <MobileContext.Provider value={mobileView}>
      <div className="min-h-screen" style={{ background: '#1A1A2E' }}>
        <Nav current={page} navigate={navigate} />
        {page === 'home'       && <HomePage navigate={navigate} />}
        {page === 'about'      && <AboutPage navigate={navigate} />}
        {page === 'overview'   && <OverviewPage navigate={navigate} />}
        {page === 'individual' && <IndividualPage navigate={navigate} />}
        {page === 'calculate'  && <CalculatePage navigate={navigate} />}
        {page === 'contact'    && <ContactPage navigate={navigate} />}
      </div>
    </MobileContext.Provider>
  )

  return (
    <>
      <ViewToggle mobileView={mobileView} setMobileView={setMobileView} />

      {mobileView ? (
        <div className="min-h-screen flex justify-center" style={{ background: '#0a0a14' }}>
          <div id="mobile-shell" style={{
            width: 'min(100%, 390px)',
            minHeight: '100vh',
            overflowX: 'hidden',
            background: '#1A1A2E',
          }}>
            {content}
          </div>
        </div>
      ) : (
        content
      )}
    </>
  )
}
