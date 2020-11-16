import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import DisplayHandler from "../components/DisplayHandler";
import "./Article.scss";
import hljs from "highlight.js";
import HttpRequest from "../hooks/HttpRequest";
import { createMarkup, getDateFromDateStr } from "../utils.js";
import CategoryLink from "../components/CategoryLink";
import LoaderIcon from "../components/LoaderIcon";
import Error500 from "../components/Error500";

const ARTICLE_API_URL_PREFIX =
  process.env.REACT_APP_BASE_ADDRESS +
  process.env.REACT_APP_API_BLOG_ARTICLE_PREFIX;

function Article({ match }) {
  const { slug } = useParams();

  const ARTICLE_URL = ARTICLE_API_URL_PREFIX + slug;

  const article = HttpRequest(ARTICLE_URL);

  let content = null;

  if (article.loading) {
    content = <LoaderIcon />;
  }

  const nodeRef = useCallback((node) => {
    if (node) {
      hljs.initHighlighting();
      const nodes = node.querySelectorAll("pre");
      nodes.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  });

  if (article.data && !article.error) {
    const post = article.data.data;
    if (!post) {
      return <Redirect to="/404" />
    }

    let categories = CategoryLink(post.Categories);
    
    
    content = (
      <Fragment>
        <h2 className="blog-post-title">{post.title}</h2>
        {getDateFromDateStr(post.createdAt)}
        <div className="categories-div">
          Categories: {categories}
        </div>
        <div
          ref={nodeRef}
          className="blog-post"
          dangerouslySetInnerHTML={createMarkup(post.html)}
          />
      </Fragment>
    );
  }
  
  if (article.error) {
    // console.log(article.error);
    content = <Error500 />;
  }

  return <DisplayHandler match={match} display={content} />;
}

export default Article;
