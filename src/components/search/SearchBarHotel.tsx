import {useEffect, useRef} from "react";
import flatpickr from "flatpickr";

import "../../css/components/search/SearchBar.css"
import "flatpickr/dist/flatpickr.min.css";

import PassangerNumber from "./PassangerNumber.tsx";

export default function SearchBarHotel() {
    const dateRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!dateRef.current) return;
        const fp = flatpickr(dateRef.current, {
            mode: "range",
            dateFormat: "d/m/Y",
            minDate: "today",
            locale: {rangeSeparator: " – "}
        });
        return () => fp.destroy();
    }, []);

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
                <div className="search-field">
                    <i className="fa-solid fa-calendar"></i>
                    <div className="input-field">
                        <label>Nhận - Trả phòng</label>
                        <input ref={dateRef} type="text" readOnly placeholder="Chọn ngày nhận - trả phòng"/>
                    </div>
                </div>
                <PassangerNumber/>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}