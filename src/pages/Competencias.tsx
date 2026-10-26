import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CompetenciaCard } from '../components/common/CompetenciaCard';
import { EmptyState } from '../components/common/EmptyState';
import { COMPETENCIAS_DATA } from '../data/mockData';
import './Competencias.css';

export const Competencias: React.FC = () => {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');

  // Filtrado
  const competenciasFiltradas = COMPETENCIAS_DATA.filter((comp) => {
    const matchTipo =
      filtroTipo === 'todos' || comp.tipo.toLowerCase() === filtroTipo.toLowerCase();
    const matchEstado =
      filtroEstado === 'todos' ||
      (filtroEstado === 'activos' && comp.estadoInscripcion !== 'Finalizado') ||
      (filtroEstado === 'finalizados' && comp.estadoInscripcion === 'Finalizado');
    return matchTipo && matchEstado;
  });

  return (
    <>
      <SEO
        title="Competencias y Calendario Deportivo"
        description="Calendario oficial de torneos, campeonatos provinciales, selectivos y resultados del levantamiento olímpico de pesas en Santa Fe."
      />

      <Breadcrumbs items={[{ label: 'Competencias' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="comp-page-title">
        <div className="container">
          <span className="section-badge badge-accent">Temporada 2026</span>
          <h1 id="comp-page-title" className="page-title">
            Calendario Deportivo y Competencias
          </h1>
          <p className="page-lead">
            Cronograma oficial de torneos provinciales puntuables, campeonatos selectivos y certámenes de halterofilia fiscalizados en la Provincia de Santa Fe.
          </p>
        </div>
      </section>

      {/* Contenido Principal con Filtros */}
      <section className="section-py" aria-label="Listado y filtros de competencias">
        <div className="container">
          {/* Barra de Filtros */}
          <div className="filter-bar card">
            <div className="filter-title-group">
              <Filter size={18} className="text-secondary" aria-hidden="true" />
              <span className="filter-bar-title">Filtrar Competencias</span>
            </div>

            <div className="filter-controls">
              <div className="filter-item">
                <label htmlFor="tipo-select" className="filter-label">
                  Tipo de Torneo:
                </label>
                <select
                  id="tipo-select"
                  className="filter-select"
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                >
                  <option value="todos">Todos los torneos</option>
                  <option value="provincial">Provinciales</option>
                  <option value="evaluativo">Evaluativos y Selectivos</option>
                  <option value="regional">Regionales</option>
                </select>
              </div>

              <div className="filter-item">
                <label htmlFor="estado-select" className="filter-label">
                  Estado:
                </label>
                <select
                  id="estado-select"
                  className="filter-select"
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value)}
                >
                  <option value="todos">Todos los estados</option>
                  <option value="activos">Próximos / Inscripción Abierta</option>
                  <option value="finalizados">Torneos Finalizados</option>
                </select>
              </div>

              {(filtroTipo !== 'todos' || filtroEstado !== 'todos') && (
                <button
                  type="button"
                  className="btn btn-outline btn-sm filter-reset-btn"
                  onClick={() => {
                    setFiltroTipo('todos');
                    setFiltroEstado('todos');
                  }}
                >
                  Reestablecer
                </button>
              )}
            </div>
          </div>

          {/* Grilla de Resultados */}
          {competenciasFiltradas.length > 0 ? (
            <div className="cards-grid cards-grid-3 mt-4">
              {competenciasFiltradas.map((comp) => (
                <CompetenciaCard key={comp.id} competencia={comp} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No se encontraron competencias con los filtros seleccionados"
              description="Podés restablecer los filtros para volver a ver el calendario general provincial o consultar directamente con la mesa técnica de ASLOP."
              actionText="Restablecer filtros"
              onAction={() => {
                setFiltroTipo('todos');
                setFiltroEstado('todos');
              }}
            />
          )}

          {/* Requisitos Oficiales de Participación */}
          <div className="reglamento-info-box card mt-4">
            <h2 className="reglamento-title">
              <FileText size={22} className="text-secondary" aria-hidden="true" />
              Requisitos Obligatorios para Participar en Torneos Oficiales
            </h2>
            <div className="reglamento-grid">
              <div className="reglamento-item">
                <h3 className="reg-item-title">1. Licencia Deportiva</h3>
                <p>
                  Todo atleta debe estar empadronado a través de un club o centro adherido con su carnet provincial o nacional activo para el año en curso.
                </p>
              </div>
              <div className="reglamento-item">
                <h3 className="reg-item-title">2. Certificado Médico EMMAC</h3>
                <p>
                  Presentación de la ficha médica oficial con ergometría e informe de aptitud física de alta competencia sin excepción.
                </p>
              </div>
              <div className="reglamento-item">
                <h3 className="reg-item-title">3. Indumentaria Técnica</h3>
                <p>
                  Uso estricto de malla reglamentaria de una sola pieza, calzado específico de levantamiento con tacón y cinturón bajo dimensiones IWF.
                </p>
              </div>
              <div className="reglamento-item">
                <h3 className="reg-item-title">4. Pesaje Oficial</h3>
                <p>
                  El pesaje se realiza exactamente dos horas antes del inicio de la tanda correspondiente, con documento de identidad y pasaporte deportivo.
                </p>
              </div>
            </div>

            <div className="reglamento-action-row">
              <Link to="/documentacion" className="btn btn-primary btn-sm">
                Descargar Reglamentos y Planillas
              </Link>
              <Link to="/contacto" className="btn btn-outline btn-sm">
                Consultar Procedimiento de Inscripción
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
