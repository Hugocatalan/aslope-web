import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Printer,
  ShieldAlert,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { NOTICIAS_DATA } from '../data/mockData';
import { getAssetUrl } from '../utils/assets';
import './NoticiaDetalle.css';

export const NoticiaDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const noticia = NOTICIAS_DATA.find((n) => n.slug === id || n.id === id);

  if (!noticia) {
    return (
      <div className="section-py text-center">
        <div className="container">
          <ShieldAlert size={48} className="text-secondary mb-3" />
          <h2>Comunicado o Noticia no encontrada</h2>
          <p className="lead mt-2 mb-4">
            La publicación que intentás consultar no existe o fue reubicada en el archivo institucional.
          </p>
          <Link to="/noticias" className="btn btn-primary">
            Volver a Noticias
          </Link>
        </div>
      </div>
    );
  }

  // Noticias relacionadas
  const relacionadas = NOTICIAS_DATA.filter((n) => n.id !== noticia.id).slice(0, 2);

  return (
    <>
      <SEO
        title={noticia.titulo}
        description={noticia.extracto}
      />

      <Breadcrumbs
        items={[
          { label: 'Noticias', to: '/noticias' },
          { label: noticia.titulo.slice(0, 40) + '...' },
        ]}
      />

      <article className="article-page section-py">
        <div className="container article-container">
          {/* Barra de Retorno */}
          <div className="article-top-nav">
            <Link to="/noticias" className="article-back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Volver a Noticias</span>
            </Link>
            <span className="tag tag-neutral">{noticia.categoria}</span>
          </div>

          {/* Título y Metadatos */}
          <header className="article-header">
            <h1 className="article-title">{noticia.titulo}</h1>

            <div className="article-meta-bar">
              <span className="meta-item">
                <Calendar size={15} aria-hidden="true" />
                {noticia.fecha}
              </span>
              <span className="meta-separator" aria-hidden="true">·</span>
              <span className="meta-item">
                <User size={15} aria-hidden="true" />
                {noticia.autor}
              </span>
            </div>
          </header>

          {/* Imagen Principal */}
          <figure className="article-featured-media">
            <img
              src={getAssetUrl(noticia.imagenUrl)}
              alt={noticia.titulo}
              className="article-img"
              width="800"
              height="450"
            />
            {noticia.pieDeFoto && (
              <figcaption className="article-caption">{noticia.pieDeFoto}</figcaption>
            )}
          </figure>

          {/* Extracto destacado */}
          <div className="article-lead-box">
            <p className="article-lead">{noticia.extracto}</p>
          </div>

          {/* Cuerpo de Texto Editorial */}
          <div className="article-body">
            {noticia.contenido.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </div>

          {/* Acciones de la Nota */}
          <div className="article-actions-bar">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => window.print()}
            >
              <Printer size={15} aria-hidden="true" />
              <span>Imprimir Comunicado</span>
            </button>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: noticia.titulo,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Enlace copiado al portapapeles');
                }
              }}
            >
              <Share2 size={15} aria-hidden="true" />
              <span>Compartir</span>
            </button>
          </div>

          {/* Notas Relacionadas */}
          {relacionadas.length > 0 && (
            <aside className="related-articles-section">
              <h2 className="related-heading">Otros Comunicados Institucionales</h2>
              <div className="related-grid">
                {relacionadas.map((rel) => (
                  <Link key={rel.id} to={`/noticias/${rel.slug}`} className="related-card card">
                    <span className="related-category">{rel.categoria}</span>
                    <h3 className="related-title">{rel.titulo}</h3>
                    <span className="related-date">{rel.fecha}</span>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>
    </>
  );
};
