import {useState} from "react";

import "../../css/components/search/Filter.css";

import DatePicker from "../DatePicker.tsx";
import InputRange from "../InputRange.tsx";

export interface TourFilterState {
    minPrice: number;
    maxPrice: number;
    minDuration: number;
    tourTypes: string[];
    places: string[];
    departurePlaces: string[];
    durations: string[];
    departureDate: string;
}

export default function FilterTour() {
    const [tourFilters, setTourFilters] = useState<TourFilterState>({
        minPrice: 0,
        maxPrice: 10000000,
        minDuration: 30,
        tourTypes: [],
        places: [],
        departurePlaces: [],
        durations: [],
        departureDate: ""
    });

    const handleCheckboxChange = (
        field: "tourTypes" | "places" | "departurePlaces" | "durations", value: string) => {
        const currentValues = tourFilters[field];

        let newValues: string[];
        if (currentValues.includes(value)) {
            newValues = currentValues.filter((item) => item !== value);
        } else {
            newValues = [...currentValues, value];
        }
        setTourFilters({...tourFilters, [field]: newValues});
    };

    return (
        <div className="filter-tour flex vertical">
            <div className="filter-group flex vertical">
                <h1>Loại tour</h1>
                <label className="domestic" key="domestic">
                    <input type="checkbox" checked={tourFilters.tourTypes.includes("domestic")}
                           onChange={() => handleCheckboxChange("tourTypes", "domestic")}/>
                    <span>Tour nội địa</span>
                </label>
                <label className="international" key="international">
                    <input type="checkbox" checked={tourFilters.tourTypes.includes("international")}
                           onChange={() => handleCheckboxChange("tourTypes", "international")}/>
                    <span>Tour quốc tế</span>
                </label>
            </div>
            <div className="filter-group flex vertical">
                <h1>Điểm đến</h1>
                {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={tourFilters.places.includes(value)}
                               onChange={() => handleCheckboxChange("places", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Điểm khởi hành</h1>
                {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={tourFilters.departurePlaces.includes(value)}
                               onChange={() => handleCheckboxChange("departurePlaces", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group">
                <h1>Ngày khởi hành</h1>
                <DatePicker type="single" label="Chọn ngày khởi hành" placeholder="Ngày khởi hành"
                            onChange={(date: string) => {
                                setTourFilters(prev => ({...prev, departureDate: date}));
                            }}/>
            </div>
            <div className="filter-group">
                <h1>Thời lượng</h1>
                <InputRange start={30} end={40} valueUnit="tiếng" value={tourFilters.minDuration}
                            onChange={(value) => {
                                setTourFilters(prev => ({...prev, minDuration: value}));
                            }}/>
            </div>
            <div className="filter-group">
                <h1>Khoảng giá</h1>
                <InputRange start={2000000} end={40000000} valueUnit="VNĐ" step={50} isPrice
                            value={tourFilters.minPrice}
                            onChange={(value) => {
                                setTourFilters(prev => ({...prev, minPrice: value}));
                            }}/>
            </div>
        </div>
    );
}