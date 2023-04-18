import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import { useSelector } from "react-redux";

function Navbar() {
  const cardsNumber = useSelector((data) => data.carts.length);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Logo height={50} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-4 ">
              <li className="nav-item">
                <Link
                  className="nav-link active p-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3 " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3" to="/help">
                  help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3" to="/cart">
                  cart
                  <span className=""> {cardsNumber}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
