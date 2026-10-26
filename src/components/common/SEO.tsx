import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    // Actualizar título de la página
    const baseTitle = 'ASLOP · Asociación Santafesina de Levantamiento Olímpico de Pesas';
    document.title = title ? `${title} | ASLOP` : baseTitle;

    // Actualizar meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Scroll to top en cada navegación
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};
