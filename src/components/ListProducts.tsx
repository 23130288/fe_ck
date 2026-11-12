import ProductItem from "./ProductItem.tsx";

import "../css/components/ListProducts.css";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

interface ListProductsProps {
    type: string;
    start: number;
    end: number;
    tourType: string;
}

export default function ListProducts({type, start, end, tourType}: ListProductsProps) {
    const tours = useSelector(
        (state: RootState) => state.products.tours
    );
    let products = useSelector((state: RootState) => {
        switch (type) {
            case "tour":
                return state.products.tours;
            case "flight":
                return state.products.flights;
            case "hotel":
                return state.products.hotels;
            case "attraction":
                return state.products.attractions;
            case "a-day-tour":
                return state.products.aDayTours;
            default:
                return [];
        }
    });
    if (type === "tour") {
        products = tours.filter(product => product.tour_type === tourType);
    }

    return (<>
        <div className="list-products">
            {products.slice(start, end).map((product: any) => (
                <ProductItem key={`${type}-${product.id}`} product={product} type={type}/>
            ))}
            {products.length === 0 && (
                <p>Hiện chưa có sản phẩm nào.</p>
            )}
        </div>
    </>);
}