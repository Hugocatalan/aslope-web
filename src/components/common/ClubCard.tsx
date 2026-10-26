import React from 'react';
import { Building2, MapPin, User, Mail, Clock } from 'lucide-react';
import type { ClubAfiliado } from '../../types';
import './ClubCard.css';

interface ClubCardProps {
  club: ClubAfiliado;
}

export const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const getBadgeClass = () => {
    switch (club.estadoAfiliacion) {
      case 'Afiliado Oficial':
        return 'tag tag-success';
      case 'Centro de Desarrollo':
        return 'tag tag-info';
      case 'En Proceso de Homologación':
      default:
        return 'tag tag-warning';
    }
  };

  return (
    <article className="card club-card">
      <div className="club-card-header">
        <div className="club-icon-avatar" aria-hidden="true">
          <Building2 size={24} />
        </div>
        <div>
          <span className={getBadgeClass()}>{club.estadoAfiliacion}</span>
          <h3 className="club-title">{club.nombre}</h3>
          {club.sigla && <span className="club-sigla">({club.sigla})</span>}
        </div>
      </div>

      <div className="club-card-body">
        <ul className="club-details-list">
          <li className="club-detail-item">
            <MapPin size={16} className="club-detail-icon text-secondary" aria-hidden="true" />
            <div>
              <strong>{club.localidad}</strong>
              <span className="club-dept"> · Dpto. {club.departamento}</span>
              <p className="club-address">{club.direccion}</p>
            </div>
          </li>

          <li className="club-detail-item">
            <User size={16} className="club-detail-icon text-secondary" aria-hidden="true" />
            <div>
              <span className="club-field-label">Responsable Técnico:</span>
              <p className="club-field-val">{club.entrenadorResponsable}</p>
            </div>
          </li>

          {club.horarios && (
            <li className="club-detail-item">
              <Clock size={16} className="club-detail-icon text-secondary" aria-hidden="true" />
              <div>
                <span className="club-field-label">Horarios de Práctica:</span>
                <p className="club-field-val">{club.horarios}</p>
              </div>
            </li>
          )}
        </ul>

        {club.descripcion && <p className="club-description">{club.descripcion}</p>}
      </div>

      <div className="club-card-footer">
        {club.contactoEmail && (
          <a
            href={`mailto:${club.contactoEmail}`}
            className="btn btn-outline btn-sm w-100"
            aria-label={`Contactar a ${club.nombre}`}
          >
            <Mail size={15} aria-hidden="true" />
            <span>Contactar al Club</span>
          </a>
        )}
      </div>
    </article>
  );
};
