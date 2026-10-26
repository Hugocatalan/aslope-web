import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
  ShieldCheck,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { INSTITUCIONAL_INFO } from '../data/mockData';
import './Contacto.css';

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  clubOEntidad: string;
  motivo: string;
  mensaje: string;
}

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    nombre: '',
    email: '',
    telefono: '',
    clubOEntidad: '',
    motivo: 'consulta_general',
    mensaje: '',
  });

  const [errores, setErrores] = useState<Partial<FormState>>({});
  const [enviado, setEnviado] = useState(false);

  const validar = (): boolean => {
    const errs: Partial<FormState> = {};

    if (!formData.nombre.trim()) {
      errs.nombre = 'Por favor ingresá tu nombre y apellido.';
    }

    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico institucional o personal es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingresá un correo electrónico con formato válido.';
    }

    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 15) {
      errs.mensaje = 'El mensaje debe contener al menos 15 caracteres descriptivos.';
    }

    setErrores(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    // Validación exitosa frontend
    setEnviado(true);
  };

  return (
    <>
      <SEO
        title="Contacto y Mesa de Entradas"
        description="Canales oficiales de comunicación, mesa de entradas, afiliación y consultas para la Asociación Santafesina de Levantamiento Olímpico de Pesas."
      />

      <Breadcrumbs items={[{ label: 'Contacto' }]} />

      {/* Encabezado */}
      <section className="page-header" aria-labelledby="contacto-page-title">
        <div className="container">
          <span className="section-badge badge-secondary">Canales Oficiales</span>
          <h1 id="contacto-page-title" className="page-title">
            Mesa de Entradas y Contacto Institucional
          </h1>
          <p className="page-lead">
            Comunicate con la Comisión Directiva, la Secretaría Deportiva o el Colegio de Árbitros de ASLOP para trámites federativos, torneos y afiliaciones.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="section-py" aria-label="Canales de contacto y formulario">
        <div className="container">
          <div className="contacto-grid">
            {/* Columna de Información Oficial */}
            <div className="contacto-info-col">
              <div className="card contacto-channels-card">
                <h2 className="contacto-section-title">Canales Directos de Atención</h2>
                <p className="contacto-section-desc">
                  Para presentaciones oficiales de clubes y remisión de notas con firma de autoridades.
                </p>

                <ul className="channels-list">
                  <li className="channel-item">
                    <div className="channel-icon" aria-hidden="true">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="channel-label">Mesa de Entradas General</span>
                      <a href={`mailto:${INSTITUCIONAL_INFO.emailContacto}`} className="channel-val">
                        {INSTITUCIONAL_INFO.emailContacto}
                      </a>
                    </div>
                  </li>

                  <li className="channel-item">
                    <div className="channel-icon" aria-hidden="true">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="channel-label">Secretaría y Fichaje de Atletas</span>
                      <a href={`mailto:${INSTITUCIONAL_INFO.emailSecretaria}`} className="channel-val">
                        {INSTITUCIONAL_INFO.emailSecretaria}
                      </a>
                    </div>
                  </li>

                  <li className="channel-item">
                    <div className="channel-icon" aria-hidden="true">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="channel-label">Jurisdicción y Ámbito de Actuación</span>
                      <p className="channel-text">
                        Provincia de Santa Fe · República Argentina (Santa Fe Capital · Rosario · Interior Provincial)
                      </p>
                    </div>
                  </li>

                  <li className="channel-item">
                    <div className="channel-icon" aria-hidden="true">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="channel-label">Recepción Administrativa</span>
                      <p className="channel-text">
                        Lunes a Viernes de 09:00 a 18:00 hs (Vía correo electrónico oficial)
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="social-links-box">
                  <span className="social-box-title">Canales de Difusión Deportiva:</span>
                  <div className="social-btns">
                    <a
                      href={INSTITUCIONAL_INFO.redes.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm social-btn"
                      aria-label="Instagram oficial ASLOP @aslopesas (abre en nueva pestaña)"
                    >
                      <InstagramIcon size={16} aria-hidden="true" />
                      <span>Instagram @aslopesas</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <a
                      href={INSTITUCIONAL_INFO.redes.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm social-btn"
                      aria-label="Facebook oficial ASLOP (abre en nueva pestaña)"
                    >
                      <Globe size={16} aria-hidden="true" />
                      <span>Facebook Oficial</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Aviso de Afiliación Directa */}
              <div className="institutional-note note-warning mt-4">
                <ShieldCheck size={20} className="text-secondary flex-shrink-0" aria-hidden="true" />
                <p>
                  <strong>Afiliación de Nuevos Clubes:</strong> Toda solicitud debe ser acompañada por la planilla oficial firmada por presidente y secretario de la institución. Podés descargar el formulario desde la sección de Documentación.
                </p>
              </div>
            </div>

            {/* Columna Formulario de Contacto */}
            <div className="contacto-form-col">
              <div className="card contacto-form-card">
                <h2 className="contacto-section-title">Formulario de Contacto Institucional</h2>
                <p className="contacto-section-desc">
                  Completá los campos para remitir tu consulta a la secretaría correspondiente.
                </p>

                {enviado ? (
                  <div className="form-feedback-card" role="alert">
                    <div className="feedback-icon" aria-hidden="true">
                      <CheckCircle2 size={36} className="text-success" />
                    </div>
                    <h3 className="feedback-title">Consulta Validada</h3>
                    <p className="feedback-desc">
                      Tu formulario fue verificado correctamente en el sistema frontal.
                    </p>
                    <div className="institutional-note mb-3">
                      <Info size={18} className="text-secondary flex-shrink-0" aria-hidden="true" />
                      <p>
                        <strong>Aviso institucional:</strong> Para garantizar la constancia formal de recepción en mesa de entradas mientras se conecta el servicio de correo automatizado, también podés remitir tu consulta directamente a:{' '}
                        <a href={`mailto:${INSTITUCIONAL_INFO.emailContacto}`} className="text-primary fw-600">
                          {INSTITUCIONAL_INFO.emailContacto}
                        </a>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm mt-2"
                      onClick={() => {
                        setEnviado(false);
                        setFormData({
                          nombre: '',
                          email: '',
                          telefono: '',
                          clubOEntidad: '',
                          motivo: 'consulta_general',
                          mensaje: '',
                        });
                      }}
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="contact-form">
                    <div className="form-group">
                      <label htmlFor="contacto-nombre" className="form-label">
                        Nombre y Apellido <span className="req-asterisk">*</span>
                      </label>
                      <input
                        id="contacto-nombre"
                        type="text"
                        className={`form-input ${errores.nombre ? 'has-error' : ''}`}
                        placeholder="Ej: Marcos Albornoz"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        aria-required="true"
                        aria-invalid={!!errores.nombre}
                        aria-describedby={errores.nombre ? 'err-nombre' : undefined}
                      />
                      {errores.nombre && (
                        <span id="err-nombre" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" /> {errores.nombre}
                        </span>
                      )}
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="contacto-email" className="form-label">
                          Correo Electrónico <span className="req-asterisk">*</span>
                        </label>
                        <input
                          id="contacto-email"
                          type="email"
                          className={`form-input ${errores.email ? 'has-error' : ''}`}
                          placeholder="nombre@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          aria-required="true"
                          aria-invalid={!!errores.email}
                          aria-describedby={errores.email ? 'err-email' : undefined}
                        />
                        {errores.email && (
                          <span id="err-email" className="form-error-msg" role="alert">
                            <AlertCircle size={14} aria-hidden="true" /> {errores.email}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contacto-tel" className="form-label">
                          Teléfono de Contacto (Opcional)
                        </label>
                        <input
                          id="contacto-tel"
                          type="tel"
                          className="form-input"
                          placeholder="+54 9 342..."
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="contacto-club" className="form-label">
                          Club / Institución (Opcional)
                        </label>
                        <input
                          id="contacto-club"
                          type="text"
                          className="form-input"
                          placeholder="Ej: Escuela de Halterofilia..."
                          value={formData.clubOEntidad}
                          onChange={(e) => setFormData({ ...formData, clubOEntidad: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contacto-motivo" className="form-label">
                          Motivo del Mensaje
                        </label>
                        <select
                          id="contacto-motivo"
                          className="form-select"
                          value={formData.motivo}
                          onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                        >
                          <option value="consulta_general">Consulta General</option>
                          <option value="afiliacion_club">Afiliación de Club o Centro</option>
                          <option value="licencia_deportista">Licencias y Fichaje de Atletas</option>
                          <option value="arbitraje_capacitacion">Capacitación y Arbitraje</option>
                          <option value="prensa">Prensa e Institucional</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contacto-mensaje" className="form-label">
                        Mensaje o Solicitud <span className="req-asterisk">*</span>
                      </label>
                      <textarea
                        id="contacto-mensaje"
                        rows={5}
                        className={`form-textarea ${errores.mensaje ? 'has-error' : ''}`}
                        placeholder="Detallá tu consulta o información requerida..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        aria-required="true"
                        aria-invalid={!!errores.mensaje}
                        aria-describedby={errores.mensaje ? 'err-mensaje' : undefined}
                      ></textarea>
                      {errores.mensaje && (
                        <span id="err-mensaje" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" /> {errores.mensaje}
                        </span>
                      )}
                    </div>

                    <div className="form-submit-row">
                      <button type="submit" className="btn btn-primary btn-lg w-100">
                        <Send size={18} aria-hidden="true" />
                        <span>Enviar Formulario a Mesa de Entradas</span>
                      </button>
                    </div>

                    <p className="form-disclaimer">
                      Al enviar este formulario, los datos suministrados serán tratados exclusivamente con fines institucionales y de respuesta deportiva conforme a las políticas de privacidad de ASLOP.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
