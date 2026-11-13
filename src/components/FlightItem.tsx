import { useNavigate } from "react-router";

import "../css/components/TourItem.css";

interface Flight {
    id: number;
    airline: string;
    image: string;
    flight_number: string;
    departure: {
        airport_code: string;
        city: string;
        date: string;
        time: string;
    };
    arrival: {
        airport_code: string;
        city: string;
        time: string;
    };
    duration: string;
    stops: number;
    price: number;
}

interface FlightItemProps {
    flight: Flight;
}

export default function FlightItem({ flight }: FlightItemProps) {
    const navigate = useNavigate();
    return (
        <div className="tour-item" onClick={() => navigate(`/product-detail/flight/${flight.id}`)}>
            <img src={flight.image} alt={flight.airline} />
            <div className="item-info-box">
                <span className="item-name">{flight.airline} - {flight.flight_number}</span>
                <span className="place">{flight.departure.city} ({flight.departure.airport_code})
                    {" → "}{flight.arrival.city} ({flight.arrival.airport_code})</span>
                <div className="review-box">
                    <span className="review-points">{flight.departure.time}{" - "}{flight.arrival.time}</span>
                    <span className="review-numbers">{flight.departure.date}</span>
                </div>
            </div>
            <div className="item-deal-box">
                <span className="duration">{flight.duration}</span>
                <span className="duration">{flight.stops === 0 ? "Bay thẳng" : `${flight.stops} điểm dừng`}</span>
                <span className="price">{flight.price.toLocaleString("vi-VN")} đ</span>
            </div>
        </div>
    );
}