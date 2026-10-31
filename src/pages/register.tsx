import "../css/register.css"
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    return (<>
        <div id="login-container">
            <div id="login-box">
                <div className="title">Đăng kí</div>
                <input type="text" placeholder="Tài khoản Email" />
                <input type="password" placeholder="Mật khẩu" />
                <input type="password" placeholder="Xác nhận mật khẩu" />
                <button>Đăng kí</button>
                <Link to="/login">Đã có tài khoản? Đăng nhập ngay.</Link>

            </div>
        </div>
    </>)
}
