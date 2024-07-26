import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";
import Contact from "../../widgets/Contact/Contact";
import News  from "../../widgets/News/News";
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
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/news',
                element:<News/>
            }
        ]
    },
]);

export default router;
