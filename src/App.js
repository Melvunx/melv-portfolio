import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Experience from "./pages/Experience";
import Formation from "./pages/Formation";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/formation",
        element: <Formation />,
      },
      {
        path: "/projet",
        element: <Projet />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
