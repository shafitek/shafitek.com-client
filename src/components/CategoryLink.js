import React from 'react'
import { Link } from 'react-router-dom';
import "./CategoryLink.scss"

const CATEGORY_URL_PREFIX = "/blog/categories/";

function CategoryLink(categories_array) {
  let categories = null;

  categories = categories_array.map((category, key) => {
    return (
      <li>
        <Link
          className="categories-div-link"
          key={key}
          to={CATEGORY_URL_PREFIX + category.slug}
        >
          {category.name}
        </Link>
      </li>
    );
  });

  const categories_ul = <ul className="categories-ul">{categories}</ul>;

  return categories_ul;
}

export default CategoryLink;
