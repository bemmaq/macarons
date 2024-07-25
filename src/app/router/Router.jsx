import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";

import Contact from "../../widgets/Contact/Contact"

import Banner from "../../features/HomePage/About/ui/Banner";
import SetPage from "../../features/SetPage/ui/SetPage";
import Sale from "../../features/Sale/ul/Sale";


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
                path:'/Contact',
                element:<Contact/>
            }

        ]
    },
]);

export default router;
