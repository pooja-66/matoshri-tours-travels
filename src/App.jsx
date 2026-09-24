import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Packages from './pages/Packages';
import PuneToMahabaleshwar from './pages/PuneToMahabaleshwar';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <PageTransition>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/pune-to-mahabaleshwar" element={<PuneToMahabaleshwar />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </PageTransition>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

export default App;
