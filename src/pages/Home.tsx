import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ChevronRight,
  Shield,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Mail,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { CompetenciaCard } from '../components/common/CompetenciaCard';
import { NoticiaCard } from '../components/common/NoticiaCard';
import { ClubCard } from '../components/common/ClubCard';
import {
  COMPETENCIAS_DATA,
  NOTICIAS_DATA,
  CLUBES_DATA,
  RECORDS_DATA,
} from '../data/mockData';
import './Home.css';

export const Home: React.FC = () => {
  // Próximas competencias activas
  const competenciasProximas = COMPETENCIAS_DATA.filter(
    (c) => c.estadoInscripcion !== 'Finalizado'
  ).slice(0, 3);

  // Noticias destacadas
  const noticiasDestacadas = NOTICIAS_DATA.slice(0, 3);

  // Muestra de clubes
  const clubesDestacados = CLUBES_DATA.slice(0, 3);

  return (
    <>
      <SEO
        title="Inicio"
        description="Sitio oficial de la Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP). Tradición, torneos provinciales, resultados oficiales y clubes federados en Santa Fe."
      />

      {/* ====================================================================
          6.1 HERO INSTITUCIONAL
          ==================================================================== */}
      <section className="hero-section" aria-label="Portada institucional">
        <div className="hero-backdrop">
          <img
            src="/images/hero-weightlifting.jpg"
            alt="Atleta en plataforma oficial de competencia de levantamiento olímpico de pesas"
            className="hero-bg-image"
            fetchPriority="high"
          />
          <div className="hero-overlay" aria-hidden="true"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge" role="text">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span>Asociación Santafesina de Levantamiento Olímpico de Pesas</span>
            </div>

            <h1 className="hero-title">
              Potencia, técnica y tradición deportiva.
            </h1>

            <p className="hero-description">
              Una institución dedicada al desarrollo, la promoción y el crecimiento del levantamiento olímpico de pesas en la Provincia de Santa Fe.
            </p>

            <div className="hero-actions">
              <Link to="/la-asociacion" className="btn btn-primary btn-lg hero-btn-primary">
                <span>Conocé la Asociación</span>
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/competencias" className="btn btn-outline-white btn-lg hero-btn-secondary">
                <Calendar size={18} aria-hidden="true" />
                <span>Calendario de Competencias</span>
              </Link>
            </div>

            <div className="hero-credentials">
              <div className="hero-credential-pill">
                <Shield size={16} className="text-secondary" aria-hidden="true" />
                <span>Reglamentación oficial IWF</span>
              </div>
              <div className="hero-credential-pill">
                <Award size={16} className="text-secondary" aria-hidden="true" />
                <span>Afiliada a la FAP</span>
              </div>
              <div className="hero-credential-pill">
                <Users size={16} className="text-secondary" aria-hidden="true" />
                <span>Desarrollo deportivo provincial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.2 PRESENTACIÓN INSTITUCIONAL
          ==================================================================== */}
      <section className="section-py presentation-section" aria-labelledby="pres-heading">
        <div className="container">
          <div className="presentation-grid">
            <div className="presentation-text-col">
              <span className="section-badge badge-secondary">Propósito Institucional</span>
              <h2 id="pres-heading" className="presentation-title">
                Jerarquizando el deporte olímpico en cada rincón de la provincia
              </h2>
              <p className="lead presentation-lead">
                La Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP) nuclea a deportistas, entrenadores, jueces e instituciones con un objetivo común: consolidar una estructura técnica y federativa sólida, formativa y transparente.
              </p>
              <p className="presentation-body">
                A través del cumplimiento de las normas de la Federación Internacional de Levantamiento Olímpico de Pesas (IWF) y la Federación Argentina de Pesas (FAP), acompañamos a las escuelas deportivas y clubes de la provincia en la enseñanza rigurosa de las dos pruebas reinas: el Arranque (Snatch) y el Envión (Clean & Jerk).
              </p>
              <div className="presentation-actions">
                <Link to="/la-asociacion" className="btn btn-outline">
                  <span>Conocer historia y estatuto</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/documentacion" className="btn btn-outline">
                  <BookOpen size={16} aria-hidden="true" />
                  <span>Reglamentos técnicos</span>
                </Link>
              </div>
            </div>

            <div className="presentation-visual-col">
              <div className="presentation-shield-card card mb-4">
                <div className="presentation-shield-circle">
                  <img
                    src="/logo-aslop.jpeg"
                    alt="Escudo oficial de la Asociación Santafesina de Levantamiento Olímpico de Pesas"
                    className="presentation-shield-img"
                    width="150"
                    height="150"
                    loading="lazy"
                  />
                </div>
                <div className="presentation-shield-meta">
                  <span className="section-badge badge-accent">Sello Oficial ASLOP</span>
                  <h3 className="presentation-shield-title">Identidad de la Halterofilia Santafesina</h3>
                  <p className="presentation-shield-desc">
                    Ramas de laurel cívico, atleta en arranque olímpico y los colores celeste y rojo que sintetizan nuestra pertenencia deportiva santafesina y argentina.
                  </p>
                </div>
              </div>

              <div className="institutional-pillars-card">
                <h3 className="pillars-card-title">Pilares de Nuestra Gestión</h3>
                <ul className="pillars-list">
                  <li className="pillar-item">
                    <div className="pillar-icon" aria-hidden="true">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="pillar-heading">Formación Técnico-Pedagógica</h4>
                      <p className="pillar-text">
                        Prioridad en la enseñanza biomecánica correcta y la seguridad deportiva en etapas formativas infantojuveniles.
                      </p>
                    </div>
                  </li>
                  <li className="pillar-item">
                    <div className="pillar-icon" aria-hidden="true">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="pillar-heading">Transparencia y Criterio Federativo</h4>
                      <p className="pillar-text">
                        Reglamentos públicos, actas de asambleas, calendarios oficiales unificados y canales directos de consulta.
                      </p>
                    </div>
                  </li>
                  <li className="pillar-item">
                    <div className="pillar-icon" aria-hidden="true">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="pillar-heading">Expansión Territorial Santafesina</h4>
                      <p className="pillar-text">
                        Presencia y articulación en los departamentos de la provincia para acercar las pesas a nuevos atletas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.3 PRÓXIMAS COMPETENCIAS
          ==================================================================== */}
      <section className="section-py bg-surface" aria-labelledby="comp-section-title">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-badge badge-accent">Calendario Deportivo 2026</span>
              <h2 id="comp-section-title">Próximas Competencias</h2>
              <p className="section-subtitle">
                Torneos puntuables, selectivos y evaluativos fiscalizados por el colegio de jueces ASLOP.
              </p>
            </div>
            <Link to="/competencias" className="btn btn-outline">
              <span>Ver calendario completo</span>
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="cards-grid cards-grid-3">
            {competenciasProximas.map((comp) => (
              <CompetenciaCard key={comp.id} competencia={comp} />
            ))}
          </div>

          <div className="institutional-note mt-4">
            <Shield size={18} className="text-secondary" aria-hidden="true" />
            <p>
              <strong>Aviso a delegaciones y clubes:</strong> Todos los torneos exigen licencia federativa activa y certificación de aptitud física obligatoria. No se permitirán inscripciones en mesa de control el mismo día del pesaje.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.4 NOTICIAS DESTACADAS
          ==================================================================== */}
      <section className="section-py" aria-labelledby="noticias-section-title">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-badge badge-secondary">Comunicación Oficial</span>
              <h2 id="noticias-section-title">Noticias y Comunicados</h2>
              <p className="section-subtitle">
                Información institucional, capacitaciones y novedades de la halterofilia santafesina.
              </p>
            </div>
            <Link to="/noticias" className="btn btn-outline">
              <span>Ver todas las noticias</span>
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="cards-grid cards-grid-3">
            {noticiasDestacadas.map((noticia, index) => (
              <NoticiaCard key={noticia.id} noticia={noticia} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.5 RESULTADOS Y LOGROS DEPORTIVOS (MUESTRA ESTRUCTURADA)
          ==================================================================== */}
      <section className="section-py bg-surface" aria-labelledby="records-section-title">
        <div className="container">
          <SectionHeader
            badge="Alto Rendimiento Provincial"
            badgeType="default"
            title="Resultados y Récords Homologados"
            subtitle="Registro oficial de marcas y desempeño técnico en plataformas reglamentarias de Santa Fe."
            centered
          />

          <div className="records-summary-card card">
            <div className="records-summary-header">
              <div>
                <h3 className="records-card-title">Cuadro de Marcas Técnicas Provinciales</h3>
                <p className="records-card-desc">
                  Validadas conforme al protocolo de pesaje y fiscalización técnica de la International Weightlifting Federation (IWF).
                </p>
              </div>
              <Link to="/atletas-resultados" className="btn btn-secondary btn-sm">
                <span>Ver tabla completa de récords</span>
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="table-responsive">
              <table className="table-records" aria-label="Tabla resumen de marcas técnicas provinciales">
                <thead>
                  <tr>
                    <th scope="col">Categoría</th>
                    <th scope="col">División</th>
                    <th scope="col">Atleta / Registro</th>
                    <th scope="col">Club</th>
                    <th scope="col" className="text-center">Arranque</th>
                    <th scope="col" className="text-center">Envión</th>
                    <th scope="col" className="text-center">Total</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {RECORDS_DATA.slice(0, 4).map((rec) => (
                    <tr key={rec.id}>
                      <td className="fw-600 text-primary">{rec.categoriaPeso} ({rec.genero})</td>
                      <td>{rec.divisionEdad}</td>
                      <td>{rec.atleta}</td>
                      <td className="text-muted">{rec.club}</td>
                      <td className="text-center fw-600">{rec.arranqueKg} kg</td>
                      <td className="text-center fw-600">{rec.envionKg} kg</td>
                      <td className="text-center fw-700 text-primary">{rec.totalOlimpicoKg} kg</td>
                      <td>
                        <span className={rec.estadoVerificacion === 'Homologado ASLOP' ? 'tag tag-success' : 'tag tag-warning'}>
                          {rec.estadoVerificacion}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="records-footer-note">
              <span className="note-indicator">Nota de rigor institucional:</span>
              <p>
                Los registros históricos definitivos de marcas santafesinas se encuentran en proceso de homologación por la Comisión Técnica y el Colegio de Árbitros en base a las actas oficiales de competencia 2024–2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.6 CLUBES AFILIADOS
          ==================================================================== */}
      <section className="section-py" aria-labelledby="clubes-section-title">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-badge badge-secondary">Red Provincial</span>
              <h2 id="clubes-section-title">Clubes y Centros de Halterofilia</h2>
              <p className="section-subtitle">
                Espacios deportivos que cuentan con tarimas reglamentarias y entrenadores avalados.
              </p>
            </div>
            <Link to="/clubes" className="btn btn-outline">
              <span>Directorio de Clubes</span>
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="cards-grid cards-grid-3">
            {clubesDestacados.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>

          <div className="affiliation-callout card mt-4">
            <div className="callout-content">
              <Building2 size={32} className="text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="callout-title">¿Tu institución practica levantamiento olímpico de pesas?</h4>
                <p className="callout-text">
                  Iniciá el proceso de afiliación oficial a ASLOP para que tus atletas participen en el ranking provincial y los campeonatos nacionales FAP.
                </p>
              </div>
            </div>
            <Link to="/documentacion" className="btn btn-primary btn-sm flex-shrink-0">
              Solicitar Afiliación
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6.7 LLAMADA INSTITUCIONAL FINAL
          ==================================================================== */}
      <section className="final-cta-section" aria-label="Contacto institucional">
        <div className="container">
          <div className="final-cta-box">
            <div className="final-cta-content">
              <span className="section-badge badge-accent">Sumate a ASLOP</span>
              <h2 className="final-cta-title">
                Unidos por el crecimiento del levantamiento olímpico en Santa Fe
              </h2>
              <p className="final-cta-description">
                Invitamos a deportistas, entrenadores, preparadores físicos, instituciones y familias interesadas en la halterofilia a tomar contacto con los canales oficiales de la asociación para participar en nuestras actividades formativas y competitivas.
              </p>
              <div className="final-cta-actions">
                <Link to="/contacto" className="btn btn-primary btn-lg">
                  <Mail size={18} aria-hidden="true" />
                  <span>Mesa de Entradas y Consultas</span>
                </Link>
                <Link to="/la-asociacion" className="btn btn-outline btn-lg">
                  <span>Conocer Estructura y Autoridades</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
