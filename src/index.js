import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "./index.css";
import App from "./App";
import RootRoute from "./Components/Route/RootRoute";
import ErrorPage from "./Components/Route/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/app/dropdown/:appId",
        element: <App />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
