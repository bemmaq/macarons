import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";
import ProductSet from "../../features/ProductSet/ui/ProductSet";

import Contact from "../../widgets/Contact/Contact"

import Banner from "../../features/HomePage/About/ui/Banner";
import SetPage from "../../features/SetPage/ui/SetPage";
import Sale from "../../features/Sale/ul/Sale";
import Garant from "../../features/garant/Garant";


const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },

            {
                path:'garant',
                element:<Garant/>
            },
      


            {
                path: '/productSet',
                element:<ProductSet/>


            {
                path:'/Contact',
                element:<Contact/>

            }

        ]
    },
]);

export default router;
