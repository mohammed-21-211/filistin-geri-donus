import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import About from './pages/About'
import WorkAreas from './pages/WorkAreas'
import Contact from './pages/Contact'
import Governance from './pages/Governance'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        İçeriğe geç
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/calisma-alanlarimiz" element={<WorkAreas />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/yonetisim-ve-seffaflik" element={<Governance />} />
          <Route path="/gizlilik-politikasi" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
