import "../css/home.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner.js";
import Categorie from "./Categorie.js";
import Slide from "./Slider.js";
import ProductsList from "./ProductsList";
function Home(props) {
  const api_url = "https://fakestoreapi.com/products";

  //  state

  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategorie, setActiveCategories] = useState("allProduct");

  const handelActiveCat = (e) => {
    e.preventDefault();
    const cat = e.target.attributes.getNamedItem("data-cat").value;
    setActiveCategories(cat);
    if (cat == "allProduct") {
      getAllProducts();
      return;
    }
    getSpecsificCat(cat);
  };

  // get data

  const getAllProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getSpecsificCat = (cat) => {
    fetch(`${api_url}/category/${cat}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  // useing effect

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  // function return

  return (
    <>
      <Categorie
        activeCategorie={activeCategorie}
        heanelActive={handelActiveCat}
        categories={categories}
      />
      <Slide />

      <ProductsList product={product} />
    </>
  );
}
export default Home;
