import { Trans } from "@lingui/macro";
import softwareExperiences from "../Data/SoftwareExperience";
import { SoftwareExperience } from "../Type/Experience";
import ExperienceDetail from "./ExperienceDetail";
import { Fragment } from "react/jsx-runtime";

export const SoftwarePath = "/Software";

const Software = () => {
  return (
    <div style={{ padding: "0.3rem" }}>
      {softwareExperiences.map((experience: SoftwareExperience, item) => (
        <Fragment key={item}>
          <h3>
            <Trans>{experience.title}</Trans> -{" "}
            <Trans>{experience.workplace}</Trans>
          </h3>
          <span />
          {experience.items.map((exp, i) => (
            <>
              <ExperienceDetail key={i} item={exp} mainAttribute={exp.languages[0]}>
                <span>
                  {exp.architecture.map((item, i) => (
                    <em>
                      {item + (i < exp.architecture.length - 1 ? " - " : "")}
                    </em>
                  ))}
                  <br />
                  {exp.languages.map((item, i) => (
                    <em>
                      {item + (i !== exp.languages.length - 1 ? " - " : "")}
                    </em>
                  ))}
                  <br />
                  {exp.framework.map((item, i) => (
                    <em>
                      {item + (i !== exp.framework.length - 1 ? " - " : "")}
                    </em>
                  ))}
                </span>
              </ExperienceDetail>
              {i < experience.items.length - 1 && <br />}
            </>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Software;
