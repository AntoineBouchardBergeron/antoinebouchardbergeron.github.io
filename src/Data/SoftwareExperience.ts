import { t } from "@lingui/macro";
import { I18n } from "@lingui/core";
import { SoftwareExperience } from "../Type/Experience";


const podform3dExperience = (i18n: I18n) => (
  {
    items: [
      {
        title: t(i18n)`Order system management`,
        description: t(i18n)`Custom order service system for orthotic sole order. 
        Used multiple services hosted on AWS, Amplify and then mainly, S3, EC2, AppRunner, RDS.
        This service was built as a Rest API exchanging information between the iOS app and the web service.
        `,
        architecture: ["FullStack"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`Automation Pipeline`,
        description: t(i18n)`We used both github action to autobuild, autotest and autodeploy on a schedule. We also
        used a queue to start different services whenever available since some computation was made on a slower machine 
        and took significant time, but was used 5% of the day, which was fine.`,
        architecture: ["DevOps"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`Project Management`,
        description: t(i18n)`We used github project with its issues as a kanban tracker. We configured multiple views
        and were able to automate some of the tracking within the normal use of issues and pull requests statuses. `,
        architecture: [],
        framework: ["GitHub"],
        languages: [],
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
        title: t(i18n)`Rhino-Grasshopper Automation`,
        description: t(i18n)`Some of the modelisation was previously crafted via visual scripting with grasshopper and Rhino.
        So we've been tasked to write a service in .Net Framework that would listen to newly arrived 3D model with their
        inputed parameters which would create the relative and conform foot orthosis 3d model.`,
        architecture: ["Standalone Service"],
        framework: ["Dotnet Core", "Rhino", "Grasshopper"],
        languages: ["C#", "TypeScript"],
      },
      {
        title: t(i18n)`3D Viewer web engine adaptation`,
        description: t(i18n)`We were tasked in adapting 3dviewer.net viewer to allow our users to see the 3D models of 
        the scans as well as the completed orthotics. We added more functionnality in the viewer as well to pipe some
        of the locally used tool into a complete back-end service`,
        architecture: ["Web - Front-end", "3D"],
        framework: [],
        languages: ["JavaScript"],
      },
      {
        title: t(i18n)`3D Printer park automation`,
        description: t(i18n)`We explored creating our own queue system for our production team with the automation of 
        self feeding 3D printing machine. The plan, which was never fully developped, was to have a cluster of printer
        working continuously, ejecting printed parts autonomously. We had a working prototype but we never were able to 
        complete the ejection, which aborted the project.`,
        architecture: ["Standalone Service"],
        framework: ["OctoPi"],
        languages: ["Python", "Bash"],
      },
      {
        title: t(i18n)`Milling GCode generator`,
        description: t(i18n)`Similar to the Rhino-Grasshopper Automation above, we were tasked previously to create a 
        standalone webservice that would generate 3D post-processed GCode to mill out foam. The pathing was created with
        grasshopper script while the tool displacement was written in C#, with the conversion from List<Points> to a
        GCode executable.`,
        architecture: ["FullStack", "Standalone Service"],
        framework: ["React", "Dotnet Core"],
        languages: ["C#", "TypeScript"],
      },
    ],
    start: t(i18n)`October 2021`,
    end: t(i18n)`January 2024`,
    summary: t(i18n)`Managed a fullstack foot scanning services (web + native iOS with 3D services on AWS) 
    to create 3d printable foot orthosis and more`,
    title: t(i18n)`Software Developper`,
    workplace: "Podform3D"
  }
) as SoftwareExperience

const lode3DExperience = (i18n: I18n) => (
  {
    items: [
      {
        architecture: ["Game", "FullStack"],
        title: t(i18n)`iOS App`,
        description: t(i18n)`iOS Ar app for shopping, moslty developped with unity, but we had an ongoing project to store
      all of the gameobjects, 3ds, textures on Aws.S3 and feed them directly into the app. While it was not the best, 
      for safety reasons, approach for this kind of distribution, it worked fine for the prototype.`,
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
    start: t(i18n)`September 2019`,
    end: t(i18n)`August 2021`,
    summary: t(i18n)`Lead the developpement for the prototyping of an AR app for luxury shopping`,
    title: t(i18n)`Software Developper`,
    workplace: "Lode by Studio FictionMine"
  }) as SoftwareExperience

const AirTransatExperience = (i18n: I18n) => (
  {
    items: [
      {
        architecture: [],
        description: t(i18n)`Create and execute audit testing`,
        framework: [],
        languages: ["SQL"],
        title: t(i18n)`Audit testing`,
      },
      {
        architecture: [],
        description: t(i18n)`Reviewed some SQL rollback actions and wrote conclusions on what when why`,
        framework: [],
        languages: [],
        title: t(i18n)`Validation of IT processes`,
      },
      {
        architecture: [],
        description: t(i18n)`Subsequent to the validation of IT processes, wrote recommandation for the different teams
        when they should change some of their processes in due time.`,
        framework: [],
        languages: [],
        title: t(i18n)`Recommandation document writing`,
      },
    ],
    start: t(i18n)`August 2018`,
    end: t(i18n)`December 2018`,
    summary: t(i18n)`Helped the audit team with IT based audits, truth be told, I don't recall doing much there, lots of
    engineering documation and validation, but that's it.`,
    title: t(i18n)`Audit Intern`,
    workplace: "Air Transat"
  }) as SoftwareExperience;

const StantecExperience = (i18n: I18n) => ({
  items: [
    {
      architecture: ["Standalone Service"],
      description: t(i18n)`I was tasked with automating some of the repetitive tasks using VBS. I wish I could say more,
      but at the time of writing the summary, I truly don't remember, since it was almost 7 years ago.`,
      framework: ["OfficeSuite", "E3"],
      languages: ["VB", "VBS"],
      title: t(i18n)`E3.cables automation`,
    },    
    {
      architecture: ["Standalone Service"],
      description: t(i18n)`I was tasked with automating some of the repetitive tasks using. Mainly I wrote a script that
      drew a Bill of Material right onto the CAD drawing. It saved collegues several hours each time they needed to copy
      from MS Office (either Work or Excel) into Autocad.`,
      framework: ["OfficeSuite"],
      languages: ["VB", "VBS"],
      title: t(i18n)`MS Excel/Word to Autocad drawings`,
    },
    {
      architecture: ["Standalone Service"],
      description: t(i18n)`The team had some previous tools that were written in Visual Basic which were really poorly 
      written (4000+ lines methods, variable names unreadable (i.e: vim DoSt(vr, ae, vva, aas, mmb, etc.))) that I partly
      refactored.`,
      framework: ["OfficeSuite"],
      languages: ["VB"],
      title: t(i18n)`Refactoring and optimisation`,
    },
  ],
  start: t(i18n)`September 2017`,
  end: t(i18n)`April 2018`,
  summary: t(i18n)`Worked with an Electrical engineer team to automate some of their tasks`,
  title: t(i18n)`Software Developper Intern`,
  workplace: "Stantec"
}) as SoftwareExperience;

const softwareExperiences: Array<(i18n: I18n) => SoftwareExperience> = [
  podform3dExperience,
  lode3DExperience,
  AirTransatExperience,
  StantecExperience,
]

const onlineCV = (i18n: I18n) => ({
  items: [
    {
      title: t(i18n)`Online CV`,
      description: t(i18n)`This is basically a place for me to write about me, anb publish, maybe songs that I wrote
      myself or with my band, Coldsun`,
      architecture: ["Web - Front-end"],
      framework: ["React"],
      languages: ["TypeScript"],
      url: "https://antoinebouchardbergeron.github.io/"
    }
  ],
  start: t(i18n)`May 2024`,
  end: t(i18n)`OnGoing`,
  summary: "",
  title: t(i18n)`Online CV`,
  workplace: ""
}) as SoftwareExperience

export const projectExperience: Array<(i18n: I18n) => SoftwareExperience> = [
  onlineCV,
]




export default softwareExperiences