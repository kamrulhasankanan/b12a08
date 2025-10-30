import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPages/ErrorPage';
import Home from '../pages/Home/Home';
import AppsItems from '../pages/AppsItems/AppsItems';
import Installation from '../pages/Installation/Installation';
import AppsDetails from '../components/AppsDetails/AppsDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
        {
            index: true,
            path:"/",
            Component: Home,
            loader: ()=> fetch('./appsData.json')
        },
        {
          path:'/appsItems',
          Component: AppsItems
        },
        {
          path:'/installation',
          Component: Installation
        },
        {
          path: '/app/:id',
          Component: AppsDetails
        }
    ]
  },
]);
