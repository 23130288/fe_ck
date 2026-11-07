import {useEffect, useRef} from "react";
import flatpickr from "flatpickr";

import "../css/components/DatePicker.css";
import "flatpickr/dist/flatpickr.min.css";

interface DatePicker {
    type: "range" | "single";
    label: string;
    placeholder: string;
}

export default function DatePicker({type, label, placeholder}: DatePicker) {
    const dateRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!dateRef.current) return;
        const fp = flatpickr(dateRef.current, {
            mode: type,
            dateFormat: "d/m/Y",
            minDate: "today",
            locale: {rangeSeparator: " – "}
        });
        return () => fp.destroy();
    }, [type]);

    return (<>
        <div className="search-field">
            <i className="fa-solid fa-calendar"></i>
            <div className="input-field">
                <label>{label}</label>
                <input ref={dateRef} type="text" readOnly placeholder={placeholder}/>
            </div>
        </div>
    </>);
}
