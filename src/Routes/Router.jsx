import React from "react";

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
