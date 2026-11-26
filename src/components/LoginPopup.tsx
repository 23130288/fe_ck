import {useEffect} from "react";
import Login from "../pages/login.tsx";
import "../css/components/LoginPopup.css";

interface LoginPopupProps {
    onClose: () => void;
}

export default function LoginPopup({onClose}: LoginPopupProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="login-popup-backdrop"
            onMouseDown={event => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section className="login-popup" role="dialog" aria-popup="true" aria-labelledby="login-popup-title">
                <button className="login-popup-close" type="button" onClick={onClose} aria-label="Đóng đăng nhập">
                    &times;
                </button>
                <Login onSuccess={onClose}/>
            </section>
        </div>
    );
}
