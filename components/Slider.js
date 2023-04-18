import img1 from "../images/pexels-andrea-piacquadio-3769747.jpg";
import img2 from "../images/pexels-anna-shvets-4482900.jpg";
import img3 from "../images/pexels-cottonbro-studio-3944405.jpg";
import "../css/slide.css";
function Slide() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item  active">
          <img src={img1} className="d-block w-100 img-slides" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100 img-slides" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100 img-slides " alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slide;
