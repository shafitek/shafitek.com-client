import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import DisplayHandler from "../components/DisplayHandler";
import "./Article.scss";
import hljs from "highlight.js";
import HttpRequest from "../hooks/HttpRequest";
import { createMarkup, getDateFromDateStr } from "../utils.js";
import CategoryLink from "../components/CategoryLink";
import LoaderIcon from "../components/LoaderIcon";
import HelmetComponent from "../components/HelmetComponent";
import { DiscussionEmbed } from "disqus-react";
import HttpResponseError from "../components/HttpResponseError";

const ARTICLE_API_URL_PREFIX =
  process.env.REACT_APP_BASE_ADDRESS +
  process.env.REACT_APP_API_BLOG_ARTICLE_PREFIX;

function Article({ match }) {
  const { slug } = useParams();

  const ARTICLE_API_URL = ARTICLE_API_URL_PREFIX + slug;

  const ARTICLE_URL =
    process.env.REACT_APP_DOMAIN + process.env.REACT_APP_BLOG + slug;

  const article = HttpRequest(ARTICLE_API_URL);

  let content = null;

  if (article.loading) {
    content = <LoaderIcon />;
  }

  let meta = {
    title: "Article",
    desc: null,
  };

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
      return <Redirect to="/404" />;
    }

    meta = {
      title: post.title,
      desc: post.excerpt,
    };

    let categories = CategoryLink(post.Categories);

    content = (
      <Fragment>
        <HelmetComponent meta={meta} />
        <div className="blog-post box">
          <h2 className="blog-post-title">{post.title}</h2>
          {getDateFromDateStr(post.createdAt)}
          <div className="categories-div">{categories}</div>
          <div
            ref={nodeRef}
            dangerouslySetInnerHTML={createMarkup(post.html)}
          />
          <DiscussionEmbed
            shortname="shafitek-com"
            config={{
              url: ARTICLE_URL,
              identifier: slug,
              title: post.title,
            }}
          />
        </div>
      </Fragment>
    );
  }

  if (article.error) {
    content = HttpResponseError(article);
  }

  return <DisplayHandler match={match} display={content} />;
}

export default Article;
