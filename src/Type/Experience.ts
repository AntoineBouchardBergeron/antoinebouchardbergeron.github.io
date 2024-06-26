export type SoftwareExperience = Experience & {
  items: Array<SoftwareItem>;
};

export type MecanicalExperience = Experience & {
  items: Array<ExperienceItem>;
};

export type SchoolExperience = Experience & {
  projects: Array<ExperienceItem>;
};

export type MusicExperience = Experience & {
  projects: Array<ExperienceItem>;
};

type Experience = {
  title: String;
  workplace: String;
  start: String;
  end: String;
  summary: string;
};

export type ExperienceItem = {
  title: String;
  description: String;
};

type SoftwareItem = ExperienceItem & {
  languages: Array<Languages>;
  architecture: Array<Architecture>;
  framework: Array<Frameworks>;
  url?: string
};

export const enum languages {
  "Bash",
  "C#",
  "C++",
  "HSLS",
  "JavaScript",
  "Python",
  "SQL",
  "Swift",
  "TypeScript",
  "VB",
  "VBS"
}

export type Languages = keyof typeof languages;

export const enum architecture {
  "FullStack",
  "Web - Front-end",
  "Mobile Native",
  "3D",
  "OctoPi",
  "DevOps",
  "Game",
  "Standalone Service"
}

export type Architecture = keyof typeof architecture;

export const enum frameworks {
  "React",
  "Dotnet Core",
  "Unity",
  "SwiftUI",
  "UIkit",
  "GitHub",
  "OfficeSuite",
  "E3",
  "Rhino",
  "Grasshopper"
}
export type Frameworks = keyof typeof frameworks;
