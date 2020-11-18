import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Error404 from "./components/Error404";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  return (
    <div className="st-wrapper">
      <Router>
        <Navbar />
        <div className="st-wallpaper">
          <ParticlesComponent />
        </div>
        <div className="st-content">
          <div className="st-content-center">
            <div className="head-dash-line" />
            <Switch>
              <Route path={["/", "/about"]} component={About} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} exact />
              {/* <Route path="/st-admin" component={} />
                <Route path="/st-admin/library" component={} />
                <Route path="/st-admin/edit-category/:slug" component={} />
                <Route path="/st-admin/edit-blog-post/:slug" component={} />
                <Route path="/st-admin/edit-portfolio-post/:slug" component={} /> */}
              <Route path={["*", "/404"]} component={Error404} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
