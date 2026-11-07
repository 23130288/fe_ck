import "../../css/User.css"
import {Link, useSearchParams} from 'react-router-dom'

import UserInfor from "./UserInfo.tsx";
import Notification from "./Notification.tsx";
import Order from "./Order.tsx";
import Voucher from "./Voucher.tsx";
import Support from "./Support.tsx";
import ChangePassword from "./ChangePassword.tsx";
import Logout from "./Logout.tsx";

export default function selection_2() {
    const [searchParams] = useSearchParams()
    const type = searchParams.get("type")
    return (<>
            <div className="selection_2" id="selection_2">

                {/* =============================== MENU =============================== */}
                <div className="menu" id="menu">
                    <div className="avata">
                        <img src="/images/adminb.jpg" alt="avatar"/>
                        <h3 className="username">Nguyễn Văn A</h3>
                    </div>

                    <div className="menu_item">
                        <Link to="/user?type=info" className={type === "info" ? "selected" : "item"}>Thông tin tài khoản</Link>
                        <Link to="/user?type=notification" className={type === "notification" ? "selected" : "item"}>Thông báo</Link>
                        <Link to="/user?type=order" className={type === "order" ? "selected" : "item"}>Đơn hàng</Link>
                        <Link to="/user?type=voucher" className={type === "voucher" ? "selected" : "item"}>Voucher</Link>
                        <Link to="/user?type=support" className={type === "support" ? "selected" : "item"}>Hỗ trợ</Link>
                        <Link to="/user?type=change-password" className={type === "change-password" ? "selected" : "item"}>Đổi mật khẩu</Link>
                        <Link to="/user?type=log-out" className={type === "log-out" ? "selected" : "item"}>Đăng xuất</Link>
                    </div>
                </div>
                <div className="infomation">
                    <div className="information-container">
                        {type === "info" && <UserInfor/>}
                        {type === "notification" && <Notification/>}
                        {type === "order" && <Order/>}
                        {type === "voucher" && <Voucher/>}
                        {type === "support" && <Support/>}
                        {type === "change-password" && <ChangePassword/>}
                        {type === "log-out" && <Logout/>}
                    </div>
                </div>
            </div>
        </>
    );
}