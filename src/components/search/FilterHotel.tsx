import {useState} from "react";

import "../../css/components/search/Filter.css";

import InputRange from "../InputRange.tsx";

export interface HotelFilterState {
    minPrice: number;
    maxPrice: number;
    places: string[];
    starRatings: number[];
    hotelTypes: string[];
    amenities: string[];
    minRating: number;
    checkInDate: string;
    checkOutDate: string;
}

export default function FilterHotel() {
    const [hotelFilters, setHotelFilters] = useState<HotelFilterState>({
        minPrice: 500000,
        maxPrice: 20000000,
        places: [],
        starRatings: [],
        hotelTypes: [],
        amenities: [],
        minRating: 0,
        checkInDate: "",
        checkOutDate: ""
    });
    const handleCheckboxChange = (field: "places" | "hotelTypes" | "amenities", value: string) => {
        const currentValues = hotelFilters[field];
        let newValues: string[];
        if (currentValues.includes(value)) {
            newValues = currentValues.filter((item) => item !== value);
        } else {
            newValues = [...currentValues, value];
        }
        setHotelFilters({...hotelFilters, [field]: newValues});
    };

    const handleStarChange = (value: number) => {
        const currentValues = hotelFilters.starRatings;
        let newValues: number[];
        if (currentValues.includes(value)) {
            newValues = currentValues.filter((item) => item !== value);
        } else {
            newValues = [...currentValues, value];
        }
        setHotelFilters({...hotelFilters, starRatings: newValues});
    };

    return (
        <div className="filter-hotel filter-tour flex vertical">
            <div className="filter-group">
                <h1>Giá mỗi đêm</h1>
                <InputRange start={500000} end={20000000} valueUnit="VNĐ" step={50} isPrice
                            value={hotelFilters.minPrice}
                            onChange={(value) => {
                                setHotelFilters(prev => ({...prev, minPrice: value}));
                            }}/>
            </div>
            <div className="filter-group flex vertical">
                <h1>Loại hình lưu trú</h1>
                {["hotel", "resort", "homestay", "apartment", "villa"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={hotelFilters.hotelTypes.includes(value)}
                               onChange={() => handleCheckboxChange("hotelTypes", value)}/>
                        <span>{{
                            hotel: "Khách sạn",
                            resort: "Resort",
                            homestay: "Homestay",
                            apartment: "Căn hộ",
                            villa: "Villa"
                        }[value]}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Hạng sao</h1>
                {[5, 4, 3, 2, 1].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={hotelFilters.starRatings.includes(value)}
                               onChange={() => handleStarChange(value)}/>
                        <span>{value} sao</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Điểm đến</h1>
                {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={hotelFilters.places.includes(value)}
                               onChange={() => handleCheckboxChange("places", value)}/>
                        <span>{value}</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Đánh giá</h1>
                {[9, 8, 7, 6].map((value) => (
                    <label key={value}>
                        <input type="radio" name="hotelRating" checked={hotelFilters.minRating === value}
                               onChange={() => {
                                   setHotelFilters(prev => ({...prev, minRating: value}));
                               }}/>
                        <span>{{
                            9: "Tuyệt vời",
                            8: "Rất tốt",
                            7: "Tốt",
                            6: "Thoải mái"
                        }[value]}: {value}+</span>
                    </label>
                ))}
            </div>
            <div className="filter-group flex vertical">
                <h1>Tiện nghi</h1>
                {["wifi", "pool", "restaurant", "parking", "spa", "gym"].map((value) => (
                    <label key={value}>
                        <input type="checkbox" checked={hotelFilters.amenities.includes(value)}
                               onChange={() => handleCheckboxChange("amenities", value)}/>
                        <span>{{
                            wifi: "Wifi miễn phí",
                            pool: "Hồ bơi",
                            restaurant: "Nhà hàng",
                            parking: "Bãi đỗ xe",
                            spa: "Spa",
                            gym: "Phòng tập gym"
                        }[value]}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
