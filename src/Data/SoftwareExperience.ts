import { t } from "@lingui/macro";
import { I18n } from "@lingui/core";
import { SoftwareExperience } from "../Type/Experience";


const podform3dExperience = (i18n: I18n) => (
  {
    items: [
      {
        title: t(i18n)`Order system management`,
        description: t(i18n)`Custom order service system for orthotic sole order. 
        Used multiple services hosted on AWS, mainly, S3, EC2, AppRunner, Amplify, RDS`,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`Automation Pipeline`,
        description: t(i18n)`Custom order service system for orthotic sole`,
        architecture: ["DevOps"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`Project Management`,
        description: t(i18n)`We used aa`,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`iOS Mobile app`,
        description: t(i18n)`I was tasked with my collegues to build an app that would scan feet of our client's 
        patient. The data would be safely sent to the Backend service built alongside the Order System Management
        (see above). We also added the possibility for our clients to complete the order right after taking the scans.`,
        architecture: ["Mobile Native"],
        framework: ["SwiftUI", "UIkit"],
        languages: ["Swift"]
      },
      {
        title: t(i18n)`Rhino-Grasshopper Automation `,
        description: t(i18n)`Custom order service system for orthotic sole`,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`3D Viewer web engine adaptation`,
        description: t(i18n)`Custom order service system for orthotic sole`,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`3D Printer park automation`,
        description: t(i18n)`Custom order service system for orthotic sole`,
        architecture: ["Services"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`Milling GCode generator`,
        description: t(i18n)`Custom order service system for orthotic sole`,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
    ],
    start: t(i18n)`October 2021`,
    end: t(i18n)`January 2024`,
    summary: t(i18n)`Managed a fullstack (web + native iOS with services on AWS) foot scanning services
    to create 3d printable foot orthosis as well as other deprecated projects and connexe work`,
    title: t(i18n)`Software Developper`,
    workplace: "Podform3D"
  }
) as SoftwareExperience

const lode3DExperience = (i18n: I18n) => ({
  items: [
    {
      architecture: ["Game"],
      title: t(i18n)`iOS App`,
      description: t(i18n)`iOS Ar app for shopping`,
      framework: ["Unity"],
      languages: ["C#"],
    },
    {
      architecture: ["Game"],
      title: t(i18n)`Shaders`,
      description: t(i18n)`Creation of custom shader to create different effects, such as portals, water, and more.`,
      framework: ["Unity"],
      languages: ["HSLS"],
    },
  ],
  start: t(i18n)`January 2019`,
  end: t(i18n)`August 2021`,
  summary: t(i18n)`Lead the developpement for the prototyping of an AR app for luxury shopping`,
  title: t(i18n)`Software Developper`,
  workplace: "Lode"
}) as SoftwareExperience

const softwareExperiences: Array<(i18n: I18n) => SoftwareExperience> = [
  podform3dExperience,
  lode3DExperience,
]


export default softwareExperiences