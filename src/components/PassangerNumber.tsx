import {useState} from "react";

import "../css/components/PassangerNumber.css"

interface PassangerNumberProps {
    onChange?: (passengers: {
        adults: number;
        teens: number;
        kids: number;
    }) => void;
}

export default function PassangerNumber({ onChange }: PassangerNumberProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(1);
    const [teens, setTeens] = useState(0);
    const [kids, setKids] = useState(0);

    const updatePassengers = (newAdults: number, newTeens: number, newKids: number) => {
        onChange?.({adults: newAdults, teens: newTeens, kids: newKids});
    };

    return (<div className="passenger-number-wrapper">
        <div className="search-field" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-regular fa-user"></i>
            <div className="input-field">
                <label>Số người</label>
                <span>{adults + teens + kids} người</span>
            </div>
            <i className="fa-solid fa-angle-down"></i>
        </div>
        {isOpen && (
            <div className="passenger-popup" onClick={e => e.stopPropagation()}>
                <div className="passenger-item">
                    <div>
                        <label>Người lớn</label>
                        <p>Từ 18 tuổi trở lên</p>
                    </div>
                    <div className="counter">
                        <button type="button" disabled={adults <= 1} onClick={() => {
                            const value = Math.max(1, adults - 1);
                            setAdults(value);
                            updatePassengers(value, teens, kids);
                        }}>−
                        </button>
                        <span>{adults}</span>
                        <button type="button" onClick={() => {
                            const value = adults + 1;
                            setAdults(value);
                            updatePassengers(value, teens, kids);
                        }}>+
                        </button>
                    </div>
                </div>
                <div className="passenger-item">
                    <div>
                        <label>Trẻ em</label>
                        <p>Từ 13 - 17 tuổi</p>
                    </div>
                    <div className="counter">
                        <button type="button" disabled={teens <= 0} onClick={() => {
                            const value = Math.max(0, teens - 1);
                            setTeens(value);
                            updatePassengers(adults, value, kids);
                        }}>−
                        </button>
                        <span>{teens}</span>
                        <button type="button" disabled={teens + kids >= adults * 2} onClick={() => {
                            const value = teens + 1;
                            setTeens(value);
                            updatePassengers(adults, value, kids);
                        }}>+
                        </button>
                    </div>
                </div>
                <div className="passenger-item">
                    <div>
                        <label>Trẻ em</label>
                        <p>Dưới 12 tuổi</p>
                    </div>
                    <div className="counter">
                        <button type="button" disabled={kids <= 0} onClick={() => {
                            const value = Math.max(0, kids - 1);
                            setKids(value);
                            updatePassengers(adults, teens, value);
                        }}>−
                        </button>
                        <span>{kids}</span>
                        <button type="button" disabled={teens + kids >= adults * 2} onClick={() => {
                            const value = kids + 1;
                            setKids(value);
                            updatePassengers(adults, teens, value);
                        }}>+
                        </button>
                    </div>
                </div>
                <button type="button" className="passenger-done" onClick={() => setIsOpen(false)}>Xong</button>
            </div>
        )}
    </div>);
}