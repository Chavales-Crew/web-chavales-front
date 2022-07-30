import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-3">
            <FontAwesomeIcon icon={faBars} className="h-full" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link to="/second">Second Page</Link>
            </li>
            <li>
              <Link to="/third">Third Page</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Chavales Crew
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/second">Second Page</Link>
          </li>
          <li>
            <Link to="/third">Third Page</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost btn-circle p-2"
          href="https://www.github.com/ChavalesCrew"
        >
          <FontAwesomeIcon icon={faGithub} className="h-full" />
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;
