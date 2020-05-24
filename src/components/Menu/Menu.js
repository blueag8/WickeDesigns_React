import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../Views/About";
import Portfolio from "../../Views/Portfolio";
import Contact from "../../Views/Contact";

import "./Menu.scss";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/about", label: "About" },
    { to: "/", label: "Home" },
    { to: "/Contact", label: "Contact" },
    { to: "/Portfolio", label: "Portfolio" }
  ];
  const menuRef = useRef();

  return (
    <Router>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button
            className="navbar-toggle collapsed"
            onClick={setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <div id="navbar" class="navbar-collapse collapse" useRef={menuRef}>
            <ul className="nav navbar-nav navbar-right">
              {links.map(links => (
                <li
                  className="Menu-list-item Menu-link"
                  onClick={() => setMenuOpen(false)}
                  key={links}
                >
                  <Link
                    to={links.to}
                    className="Menu-list-item Menu-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {links.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </nav>
    </Router>
  );
}
