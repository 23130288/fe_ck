import "../../css/components/search/SearchBar.css"

import PassangerNumber from "../PassangerNumber.tsx";
import DatePicker from "../DatePicker.tsx";

interface SearchBarFlightProps {
    tripType: string;
    setTripType: (value: string) => void;
}

export default function SearchBarFlight({tripType, setTripType}: SearchBarFlightProps) {
    return (<>
        <div className="search-box">
            <div className="mode-box">
                <label>
                    <input type="radio" name="tripType" checked={tripType === "round_trip"}
                           onChange={() => setTripType("round_trip")}/>
                    <span>Khứ hồi</span>
                </label>
                <label>
                    <input type="radio" name="tripType" checked={tripType === "one_way"}
                           onChange={() => setTripType("one_way")}/>
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
                <DatePicker type={tripType === "round_trip" ? "range" : "single"}
                            label={tripType === "round_trip" ? "Thời gian chuyến đi" : "Thời gian"}
                            placeholder={tripType === "round_trip" ? "Chọn ngày đi - ngày về" : "Chọn ngày đi"}/>
                <PassangerNumber/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}