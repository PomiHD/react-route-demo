import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
  },
  {
    id: "p3",
    title: "Green Trousers",
  },
];
export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
