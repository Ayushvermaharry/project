// auth import
import Login from "../pages/authentication/Login";
import NotFound from "../pages/NotFound";
//protectionn import
import Protected from "./Protected";
import MinimalLayout from "../layouts/MinimalLayout";

import React from 'react'


const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Protected Component={Login} />
        },
        {
            path: '/not-found',
            element: <Protected Component={NotFound} />
        },
        {
            path: '*',
            element: <Protected Component={NotFound} />
        }
    ]
            
};

export default AuthenticationRoutes;