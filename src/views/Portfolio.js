import React from "react";
import Error500 from "../components/Error500";
import LoaderIcon from "../components/LoaderIcon";
import PageTitle from "../components/PageTitle";
import PortfolioProject from "../components/PortfolioProject";
import HttpRequest from "../hooks/HttpRequest";

const ALL_ARTICLES_API_URL =
  process.env.REACT_APP_BASE_ADDRESS + process.env.REACT_APP_API_PORTFOLIO;

function Portfolio() {
  let portfolio_post = HttpRequest(ALL_ARTICLES_API_URL);

  let content = null;

  if(portfolio_post.loading) {
    content = <LoaderIcon />;
  }

  if (portfolio_post.data && !portfolio_post.error) {
    // console.log(portfolio_post.data.data)
    if (!portfolio_post.data.data || portfolio_post.data.data.length == 0) {
      content = "Uh oh... Something happened. Please check back in a few minutes or you can check my GitHub.";
    } else {
      content = portfolio_post.data.data.map((article, key) => {
        return <PortfolioProject key={key} info={article} />;
      });
    }
  }

  if (portfolio_post.error) {
    content = <Error500 />;
  }

  return (
    <div className="portfolio-page">
      <PageTitle title="Portfolio" />
      <div className="row">
        <div className="col">{content}</div>
      </div>
    </div>
  );
}

export default Portfolio;
