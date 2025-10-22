import React from "react";

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import Hero from "../Pages/Hero";
import PlantCard from "../Components/PlantCard";
import PlantsDetails from "../Pages/PlantsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch('/plants.json'),
        Component: PlantCard
      },
    ]
  },
  {
    path: 'plant/:id',
    Component: PlantsDetails
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
