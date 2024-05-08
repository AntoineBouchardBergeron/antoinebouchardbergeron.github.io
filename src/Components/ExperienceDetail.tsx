import { ReactNode, useState } from "react";
import { ExperienceItem } from "../Type/Experience";
import { Trans } from "@lingui/macro";

import "./ExperienceDetail.css";

type Props = {
  item: ExperienceItem;
  mainAttribute: string;
  children: ReactNode;
};

const ExperienceDetail = (props: Props) => {
  const [displayDetail, setDisplayDetail] = useState<boolean>(false);

  const handleDisplayDetail = () => {
    setDisplayDetail((b) => !b);
  };

  return (
    <>
      <span onClick={handleDisplayDetail} className="subtitle">
        <Trans>{props.item.title}</Trans> - {props.mainAttribute}
      </span>
      {displayDetail && (
        <>
          <p>{props.item.description}</p>
          {props.children}
        </>
      )}
    </>
  );
};

export default ExperienceDetail;
