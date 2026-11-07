import "../../css/components/search/SearchBar.css"

import DatePicker from "../DatePicker.tsx";

export default function SearchBarAttractions() {
    return (<>
        <div className="search-box">
            <div className="search-filters-box">
                <div className="search-field">
                    <i className="fa-solid fa-map"></i>
                    <div className="input-field">
                        <label>Điểm đến</label>
                        <input type="text" placeholder="Bạn muốn đi đâu?"/>
                    </div>
                </div>
                <DatePicker type="single" label="Thời gian" placeholder="Chọn ngày đi"/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}