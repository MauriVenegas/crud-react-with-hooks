import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "./index.css";
import Crud from "./components/Crud";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./components/route/RootRoute";
import ErrorPage from "./components/route/ErrorPage";

import Redux from "./components/PokemonesRedux";
import { Provider } from "react-redux";
import GenerateStore from "./components/redux/Store";

const store = GenerateStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/crud",
        element: <Crud />,
      },
      {
        path: "/redux",
        element: <Provider store={store}> <Redux /> </Provider>,
      },
      {
        path: "/crud/dropdown/:id",
        element: <Crud />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode: renderiza 2 veces los componentes (de forman intencional) para ayudarte a detectar efectos secundarios
  // de la renderización. Sólo ocurre durante el desarrollo.
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
