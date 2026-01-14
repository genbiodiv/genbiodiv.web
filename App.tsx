import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/investigacion" element={<Research />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/contacto" element={<Contact />} />
            {/* Alias for EcoEvolucion mentioned in prompt, mapping to research */}
            <Route path="/ecoevolucion" element={<Research />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;