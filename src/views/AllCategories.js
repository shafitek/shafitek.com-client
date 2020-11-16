import React from 'react'
import { Link } from 'react-router-dom';
import Error500 from '../components/Error500';
import LoaderIcon from '../components/LoaderIcon';
import PageTitle from '../components/PageTitle'
import HttpRequest from '../hooks/HttpRequest';

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

    if (categroies.data && !categroies.error) {
      content = categroies.data.data.map((category, key) => {
        return (
          <div key={key} className="category-link">
            <h5>
              <Link to={CATEGORIES_URL + category.slug}>{category.name}</Link>
            </h5>
          </div>
        );
      });
    }

    if (categroies.error) {
      // console.log(categroies.error);
      content = <Error500 />;
    }

    return (
      <div className="categories-page">
        <PageTitle title="Categories" />
        <div style={{height: `1rem`}} />
        {content}
      </div>
    );
}

export default AllCategories
