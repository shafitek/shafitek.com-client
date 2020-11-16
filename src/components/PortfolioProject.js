import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import "./PortfolioProject.scss";
import hljs from "highlight.js";
import no_image from "../images/no-image.png";
import { createMarkup } from "../utils.js";

// const NO_IMAGE_SRC = process.env.PUBLIC_URL + "/no-image.png";

function PortfolioProject(props) {
  const nodeRef = useCallback((node) => {
    if (node) {
      hljs.initHighlighting();
      const nodes = node.querySelectorAll("pre");
      nodes.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  });

  return (
    // <div className="col-lg-6 col-md-6 col-12 mt-30">
    <div className="card st-portfolio-project">
      <div className="st-portfolio-project-inner">
        <a href="#">
          <div
            className="st-portfolio-project-image"
            style={{ backgroundImage: `url(${no_image})` }}
          ></div>
        </a>
        <h4 className="st-portfolio-project-title">
          <a href="#">{props.info.title}</a>
          <a
            href={!props.info.link ? "#" : props.info.link}
            className="github-link"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h4>
        {/* <div
          ref={nodeRef}
          className="st-portfolio-project-excerpt"
          dangerouslySetInnerHTML={createMarkup(props.info.html)}
        /> */}
        <div className="st-portfolio-project-excerpt">{props.info.excerpt}</div>
      </div>
    </div>
  );
}

export default PortfolioProject;
