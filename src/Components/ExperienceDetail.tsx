import { ReactNode, useRef, useState } from "react";
import { ExperienceItem } from "../Type/Experience";

import "./ExperienceDetail.css";

type Props = {
  item: ExperienceItem;
  mainAttribute: string;
  children: ReactNode;
};

const ExperienceDetail = (props: Props) => {
  const [displayDetail, setDisplayDetail] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDisplayDetail = () => {
    setDisplayDetail((b) => !b);
  };

  return (
    <div style={{padding: "0.5rem"}}>
      <div onClick={handleDisplayDetail}  className="title">
        <img src="chevron.png" className={displayDetail ? "arrow-show" : "arrow-hidden"} alt={"Chevron"}/>
        <span className="subtitle">
          {props.item.title} - {props.mainAttribute}
        </span>
      </div>

      <div ref={contentRef} style={contentRef.current && displayDetail ? {
        height: contentRef.current.scrollHeight + "px",
        transition: "ease-in-out 0.6s",
        overflow: 'hidden'
      } : { height: "0px", transition: "ease-in-out 0.6s", overflow: 'hidden' }}>
          <p>{props.item.description}</p>
          {props.children}
          <br />
      </div>
    </div>
  );
};

export default ExperienceDetail;
