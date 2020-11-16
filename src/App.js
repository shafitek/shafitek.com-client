import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Error404 from "./views/404";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="st-wrapper">
      <Router>
        <Navbar />
        <div className="st-wallpaper">
          <Particles
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#cd2653",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#2f2f2f",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.39457382081613634,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 2,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 160,
                  color: "#cd2653",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 170.53621458328246,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 138.05312609122865,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
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
