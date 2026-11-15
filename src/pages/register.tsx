import "../css/register.css"
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="register-popover">
            <div className="register-card">
                <h1>Tạo tài khoản</h1>
                <p className="register-intro">Đăng kí để bắt đầu trải nghiệm dịch vụ.</p>

                <div className="register-fields">
                    <label htmlFor="register-name">Tên tài khoản</label>
                    <input id="register-name" type="text" placeholder="Tên của bạn" autoComplete="name" />

                    <div className="register-row">
                        <div className="register-field">
                            <label htmlFor="register-birthday">Ngày sinh</label>
                            <input id="register-birthday" type="date" autoComplete="bday" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="register-gender">Giới tính</label>
                            <select id="register-gender" defaultValue="">
                                <option value="" hidden>Chọn</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="register-email">Email</label>
                    <input id="register-email" type="email" placeholder="you@example.com" autoComplete="email" />

                    <label htmlFor="register-password">Mật khẩu</label>
                    <input id="register-password" type="password" placeholder="Nhập mật khẩu" autoComplete="new-password" />

                    <label htmlFor="register-confirm-password">Xác nhận mật khẩu</label>
                    <input id="register-confirm-password" type="password" placeholder="Xác nhận mật khẩu" autoComplete="new-password" />
                </div>

                <button className="register-submit" type="button">Đăng ký</button>
                <p className="register-login">
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
            </div>
        </div>
    );
}
