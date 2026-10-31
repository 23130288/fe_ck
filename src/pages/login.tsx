import "../css/login.css"
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    return (<>
        <div id="login-container">
            <div id="login-box">
                <div className="title">Đăng nhập</div>
                <input type="text" placeholder="Tài khoản Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button>Đăng nhập</button>
                <Link to="/register">Chưa có tài khoản? Đăng kí ngay.</Link>
            </div>
        </div>
    </>)
}
