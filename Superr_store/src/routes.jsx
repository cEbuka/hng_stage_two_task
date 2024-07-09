import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react"

const Home = lazy(() => import("../src/pages/Home"))
const Cart = lazy(() => import("../src/components/Cart"))

const BrowserRouter = createBrowserRouter([
    {path: "/",
        element: (<Home/>),
        errorElement: <div>404 Not Found</div>
    },
    {
        path: "/Cart",
        element: (<Cart/>)
    }
]);

export default BrowserRouter;
