import "../../css/User.css"

export default function UserInfo() {
    return (<>
            {/* =============================== USER INFO =============================== */}
            <h2>Thông tin tài khoản</h2>

            <div className="in4">
                <div className="in4_row">
                    <label className="in4_label" htmlFor="email">Thông tin đăng nhập</label>
                    <input className="in4_input" type="email" id="email" name="email"
                           value="nguyenvana@gmail.com" readOnly/>
                </div>

                <div className="in4_row">
                    <label className="in4_label" htmlFor="name">Tên tài khoản</label>
                    <input className="in4_input info2" type="text" id="name" name="name"
                           value="Nguyễn Văn A" readOnly/>
                </div>

                <div className="in4_row">
                    <label className="in4_label" htmlFor="sdt">Số điện thoại *</label>
                    <input className="in4_input info2" type="text" id="sdt" name="sdt"
                           value="096329472" readOnly/>
                </div>

                <div className="in4_row">
                    <label className="in4_label" htmlFor="address">Địa chỉ *</label>
                    <input className="in4_input info2" type="text" id="address" name="address"
                           value="Quận 1, TP. Hồ Chí Minh" readOnly/>
                </div>
            </div>

            <div className="btn-group">
                <button type="button" className="change-btn">Đổi thông tin</button>
            </div>
        </>
    );
}