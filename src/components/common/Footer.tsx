import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { INSTITUCIONAL_INFO } from '../../data/mockData';
import { InstagramIcon } from './InstagramIcon';
import { getAssetUrl } from '../../utils/assets';
import volcatechLogo from '../../assets/images/03-isotipo.png';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* Sección Superior del Footer con Enlace Institucional */}
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Columna 1: Identidad y Escudo */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src={getAssetUrl('/logo-aslop.jpeg')}
                alt="Escudo oficial ASLOP"
                className="footer-shield"
                width="80"
                height="80"
                loading="lazy"
              />
              <div>
                <span className="footer-acronym">ASLOP</span>
                <p className="footer-fullname">{INSTITUCIONAL_INFO.nombreCompleto}</p>
              </div>
            </div>
            <p className="footer-description">
              Entidad rectora del levantamiento olímpico de pesas en la Provincia de Santa Fe. Comprometida con la formación de deportistas, la reglamentación técnica y la jerarquización del deporte provincial.
            </p>
            <div className="footer-credentials">
              <span className="credential-item">
                <ShieldCheck size={16} className="text-secondary" aria-hidden="true" />
                Afiliada a la Federación Argentina de Pesas (FAP)
              </span>
            </div>
          </div>

          {/* Columna 2: Navegación Institucional */}
          <div className="footer-col">
            <h3 className="footer-heading">Institucional</h3>
            <ul className="footer-links">
              <li>
                <Link to="/la-asociacion"><ChevronRight size={14} aria-hidden="true" /> Sobre la Asociación</Link>
              </li>
              <li>
                <Link to="/la-asociacion#autoridades"><ChevronRight size={14} aria-hidden="true" /> Autoridades y Gobierno</Link>
              </li>
              <li>
                <Link to="/clubes"><ChevronRight size={14} aria-hidden="true" /> Directorio de Clubes Afiliados</Link>
              </li>
              <li>
                <Link to="/documentacion"><ChevronRight size={14} aria-hidden="true" /> Estatuto y Resoluciones</Link>
              </li>
              <li>
                <Link to="/noticias"><ChevronRight size={14} aria-hidden="true" /> Comunicados Oficiales</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Área Deportiva y Técnica */}
          <div className="footer-col">
            <h3 className="footer-heading">Área Deportiva</h3>
            <ul className="footer-links">
              <li>
                <Link to="/competencias"><ChevronRight size={14} aria-hidden="true" /> Calendario Oficial de Torneos</Link>
              </li>
              <li>
                <Link to="/atletas-resultados"><ChevronRight size={14} aria-hidden="true" /> Récords y Marcas Provinciales</Link>
              </li>
              <li>
                <Link to="/atletas-resultados"><ChevronRight size={14} aria-hidden="true" /> Categorías y Tablas IWF</Link>
              </li>
              <li>
                <Link to="/documentacion"><ChevronRight size={14} aria-hidden="true" /> Reglamento Técnico Oficial</Link>
              </li>
              <li>
                <Link to="/documentacion"><ChevronRight size={14} aria-hidden="true" /> Protocolos Antidopaje (CNAD)</Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Mesa de Entradas y Contacto */}
          <div className="footer-col">
            <h3 className="footer-heading">Mesa de Entradas</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" aria-hidden="true" />
                <span>{INSTITUCIONAL_INFO.jurisdiccion}</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <a href={`mailto:${INSTITUCIONAL_INFO.emailContacto}`}>
                  {INSTITUCIONAL_INFO.emailContacto}
                </a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <a href={`mailto:${INSTITUCIONAL_INFO.emailSecretaria}`}>
                  {INSTITUCIONAL_INFO.emailSecretaria}
                </a>
              </li>
              <li>
                <InstagramIcon size={18} className="contact-icon instagram-icon" aria-hidden="true" />
                <a
                  href={INSTITUCIONAL_INFO.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-instagram-link"
                  aria-label="Instagram oficial ASLOP @aslopesas (abre en una nueva pestaña)"
                >
                  <span className="instagram-handle">@aslopesas</span>
                </a>
              </li>
              <li>
                <Award size={18} className="contact-icon" aria-hidden="true" />
                <span>Afiliación y licencias deportivas</span>
              </li>
            </ul>
            <div className="footer-cta-box">
              <Link to="/contacto" className="btn btn-outline-white btn-sm w-100">
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Franja Inferior de Copyright y Reconocimientos */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP). Todos los derechos reservados.
          </p>
          <div className="legal-links">
            <span>Provincia de Santa Fe · República Argentina</span>
            <span className="bullet-sep" aria-hidden="true">·</span>
            <Link to="/documentacion">Transparencia</Link>
            <span className="bullet-sep" aria-hidden="true">·</span>
            <Link to="/contacto">Canales Oficiales</Link>
          </div>
        </div>
      </div>

      {/* Sección de Desarrollo Tecnológico - VolcaTech */}
      <div className="footer-developer">
        <div className="container footer-developer-content">
          <div className="developer-info">
            <p className="developer-text">
              Desarrollo web por{' '}
              <a
                href="https://volcatech.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
                title="Visitar sitio oficial de VolcaTech (abre en una pestaña nueva)"
              >
                <img
                  src={volcatechLogo}
                  alt=""
                  className="developer-logo"
                  width="18"
                  height="18"
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className="developer-name">VolcaTech</span>
              </a>
            </p>
            <p className="developer-tagline">
              Soluciones digitales para instituciones y empresas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
