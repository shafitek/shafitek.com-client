import React from "react";
import { Link } from "react-router-dom";
import ArticleLink from "../components/ArticleLink";
import Error500 from "../components/Error500";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import HelmetComponent from "../components/HelmetComponent";
import HttpRequest from "../hooks/HttpRequest";
import Error404 from "../components/Error404";
import HttpResponseError from "../components/HttpResponseError";
import SeeAllCategories from "../components/SeeAllCategories";

const ALL_ARTICLES_API_URL =
  process.env.REACT_APP_BASE_ADDRESS + process.env.REACT_APP_API_BLOG;

function Articles() {
  let articles = HttpRequest(ALL_ARTICLES_API_URL);

  let content = null;

  let meta = {
    title: "Blog",
    desc: "Reflections, thoughts, and tutorials from a SWE.",
  };

  if (articles.loading) {
    content = <LoaderIcon />;
  }

  if (articles.data && !articles.error) {
    // articles.data.data.rows.forEach(article => {
    //   console.log(article);
    // });
    content = articles.data.data.rows.map((article, key) => {
      return <ArticleLink key={key} info={article} />;
    });
  }

  if (articles.error) {
    content = HttpResponseError(articles);
  }

  return (
    <div className="blog-page">
      <PageTitle title="Blog" />
      <HelmetComponent meta={meta} />
      <SeeAllCategories />
      <div style={{ padding: "10px;" }}>{content}</div>
    </div>
  );
}

export default Articles;
