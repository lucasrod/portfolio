/**
 * Personal details shown on the site. Leave a field empty to hide it:
 * components only render links that are filled in.
 */
interface Site {
  name: string; role: string; location: string; github: string; linkedin: string; email: string;
  cvPdf: string; sourceRepo: string;
  headline: string;
  education: { degree: string; school: string; dates: string; note: string }[];
  experience: { role: string; org: string; dates: string; points: string[] }[];
  tools: { group: string; items: string[] }[];
}

export const site: Site = {
  name: 'Lucas Rodriguez',
  role: 'Junior data scientist',
  /** As on LinkedIn. */
  headline: 'Data science student with a software background',
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
      degree: 'BSc Data Science and Business Analytics',
      school: 'University of London',
      dates: 'May 2022 – Dec 2025',
      note: 'Probability, statistical inference and modelling with an applied focus. Courses include ST2134 Inferential Statistics, EC2020 Elements of Econometrics, ST3189 Machine Learning, ST2187 Business Analytics, Applied Modelling and Prediction, and ST3188 Statistical Methods for Market Research.',
    },
    {
      degree: 'Statistics coursework',
      school: 'Universidad de la República (UdelaR), FCEA',
      dates: '',
      note: 'Descriptive statistics and data science with R.',
    },
    {
      degree: 'Computer Software Engineering (not completed)',
      school: 'Universidad ORT Uruguay',
      dates: '2015–2021',
      note: 'Computation theory, logic, data structures and algorithms, software architecture and relational databases.',
    },
    {
      degree: 'High school diploma, IT Technician',
      school: 'Escuela y Liceo Elbio Fernández',
      dates: '2011–2014',
      note: 'Programming in C and Java, Unix (CentOS), relational databases, HTML and CSS.',
    },
  ],
  experience: [
    {
      role: 'Data & Systems Integration Specialist, Hurrah!',
      org: 'UruIT, part-time, Montevideo',
      dates: 'Nov 2017 – May 2019',
      points: [
        'Took clients from sale to full implementation, covering security, infrastructure and data management.',
        'Worked with Salesforce (SOQL), Microsoft Dynamics CRM (FetchXML) and SQL data, on premises and on Azure.',
        'Designed and optimised dashboards for hundreds of metrics across several database systems.',
        'Deployed the Hurrah! web app on clients’ Windows servers with IIS and SQL Server.',
      ],
    },
    {
      role: 'API Support Associate',
      org: 'Sabre Corporation, full-time',
      dates: 'May 2017 – Oct 2017',
      points: [
        'Supported more than 50 SOAP and REST API endpoints for reservations, airline availability and ticketing, hotels and car rentals.',
        'Main technical contact for customers integrating Sabre’s APIs into their applications.',
      ],
    },
    {
      role: 'Back-end developer',
      org: 'B3 Consultores, freelance',
      dates: '2016',
      points: [
        'Built the back end of an IoT solution in PHP and JavaScript, with real-time data collection and charts, served from a Raspberry Pi.',
      ],
    },
  ],
  tools: [
    { group: 'Statistics and modelling', items: ['R', 'tidyverse', 'tidymodels', 'scikit-learn', 'Bayesian updating', 'regression and classification'] },
    { group: 'Data and engineering', items: ['Python', 'pandas', 'SQL', 'SQL Server', 'Azure', 'Parquet', 'pytest', 'FastAPI', 'REST and SOAP APIs'] },
    { group: 'Reporting and product', items: ['Quarto', 'Jupyter', 'Excel', 'Tableau', 'Stata', 'SPSS', 'Git', 'TypeScript', 'Next.js', 'Supabase'] },
  ],
};
