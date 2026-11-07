import "../../css/components/search/SearchBar.css"

import PassangerNumber from "../PassangerNumber.tsx";
import DatePicker from "../DatePicker.tsx";

export default function SearchBarHotel() {

    return (<>
        <div className="search-box">
            <div className="search-filters-box">
                <div className="search-field">
                    <i className="fa-solid fa-hotel"></i>
                    <div className="input-field">
                        <label>Nơi đến, tên khách sạn</label>
                        <input type="text" placeholder="Thành phố, ..."/>
                    </div>
                </div>
                <DatePicker type="range" label="Nhận - Trả phòng" placeholder="Chọn ngày nhận - trả phòng"/>
                <PassangerNumber/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}