import { Link, useParams } from "react-router-dom";
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
        {/*relative="path" vs relative="route". */}
        {/*relative="path" will navigate to the path of the parent route, */}
        {/*simply removing the last segment of the current active path,*/}
        {/*while relative="route" will navigate to the parent route itself,*/}
        <Link to=".." relative={"path"}>
          Back
        </Link>
      </p>
    </>
  );
}
