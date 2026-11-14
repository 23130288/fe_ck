import { Link } from 'react-router-dom'
import '../../css/shareStuffs/UserMenu.css'
import { logout } from '../../api/Auth.tsx'

const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZrR7J3V2oTFiaOOa6LDTn-Y_mu4lNOsyzQe5wflwCA&s=10'

export default function UserMenu() {
    const user = JSON.parse(sessionStorage.getItem("userInfo") || "null");

    return (
        <div className="user-menu">
            <button
                id="dropdown-button"
                className="user-menu-trigger"
                type="button"
                popoverTarget="dropdown-menu"
                aria-label={user ? `Tài khoản ${user.username}` : "Mở menu tài khoản"}
            >
                <span>{user?.username || 'Guest'}</span>
                <img src={user?.avatar || placeholder} className="avatar" alt="" />
            </button>

            <div id="dropdown-menu" className="user-menu-popover" popover="auto">
                <div className="user-menu-heading">
                    <img src={user?.avatar || placeholder} className="user-menu-avatar" alt="" />
                    <div className="user-menu-identity">
                        <strong>{user?.username || 'Xin chào!'}</strong>
                        <span>{user ? 'Quản lý tài khoản của bạn' : 'Đăng nhập để tiếp tục'}</span>
                    </div>
                </div>

                <div className="user-menu-links">
                    {user == null ? <>
                        <Link to="login" className="dropdown-content dropdown-content-primary">Đăng nhập</Link>
                        <Link to="register" className="dropdown-content">Tạo tài khoản</Link>
                    </> : <>
                        <Link to="/user?type=info" className="dropdown-content">Thông tin cá nhân</Link>
                        <Link to="ct_orderPage" className="dropdown-content">Đơn hàng của tôi</Link>
                        <div className="user-menu-divider" />
                        <Link to="" className="dropdown-content dropdown-content-logout" onClick={logout}>Đăng xuất</Link>
                    </>}
                </div>
            </div>
        </div>
    );
}
