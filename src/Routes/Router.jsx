import React from 'react';

import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: '',
                element: <h3>Outlate</h3>
                // Component: Home
            },
        ]
    },
]);

export default router;