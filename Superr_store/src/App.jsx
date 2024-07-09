import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routes";

const App = () => {
  return <RouterProvider router={BrowserRouter} />;
};

export default App;
