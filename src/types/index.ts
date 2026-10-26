export interface Competencia {
  id: string;
  nombre: string;
  fecha: string;
  fechaFin?: string;
  sede: string;
  localidad: string;
  direccion?: string;
  tipo: 'Provincial' | 'Regional' | 'Nacional' | 'Evaluativo' | 'Abierto';
  categorias: string[];
  estadoInscripcion: 'Abierta' | 'Próximamente' | 'Cerrada' | 'Finalizado';
  descripcion: string;
  requisitos?: string[];
  resultadosDisponibles?: boolean;
  archivoResultados?: string;
  aficheUrl?: string;
}

export interface Noticia {
  id: string;
  titulo: string;
  slug: string;
  extracto: string;
  contenido: string[];
  fecha: string;
  categoria: 'Institucional' | 'Competencias' | 'Seleccionados' | 'Capacitaciones' | 'Reglamentos';
  imagenUrl: string;
  pieDeFoto?: string;
  autor: string;
  destacada?: boolean;
}

export interface ClubAfiliado {
  id: string;
  nombre: string;
  sigla?: string;
  localidad: string;
  departamento: string;
  direccion: string;
  entrenadorResponsable: string;
  contactoEmail?: string;
  telefono?: string;
  redes?: {
    instagram?: string;
    facebook?: string;
  };
  estadoAfiliacion: 'Afiliado Oficial' | 'En Proceso de Homologación' | 'Centro de Desarrollo';
  horarios?: string;
  descripcion?: string;
}

export interface RecordProvincial {
  id: string;
  categoriaPeso: string;
  genero: 'Masculino' | 'Femenino';
  divisionEdad: 'Mayor' | 'Junior' | 'Juvenil' | 'Menor';
  atleta: string;
  club: string;
  arranqueKg: number;
  envionKg: number;
  totalOlimpicoKg: number;
  fecha: string;
  torneo: string;
  estadoVerificacion: 'Homologado ASLOP' | 'En Revisión Técnica';
}

export interface DocumentoOficial {
  id: string;
  titulo: string;
  codigo?: string;
  descripcion: string;
  categoria: 'Estatuto y Resoluciones' | 'Reglamento Técnico' | 'Formularios y Fichaje' | 'Antidopaje' | 'Balances e Informes';
  tipoArchivo: 'PDF' | 'DOCX' | 'XLSX';
  tamano: string;
  fechaPublicacion: string;
  urlDescarga: string;
  accesoPublico: boolean;
}

export interface Autoridad {
  cargo: string;
  nombre: string;
  clubProcedencia?: string;
  vigenciaMandato: string;
}
