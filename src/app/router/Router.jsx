import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import HomePage from "../../features/HomePage/HomePage";

import GiftSets from "../../features/GiftSets/UI/GiftSets";
import ProductSet from "../../features/ProductSet/ui/ProductSet";
import Garant from "../../features/garant/Garant";
import PopularSets from "../../features/PopularSets/data/ui/PopularSetsTwo";
import ProductCart from "../../features/ProductCart/ui/ProductCart";
import NewProduct from "./../../features/NewProduct/ui/NewProduct";
import News from "./../../widgets/News/News";
import CartBlock from './../../widgets/Cart/CartBlock';
import Sale from "../../features/Sale/ul/Sale";
import Assemble from "../../features/Assemble/ui/Assemble";

import DecorationSet from "../../features/decorationSet/ui/DecorationSet";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/productSet",
        element: <ProductSet />,
      },
      {
        path: "/gifttSet",
        element: <GiftSets />,
      },
      {
        path: "garant",
        element: <Garant />,
      },
      {
        path: "/productSet",
        element: <ProductSet />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/cart",
        element: <CartBlock />,
      },
      {
        path: "/PopularSets",
        element: <PopularSets />,
      },
      {
        path: "/ProductCart/:id",
        element: <ProductCart />,
      },
    {
                path:'/decorationSet',
                element:<DecorationSet/>
            }
      {
        path: "/neew",
        element: <NewProduct />,
      },
      {
        path:'/sale/:id',
        element:<Sale/>
      },
      {
        path:'/Assemble',
        element:<Assemble/>
      }
    ],
  },

export default router;
