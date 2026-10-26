import React, { useState } from 'react';
import {
  Download,
  Eye,
  Search,
  Shield,
  FileCheck2,
  X,
  Calendar,
  HardDrive,
  Info,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EmptyState } from '../components/common/EmptyState';
import { DOCUMENTOS_DATA } from '../data/mockData';
import type { DocumentoOficial } from '../types';
import './Documentacion.css';

export const Documentacion: React.FC = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todas');
  const [busqueda, setBusqueda] = useState<string>('');
  const [docModal, setDocModal] = useState<DocumentoOficial | null>(null);

  const categorias = [
    { id: 'todas', label: 'Todos los documentos' },
    { id: 'Estatuto y Resoluciones', label: 'Estatuto y Resoluciones' },
    { id: 'Reglamento Técnico', label: 'Reglamento Técnico' },
    { id: 'Formularios y Fichaje', label: 'Formularios y Fichaje' },
    { id: 'Antidopaje', label: 'Antidopaje' },
  ];

  const documentosFiltrados = DOCUMENTOS_DATA.filter((doc) => {
    const matchCat =
      categoriaFiltro === 'todas' || doc.categoria === categoriaFiltro;
    const matchTexto =
      busqueda === '' ||
      doc.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      doc.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      (doc.codigo && doc.codigo.toLowerCase().includes(busqueda.toLowerCase()));
    return matchCat && matchTexto;
  });

  const handleDescarga = (doc: DocumentoOficial) => {
    alert(
      `Descargando documento oficial: "${doc.titulo}". Formato: ${doc.tipoArchivo} (${doc.tamano}).`
    );
  };

  return (
    <>
      <SEO
        title="Documentación Oficial y Reglamentos"
        description="Repositorio institucional de estatutos, reglamentos técnicos IWF, fichas de afiliación de clubes y protocolos antidopaje de ASLOP."
      />

      <Breadcrumbs items={[{ label: 'Documentación' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="docs-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Repositorio Institucional</span>
          <h1 id="docs-page-title" className="page-title">
            Documentación Pública y Reglamentaciones
          </h1>
          <p className="page-lead">
            Acceso transparente al compendio estatutario, normativas técnicas de la halterofilia, protocolos de juego limpio y planillas oficiales de afiliación y fichaje de atletas.
          </p>
        </div>
      </section>

      {/* Documentos */}
      <section className="section-py" aria-label="Repositorio de documentos oficiales">
        <div className="container">
          {/* Barra de Filtros */}
          <div className="docs-filter-card card">
            <div className="docs-search-box">
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Buscar por nombre de documento o código normativo..."
                className="docs-search-input"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                aria-label="Buscar documento oficial"
              />
            </div>

            <div className="docs-category-filter">
              <label htmlFor="cat-doc-select" className="filter-label">
                Categoría:
              </label>
              <select
                id="cat-doc-select"
                className="filter-select"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                {categorias.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Listado de Documentos */}
          {documentosFiltrados.length > 0 ? (
            <div className="docs-list mt-4">
              {documentosFiltrados.map((doc) => (
                <div key={doc.id} className="doc-item-card card">
                  <div className="doc-item-icon-col" aria-hidden="true">
                    <div className="doc-filetype-badge">{doc.tipoArchivo}</div>
                  </div>

                  <div className="doc-item-content">
                    <div className="doc-top-meta">
                      <span className="doc-category-pill">{doc.categoria}</span>
                      {doc.codigo && <span className="doc-code">{doc.codigo}</span>}
                    </div>

                    <h2 className="doc-title">{doc.titulo}</h2>
                    <p className="doc-description">{doc.descripcion}</p>

                    <div className="doc-details-row">
                      <span className="doc-detail">
                        <Calendar size={14} aria-hidden="true" /> Publicación: {doc.fechaPublicacion}
                      </span>
                      <span className="doc-detail">
                        <HardDrive size={14} aria-hidden="true" /> Tamaño: {doc.tamano}
                      </span>
                      <span className="doc-detail doc-status-public">
                        <Shield size={14} aria-hidden="true" /> Documento Público Homologado
                      </span>
                    </div>
                  </div>

                  <div className="doc-actions-col">
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => setDocModal(doc)}
                      aria-label={`Ver detalles de ${doc.titulo}`}
                    >
                      <Eye size={15} aria-hidden="true" />
                      <span>Ver Ficha</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleDescarga(doc)}
                      aria-label={`Descargar ${doc.titulo}`}
                    >
                      <Download size={15} aria-hidden="true" />
                      <span>Descargar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No se encontraron documentos en esta categoría"
              description="Ajustá los filtros o el término de búsqueda para ver los reglamentos y formularios oficiales."
              actionText="Ver todos los documentos"
              onAction={() => {
                setCategoriaFiltro('todas');
                setBusqueda('');
              }}
            />
          )}

          {/* Nota de Solicitud de Informes */}
          <div className="institutional-note mt-4">
            <Info size={18} className="text-secondary flex-shrink-0" aria-hidden="true" />
            <p>
              <strong>Acceso a la Información Deportiva:</strong> Si tu institución requiere copias certificadas de actas de asamblea o resoluciones específicas, podés solicitarlas mediante nota formal a la Secretaría de ASLOP en la sección de Contacto.
            </p>
          </div>
        </div>
      </section>

      {/* Modal / Vista Previa de Documento */}
      {docModal && (
        <div
          className="doc-modal-backdrop"
          onClick={() => setDocModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doc-title"
        >
          <div className="doc-modal-card card" onClick={(e) => e.stopPropagation()}>
            <div className="doc-modal-header">
              <div className="doc-modal-type-badge">{docModal.tipoArchivo}</div>
              <div>
                <span className="doc-modal-cat">{docModal.categoria}</span>
                <h3 id="modal-doc-title" className="doc-modal-title">
                  {docModal.titulo}
                </h3>
              </div>
              <button
                type="button"
                className="doc-modal-close"
                onClick={() => setDocModal(null)}
                aria-label="Cerrar ventana"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="doc-modal-body">
              <p className="doc-modal-desc">{docModal.descripcion}</p>

              <div className="doc-modal-info-grid">
                <div className="modal-info-item">
                  <span className="modal-info-label">Código Oficial:</span>
                  <span className="modal-info-val">{docModal.codigo || 'N/A'}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-info-label">Fecha de Vigencia:</span>
                  <span className="modal-info-val">{docModal.fechaPublicacion}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-info-label">Peso del Archivo:</span>
                  <span className="modal-info-val">{docModal.tamano}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-info-label">Nivel de Acceso:</span>
                  <span className="modal-info-val text-success">Público / Descarga Abierta</span>
                </div>
              </div>

              <div className="doc-modal-preview-box">
                <FileCheck2 size={40} className="text-secondary mb-2" aria-hidden="true" />
                <p className="preview-box-text">
                  Documento validado por la Comisión Directiva de la Asociación Santafesina de Levantamiento Olímpico de Pesas.
                </p>
              </div>
            </div>

            <div className="doc-modal-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setDocModal(null)}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  handleDescarga(docModal);
                  setDocModal(null);
                }}
              >
                <Download size={15} aria-hidden="true" />
                <span>Confirmar Descarga</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
