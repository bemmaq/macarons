import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";
import ProductSet from "../../features/ProductSet/ui/ProductSet";
import GiftSets from "../../features/GiftSets/UI/GiftSets";
import WeddingSet from "../../features/WeddingSet/UI/WeddingSet";

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
            },
            {
                path:'/weddingSet',
                element:<WeddingSet/>
            }

        ]
    },
]);

export default router;
