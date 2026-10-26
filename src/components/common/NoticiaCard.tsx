import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Noticia } from '../../types';
import './NoticiaCard.css';

interface NoticiaCardProps {
  noticia: Noticia;
  featured?: boolean;
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia, featured = false }) => {
  return (
    <article className={`card noticia-card ${featured ? 'noticia-featured' : ''}`}>
      <div className="noticia-image-wrapper">
        <img
          src={noticia.imagenUrl}
          alt={noticia.titulo}
          className="noticia-img"
          loading="lazy"
          width="400"
          height="225"
        />
        <span className="noticia-category-badge">{noticia.categoria}</span>
      </div>

      <div className="noticia-content">
        <div className="noticia-meta">
          <span className="noticia-date">
            <Calendar size={14} aria-hidden="true" />
            {noticia.fecha}
          </span>
          <span className="noticia-author">· {noticia.autor}</span>
        </div>

        <h3 className="noticia-title">
          <Link to={`/noticias/${noticia.slug}`}>{noticia.titulo}</Link>
        </h3>

        <p className="noticia-excerpt">{noticia.extracto}</p>

        <div className="noticia-footer">
          <Link
            to={`/noticias/${noticia.slug}`}
            className="noticia-readmore-link"
            aria-label={`Leer artículo completo: ${noticia.titulo}`}
          >
            <span>Leer comunicado completo</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};
