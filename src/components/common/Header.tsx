import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Shield } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrollActivo, setScrollActivo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cerrar menú al cambiar de ruta
    setMenuAbierto(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrollActivo(true);
      } else {
        setScrollActivo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar teclado para accesibilidad (tecla Escape cierra el menú móvil)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuAbierto) {
        setMenuAbierto(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuAbierto]);

  return (
    <>
      {/* Salto de accesibilidad para lectores de pantalla */}
      <a href="#contenido-principal" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Franja Superior Institucional */}
      <div className="topbar-institutional" role="region" aria-label="Información institucional superior">
        <div className="container topbar-content">
          <div className="topbar-tagline">
            <span className="topbar-dot" aria-hidden="true"></span>
            <span>Provincia de Santa Fe · República Argentina · Afiliada a Federación Argentina de Pesas (FAP)</span>
          </div>
          <div className="topbar-quicklinks">
            <Link to="/documentacion" className="topbar-link">
              <Shield size={13} aria-hidden="true" /> Estatuto y Reglamentos
            </Link>
            <span className="topbar-separator" aria-hidden="true">|</span>
            <Link to="/contacto" className="topbar-link">
              Mesa de Entradas
            </Link>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className={`site-header ${scrollActivo ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo y Nombre Institucional */}
          <Link to="/" className="brand-link" aria-label="Ir al inicio - Asociación Santafesina de Levantamiento Olímpico de Pesas">
            <div className="shield-wrapper">
              <img
                src="/logo-aslop.jpeg"
                alt="Escudo oficial de la Asociación Santafesina de Levantamiento Olímpico de Pesas"
                className="official-shield"
                width="128"
                height="128"
                loading="eager"
              />
            </div>
            <div className="brand-text">
              <span className="brand-acronym">ASLOP</span>
              <span className="brand-fullname">Asociación Santafesina de Levantamiento Olímpico de Pesas</span>
              <span className="brand-region">Santa Fe · Argentina</span>
            </div>
          </Link>

          {/* Navegación Escritorio */}
          <nav className="desktop-navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              <li>
                <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/la-asociacion" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  La Asociación
                </NavLink>
              </li>
              <li>
                <NavLink to="/competencias" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Competencias
                </NavLink>
              </li>
              <li>
                <NavLink to="/atletas-resultados" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Atletas y Resultados
                </NavLink>
              </li>
              <li>
                <NavLink to="/clubes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Clubes
                </NavLink>
              </li>
              <li>
                <NavLink to="/noticias" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Noticias
                </NavLink>
              </li>
              <li>
                <NavLink to="/documentacion" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Documentación
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contacto
                </NavLink>
              </li>
            </ul>

            {/* Botón Destacado Calendario Deportivo */}
            <div className="header-cta">
              <Link to="/competencias" className="btn btn-secondary btn-sm nav-cta-btn" aria-label="Ver calendario oficial de competencias">
                <Calendar size={16} aria-hidden="true" />
                <span>Calendario</span>
              </Link>
            </div>
          </nav>

          {/* Botón Toggle Menú Móvil */}
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={menuAbierto}
            aria-controls="mobile-nav-drawer"
            aria-label={menuAbierto ? 'Cerrar menú principal' : 'Abrir menú principal'}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>

        {/* Drawer Menú Móvil */}
        <div
          id="mobile-nav-drawer"
          className={`mobile-drawer ${menuAbierto ? 'is-open' : ''}`}
          aria-hidden={!menuAbierto}
        >
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Menú Institucional</span>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMenuAbierto(false)}
              aria-label="Cerrar navegación"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav className="mobile-navigation" aria-label="Navegación móvil">
            <ul className="mobile-nav-list">
              <li>
                <NavLink to="/" end className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/la-asociacion" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  La Asociación
                </NavLink>
              </li>
              <li>
                <NavLink to="/competencias" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Competencias y Torneos
                </NavLink>
              </li>
              <li>
                <NavLink to="/atletas-resultados" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Atletas y Resultados
                </NavLink>
              </li>
              <li>
                <NavLink to="/clubes" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Clubes Afiliados
                </NavLink>
              </li>
              <li>
                <NavLink to="/noticias" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Noticias y Comunicados
                </NavLink>
              </li>
              <li>
                <NavLink to="/documentacion" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Documentación Oficial
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Mesa de Entradas y Contacto
                </NavLink>
              </li>
            </ul>

            <div className="mobile-drawer-cta">
              <Link to="/competencias" className="btn btn-secondary w-100">
                <Calendar size={18} aria-hidden="true" />
                <span>Ver Calendario de Torneos</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Overlay para click fuera del menú en mobile */}
        {menuAbierto && (
          <div
            className="mobile-backdrop"
            onClick={() => setMenuAbierto(false)}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
};
