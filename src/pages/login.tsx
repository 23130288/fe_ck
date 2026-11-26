import "../css/login.css"
import { Link } from 'react-router-dom'
import { useState, type FormEvent } from "react";
import { login } from "../api/Auth.ts";

interface LoginProps {
    onSuccess?: () => void;
}

export default function Login({onSuccess}: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await login(email, password);
            sessionStorage.setItem("userInfo", JSON.stringify(response.userInfo));
            if (onSuccess) {
                onSuccess();
                window.location.reload();
            } else {
                window.location.href = "/";
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Xảy ra lỗi trong quá trình đăng nhập");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="login-popover">
            <form onSubmit={handleLogin} className="login-card">
                <h1 id="login-modal-title">Đăng nhập</h1>
                <p className="login-card-intro">Đăng nhập để tiếp tục</p>

                <label htmlFor="login-email">Email</label>
                <input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                />

                <label htmlFor="login-password">Mật khẩu</label>
                <input
                    id="login-password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />

                {error && <p className="login-card-error" role="alert">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
                <p className="login-card-register">
                    Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                </p>
            </form>
        </div>
    );
}
