import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("../src/pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("../src/pages/Checkout"));
const BrowserRouter = createBrowserRouter([
  { path: "*", element: <Home />, errorElement: <div>404 Not Found</div> },
  {
    path: "/Cart",
    element: (
      <Suspense fallback={<Loading />}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "/Checkout",
    element: (
      <Suspense fallback={<Loading />}>
        <Checkout />
      </Suspense>
    ),
  },
]);

export default BrowserRouter;
