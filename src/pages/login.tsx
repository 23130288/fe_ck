import "../css/login.css"

export default function Login() {
    return (<>
        <div id="login-container">
            <div id="login-box">
                <div className="title">Đăng nhập</div>
                <input type="text" placeholder="Tài khoản Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button>Đăng nhập</button>

            </div>
        </div>
    </>)
}
