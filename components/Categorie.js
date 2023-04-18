import React from "react";

function Categorie(props) {
  const addActive = (cat) => {
    return cat == props.activeCategorie ? "active" : "";
  };
  const categoriesRend = props.categories.map((cat) => {
    return (
      <li
        key={cat}
        className="nav-item col-sm-6 mb-sm-2 mb-lg-0 col-lg-2 text-center"
      >
        <a
          className={`nav-link link-2 ${addActive(cat)} `}
          data-cat={cat}
          onClick={props.heanelActive}
          href="#"
        >
          {cat}
        </a>
      </li>
    );
  });

  return (
    <div className="container-fluid  ">
      <ul className="nav py-1 row justify-content-between ">
        <li className="nav-item dropdown  col-sm-6 mb-sm-2 mb-lg-0 col-lg-2 text-center ">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            All Categories
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item col-sm-6 mb-sm-2 mb-lg-0 col-lg-2 text-center">
          <a
            className={`nav-link link-2  ${addActive("allProduct")} `}
            data-cat="allProduct"
            onClick={props.heanelActive}
            href="#"
          >
            All Product
          </a>
        </li>

        {categoriesRend}
      </ul>
    </div>
  );
}

export default Categorie;
