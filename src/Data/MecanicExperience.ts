import { t } from "@lingui/macro";
import { I18n } from "@lingui/core";
import { MecanicalExperience } from "../Type/Experience";


const NseAutomatec = (i18n: I18n) => ({
    items: [
      {
        title: t(i18n)`iOS App`,
        description: t(i18n)`iOS Ar app for shopping`,
      },
      {
        title: t(i18n)`Shaders`,
        description: t(i18n)`Creation of custom shader to create different effects, such as portals, water, and more.`,
      },
    ],
    start: t(i18n)`January 2011`,
    end: t(i18n)`August 2016`,
    summary: t(i18n)`So many things. Like, so many.`,
    title: t(i18n)`Everything man`,
    workplace: "NSE-Automatech"
  }) as MecanicalExperience
  
  const mecanicalExperiences: Array<(i18n: I18n) => MecanicalExperience> = [
    NseAutomatec,
  ]
  
  
  export default mecanicalExperiences