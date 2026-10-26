import React, { useState } from 'react';

import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { NoticiaCard } from '../components/common/NoticiaCard';
import { EmptyState } from '../components/common/EmptyState';
import { NOTICIAS_DATA } from '../data/mockData';
import './Noticias.css';

export const Noticias: React.FC = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todas');

  const categorias = ['todas', 'Institucional', 'Competencias', 'Capacitaciones'];

  const noticiasFiltradas = NOTICIAS_DATA.filter((noticia) => {
    if (categoriaFiltro === 'todas') return true;
    return noticia.categoria.toLowerCase() === categoriaFiltro.toLowerCase();
  });

  return (
    <>
      <SEO
        title="Noticias y Comunicados Oficiales"
        description="Prensa institucional, resultados, convocatorias y novedades del levantamiento olímpico de pesas en la Provincia de Santa Fe."
      />

      <Breadcrumbs items={[{ label: 'Noticias' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="noticias-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Prensa y Comunicación</span>
          <h1 id="noticias-page-title" className="page-title">
            Noticias y Comunicados Oficiales
          </h1>
          <p className="page-lead">
            Canal de información pública de la Asociación Santafesina de Levantamiento Olímpico de Pesas.
          </p>
        </div>
      </section>

      {/* Listado con Filtros */}
      <section className="section-py" aria-label="Listado de noticias">
        <div className="container">
          {/* Categorías Pills */}
          <div className="categories-filter-bar">
            <span className="cat-filter-label">Filtrar por sección:</span>
            <div className="cat-pills">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-pill-btn ${categoriaFiltro === cat ? 'active' : ''}`}
                  onClick={() => setCategoriaFiltro(cat)}
                >
                  {cat === 'todas' ? 'Todas las publicaciones' : cat}
                </button>
              ))}
            </div>
          </div>

          {noticiasFiltradas.length > 0 ? (
            <div className="cards-grid cards-grid-3 mt-4">
              {noticiasFiltradas.map((noticia, index) => (
                <NoticiaCard
                  key={noticia.id}
                  noticia={noticia}
                  featured={index === 0 && categoriaFiltro === 'todas'}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No hay comunicados en esta categoría"
              description="Seleccioná otra categoría para leer las publicaciones recientes de la asociación."
              actionText="Ver todas las noticias"
              onAction={() => setCategoriaFiltro('todas')}
            />
          )}
        </div>
      </section>
    </>
  );
};
