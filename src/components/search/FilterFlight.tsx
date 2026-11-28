import {useState} from "react";

import "../../css/components/search/Filter.css";

import DatePicker from "../DatePicker.tsx";
import InputRange from "../InputRange.tsx";

export interface FlightFilterState {
    minPrice: number;
    maxPrice: number;
    flightTypes: string[];
    airlines: string[];
    departurePlaces: string[];
    arrivalPlaces: string[];
    departureDate: string;
    cabinClasses: string[];
    stops: number[];
}

export default function FilterFlight() {
    const [flightFilters, setFlightFilters] = useState<FlightFilterState>({
        minPrice: 0,
        maxPrice: 50000000,
        flightTypes: [],
        airlines: [],
        departurePlaces: [],
        arrivalPlaces: [],
        departureDate: "",
        cabinClasses: [],
        stops: []
    });

    const handleCheckboxChange = (field: "flightTypes" | "airlines" | "departurePlaces" | "arrivalPlaces" | "cabinClasses", value: string) => {
        const currentValues = flightFilters[field];
        let newValues: string[];
        if (currentValues.includes(value)) {
            newValues = currentValues.filter((item) => item !== value);
        } else {
            newValues = [...currentValues, value];
        }
        setFlightFilters({...flightFilters, [field]: newValues});
    };

    return (
        <div className="filter-flight filter-tour flex vertical">
            <div className="filter-group flex vertical">
                <h1>Loại chuyến bay</h1>
                <label className="domestic" key="domestic">
                    <input type="checkbox" checked={flightFilters.flightTypes.includes("domestic")}
                           onChange={() => handleCheckboxChange("flightTypes", "domestic")}/>
                    <span>Tour nội địa</span>
                </label>
                <label className="international" key="international">
                    <input type="checkbox" checked={flightFilters.flightTypes.includes("international")}
                           onChange={() => handleCheckboxChange("flightTypes", "international")}/>
                    <span>Tour quốc tế</span>
                </label>
            </div>
            <div className="filter-group flex vertical">
                <h1>Hãng hàng không</h1>
                {["Vietnam Airlines", "Vietjet Air", "Bamboo Airways"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={flightFilters.airlines.includes(value)}
                               onChange={() => handleCheckboxChange("airlines", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Điểm khởi hành</h1>
                {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={flightFilters.departurePlaces.includes(value)}
                               onChange={() => handleCheckboxChange("departurePlaces", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Điểm đến</h1>
                {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={flightFilters.arrivalPlaces.includes(value)}
                               onChange={() => handleCheckboxChange("arrivalPlaces", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group">
                <h1>Ngày khởi hành</h1>
                <DatePicker type="single" label="Chọn ngày khởi hành" placeholder="Ngày khởi hành"
                            onChange={(date: string) => {
                                setFlightFilters(prev => ({...prev, departureDate: date}));
                            }}/>
            </div>
            <div className="filter-group flex vertical">
                <h1>Hạng ghế</h1>
                {["Economy", "Premium Economy", "Business", "First Class"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={flightFilters.cabinClasses.includes(value)}
                               onChange={() => handleCheckboxChange("cabinClasses", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Số điểm dừng</h1>
                {["0 điểm dừng", "1 điểm dừng, 2 điểm dừng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={flightFilters.flightTypes.includes(value)}
                               onChange={() => handleCheckboxChange("flightTypes", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group">
                <h1>Khoảng giá</h1>
                <InputRange start={2000000} end={40000000} valueUnit="VNĐ" step={50} isPrice
                            value={flightFilters.minPrice}
                            onChange={(value) => {
                                setFlightFilters(prev => ({...prev, minPrice: value}));
                            }}/>
            </div>
        </div>
    );
}
