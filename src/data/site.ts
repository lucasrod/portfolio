/**
 * Personal details shown on the site. Leave a field empty to hide it:
 * components only render links that are filled in.
 */
interface Site {
  name: string; role: string; location: string; github: string; linkedin: string; email: string;
  cvPdf: string; sourceRepo: string;
  education: { degree: string; school: string; note: string }[];
  tools: { group: string; items: string[] }[];
}

export const site: Site = {
  name: 'Lucas Rodriguez',
  role: 'Junior data scientist',
  location: 'Montevideo, Uruguay',
  github: 'https://github.com/lucasrod',
  /** e.g. 'https://www.linkedin.com/in/your-handle' */
  linkedin: 'https://www.linkedin.com/in/lucas-rodriguez-5b664682/',
  /** Public contact address. Empty = not published. */
  email: '',
  /** Path under /public, e.g. '/cv/lucas-rodriguez-cv.pdf'. Empty = print-to-PDF only. */
  cvPdf: '',
  /** Repo of this site once it exists, e.g. 'https://github.com/lucasrod/portfolio'. */
  sourceRepo: 'https://github.com/lucasrod/portfolio',
  education: [
    {
      degree: 'BSc Data Science and Business Analytics (in progress)',
      school: 'University of London',
      note: 'Courses include ST2195 Programming for Data Science, ST3189 Machine Learning and EC2020 Elements of Econometrics.',
    },
    {
      degree: 'Statistics (in progress)',
      school: 'Universidad de la República (UdelaR)',
      note: 'Coursework includes descriptive statistics and data science with R at FCEA.',
    },
  ],
  tools: [
    { group: 'Statistics and modelling', items: ['R', 'tidyverse', 'tidymodels', 'scikit-learn', 'Bayesian updating', 'regression and classification'] },
    { group: 'Data and engineering', items: ['Python', 'pandas', 'SQL', 'Parquet', 'pytest', 'FastAPI', 'Typer'] },
    { group: 'Reporting and product', items: ['Quarto', 'Jupyter', 'Git', 'TypeScript', 'Next.js', 'Supabase'] },
  ],
};
