import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PortfolioProject.scss";
import no_image from "../images/no-image.png";
import { createMarkup } from "../utils";

function PortfolioProject(props) {
  let content_image = null;
  let content_link_img = null;

  if (props.info.post_img) {
    content_image = (
      // <a href={!props.info.link ? "#" : props.info.link} target="blank">
        <div
          className="st-portfolio-project-image"
          style={{
            backgroundImage: `url(${
              !props.info.post_img ? no_image : props.info.post_img
            })`,
          }}
        ></div>
      // </a>
    );
  }

  if (props.info.link) {
    content_link_img = (
      <span className="github-link">
        <FontAwesomeIcon icon={faGithub} />
      </span>
    );
  }

  return (
    <div className="card box st-portfolio-project">
      <div className="st-portfolio-project-inner">
        {content_image}
        <h4 className="st-portfolio-project-title">
          <a href={!props.info.link ? "#" : props.info.link} target="blank">
            {props.info.title}
          </a>
          {content_link_img}
        </h4>
        <div
          dangerouslySetInnerHTML={createMarkup(props.info.html)}
          className="st-portfolio-project-excerpt"
        />
      </div>
    </div>
  );
}

export default PortfolioProject;
