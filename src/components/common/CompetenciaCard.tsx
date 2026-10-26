import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag, ChevronRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import type { Competencia } from '../../types';
import './CompetenciaCard.css';

interface CompetenciaCardProps {
  competencia: Competencia;
}

export const CompetenciaCard: React.FC<CompetenciaCardProps> = ({ competencia }) => {
  const isFinalizado = competencia.estadoInscripcion === 'Finalizado';

  const renderBadge = () => {
    switch (competencia.estadoInscripcion) {
      case 'Abierta':
        return (
          <span className="tag tag-success" aria-label="Inscripción abierta">
            <CheckCircle2 size={13} aria-hidden="true" /> Inscripción Abierta
          </span>
        );
      case 'Próximamente':
        return (
          <span className="tag tag-warning" aria-label="Inscripción próximamente">
            <Clock size={13} aria-hidden="true" /> Apertura Próxima
          </span>
        );
      case 'Cerrada':
        return (
          <span className="tag tag-accent" aria-label="Inscripción cerrada">
            <AlertCircle size={13} aria-hidden="true" /> Inscripción Cerrada
          </span>
        );
      case 'Finalizado':
      default:
        return (
          <span className="tag tag-neutral" aria-label="Torneo finalizado">
            Finalizado
          </span>
        );
    }
  };

  return (
    <article className={`card comp-card ${isFinalizado ? 'comp-card-finalizado' : ''}`}>
      <div className="comp-card-header">
        <div className="comp-type-pill">
          <Tag size={12} aria-hidden="true" />
          <span>Torneo {competencia.tipo}</span>
        </div>
        {renderBadge()}
      </div>

      <div className="comp-card-body">
        <h3 className="comp-title">{competencia.nombre}</h3>
        <p className="comp-description">{competencia.descripcion}</p>

        <ul className="comp-meta-list">
          <li className="comp-meta-item">
            <Calendar size={16} className="comp-meta-icon text-secondary" aria-hidden="true" />
            <span className="comp-meta-text">{competencia.fecha}</span>
          </li>
          <li className="comp-meta-item">
            <MapPin size={16} className="comp-meta-icon text-secondary" aria-hidden="true" />
            <span className="comp-meta-text">
              <strong>{competencia.sede}</strong> · {competencia.localidad}
            </span>
          </li>
        </ul>

        {competencia.categorias && competencia.categorias.length > 0 && (
          <div className="comp-categories">
            <span className="comp-cat-label">Categorías:</span>
            <div className="comp-cat-tags">
              {competencia.categorias.map((cat, idx) => (
                <span key={idx} className="comp-cat-chip">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="comp-card-footer">
        {isFinalizado ? (
          <Link
            to="/atletas-resultados"
            className="btn btn-outline btn-sm w-100"
            aria-label={`Ver resultados oficiales de ${competencia.nombre}`}
          >
            <span>Ver Resultados Oficiales</span>
            <ChevronRight size={15} aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to={`/competencias`}
            className="btn btn-primary btn-sm w-100"
            aria-label={`Ver detalles y bases de ${competencia.nombre}`}
          >
            <span>Detalles e Inscripción</span>
            <ChevronRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
};
