import { Link } from "react-router-dom";
import "../css/card.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

function Card(props) {
  const maxDitals = 70;
  const dispatch = useDispatch();

  const { product } = props;

  const addToCardLoc = (pro) => {
    dispatch(addToCart(pro));
  };
  return (
    <div className="card mb-3 p-3">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description.length < maxDitals
            ? product.description
            : product.description.slice(0, maxDitals) + " ....."}
        </p>
        <p className="price">{product.price} $ </p>
        <div className="d-flex justify-content-between">
          <Link to={`product/${product.id}`} className="btn btn-primary">
            Details
          </Link>
          <button
            className="btn btn-info"
            onClick={() => {
              addToCardLoc(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
