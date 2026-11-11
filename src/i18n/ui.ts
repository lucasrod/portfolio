export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Dark mode',
    'status.published': 'Published',
    'status.in-progress': 'In progress',
    'case.pending': 'Still to do',
    'case.question': 'Question',
    'case.context': 'Context',
    'case.data': 'Data',
    'case.stack': 'Tools',
    'case.code': 'Code',
    'case.code.private': 'Private for now',
    'case.report': 'Report',
    'case.report.none': 'Not published yet',
    'case.verified': 'Checked against',
    'case.facts': 'Verified figures',
    'case.read': 'Read the case study',
    'case.other-lang': 'Leer en español',
    'case.lang-note': '',
    'case.contents': 'On this page',
    'footer.source': 'Site source',
  },
  es: {
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.contact': 'Contacto',
    'nav.skip': 'Ir al contenido',
    'theme.toggle': 'Modo oscuro',
    'status.published': 'Publicado',
    'status.in-progress': 'En progreso',
    'case.pending': 'Falta',
    'case.question': 'Pregunta',
    'case.context': 'Contexto',
    'case.data': 'Datos',
    'case.stack': 'Herramientas',
    'case.code': 'Código',
    'case.code.private': 'Privado por ahora',
    'case.report': 'Informe',
    'case.report.none': 'Sin publicar todavía',
    'case.verified': 'Verificado contra',
    'case.facts': 'Cifras verificadas',
    'case.read': 'Leer el caso',
    'case.other-lang': 'Read in English',
    'case.lang-note': 'This case study is only available in Spanish for now.',
    'case.contents': 'En esta página',
    'footer.source': 'Código del sitio',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

/** URL of a case study page for its language. */
export function caseUrl(id: string, lang: Lang): string {
  return lang === 'en' ? `/projects/${id}/` : `/es/projects/${id}/`;
}
