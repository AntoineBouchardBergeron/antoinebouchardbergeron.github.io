export type SoftwareExperience = Experience & {
  items: Array<SoftwareItem>;
};

export type MecanicalExperience = Experience & {
  items: Array<ExperienceItem>;
};

export type SchoolExperience = Experience & {
  projects: Array<ExperienceItem>;
};

type Experience = {
  title: String;
  workplace: String;
  start: String;
  end: String;
  summary: String;
};

export type ExperienceItem = {
  title: String;
  description: String;
};

type SoftwareItem = ExperienceItem & {
  languages: Array<Languages>;
  architecture: Array<Architecture>;
  framework: Array<Frameworks>;
};

const enum languages {
  "C#",
  "C++",
  "python",
  "JavaScript",
  "TypeScript",
  "Swift",
  "HSLS"
}

export type Languages = keyof typeof languages;

const enum architecture {
  "FullStack",
  "Webdev",
  "Mobile Native",
  "3D",
  "Machining Code",
  "DevOps",
  "Game",
}

export type Architecture = keyof typeof architecture;

const enum frameworks {
  "React",
  "Dotnet Core",
  "Unity",
}
export type Frameworks = keyof typeof frameworks;
