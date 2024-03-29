import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  //why useNavigate() instead of <Link>?
  //useNavigate() is used to navigate programmatically, while <Link> is used to navigate through the UI.
  //for example, when you want to navigate after a form submission or after a button click.
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="/products">Products</Link> page.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
