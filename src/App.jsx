import { useLayoutEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicesIndex from './pages/ServicesIndex.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsPage from './pages/TermsPage.jsx'

/** Scrolls to top on route change, or to the anchor when a hash is present. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div id="top">
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
