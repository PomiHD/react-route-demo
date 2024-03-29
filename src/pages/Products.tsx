import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
  },
];
export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
