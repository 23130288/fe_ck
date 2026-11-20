import {createBrowserRouter} from "react-router";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase.ts";

import MainPage from "../pages/MainPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import Ct_OrderPage from "../pages/Ct_Order.tsx";
import {User} from '../pages/User.tsx'

import Login from "../pages/login.tsx";
import Register from "../pages/register.tsx";

import Layout from "./Layout.tsx";
import ErrorPage from "./ErrorPage.tsx";

import {store} from "../store/store.ts";

import type {Tour, Hotel, Flight} from "../store/slice/ProductSlice.ts";
import type Review from "../type/Review";

import {loadTours, loadFlights, loadHotels, loadAttractions, loadADayTours} from "../store/slice/ProductSlice.ts";

import type Order from "../type/Order";
import {loadOrders} from "../store/slice/OrderSlice";

const productLoader = async () => {
    try {
        const [tours, flights, hotels] = await Promise.all([
            getProductsWithReviews("tours"),
            getProductsWithReviews("flights"),
            getProductsWithReviews("hotels")
        ]);
        store.dispatch(loadTours(tours as Tour[]));
        store.dispatch(loadFlights(flights as Flight[]));
        store.dispatch(loadHotels(hotels as Hotel[]));
        store.dispatch(loadAttractions(tours as Tour[]));
        store.dispatch(loadADayTours(tours as Tour[]));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const getProductsWithReviews = async (type: "tours" | "hotels" | "flights") => {
    const productQuery = await getDocs(collection(db, "products", "catalog", type));
    const reviewQuery = await getDocs(collection(db, "reviews", "catalog", type));
    const reviews: Review[] = [];
    for (const document of reviewQuery.docs) {
        const review = {...document.data(), id: Number(document.id)} as Review;
        reviews.push(review);
    }
    if (type === "tours") {
        const products: Tour[] = [];
        for (const document of productQuery.docs) {
            const product = {...document.data(), id: Number(document.id), reviews: reviews} as Tour;
            products.push(product);
        }
        return products;
    }
    if (type === "hotels") {
        const products: Hotel[] = [];
        for (const document of productQuery.docs) {
            const product = {...document.data(), id: Number(document.id), reviews: reviews} as unknown as Hotel;
            products.push(product);
        }
        return products;
    }
    const products: Flight[] = [];
    for (const document of productQuery.docs) {
        const product = {...document.data(), id: Number(document.id), reviews: reviews} as unknown as Flight;
        products.push(product);
    }
    return products;
};

const orderLoader = async () => {
    try {
        const query = await getDocs(collection(db, "orders"));
        const orders: Order[] = [];
        for (const document of query.docs) {
            const order = {...document.data(), id: Number(document.id),} as Order;
            orders.push(order);
        }
        store.dispatch(loadOrders(orders));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

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
                element: <User/>,
                loader: orderLoader
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