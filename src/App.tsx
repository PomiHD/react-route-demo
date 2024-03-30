import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import Error from "./pages/Error.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

// define the router
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
