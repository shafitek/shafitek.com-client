import React from "react";
import { Link } from "react-router-dom";
import Error404 from "../components/Error404";
import Error500 from "../components/Error500";
import HelmetComponent from "../components/HelmetComponent";
import HttpResponseError from "../components/HttpResponseError";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import HttpRequest from "../hooks/HttpRequest";

const CATEGORIES_API_URL =
  process.env.REACT_APP_BASE_ADDRESS +
  process.env.REACT_APP_API_BLOG_CATEGORIES;

const CATEGORIES_URL = process.env.REACT_APP_BLOG_CATEGORIES;

function AllCategories() {
  const categroies = HttpRequest(CATEGORIES_API_URL);

  let content = null;

  if (categroies.loading) {
    content = <LoaderIcon />;
  }

  let meta = {
    title: "Categories",
    desc: "All blog categories.",
  };

  if (categroies.data && !categroies.error) {
    content = categroies.data.data.map((category, key) => {
      return (
        <div key={key} className="category-link">
          <Link to={CATEGORIES_URL + category.slug}>
            <h5 style={{ fontWeight: "bold", display: "inline-block" }}>
              {category.name}
            </h5>
          </Link>
        </div>
      );
    });
  }

  if (categroies.error) {
    content = HttpResponseError(categroies);
  }

  return (
    <div className="categories-page">
      <HelmetComponent meta={meta} />
      <PageTitle title="Categories" />
      <div style={{ height: `1rem`, lineHeight: "1.5rem" }} />
      {content}
    </div>
  );
}

export default AllCategories;
