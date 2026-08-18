import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import LiveEffects from './components/LiveEffects';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import DesignStudio from './pages/DesignStudio';
import Hampers from './pages/Hampers';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';
import './styles/animations.css';
import './styles/components.css';
import './styles/pages.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Loader />
        <LiveEffects />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/design-studio" element={<DesignStudio />} />
              <Route path="/hampers" element={<Hampers />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
