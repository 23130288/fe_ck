import { Link } from 'react-router-dom'
import '../../css/shareStuffs/UserMenu.css'
import { useState } from "react";


export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const user = JSON.parse(
  sessionStorage.getItem("userInfo") || "null"
);
    return (<>
        <div className="user-menu">
            <button className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                <div>{user?user.username:'guest'}</div>
                <img src = {user?.avatar} className="avatar"/>
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
