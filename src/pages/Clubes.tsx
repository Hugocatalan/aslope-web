import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Search,
  FileCheck,
  Mail,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ClubCard } from '../components/common/ClubCard';
import { EmptyState } from '../components/common/EmptyState';
import { CLUBES_DATA } from '../data/mockData';
import './Clubes.css';

export const Clubes: React.FC = () => {
  const [busqueda, setBusqueda] = useState<string>('');
  const [departamentoFiltro, setDepartamentoFiltro] = useState<string>('todos');

  // Obtener departamentos únicos
  const departamentos = Array.from(new Set(CLUBES_DATA.map((c) => c.departamento)));

  const clubesFiltrados = CLUBES_DATA.filter((club) => {
    const matchDepto =
      departamentoFiltro === 'todos' || club.departamento === departamentoFiltro;
    const matchTexto =
      busqueda === '' ||
      club.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      club.localidad.toLowerCase().includes(busqueda.toLowerCase()) ||
      club.direccion.toLowerCase().includes(busqueda.toLowerCase());
    return matchDepto && matchTexto;
  });

  return (
    <>
      <SEO
        title="Clubes Afiliados y Red Provincial"
        description="Directorio de clubes, gimnasios y centros de entrenamiento federados a la Asociación Santafesina de Levantamiento Olímpico de Pesas."
      />

      <Breadcrumbs items={[{ label: 'Clubes' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="clubes-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Red Deportiva Santafesina</span>
          <h1 id="clubes-page-title" className="page-title">
            Clubes y Centros de Entrenamiento Afiliados
          </h1>
          <p className="page-lead">
            Instituciones de la Provincia de Santa Fe que cuentan con tarimas reglamentarias, pesas homologadas y directores técnicos certificados para la enseñanza de la halterofilia.
          </p>
        </div>
      </section>

      {/* Directorio de Clubes */}
      <section className="section-py" aria-label="Directorio y buscador de clubes">
        <div className="container">
          {/* Barra de Búsqueda y Filtro */}
          <div className="club-filter-card card">
            <div className="club-search-input-box">
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Buscar por nombre de club o ciudad (Santa Fe, Rosario, Rafaela...)"
                className="club-search-input"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                aria-label="Buscar club por nombre o ciudad"
              />
            </div>

            <div className="club-depto-filter">
              <label htmlFor="depto-select" className="filter-label">
                Departamento:
              </label>
              <select
                id="depto-select"
                className="filter-select"
                value={departamentoFiltro}
                onChange={(e) => setDepartamentoFiltro(e.target.value)}
              >
                <option value="todos">Toda la Provincia de Santa Fe</option>
                {departamentos.map((d) => (
                  <option key={d} value={d}>
                    Dpto. {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grilla de Clubes */}
          {clubesFiltrados.length > 0 ? (
            <div className="cards-grid cards-grid-3 mt-4">
              {clubesFiltrados.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No se encontraron clubes con los criterios de búsqueda"
              description="Verificá los términos ingresados o seleccioná otro departamento para explorar la red santafesina."
              actionText="Ver todos los clubes"
              onAction={() => {
                setBusqueda('');
                setDepartamentoFiltro('todos');
              }}
            />
          )}

          {/* Procedimiento de Afiliación para Instituciones */}
          <div className="afiliacion-steps-card card mt-4">
            <div className="steps-header">
              <Building2 size={26} className="text-secondary" aria-hidden="true" />
              <div>
                <h2 className="steps-main-title">
                  ¿Cómo afiliar a tu club o centro deportivo a ASLOP?
                </h2>
                <p className="steps-subtitle">
                  Guía formal de ingreso al sistema federativo oficial del levantamiento de pesas en Santa Fe.
                </p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-item">
                <span className="step-num">01</span>
                <h3 className="step-title">Presentación de Nota</h3>
                <p className="step-desc">
                  Solicitud formal suscrita por la presidencia del club o responsable legal solicitando el empadronamiento provincial.
                </p>
              </div>

              <div className="step-item">
                <span className="step-num">02</span>
                <h3 className="step-title">Inspección de Tarima</h3>
                <p className="step-desc">
                  Verificación de que el espacio disponga de piso amortiguado, barras de 20 kg y 15 kg reglamentarias y discos calibrados.
                </p>
              </div>

              <div className="step-item">
                <span className="step-num">03</span>
                <h3 className="step-title">Responsable Técnico</h3>
                <p className="step-desc">
                  Acreditación de entrenador o preparador físico matriculado con certificación de curso de levantamiento olímpico.
                </p>
              </div>

              <div className="step-item">
                <span className="step-num">04</span>
                <h3 className="step-title">Resolución Directiva</h3>
                <p className="step-desc">
                  Aprobación por Comisión Directiva y asignación de código federativo para la tramitación de licencias de atletas.
                </p>
              </div>
            </div>

            <div className="steps-cta-bar">
              <Link to="/documentacion" className="btn btn-primary btn-sm">
                <FileCheck size={16} aria-hidden="true" />
                <span>Descargar Formulario de Afiliación</span>
              </Link>
              <Link to="/contacto" className="btn btn-outline btn-sm">
                <Mail size={16} aria-hidden="true" />
                <span>Mesa de Entradas para Instituciones</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
