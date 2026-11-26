import "../../css/components/FlightItem.css";

import type {Flight} from "../../store/slice/ProductSlice.ts";
import FlightRoute from "./FlightRoute.tsx";

interface FlightItemProps {
    flight: Flight;
}

export default function FlightItem({flight}: FlightItemProps) {
    return (
        <div className="flight-item">
            <div className="split-box grid">
                <div className="list-item-info-box flex vertical">
                    <FlightRoute departure={flight.departure}
                                 arrival={flight.arrival}
                                 duration={flight.duration}
                                 stops={flight.stops}
                                 flight={flight}/>
                    {flight.trip_type === "round_trip" && (
                        <FlightRoute departure={flight.return_departure!}
                                     arrival={flight.return_arrival!}
                                     duration={flight.return_duration!}
                                     stops={flight.return_stops!}
                                     flight={flight}/>
                    )}
                    <div className="airline-name"><span>{flight.airline}</span></div>
                </div>
                <div className="pricing-box grid">
                    <div className="more-info-box grid">
                        <div className="left-box flex vertical">
                            <span>Delta main</span>
                            <div className="list-packages flex horizontal">
                                <i className="fa-solid fa-suitcase"></i>
                                <i className="fa-solid fa-suitcase-rolling"></i>
                            </div>
                        </div>
                        <div className="right-box">
                            <span>{flight.price.toLocaleString("vi-VN")} VNĐ</span>
                        </div>
                    </div>
                    <div className="button-box grid">
                        <button className="fare-options-button">Lựa chọn giá vé <i
                            className="fa-solid fa-angle-down"></i>
                        </button>
                        <button className="view-detail-button">Chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    );
}