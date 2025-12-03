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
import About from "../Pages/About";
import RootLayout from "../Layouts/RootLayout";
import Contact from "../Pages/Contact";
import FAQ from "../Components/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout
      },
      {
        path: 'plants',
        Component: Plants
      },
      {
        path: 'plant/:id',
        element:  <PlantsDetails/> 
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/faq',
        Component: FAQ
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: 'profile',
        Component: MyProfile
      },
]},
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