import { t } from "@lingui/macro";
import { SoftwareExperience } from "../Type/Experience";

export const podform3dExperience: SoftwareExperience = {
  items: [
    {
      architecture: ["FullStack"],
      title: t`Order Service`,
      description: t`Custom order service system for orthotic sole`,
      framework: ["React", "Dotnet Core"],
      languages: ["C#", "TypeScript"],
    },
  ],
  start: t`October 2021`,
  end: t`January 2024`,
  summary: t`Managed a fullstack (web + native iOS with services on AWS) foot scanning services
   to create 3d printable foot orthosis as well as other deprecated projects and connexe work`,
  title: t`Software Developper`,
  workplace: "Podform3D"
};

export const lode3DExperience: SoftwareExperience = {
  items: [
    {
      architecture: ["Game"],
      title: t`iOS App`,
      description: t`iOS Ar app for shopping`,
      framework: ["Unity"],
      languages: ["C#"],
    },    
    {
        architecture: ["Game"],
        title: t`Shaders`,
        description: t`Creation of custom shader to create different effects, such as portals, water, and more.`,
        framework: ["Unity"],
        languages: ["HSLS"],
      },
  ],
  start: t`January 2019`,
  end: t`August 2021`,
  summary: t`Lead the developpement for the prototyping of an AR app for luxury shopping`,
  title: t`Lead Software Developper`,
  workplace: "Lode"
};

const softwareExperiences: Array<SoftwareExperience> = [
  podform3dExperience,
  lode3DExperience,
];

export default softwareExperiences