import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleLink from "../components/ArticleLink";
import DisplayHandler from "../components/DisplayHandler";
import Error500 from "../components/Error500";
import Error404 from "../components/Error404";
import HelmetComponent from "../components/HelmetComponent";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import HttpRequest from "../hooks/HttpRequest";
import HttpResponseError from "../components/HttpResponseError";
import SeeAllCategories from "../components/SeeAllCategories";

const CATEGORY_API_URL_PREFIX =
  process.env.REACT_APP_BASE_ADDRESS +
  process.env.REACT_APP_API_BLOG_CATEGORY_PREFIX;

function Category({ match }) {
  let { slug } = useParams();

  const CATEGORY_URL = CATEGORY_API_URL_PREFIX + slug;
  let category_articles = HttpRequest(CATEGORY_URL);

  let content = null;

  if (category_articles.loading) {
    content = <LoaderIcon />;
  }

  let meta = {
    title: slug,
    desc: null,
  };

  if (category_articles.data && !category_articles.error) {
    if (!category_articles.data.data) {
      content = "No articles found.";
    } else {
      // console.log(category_articles.data.data);
      meta = {
        title: category_articles.data.data.name,
        desc: category_articles.data.data.name,
      };
      content = category_articles.data.data.Posts.map((article, key) => {
        return <ArticleLink key={key} info={article} />;
      });
    }
  }

  if (category_articles.error) {
    content = HttpResponseError(category_articles);
    slug="";
  }

  const category = (
    <div>
      <PageTitle title="Category" />
      <HelmetComponent meta={meta} />
      <SeeAllCategories />
      <h1>{slug}</h1>
      {content}
    </div>
  );

  return <DisplayHandler match={match} display={category} />;
}

export default Category;
