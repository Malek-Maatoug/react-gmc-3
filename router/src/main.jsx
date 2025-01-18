import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import SinglePage from "./page/SinglePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
const X = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "singlePage/:id",
        element: <SinglePage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={X} />
  </StrictMode>
);
