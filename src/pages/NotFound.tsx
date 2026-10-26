import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Página No Encontrada (404)"
        description="La página que buscás no existe o ha sido reubicada."
      />
      <div className="section-py text-center">
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'var(--color-accent)',
            }}
          >
            <ShieldAlert size={38} aria-hidden="true" />
          </div>
          <span className="section-badge badge-accent">Error 404</span>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '14px', marginTop: '10px' }}>
            Página No Encontrada
          </h1>
          <p className="lead" style={{ marginBottom: '28px' }}>
            La sección solicitada no se encuentra disponible o ha cambiado de dirección dentro del portal institucional de ASLOP.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} aria-hidden="true" />
              <span>Ir a la Portada</span>
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              <span>Mesa de Entradas</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
