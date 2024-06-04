import { useLingui } from "@lingui/react";
import softwareExperiences, { projectExperience } from "../Data/SoftwareExperience";
import { I18n } from "@lingui/core";
import ExperienceDetail from "../Components/ExperienceDetail";
import Collapsible from "../Components/Collapsible";
import { useRef, useState } from "react";
import { SoftwareExperience } from "../Type/Experience";

export const SoftwarePath = "/Software";

type SoftwareExperienceProps = {
  softWare: Array<(i18n: I18n) => SoftwareExperience>
}

const SoftwareExperienceComponent = (props: SoftwareExperienceProps) => {
  const i18n = useLingui();
  const DropDownRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  const handleChildHeight = (height: number) => {
    console.log(height, DropDownRef.current?.scrollHeight)
    setHeight(height)
  }

  const mapExperience = (software: Array<(i18n: I18n) => SoftwareExperience>) => {
    return software.map((experience, index) => {
      const exp = experience(i18n.i18n);
      return (
        <Collapsible
          key={index}
          ref={DropDownRef}
          isHeader={true}
          mainAttribute={exp.workplace}
          summary={exp.summary}
          title={exp.title}
          height={height}
        >
          {exp.items.map((e, i) => (
            <ExperienceDetail
              key={i}
              item={e}
              mainAttribute={e.languages[0]}
              addHeight={handleChildHeight}
            >
              <span>
                {e.architecture.map((item, i) => (
                  <em key={i}>
                    {item + (i < e.architecture.length - 1 ? " - " : "")}
                  </em>
                ))}
                <br />
                {e.languages.map((item, i) => (
                  <em key={i + 100}>
                    {item + (i !== e.languages.length - 1 ? " - " : "")}
                  </em>
                ))}
                <br />
                {e.framework.map((item, i) => (
                  <em key={i + 200}>
                    {item + (i !== e.framework.length - 1 ? " - " : "")}
                  </em>
                ))}
              </span>
            </ExperienceDetail>
          ))}
        </Collapsible>
      );
    })
  }

  return <>
    {mapExperience(props.softWare)}
  </>
}

const Software = () => {
  return (
    <>
      <h2>Professionnal Experiences</h2>
      <SoftwareExperienceComponent
        softWare={softwareExperiences}
      />
      <h2>Personnal Projects</h2>
      <SoftwareExperienceComponent
        softWare={projectExperience}
      />
    </>
  );
};

export default Software;
