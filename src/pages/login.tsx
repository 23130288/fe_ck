import "../css/login.css"

export default function Login(){
    return(<>
    <div id = "login-container">
        <div id = "login-box">
            <div className = "title">Đăng nhập</div>
            <input type="text" />
            <input type="password" />
            <button>Đăng nhập</button>
        </div>
    </div>
    </>)
}
