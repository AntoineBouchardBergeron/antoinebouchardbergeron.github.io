import { t } from "@lingui/macro";
import { I18n } from "@lingui/core";
import { MusicExperience } from "../Type/Experience";

const Coldsun = (i18n: I18n) =>
  ({
    projects: [
      {
        title: t(i18n)`iOS App`,
        description: t(i18n)`iOS Ar app for shopping`,
      },
      {
        title: t(i18n)`Shaders`,
        description: t(
          i18n
        )`Creation of custom shader to create different effects, such as portals, water, and more.`,
      },
    ],
    title: t(i18n)`Bass player and vocalist`,
    end: "",
    workplace: "Coldsun",
    start: "",
    summary: t(i18n)`Bass player and vocalist, that's it really..`,
  } as MusicExperience);

const mecanicalExperiences: Array<(i18n: I18n) => MusicExperience> = [Coldsun];

export default mecanicalExperiences;
