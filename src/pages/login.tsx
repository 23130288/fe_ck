import "../css/login.css"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { login } from "../components/Auth.tsx";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await login(email, password);

            // Save login information
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));

            // Navigate to another page
            window.location.href = "/";

        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
        } finally {
            setLoading(false);
        }
    };
    return (<>
        <div id="login-container">
            <form onSubmit={handleLogin} id="login-box">
                <div className="title">Đăng nhập</div>
                <input type="email" placeholder="Tài khoản Email" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Mật khẩu" value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button type="submit" disabled={loading}>{loading ? "Đang đăng nhập..." : "Đăng nhập"}</button>
                <Link to="/register">Chưa có tài khoản? Đăng kí ngay.</Link>
                {error && <p>{error}</p>}
            </form>
        </div>
    </>)
}
