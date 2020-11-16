import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import ArticleLink from "../components/ArticleLink";
import DisplayHandler from "../components/DisplayHandler";
import Error500 from "../components/Error500";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import HttpRequest from "../hooks/HttpRequest";

const CATEGORY_API_URL_PREFIX =
  process.env.REACT_APP_BASE_ADDRESS +
  process.env.REACT_APP_API_BLOG_CATEGORY_PREFIX;

function Category({ match }) {
  const { slug } = useParams();

  const CATEGORY_URL = CATEGORY_API_URL_PREFIX + slug;
  let category_articles = HttpRequest(CATEGORY_URL);

  let content = null;

  if (category_articles.loading) {
    content = <LoaderIcon />;
  }

  if (category_articles.data && !category_articles.error) {
    if (!category_articles.data.data) {
      content = "No articles found.";
    } else {
      // console.log(category_articles.data.data);
      content = category_articles.data.data.Posts.map((article, key) => {
        return <ArticleLink key={key} info={article} />;
      });
    }
  }

  if (category_articles.error) {
    // console.log(category_articles.error);
    content = <Error500 />;
  }

  const category = (
    <div>
      <PageTitle title="Category" />
      <h1>{slug}</h1>
      <div className="row">
        <div className="col">{content}</div>
      </div>
    </div>
  );

  return <DisplayHandler match={match} display={category} />;
}

export default Category;
