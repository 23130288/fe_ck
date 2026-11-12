import { Link } from 'react-router-dom'
import '../../css/shareStuffs/UserMenu.css'
import { logout } from '../../api/Auth.tsx'

const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZrR7J3V2oTFiaOOa6LDTn-Y_mu4lNOsyzQe5wflwCA&s=10'

export default function UserMenu() {
    const user = JSON.parse(sessionStorage.getItem("userInfo") || "null");

    return (<>
        <div className="user-menu">
            <button id="dropdown-button" popoverTarget="dropdown-menu">
                <div>{(user != null) ? user.username : 'guest'}</div>
                <img src={(user != null) ? user.avatar : placeholder} className="avatar" />
            </button>

            <div id="dropdown-menu" popover="auto">
                <Link to="/user?type=info" className='dropdown-content'>Thông tin cá nhân</Link>
                {user == null && <>
                    <Link to="login" className='dropdown-content'>Đăng nhập</Link>
                    <Link to="register" className='dropdown-content'>Đăng kí</Link>
                </>}
                {user != null &&
                    <Link to="" className='dropdown-content' onClick={logout}>Đăng xuất</Link>
                }
            </div>
        </div>
    </>);
}
