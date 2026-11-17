import "../css/register.css"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { register } from "../api/Auth.tsx";

export default function Register() {
    const [username, setUsername] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = register(email, password, confirmPassword, {
                username,
                birthDate,
                gender
            });
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("userInfo", JSON.stringify(response.UserInfo));
            window.location.href = "/";
        } catch (err) {
            setError(err instanceof Error ? err.message : "Xảy ra lỗi trong quá trình đăng ký");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-popover">
            <form className="register-card" onSubmit={handleRegister}>
                <h1>Tạo tài khoản</h1>
                <p className="register-intro">Đăng kí để bắt đầu trải nghiệm dịch vụ.</p>

                <div className="register-fields">
                    <label htmlFor="register-name">Tên tài khoản</label>
                    <input
                        id="register-name"
                        type="text"
                        placeholder="Tên của bạn"
                        autoComplete="name"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />

                    <div className="register-row">
                        <div className="register-field">
                            <label htmlFor="register-birthday">Ngày sinh</label>
                            <input
                                id="register-birthday"
                                type="date"
                                autoComplete="bday"
                                value={birthDate}
                                onChange={e => setBirthDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="register-field">
                            <label htmlFor="register-gender">Giới tính</label>
                            <select
                                id="register-gender"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                required
                            >
                                <option value="" hidden>Chọn</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="register-email">Email</label>
                    <input
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="register-password">Mật khẩu</label>
                    <input
                        id="register-password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        autoComplete="new-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="register-confirm-password">Xác nhận mật khẩu</label>
                    <input
                        id="register-confirm-password"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="register-error" role="alert">{error}</p>}

                <button className="register-submit" type="submit" disabled={loading}>
                    {loading ? "Đang đăng ký..." : "Đăng ký"}
                </button>
                <p className="register-login">
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
            </form>
        </div>
    );
}
