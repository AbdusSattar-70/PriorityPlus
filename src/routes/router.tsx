import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
