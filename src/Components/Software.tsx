import { useLingui } from "@lingui/react";
import softwareExperiences from "../Data/SoftwareExperience";
import ExperienceDetail from "./ExperienceDetail";
import { Fragment } from "react/jsx-runtime";

export const SoftwarePath = "/Software";

const Software = () => {
  const i18n = useLingui()

  return (
    <div style={{ padding: "0.3rem" }}>
      {softwareExperiences.map((experience) => {
        const exp = experience(i18n.i18n)
        return <Fragment>
          <h3>
            {exp.title}{" - "}
            {exp.workplace}
          </h3>
          <span />
          {exp.items.map((e, i) => (
            <>
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
              {i < exp.items.length - 1 && <br />}
            </>
          ))}
        </Fragment>
      })}
    </div>
  );
};

export default Software;
