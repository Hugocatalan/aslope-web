import React, { useState } from 'react';
import {
  Trophy,
  Search,
  Scale,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';
import { RECORDS_DATA } from '../data/mockData';
import './AtletasResultados.css';

export const AtletasResultados: React.FC = () => {
  const [generoFiltro, setGeneroFiltro] = useState<'Todos' | 'Masculino' | 'Femenino'>('Todos');
  const [divisionFiltro, setDivisionFiltro] = useState<string>('Todos');
  const [busqueda, setBusqueda] = useState<string>('');

  const recordsFiltrados = RECORDS_DATA.filter((rec) => {
    const matchGenero = generoFiltro === 'Todos' || rec.genero === generoFiltro;
    const matchDivision = divisionFiltro === 'Todos' || rec.divisionEdad === divisionFiltro;
    const matchBusqueda =
      busqueda === '' ||
      rec.categoriaPeso.toLowerCase().includes(busqueda.toLowerCase()) ||
      rec.atleta.toLowerCase().includes(busqueda.toLowerCase()) ||
      rec.club.toLowerCase().includes(busqueda.toLowerCase());
    return matchGenero && matchDivision && matchBusqueda;
  });

  return (
    <>
      <SEO
        title="Atletas y Resultados"
        description="Récords provinciales homologados, tablas técnicas por categorías IWF y marcas de levantamiento olímpico de pesas en Santa Fe."
      />

      <Breadcrumbs items={[{ label: 'Atletas y Resultados' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="records-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Alto Rendimiento y Marcas</span>
          <h1 id="records-page-title" className="page-title">
            Atletas, Resultados y Récords Provinciales
          </h1>
          <p className="page-lead">
            Registro de marcas técnicas homologadas y tablas de resultados oficiales en torneos fiscalizados por la Asociación Santafesina de Levantamiento Olímpico de Pesas.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-py" aria-label="Tablas de récords y marcas">
        <div className="container">
          {/* Nota Institucional sobre Homologación */}
          <div className="institutional-note mb-4">
            <Scale size={20} className="text-secondary flex-shrink-0" aria-hidden="true" />
            <p>
              <strong>Criterio de Rigor Técnico:</strong> Para que una marca alcance el estatus de Récord Provincial Santafesino debe haberse ejecutado en plataforma reglamentaria, con jurado certificado de 3 jueces FAP/IWF, control de pesaje previo y pesaje posterior de la barra cargada en caso de plusmarca.
            </p>
          </div>

          {/* Filtros Interactivos */}
          <div className="records-filter-card card">
            <div className="filter-row">
              <div className="filter-group">
                <label className="filter-label">Rama / Género:</label>
                <div className="btn-toggle-group" role="group" aria-label="Filtrar por género">
                  {(['Todos', 'Masculino', 'Femenino'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`btn-toggle ${generoFiltro === g ? 'active' : ''}`}
                      onClick={() => setGeneroFiltro(g)}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label htmlFor="div-select" className="filter-label">
                  División de Edad:
                </label>
                <select
                  id="div-select"
                  className="filter-select"
                  value={divisionFiltro}
                  onChange={(e) => setDivisionFiltro(e.target.value)}
                >
                  <option value="Todos">Todas las divisiones</option>
                  <option value="Mayor">Mayores (Absoluto)</option>
                  <option value="Junior">Junior (U20)</option>
                  <option value="Juvenil">Juvenil (U17)</option>
                  <option value="Menor">Menor (U15)</option>
                </select>
              </div>

              <div className="filter-group filter-search-group">
                <label htmlFor="search-input" className="filter-label">
                  Buscar por atleta o club:
                </label>
                <div className="search-input-wrapper">
                  <Search size={16} className="search-icon" aria-hidden="true" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Ej: 81 kg, Rosario, Santa Fe..."
                    className="filter-input"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de Récords */}
          {recordsFiltrados.length > 0 ? (
            <div className="card records-table-card mt-4">
              <div className="records-table-header">
                <div>
                  <h2 className="records-table-title">Marcas Oficiales Santafesinas</h2>
                  <span className="records-count">
                    Mostrando {recordsFiltrados.length} registros técnicos
                  </span>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table-records" aria-label="Tabla completa de récords santafesinos">
                  <thead>
                    <tr>
                      <th scope="col">Categoría de Peso</th>
                      <th scope="col">División</th>
                      <th scope="col">Atleta Registrado</th>
                      <th scope="col">Club / Entidad</th>
                      <th scope="col" className="text-center">Arranque (Snatch)</th>
                      <th scope="col" className="text-center">Envión (C&J)</th>
                      <th scope="col" className="text-center">Total Olímpico</th>
                      <th scope="col">Certamen / Fecha</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recordsFiltrados.map((rec) => (
                      <tr key={rec.id}>
                        <td className="fw-700 text-primary">
                          {rec.categoriaPeso} ({rec.genero})
                        </td>
                        <td>{rec.divisionEdad}</td>
                        <td className="fw-600">{rec.atleta}</td>
                        <td className="text-muted">{rec.club}</td>
                        <td className="text-center fw-600 lift-cell">{rec.arranqueKg} kg</td>
                        <td className="text-center fw-600 lift-cell">{rec.envionKg} kg</td>
                        <td className="text-center fw-700 lift-total text-primary">
                          {rec.totalOlimpicoKg} kg
                        </td>
                        <td className="text-muted font-sm">
                          {rec.torneo} <br />
                          <small>{rec.fecha}</small>
                        </td>
                        <td>
                          <span
                            className={
                              rec.estadoVerificacion === 'Homologado ASLOP'
                                ? 'tag tag-success'
                                : 'tag tag-warning'
                            }
                          >
                            {rec.estadoVerificacion}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <EmptyState
              title="No se encontraron registros con los filtros seleccionados"
              description="Ajustá la categoría de peso o el término de búsqueda para visualizar las marcas disponibles."
              actionText="Limpiar filtros"
              onAction={() => {
                setGeneroFiltro('Todos');
                setDivisionFiltro('Todos');
                setBusqueda('');
              }}
            />
          )}

          {/* Categorías Olímpicas IWF de Referencia */}
          <div className="iwf-categories-card card mt-4">
            <h3 className="iwf-card-title">
              <Trophy size={20} className="text-secondary" aria-hidden="true" />
              Categorías de Peso Oficiales de Competición (IWF)
            </h3>
            <p className="iwf-card-desc">
              Divisiones reglamentarias que rigen en todos los campeonatos organizados por la ASLOP:
            </p>

            <div className="iwf-categories-grid">
              <div className="iwf-cat-col">
                <h4 className="iwf-col-title">Masculino</h4>
                <div className="iwf-tags-list">
                  {['55 kg', '61 kg', '67 kg', '73 kg', '81 kg', '89 kg', '96 kg', '102 kg', '109 kg', '+109 kg'].map(
                    (cat) => (
                      <span key={cat} className="iwf-tag">
                        {cat}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="iwf-cat-col">
                <h4 className="iwf-col-title">Femenino</h4>
                <div className="iwf-tags-list">
                  {['45 kg', '49 kg', '55 kg', '59 kg', '64 kg', '71 kg', '76 kg', '81 kg', '87 kg', '+87 kg'].map(
                    (cat) => (
                      <span key={cat} className="iwf-tag">
                        {cat}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
