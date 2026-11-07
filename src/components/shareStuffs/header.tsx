import {Link, useSearchParams} from 'react-router-dom'

import '../../css/shareStuffs/header.css'
import logo from '../../assets/logo.png'
import UserMenu from './UserMenu'

export default function Header() {
    const [searchParams] = useSearchParams()
    const type = searchParams.get("type")
    return (<>
        <header className="header">
            <div className="container">
                <div className="upper-header">
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm tour du lịch..."/>
                        <button type="button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="right-buttons">
                        {/* <Link to="/user">User</Link>
                        <button id="registerButton" onClick={() => navigate('/register')}>Đăng ký</button>
                        <button id="loginButton"
                                onClick={() => navigate('/login')}>Đăng nhập
                        </button> */}
                        < UserMenu/>
                    </div>
                </div>
                <div className="list-filters">
                    <Link to="/search?type=tour" className={type === "tour" ? "selected" : ""}>Tour</Link>
                    <Link to="/search?type=flight" className={type === "flight" ? "selected" : ""}>Vé máy bay</Link>
                    <Link to="/search?type=hotel" className={type === "hotel" ? "selected" : ""}>Khách sạn</Link>
                    <Link to="/search?type=attraction" className={type === "attraction" ? "selected" : ""}>Khu vui
                        chơi</Link>
                    <Link to="/search?type=a-day-tour" className={type === "a-day-tour" ? "selected" : ""}>Tour trong
                        ngày</Link>
                </div>
            </div>
        </header>
    </>);
}