import type {Flight} from "../../store/slice/ProductSlice.ts";

interface FlightRouteProps {
    departure: Flight["departure"];
    arrival: Flight["arrival"];
    duration: string;
    stops: number;
    flight: Flight;
}

export default function FlightRoute({departure, arrival, duration, stops, flight}: FlightRouteProps) {
    return (
        <div className="item-info-box">
            <div className="grid">
                <img src={flight.airline_logo} alt={flight.airline}/>
                <div className="departure-box flex vertical">
                    <span className="time">{departure.time}</span>
                    <span
                        className="code-and-date">{departure.airport_code} . {new Date(departure.date + "T00:00:00").toLocaleDateString("vi-VN")}</span>
                </div>
                <div className="travel-stop-box flex vertical">
                    <div className="route-box center-horizontal">
                        <span className="route-dot"></span>
                        <span className="route-line"></span>
                        {stops === 0 ? (
                            <span className="direct-text">Direct</span>
                        ) : (
                            <span className="stop-label">{stops} {stops === 1 ? "stop" : "stops"}</span>
                        )}
                        <span className="route-line"></span>
                        <span className="route-dot"></span>
                    </div>
                    <span>{duration}</span>
                </div>

                <div className="arrival-box flex vertical">
                    <span className="time">{arrival.time}</span>
                    <span
                        className="code-and-date">{arrival.airport_code} . {new Date(arrival.date + "T00:00:00").toLocaleDateString("vi-VN")}</span>
                </div>
            </div>
        </div>
    );
}
