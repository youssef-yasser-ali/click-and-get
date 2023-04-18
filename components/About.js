import Logo from "./Logo";

function About() {
  const a = 0;

  return (
    <div className="container text-center">
      <Logo width={`${50}%`} />

      <h2 className="my-5"> The About Page</h2>

      <div className="fs-5">
        {" "}
        Click and get is a leading local e-shopping platform in the Middle East
        that provides users with multiple choices of products, categories and
        brands to shop online.
      </div>
    </div>
  );
}

export default About;
