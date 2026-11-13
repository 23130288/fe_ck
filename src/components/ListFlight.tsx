import FlightItem from "./FlightItem.tsx";

import "../css/components/ListProducts.css";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

interface ListFlightsProps {
    start?: number;
    end?: number;
    flightType?: string;
}

export default function ListFlights({start, end, flightType}: ListFlightsProps) {
    let flights = useSelector((state: RootState) => state.products.flights);
    if (flights.length > 0 && flightType) {
        flights = flights.filter(flight => flight.flight_type === flightType);
    }
    return (<>
        <div className="list-products">
            {flights.slice(start, end).map((flight: any) => (
                <FlightItem key={`flight-${flight.id}`} flight={flight}/>
            ))}
            {flights.length === 0 && (
                <p>Hiện chưa có sản phẩm nào.</p>
            )}
        </div>
    </>);
}