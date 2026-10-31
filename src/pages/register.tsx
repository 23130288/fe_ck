import "../css/register.css"

export default function Register() {
    return (<>
        <div id="login-container">
            <div id="login-box">
                <div className="title">Đăng kí</div>
                <input type="text" placeholder="Tài khoản Email" />
                <input type="password" placeholder="Mật khẩu" />
                <input type="password" placeholder="Xác nhận mật khẩu" />
                <button>Đăng kí</button>
            </div>
        </div>
    </>)
}
