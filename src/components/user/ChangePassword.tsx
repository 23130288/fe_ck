export default function ChangePassword() {
    return (<>
            {/* =============================== CHANGE PASSWORD =============================== */}
            <div className="information-container" id="change-password">
                <h2>Đổi mật khẩu</h2>
                <form className="in4">
                    <div className="in4_row">
                        <label className="in4_label" htmlFor="old_password">Mật khẩu cũ</label>
                        <input className="in4_input" id="old_password" type="password" name="old_password"/>
                    </div>

                    <div className="in4_row">
                        <label className="in4_label" htmlFor="password">Mật khẩu mới</label>
                        <input className="in4_input" id="password" type="password" name="password"/>
                    </div>

                    <div className="in4_row">
                        <label className="in4_label" htmlFor="confirm_password">Xác nhận mật khẩu mới</label>
                        <input className="in4_input" id="confirm_password" type="password"
                               name="confirm_password"/>
                    </div>

                    <div className="in4_row" id="password-info-button">
                        <button className="bt_xac_nhan" id="btn-doi-mk" type="button">Xác nhận</button>
                    </div>
                </form>
            </div>
        </>
    );
}