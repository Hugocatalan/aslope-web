import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumbs.css';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs-nav" aria-label="Ruta de navegación">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link to="/" className="breadcrumbs-link" aria-label="Inicio">
              <Home size={14} aria-hidden="true" />
              <span>Inicio</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="breadcrumbs-item">
                <ChevronRight size={14} className="breadcrumbs-separator" aria-hidden="true" />
                {isLast || !item.to ? (
                  <span className="breadcrumbs-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
