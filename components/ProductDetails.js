import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/productDetails.css";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

function ProductDetails() {
  const carts = useSelector((store) => store.carts);
  const dispatch = useDispatch();
  const params = useParams();
  const { productId } = params;
  const api_url = `https://fakestoreapi.com/products/${productId}`;
  const [product, setProduct] = useState({});

  const addToCardLoc = (pro) => {
    dispatch(addToCart(pro));
  };
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <Spinner />
      ) : (
        <div className="row mt-3 ">
          <div className="col-lg-6 col-12">
            <img className="img-product" src={product.image} />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="mt-3 mt-lg-0">{product.title}</h1>
            <span className="fs-6"> Rating </span>
            <span className="badge bg-secondary fs-6 ">
              {product.rating?.rate}
            </span>

            <hr></hr>
            <h5>About This Item </h5>
            <p>{product.description}</p>
            <br />
            <p className="price"> Price {product.price} </p>
            <span> </span>
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
      )}
    </div>
  );
}

export default ProductDetails;
