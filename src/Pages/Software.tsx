import { useLingui } from "@lingui/react";
import softwareExperiences from "../Data/SoftwareExperience";
import ExperienceDetail from "../Components/ExperienceDetail";
import { Fragment } from "react/jsx-runtime";
import Collapsible from "../Components/Collapsible";

export const SoftwarePath = "/Software";

const Software = () => {
  const i18n = useLingui();

  return (
    <>
      {softwareExperiences.map((experience) => {
        const exp = experience(i18n.i18n);
        return (
          <Collapsible
            isHeader={true}
            mainAttribute={exp.workplace}
            title={exp.title}
          >
            {exp.items.map((e, i) => (
              <ExperienceDetail key={i} item={e} mainAttribute={e.languages[0]}>
                <span>
                  {e.architecture.map((item, i) => (
                    <em>
                      {item + (i < e.architecture.length - 1 ? " - " : "")}
                    </em>
                  ))}
                  <br />
                  {e.languages.map((item, i) => (
                    <em>
                      {item + (i !== e.languages.length - 1 ? " - " : "")}
                    </em>
                  ))}
                  <br />
                  {e.framework.map((item, i) => (
                    <em>
                      {item + (i !== e.framework.length - 1 ? " - " : "")}
                    </em>
                  ))}
                </span>
              </ExperienceDetail>
            ))}
          </Collapsible>
        );
      })}
    </>
  );
};

export default Software;
