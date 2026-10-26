import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Compass,
  FileCheck2,
  Scale,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { AUTORIDADES_ASLOP, INSTITUCIONAL_INFO } from '../data/mockData';
import './Asociacion.css';

export const Asociacion: React.FC = () => {
  return (
    <>
      <SEO
        title="La Asociación"
        description="Conocé la historia, misión, visión, objetivos y estructura de gobierno de la Asociación Santafesina de Levantamiento Olímpico de Pesas (ASLOP)."
      />

      <Breadcrumbs items={[{ label: 'La Asociación' }]} />

      {/* Cabecera de Página Institucional */}
      <section className="page-header" aria-labelledby="asoc-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Identidad y Gobierno</span>
          <h1 id="asoc-page-title" className="page-title">
            La Asociación Santafesina de Levantamiento Olímpico de Pesas
          </h1>
          <p className="page-lead">
            Institución rectora del deporte de las pesas en el territorio santafesino, fundamentada en la ética competitiva, la rigurosidad técnica y la inclusión de jóvenes deportistas.
          </p>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="section-py" aria-labelledby="mv-heading">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card card">
              <div className="mv-icon-wrapper" aria-hidden="true">
                <Target size={28} />
              </div>
              <h2 id="mv-heading" className="mv-card-title">Misión</h2>
              <p className="mv-card-text">
                Fomentar, reglamentar, organizar y difundir la práctica del levantamiento olímpico de pesas en toda la Provincia de Santa Fe, garantizando un marco formativo seguro, inclusivo y de alto nivel técnico para atletas, entrenadores y jueces.
              </p>
            </div>

            <div className="mv-card card">
              <div className="mv-icon-wrapper" aria-hidden="true">
                <Eye size={28} />
              </div>
              <h2 className="mv-card-title">Visión</h2>
              <p className="mv-card-text">
                Constituir a Santa Fe como un polo referente nacional e internacional de halterofilia, reconocido por la excelencia pedagógica de sus escuelas formativas, la calidad de sus torneos y los valores deportivos de sus representantes.
              </p>
            </div>

            <div className="mv-card card">
              <div className="mv-icon-wrapper" aria-hidden="true">
                <Compass size={28} />
              </div>
              <h2 className="mv-card-title">Valores</h2>
              <ul className="values-list">
                <li><strong>Disciplina y Técnica:</strong> Respeto a los fundamentos biomecánicos de cada levantamiento.</li>
                <li><strong>Juego Limpio:</strong> Firme compromiso con la competencia sana y el estricto apego a normas antidopaje.</li>
                <li><strong>Orgullo Santafesino:</strong> Representación leal del deporte provincial en escenarios federales.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historia y Tradición */}
      <section className="section-py bg-surface" aria-labelledby="historia-heading">
        <div className="container">
          <div className="history-grid">
            <div className="history-text">
              <span className="section-badge badge-accent">Tradición e Hidalguía</span>
              <h2 id="historia-heading" className="section-title">
                Tradición del Levantamiento Olímpico en Santa Fe
              </h2>
              <p className="lead">
                El deporte de la fuerza y la velocidad tiene profundas raíces en la geografía santafesina, desde los clubes ribereños hasta los polideportivos del interior productivo.
              </p>
              <p>
                La halterofilia olímpica es una de las disciplinas fundacionales de los Juegos Olímpicos de la era moderna. En Santa Fe, históricamente, ha sido cultivada en gimnasios tradicionales y centros de entrenamiento donde generaciones de atletas forjaron su temple entre barras y discos de acero.
              </p>
              <p>
                La ASLOP nace para consolidar esa herencia, articulando una estructura formal que otorgue representatividad democrática a los clubes afiliados, canalice el apoyo del Estado provincial y mantenga una estrecha colaboración técnica con la Federación Argentina de Pesas (FAP).
              </p>
              <div className="history-quote">
                <blockquote>
                  "No se trata únicamente del peso que se levanta sobre la cabeza, sino de la disciplina mental, la paciencia y la integridad que se forjan en cada intento."
                </blockquote>
              </div>
            </div>

            <div className="history-side">
              <div className="history-image-card card">
                <img
                  src="/images/barbell-chalk.jpg"
                  alt="Barra olímpica y magnesio en centro de tecnificación santafesino"
                  className="history-img"
                  loading="lazy"
                />
                <div className="history-image-caption">
                  <span>Equipamiento reglamentario homologado IWF para torneos provinciales santafesinos.</span>
                </div>
              </div>

              <div className="history-stats-card card mt-4">
                <h3 className="stats-card-title">Marco Federativo</h3>
                <ul className="stats-list">
                  <li>
                    <span className="stats-label">Reglamento Oficial:</span>
                    <span className="stats-val">International Weightlifting Federation (IWF)</span>
                  </li>
                  <li>
                    <span className="stats-label">Afiliación Superior:</span>
                    <span className="stats-val">Federación Argentina de Pesas (FAP)</span>
                  </li>
                  <li>
                    <span className="stats-label">Fiscalización Pública:</span>
                    <span className="stats-val">Dirección Provincial de Personas Jurídicas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridades y Estructura de Gobierno */}
      <section id="autoridades" className="section-py" aria-labelledby="gov-heading">
        <div className="container">
          <SectionHeader
            badge="Órganos de Conducción"
            badgeType="default"
            title="Autoridades y Estructura Institucional"
            subtitle="Representación estatutaria de la Asociación Santafesina de Levantamiento Olímpico de Pesas."
          />

          <div className="institutional-note mb-4">
            <Scale size={18} className="text-secondary" aria-hidden="true" />
            <p>
              <strong>Transparencia institucional:</strong> La conducción de ASLOP se organiza mediante asambleas anuales de delegados de clubes afiliados. Los mandatos se renuevan periódicamente conforme a las normas estatutarias vigentes y resoluciones de Personería Jurídica de la Provincia de Santa Fe.
            </p>
          </div>

          <div className="governance-grid">
            {AUTORIDADES_ASLOP.map((autoridad, index) => (
              <div key={index} className="gov-card card">
                <div className="gov-role-badge">{autoridad.cargo}</div>
                <h3 className="gov-name">{autoridad.nombre}</h3>
                {autoridad.clubProcedencia && (
                  <p className="gov-dept">{autoridad.clubProcedencia}</p>
                )}
                <div className="gov-term">
                  <span>Mandato: {autoridad.vigenciaMandato}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="comisiones-box card mt-4">
            <h3 className="comisiones-title">Comisiones y Áreas Especiales</h3>
            <div className="comisiones-grid">
              <div className="comision-col">
                <h4>Colegio de Jueces y Oficiales Técnicos</h4>
                <p>
                  Encargado de la designación y capacitación de árbitros, cronometradores y miembros del jurado para competencias oficiales provinciales bajo norma IWF.
                </p>
              </div>
              <div className="comision-col">
                <h4>Comisión Técnica y de Seleccionados</h4>
                <p>
                  Responsable del seguimiento de marcas mínimas, campamentos de entrenamiento y conformación de los planteles representativos de Santa Fe.
                </p>
              </div>
              <div className="comision-col">
                <h4>Comisión de Ética y Antidopaje</h4>
                <p>
                  Vela por el cumplimiento estricto del código WADA y la Comisión Nacional Antidopaje (CNAD) en todos los eventos y deportistas federados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entidades Vinculadas */}
      <section className="section-py bg-surface" aria-labelledby="afiliaciones-heading">
        <div className="container">
          <SectionHeader
            badge="Relaciones Institucionales"
            badgeType="secondary"
            title="Entidades y Afiliaciones Oficiales"
            subtitle="Articulación con organismos del deporte nacional y gubernamental."
            centered
          />

          <div className="afiliaciones-grid">
            {INSTITUCIONAL_INFO.afiliaciones.map((afil, idx) => (
              <div key={idx} className="afil-card card">
                <div className="afil-badge">{afil.estado}</div>
                <h3 className="afil-title">{afil.entidad}</h3>
                <p className="afil-desc">{afil.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/documentacion" className="btn btn-outline">
              <FileCheck2 size={16} aria-hidden="true" />
              <span>Ver Estatuto y Documentación Oficial</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
