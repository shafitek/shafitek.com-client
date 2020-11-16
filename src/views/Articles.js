import React from "react";
import { Link } from "react-router-dom";
import ArticleLink from "../components/ArticleLink";
import Error500 from "../components/Error500";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import HttpRequest from "../hooks/HttpRequest";

const ALL_ARTICLES_API_URL =
  process.env.REACT_APP_BASE_ADDRESS + process.env.REACT_APP_API_BLOG;

function Articles() {
  let articles = HttpRequest(ALL_ARTICLES_API_URL);

  let content = null;

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
    content = <Error500 />;
  }

  return (
    <div className="blog-page">
      <PageTitle title="Blog" />
      <Link
        to="/blog/categories"
        style={{
          textDecoration: "underline",
          position: "relative",
          right: "0px",
        }}
      >
        See All Categories
      </Link>
      <div className="row">
        <div className="col">{content}</div>
      </div>
    </div>
  );
}

export default Articles;
