import ProductItem from "./ProductItem.tsx";
import Pagination from "./Pagination.tsx";

import "../css/components/ListProducts.css";
import {useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

interface ListProductsProps {
    type: string;
    start?: number;
    end?: number;
    tourType?: string;
    pagination?: boolean;
}

export default function ListProducts({type, start, end, tourType, pagination}: ListProductsProps) {
    const tours = useSelector((state: RootState) => state.products.tours);
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
    if (type === "tour" && tourType) {
        products = tours.filter(product => product.tour_type === tourType);
    }

    // paging thingy
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (start == null && end == null) {
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
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
        {pagination && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        )}
    </>);
}