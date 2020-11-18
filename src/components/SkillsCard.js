import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SkillsCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mx-auto">
      <div class="st-service">
        <span class="st-service-icon">
          <FontAwesomeIcon icon={props.skill.icon} />
        </span>
        <h5>{props.skill.skill}</h5>
        {/* <p>{props.skill.desc}</p> */}
      </div>
    </div>
  );
}

export default SkillsCard;
