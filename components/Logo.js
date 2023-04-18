import logoImg from "../images/logo.png";

function Logo(props) {
  return (
    <div className="bg-white rounded  px-3">
      <img src={logoImg} height={props.height} width={props.width} />
    </div>
  );
}

export default Logo;
