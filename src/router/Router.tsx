import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import Ct_OrderPage from "../pages/Ct_Order.tsx";
import Login from "../pages/login.tsx";
import Register from "../pages/register.tsx";
import Layout from "./Layout.tsx";
import ErrorPage from "./ErrorPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: "ct_orderPage",
                element: <Ct_OrderPage/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
])