import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";

import "../../css/components/search/SearchBar.css"
import "flatpickr/dist/flatpickr.min.css";

export default function SearchBarTour() {
    const dateRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!dateRef.current) return;
        const fp = flatpickr(dateRef.current, {
            mode: "single",
            dateFormat: "d/m/Y",
            minDate: "today",
        });
        return () => fp.destroy();
    }, []);

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
                <div className="search-field">
                    <i className="fa-solid fa-calendar"></i>
                    <div className="input-field">
                        <label>Thời gian</label>
                        <input ref={dateRef} type="text" placeholder="Chọn ngày đi" readOnly/>
                    </div>
                </div>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}