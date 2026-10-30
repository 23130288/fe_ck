import '../../css/shareStuffs/header.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (<>
        <header className="header">
            <div className="container">
                <div className="upper-header">
                    <img src={logo} alt=""/>
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
                    <a href="" className="selected">Tour</a>
                    <a href="">Vé máy bay</a>
                    <a href="">Khách sạn</a>
                    <a href="">Tour khách đoàn</a>
                    <a href="">Tour trong ngày</a>
                </div>
            </div>
        </header>
        </>);
}