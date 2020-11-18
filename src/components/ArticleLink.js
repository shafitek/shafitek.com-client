import React from 'react'
import { Link } from 'react-router-dom'
import "./ArticleLink.scss";
import {getDateFromDateStr} from "../utils.js";
import CategoryLink from "./CategoryLink";

function ArticleLink(props) {
  let categories = CategoryLink(props.info.Categories);
  
    return (
      <div className="card box article-link">
        <div>{getDateFromDateStr(props.info.createdAt)}</div>
        <h3>
          <Link to={"/blog/" + props.info.slug}>{props.info.title}</Link>
        </h3>
        <div className="">{props.info.excerpt}</div>
        <div className="categories-div">{categories}</div>
      </div>
    );
}

export default ArticleLink;
