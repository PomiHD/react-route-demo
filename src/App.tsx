import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";

// define the router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
// ]);

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />,
    <Route path="/products" element={<Products />} />,
  </Route>,
);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
