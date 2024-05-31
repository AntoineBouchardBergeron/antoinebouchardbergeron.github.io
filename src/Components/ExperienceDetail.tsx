import { ReactNode } from "react";
import { ExperienceItem } from "../Type/Experience";

import "./ExperienceDetail.css";
import Collapsible from "./Collapsible";

type Props = {
  item: ExperienceItem;
  mainAttribute: string;
  children: ReactNode;
};

const ExperienceDetail = (props: Props) => {
  return (
    <Collapsible 
      mainAttribute={props.mainAttribute} 
      title={props.item.title}
      isHeader={false}
      >
      <p>{props.item.description}</p>
      {props.children}
      <br />
    </Collapsible>
  );
};

export default ExperienceDetail;
