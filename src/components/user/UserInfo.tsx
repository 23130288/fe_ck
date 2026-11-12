export default function UserInfo() {

    const user = JSON.parse(sessionStorage.getItem("userInfo") || "{}");

    return (
        <div className="user_info">
            <div className="sub_header userInfor">
                <div>
                    <h2>Thông tin cá nhân</h2>
                    <p> Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</p>
                </div>
                <div className="avatar">
                    <img src={user.avatar} alt="Avatar"/>
                </div>
            </div>

            <div className="info_list">
                <div className="info_row">
                    <label>Tên</label>
                    <div className="info_value">{user.fullName || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Tên hiển thị</label>
                    <div className="info_value">{user.displayName || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row email_row">
                    <label>Địa chỉ email</label>
                    <div className="info_value">{user.email || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Số điện thoại</label>
                    <div className="info_value">{user.phone || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Ngày sinh</label>
                    <div className="info_value">{user.birthDate || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Quốc tịch</label>
                    <div className="info_value">{user.nationality || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Giới tính</label>
                    <div className="info_value">{user.gender || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Địa chỉ</label>
                    <div className="info_value">{user.address || "Chưa cập nhật"}</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="info_row">
                    <label>Thông tin hộ chiếu</label>
                    <div className="info_value">{user.passport ? user.passport.passportNumber : "Chưa cung cấp"}</div>
                    <button>Thêm hộ chiếu</button>
                </div>
            </div>
        </div>
    );
}