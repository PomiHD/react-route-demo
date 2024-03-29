import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="/products">Products</Link> page.
      </p>
    </>
  );
}
