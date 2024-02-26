import { createBrowserRouter } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/blue",
        element: <Blue />,
      },
      {
        path: "/red",
        element: <Red />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
