import React from "react";

import { Trans } from "@lingui/macro"
export const AboutPath = "/"

const About = () => {
  return (
    <>
      <span className="caption">
        <Trans id="About.Intro">Man with interests, hobbies and knowledge writing his resume in web form using React, Typescript, and functionnal programming.
          Knower of
        </Trans>
      </span>
      <p style={{paddingTop: "1rem"}}>
        <Trans id="About.WhoAnswer">Hi!
          <br/>          
          <br/>
          My name is Antoine Bouchard-Bergeron, I'm a Bachelor in Software Engineering. I've worked in many fields and 
          did numerous typw of work which taugh me a lot of things over the years.
          <br/>          
          <br/>
          My time in the mecanical field taught me to be precise, rigourous, efficient and methodical. 
          <br/>          
          <br/>
          My new life in software development opened my eyes to a thirst of knowledge I didn't know I had which is fueled
          by my attention to detail, my love of architectural and pattern design and my need for fixing problems.
          <br/>
          <br/>
          I'm also a big fan of sounds and music, which I play and compose.
        </Trans>
      </p>

      <h2>
        <Trans id="About.Why">Why</Trans>
      </h2>
      <p>
        <Trans id="About.WhyAnswer">
          I got inspired by my good friend
          <a href="https://pascallaprade.com">Pascal Laprade</a> to make my own Curriculum vitea as well as use this as
          a learning experience.
        </Trans>
      </p>
      <h2>
        <Trans id="Key">Key features</Trans>
      </h2>
      <ul>
        <li>
          <Trans id="About.Features1">
            Manually styled  
          </Trans>
        </li>
        <li>
          <Trans id="About.Features2">
            Minimal usage of packages (react-dom)
          </Trans>
        </li>
        <li>
          <Trans id="About.Features3">
            Inspectable 
          </Trans>
        </li>
      </ul>
      <h2>
        <Trans id="About.Learning">Learning </Trans>
      </h2>
      <p>
        <Trans id="About.Learning.Description">
          Doing so, I have consolided my knowledge of front-end web programming,
          (html and css) I also finally have learned and completed the routing
          and hosting myself of web apps.
        </Trans>
      </p>
    </>
  );
};

export default About;
