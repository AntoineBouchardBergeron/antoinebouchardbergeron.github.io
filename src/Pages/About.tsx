import React from "react";

import { Trans } from "@lingui/macro"

export const AboutPath = "/"

const About = () => {
  return (
    <>
      <span className="caption">
        <Trans id="About.Intro">Man with interests, hobbies and knowledge writing his cv in web form using React, Typescript, and functionnal programming.</Trans>
      </span>
      <h3>
        <Trans id="About.Why">Why</Trans>
      </h3>
      <p>
        <Trans id="About.WhyAnswer">
          I always was the type to use shortcuts and (I realise why this was not
          the best approach way too late) copy-paste. I never truly deepened my
          knowledge of the web functionnal programming approach. Since I now
          have the opportunity to find work, I got inspired by my good friend
          <a href="https://pascallaprade.com">Pascal Laprade</a> to make my own Curriculum vitea as well as use this as
          a learning experience.
        </Trans>
      </p>
      <h3>
        <Trans id="Key">Key features</Trans>
      </h3>
      <ul>
        <li>
          <Trans id="About.Features1">
            Manually styled (Sass, css, scss, who knows?) 
          </Trans>
        </li>
        <li>
          <Trans id="About.Features2">
            Minimal usage of packages (if any, I guess time will tell)
          </Trans>
        </li>
        <li>
          <Trans id="About.Features3">
            Inspectable (Find out!)
          </Trans>
        </li>
      </ul>
      <h3>
        <Trans id="About.Learning">Learning </Trans>
      </h3>
      <p>
        <Trans id="About.Learning.Description">
          Doing so, I have consolided my knowledge of front-end web programming,
          (html and css) I also finally have learned and completed the routing
          and hosting myself of web apps .
        </Trans>
      </p>
    </>
  );
};

export default About;
