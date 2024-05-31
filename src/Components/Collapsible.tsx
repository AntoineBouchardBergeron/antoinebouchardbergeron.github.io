import { ReactNode, useRef, useState } from "react";

import "./Collapsible.css";

type Props = {
  title: String;
  mainAttribute: String | undefined;
  isHeader: boolean | undefined;
  children: ReactNode;
};

const Collapsible = (props: Props) => {
  const [displayDetail, setDisplayDetail] = useState<boolean>(
    props.isHeader ?? false
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDisplayDetail = () => {
    setDisplayDetail((b) => !b);
  };

  return (
    <div style={{ padding: "0.5rem" }}>
      <div onClick={handleDisplayDetail} className="title">
        <img
          src="chevron.png"
          className={displayDetail ? "arrow-show" : "arrow-hidden"}
          alt={"Chevron"}
        />
        <span className={props.isHeader ? "collapsible-header" : "subtitle"}>
          {props.title}
          {props.mainAttribute ? " - " + props.mainAttribute : ""}
        </span>
      </div>

      <div
        ref={contentRef}
        style={
          contentRef.current && displayDetail
            ? {
                height: contentRef.current.scrollHeight + "px",
                transition: "ease-in-out 0.6s",
                overflow: "hidden",
                paddingLeft: "3rem"
              }
            : {
                height: "0px",
                transition: "ease-in-out 0.6s",
                overflow: "hidden",
                paddingLeft: "3rem"
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default Collapsible;
