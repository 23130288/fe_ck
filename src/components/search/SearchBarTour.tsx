import "../../css/components/search/SearchBar.css"
import DatePicker from "../DatePicker.tsx";

export default function SearchBarTour() {
    return (<>
        <div className="search-box">
            <div className="search-filters-box">
                <div className="search-field">
                    <i className="fa-solid fa-map"></i>
                    <div className="input-field">
                        <label>Điểm đến</label>
                        <input type="text" placeholder="Bạn sẽ đi đâu?"/>
                    </div>
                </div>
                <div className="search-field">
                    <i className="fa-solid fa-location-arrow"></i>
                    <div className="input-field">
                        <label>Nơi bắt đầu</label>
                        <input type="text" placeholder="Bạn sẽ bắt đầu ở đâu?"/>
                    </div>
                </div>
                <DatePicker type="single" label="Thời gian" placeholder="Chọn ngày đi"/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}