import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";

import GiftSets from "../../features/GiftSets/UI/GiftSets";

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
                path:'/productSet',
                element:<ProductSet/>
            },
            {
                path:'/gifttSet',
                element:<GiftSets/>
            }

        ]
    },
]);

export default router;
