export interface Screenshot {
  caption: string;
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  stack: string[];
  description: string[];
  github: string;
  demo?: string;
  slug: string;
  metaDescription: string;
  task: string;
  responsibilities: string[];
  architecture: string;
  screenshots: Screenshot[];
}

export interface MoreProject {
  title: string;
  meta: string;
  stack: string;
  description: string;
  github?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  detail: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    skills: string;
    about: string;
    contact: string;
    switchTo: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    location: string;
    tagline: string;
    ctaEmail: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaCv: string;
    diagramCaption: string;
  };
  work: {
    heading: string;
    intro: string;
    viewCase: string;
    liveDemo: string;
    projects: Project[];
  };
  caseStudy: {
    backLink: string;
    taskHeading: string;
    workHeading: string;
    architectureHeading: string;
    stackHeading: string;
    screenshotsHeading: string;
    linksHeading: string;
    githubLink: string;
    demoLink: string;
    imagePending: string;
  };
  moreWork: {
    heading: string;
    projects: MoreProject[];
  };
  skills: {
    heading: string;
    groups: SkillGroup[];
  };
  about: {
    heading: string;
    paragraph: string;
    educationHeading: string;
    education: EducationItem[];
    languagesHeading: string;
    languages: string[];
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    cvLabel: string;
    cvEn: string;
    cvUa: string;
  };
  footer: {
    text: string;
  };
  notFound: {
    title: string;
    body: string;
    backHome: string;
  };
}
