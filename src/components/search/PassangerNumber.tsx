import {useState} from "react";

import "../../css/components/search/PassangerNumber.css"

export default function PassangerNumber() {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    return (<div className="passenger-wrapper">
        <div className="search-field" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-regular fa-user"></i>
            <div className="input-field">
                <label>Số người</label>
                <span>{adults + children} người</span>
            </div>
            <i className="fa-solid fa-angle-down"></i>
        </div>
        {isOpen && (
            <div className="passenger-popup" onClick={e => e.stopPropagation()}>
                <div className="passenger-item">
                    <div>
                        <label>Người lớn</label>
                        <p>Từ 12 tuổi trở lên</p>
                    </div>
                    <div className="counter">
                        <button type="button" disabled={adults <= 1}
                                onClick={() => setAdults(p => Math.max(1, p - 1))}>−
                        </button>
                        <span>{adults}</span>
                        <button type="button" onClick={() => setAdults(p => p + 1)}>+</button>
                    </div>
                </div>
                <div className="passenger-item">
                    <div>
                        <label>Trẻ em</label>
                        <p>Dưới 12 tuổi</p>
                    </div>
                    <div className="counter">
                        <button type="button" disabled={children <= 0}
                                onClick={() => setChildren(p => Math.max(0, p - 1))}>−
                        </button>
                        <span>{children}</span>
                        <button type="button" onClick={() => setChildren(p => p + 1)}>+</button>
                    </div>
                </div>
                <button type="button" className="passenger-done" onClick={() => setIsOpen(false)}>Xong</button>
            </div>
        )}
    </div>);
}