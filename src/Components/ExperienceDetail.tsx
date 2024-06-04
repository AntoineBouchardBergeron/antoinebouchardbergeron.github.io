import { ReactNode, useRef } from "react";
import { ExperienceItem } from "../Type/Experience";

import "./ExperienceDetail.css";
import Collapsible from "./Collapsible";

type Props = {
  item: ExperienceItem;
  mainAttribute: string;
  children: ReactNode;
  url?: string;
  addHeight: (height: number) => void
};

const ExperienceDetail = (props: Props) => {
  const collapsibleHeight = useRef<HTMLDivElement>(null)

  const handleClick = (isOpen: boolean) => {
    if (collapsibleHeight.current) {
      setTimeout(() => props.addHeight(collapsibleHeight.current!.scrollHeight * (isOpen ? -1 : 1)), 301)
    }
  }

  return (
    <Collapsible
      mainAttribute={props.mainAttribute}
      title={props.item.title}
      url={props.url}
      isHeader={false}
      height={0}
      ref={collapsibleHeight}
      onClick={handleClick}
    >
      <div style={{ paddingLeft: "3rem" }}>
        <p>{props.item.description}</p>
        {props.children}
        <br />
      </div>
    </Collapsible>
  );
};

export default ExperienceDetail;
