import Card from "./Card.js";
import { useEffect, useState } from "react";
import Spinner from "./Spinner.js";
import Categorie from "./Categorie.js";
import CartSlice from "../store/slices/cartSlice.js";
import Slide from "./Slider.js";

function ProductsList(props) {
  const product = props.product;

  let productsRend;

  productsRend = product.map((pro) => {
    return (
      <div className="col-lg-3 col-sm-6" key={pro.id}>
        <Card className="col-3" product={pro} />
      </div>
    );
  });

  if (product.length == 0) {
    productsRend = <Spinner />;
  }

  return (
    <div className="container productsList">
      <div className="row">{productsRend} </div>
    </div>
  );
}

export default ProductsList;
