import { faChartBar, faCode, faLaptopCode, faPalette, faPallet, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HelmetComponent from "../components/HelmetComponent";
import PageTitle from "../components/PageTitle";
import SkillsCard from "../components/SkillsCard";

function About() {
  let meta = {
    title: null,
    desc: null,
  };

  const skills = {
    ds: {
      skill: "Data Science",
      icon: faChartBar,
    },
    ai: {
      skill: "AI/ML",
      icon: faRobot,
    },
    web: {
      skill: "Web Development",
      icon: faCode,
    },
  };

  const profile_image = process.env.REACT_APP_PROFILE_IMAGE;

  console.log(profile_image);

  return (
    <div className="h-100 justify-content-center about-page">
      <HelmetComponent meta={meta} />
      <div className="about-page-content text-center">
        <img src={profile_image} className="mx-auto" />
        <h1 className="intro">
          Hello, I am <b>Yoosuf Shafi.</b>
        </h1>
        <h4>A</h4>
        <h3 class="excerpt">
          <span>Software Engineer</span>
        </h3>
        <h4 style={{ marginTop: "3rem;" }}>with skills in</h4>
        <div className="row skills">
          <SkillsCard skill={skills.ds} />
          <SkillsCard skill={skills.ai} />
          <SkillsCard skill={skills.web} />
        </div>
      </div>
    </div>
  );
}

export default About;
