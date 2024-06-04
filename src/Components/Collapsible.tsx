import { ReactNode, useEffect, useRef, useState } from "react";

import "./Collapsible.css";
import { forwardRef } from "react";

type Props = {
  title: String;
  height?: number;
  mainAttribute: String | undefined;
  isHeader: boolean | undefined;
  url?: string;
  summary?: string;
  onClick?: (isOpen: boolean) => void;
  children: ReactNode;
};

const Collapsible = forwardRef<any, Props>((props, parentRef) => {
  const [displayDetail, setDisplayDetail] = useState<boolean>(false);
  const [contentHeight, setContentHeigth] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return
    if (contentHeight === 0 && contentRef.current.scrollHeight !== 0) {
      setContentHeigth(contentRef.current.scrollHeight)
    }
  }, [contentHeight, contentRef.current?.scrollHeight])

  useEffect(() => {
    console.log(contentHeight)
  })

  const handleDisplayDetail = () => {
    setDisplayDetail((b) => !b);
    props.onClick?.(displayDetail)
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
        {props.summary && <div style={{ fontSize: "small", paddingLeft: "2rem", alignContent: "center", height: "100%" }}>
          {props.summary}
        </div>}
      </div>

      <div ref={parentRef}>
        <div
          ref={contentRef}
          style={
            contentRef.current && displayDetail
              ? {
                height: contentHeight + (props.height ?? 0) + "px",
                transition: "ease-in-out 0.3s",
                overflow: "hidden",
              }
              : {
                height: "0px",
                transition: "ease-in-out 0.3s",
                overflow: "hidden"
              }
          }
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
)

export default Collapsible;
