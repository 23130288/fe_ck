import { Link } from 'react-router-dom'
import '../../css/shareStuffs/UserMenu.css'
import { useState } from "react";

const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZrR7J3V2oTFiaOOa6LDTn-Y_mu4lNOsyzQe5wflwCA&s=10'

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const user = JSON.parse(sessionStorage.getItem("userInfo") || "null");

    return (<>
        <div className="user-menu">
            <button className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                <div>{(user != null) ? user.username : 'guest'}</div>
                <img src={(user != null) ? user.avatar : placeholder}  className="avatar" />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to="/user?type=info" className='dropdown-content'>Thông tin cá nhân</Link>
                    <Link to="register" className='dropdown-content'>Đăng ký</Link>
                    <Link to="login" className='dropdown-content'>Đăng nhập</Link>
                </div>
            )}
        </div>
    </>);
}
