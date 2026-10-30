import { Link } from 'react-router-dom'

import '../../css/shareStuffs/header.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (<>
        <header className="header">
            <div className="container">
                <div className="upper-header">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm tour du lịch..."/>
                        <button type="button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="right-buttons">
                        <button id="registerButton">Đăng ký</button>
                        <button id="loginButton">Đăng nhập</button>
                    </div>
                </div>
                <div className="list-filters">
                    <Link to="/search">Tour</Link>
                    <Link to="/search">Vé máy bay</Link>
                    <Link to="/search">Khách sạn</Link>
                    <Link to="/search">Tour khách đoàn</Link>
                    <Link to="/search">Tour trong ngày</Link>
                </div>
            </div>
        </header>
        </>);
}