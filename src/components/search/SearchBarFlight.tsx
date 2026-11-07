import {useState} from "react";

import "../../css/components/search/SearchBar.css"

import PassangerNumber from "../PassangerNumber.tsx";
import DatePicker from "../DatePicker.tsx";

export default function SearchBarFlight() {
    const [tripType, setTripType] = useState("roundTrip");

    return (<>
        <div className="search-box">
            <div className="mode-box">
                <label>
                    <input type="radio" name="option" value="roundTrip" checked={tripType === "roundTrip"}
                           onChange={() => setTripType("roundTrip")}/>
                    <span>Khứ hồi</span>
                </label>
                <label>
                    <input type="radio" name="option" value="oneWay" checked={tripType === "oneWay"}
                           onChange={() => setTripType("oneWay")}/>
                    <span>Một chiều</span>
                </label>
            </div>
            <div className="search-filters-box">
                <div className="search-field">
                    <i className="fa-solid fa-plane-departure"></i>
                    <div className="input-field">
                        <label>Đi từ</label>
                        <input type="text" placeholder="Điểm bắt đầu"/>
                    </div>
                </div>
                <div className="search-field">
                    <i className="fa-solid fa-plane-arrival"></i>
                    <div className="input-field">
                        <label>Đi tới</label>
                        <input type="text" placeholder="Điểm đến"/>
                    </div>
                </div>
                <DatePicker type={tripType === "roundTrip" ? "range" : "single"}
                            label={tripType === "roundTrip" ? "Thời gian chuyến đi" : "Thời gian"}
                            placeholder={tripType === "roundTrip" ? "Chọn ngày đi - ngày về" : "Chọn ngày đi"}/>
                <PassangerNumber/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}