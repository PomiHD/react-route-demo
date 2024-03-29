import { useParams } from "react-router-dom";
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
export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Details Page</h1>
      <p>Product ID: {params.productId}</p>
      <p>
        Product Title:{" "}
        {PRODUCTS.find((prod) => prod.id === params.productId).title}
      </p>
      <p>
        Product Description:{" "}
        {PRODUCTS.find((prod) => prod.id === params.productId).description}
      </p>
    </>
  );
}
