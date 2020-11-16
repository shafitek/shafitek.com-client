import React from 'react'
import { Link } from 'react-router-dom';
import "../App.scss"

const CATEGORY_URL_PREFIX = "/blog/categories/";

function CategoryLink(categories_array) {
  let categories = null;

  categories = categories_array.map((category, key) => {
    return (
      <Link
        className="categories-div-link"
        key={key}
        to={CATEGORY_URL_PREFIX + category.slug}
      >
        {category.name}
      </Link>
    );
  });

  return categories;
}

export default CategoryLink;
