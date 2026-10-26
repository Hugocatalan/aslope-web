import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Asociacion } from './pages/Asociacion';
import { Competencias } from './pages/Competencias';
import { AtletasResultados } from './pages/AtletasResultados';
import { Clubes } from './pages/Clubes';
import { Noticias } from './pages/Noticias';
import { NoticiaDetalle } from './pages/NoticiaDetalle';
import { Documentacion } from './pages/Documentacion';
import { Contacto } from './pages/Contacto';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="site-wrapper">
        <Header />
        <main id="contenido-principal" role="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-asociacion" element={<Asociacion />} />
            <Route path="/competencias" element={<Competencias />} />
            <Route path="/atletas-resultados" element={<AtletasResultados />} />
            <Route path="/clubes" element={<Clubes />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetalle />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
