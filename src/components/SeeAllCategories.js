import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function SeeAllCategories() {
    return (
      <div style={{marginBottom: "1rem"}}>
        <Link
          to="/blog/categories"
          className="see-all-categories"
        >
          See All Categories
        </Link>
      </div>
    );
}

export default SeeAllCategories
