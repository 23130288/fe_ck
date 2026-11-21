import {useParams} from "react-router";
import {useSelector} from "react-redux";

import "../css/ProductDetail.css";

import TourDetail from "./ProductDetail/TourDetail.tsx";
import HotelDetail from "./ProductDetail/HotelDetail.tsx";

import type {RootState} from "../store/store.ts";

export default function ProductDetail() {
    const {type, id} = useParams();
    const product = useSelector((state: RootState) => {
        let products: any[] = [];
        if (type === "tour") {
            products = state.products.tours;
        } else if (type === "hotel") {
            products = state.products.hotels;
        } else if (type === "flight") {
            products = state.products.flights;
        } else if (type === "attraction") {
            products = state.products.attractions;
        } else if (type === "a-day-tour") {
            products = state.products.aDayTours;
        }
        return products.find(product => product.id === Number(id));
    });
    if (!product) {
        return (
            <div className="container">
                <h1>Không tìm thấy sản phẩm!</h1>
            </div>
        );
    }
    return (
        <div className="container">
            {type === "tour" && <TourDetail product={product} />}
            {type === "hotel" && <HotelDetail product={product} />}
        </div>
    );
}