import FlightItem from "./FlightItem.tsx";

import {useState} from "react";
import {useSelector} from "react-redux";

import "../../css/components/ListProducts.css";

import type {RootState} from "../../store/store.ts";

import Pagination from "../Pagination.tsx";

interface ListFlightsProps {
    start?: number;
    end?: number;
    flightType?: string;
    tripType?: string;
}

export default function ListFlights({start, end, flightType, tripType}: ListFlightsProps) {
    let flights = useSelector((state: RootState) => state.products.flights);
    if (flights.length > 0 && flightType) {
        flights = flights.filter(flight => flight.flight_type === flightType);
    }
    let filteredFlights = flights.filter((flight) => {
        return flight.trip_type === tripType;
    });

    // paging thingy
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredFlights.length / itemsPerPage);
    if (start == null && end == null) {
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
    }

    return (<>
        <div className="list-products list-flights">
            {filteredFlights.slice(start, end).map((flight: any) => (
                <FlightItem key={`flight-${flight.id}`} flight={flight}/>
            ))}
            {filteredFlights.length === 0 && (
                <p>Hiện chưa có sản phẩm nào.</p>
            )}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
    </>);
}