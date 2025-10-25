import React from "react";

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import PlantsDetails from "../Pages/PlantsDetails";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import PlantsCard from "../Components/PlantsCard";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: PlantsCard
      },
    ]
  },
  {
    path: 'plants',
    Component: Plants
  },
  {
    path: 'profile',
    Component: MyProfile
  },
  {
    path: 'plant/:id',
    element: <PrivateRoute> <PlantsDetails/> </PrivateRoute>
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
        path: 'forgot-password',
        Component: ForgotPassword
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;