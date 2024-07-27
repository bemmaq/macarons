import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";

import Contact from "../../widgets/Contact/Contact";
import News from "../../widgets/News/News";
import ProductSet from "../../features/ProductSet/ui/ProductSet";
import Garant from "../../features/garant/Garant";
import PopularSets from "../../features/PopularSets/data/ui/PopularSetsTwo";

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
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/news',
                element:<News/>
            },
            {
                path:'/PopularSets',
                element:<PopularSets/>
            }
        ]
    },
]);

export default router;
