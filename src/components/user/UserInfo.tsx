export default function UserInfo() {
    return (
        <div className="user-info">

            {/* ===== HEADER ===== */}
            <div className="user-info-header">
                <div>
                    <h2>Thông tin cá nhân</h2>
                    <p>
                        Cập nhật thông tin của bạn và tìm hiểu các thông tin này
                        được sử dụng ra sao.
                    </p>
                </div>

                <div className="personal-avatar">
                    <span>📷</span>
                </div>
            </div>

            {/* ===== PERSONAL INFORMATION ===== */}
            <div className="personal-info-list">

                <div className="personal-info-row">
                    <label>Tên</label>
                    <div className="personal-info-value">Thanh hải</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Tên hiển thị</label>
                    <div className="personal-info-value">Chọn tên hiển thị</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row email-row">
                    <label>Địa chỉ email</label>

                    <div className="personal-info-value">
                        <div className="email-value">
                            <span>nguyenthai221204@gmail.com</span>
                        </div>

                        <p>
                            Đây là địa chỉ email bạn dùng để đăng nhập.
                            Chúng tôi cũng sẽ gửi các xác nhận đặt chỗ tới địa chỉ này.
                        </p>

                        <div className="email-notice">
                            <p>
                                Bạn không truy cập được email? Nếu đã thêm số điện
                                thoại di động cho đợt lưu trú đã hoàn tất trước đây,
                                bạn có thể tiến hành xác thực số điện thoại di động
                                để đổi địa chỉ email.
                            </p>

                            <a href="#">Đổi email bằng cách xác thực số điện thoại</a>
                        </div>
                    </div>

                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Số điện thoại</label>
                    <div className="personal-info-value">
                        <span>Thêm số điện thoại của bạn</span>
                        <p>
                            Chỗ nghỉ hoặc địa điểm tham quan bạn đặt sẽ liên lạc
                            với bạn qua số này nếu cần.
                        </p>
                    </div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Ngày sinh</label>
                    <div className="personal-info-value">Nhập ngày sinh của bạn</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Quốc tịch</label>
                    <div className="personal-info-value">Chọn vùng/quốc gia của bạn</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Giới tính</label>
                    <div className="personal-info-value">Chọn giới tính</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Địa chỉ</label>
                    <div className="personal-info-value">Nhập địa chỉ</div>
                    <button>Chỉnh sửa</button>
                </div>

                <div className="personal-info-row">
                    <label>Thông tin hộ chiếu</label>
                    <div className="personal-info-value">Chưa cung cấp</div>
                    <button>Thêm hộ chiếu</button>
                </div>

            </div>
        </div>
    );
}
