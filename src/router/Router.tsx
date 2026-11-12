import {createBrowserRouter} from "react-router";

import MainPage from "../pages/MainPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import Ct_OrderPage from "../pages/Ct_Order.tsx";
import {User} from '../pages/User.tsx'

import Login from "../pages/login.tsx";
import Register from "../pages/register.tsx";

import Layout from "./Layout.tsx";
import ErrorPage from "./ErrorPage.tsx";

import tours from "../json/product/tour.json";
import hotels from "../json/product/hotel.json";
import flights from "../json/product/flight.json";
import type {Tour, Hotel, Flight} from "../store/slice/ProductSlice.ts";

import {store} from "../store/store.ts";
import {loadTours,
    loadFlights,
    loadHotels,
    loadAttractions,
    loadADayTours}
    from "../store/slice/ProductSlice.ts";

const productLoader = async () => {
    store.dispatch(loadTours(tours as Tour[]));
    store.dispatch(loadFlights(flights as Flight[]));
    store.dispatch(loadHotels(hotels as Hotel[]));
    store.dispatch(loadAttractions(tours as Tour[]));
    store.dispatch(loadADayTours(tours as Tour[]));
    return true;
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
                loader: productLoader
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: 'product-detail/:type/:id',
                element: <ProductDetail/>,
                loader: productLoader
            },
            {
                path: "ct_orderPage",
                element: <Ct_OrderPage orders={null}/>
            },
            {
                path: "user",
                element: <User/>
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