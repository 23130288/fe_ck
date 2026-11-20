import "../css/ct_Order.css";

type Order = {
    id: number;
    image: string;
    name: string;
    price: string;
    quantity: number;
    total: string;
};

export default function Ct_OrderPage({orders}: { orders: Order[] | null }) {
    const rooms = [
        {
            id: 1,
            name: "Phòng Superior có giường cỡ king nhìn ra biển",
            breakfast: "Giá bao gồm bữa sáng",
            rating: "8.2 Rất tốt · 22 đánh giá",
            cancellation: "Không hoàn tiền",
            guests: "1 người lớn",
            guestName: "Thanh Hải",
            cleanliness: "Phòng cực kỳ sạch - 8.5",
            smoking: "Không hút thuốc"
        },
        {
            id: 2,
            name: "Standard Room with Two Single Bed",
            breakfast: "Không bao gồm bữa sáng",
            rating: "8.5 Rất tốt · 35 đánh giá",
            cancellation: "Miễn phí hủy trước ngày nhận phòng",
            guests: "2 người lớn",
            guestName: "Thanh Hải",
            cleanliness: "Phòng sạch sẽ - 8.7",
            smoking: "Không hút thuốc"
        }
    ];


    return (
        <div className="container">
            <div className="steps">
                <div className="step completed">
                    <span className="step_num">✓</span>
                    <span>Bạn chọn</span>
                </div>

                <div className="line"></div>

                <div className="step active">
                    <span className="step_num">2</span>
                    <span>Chi tiết về bạn</span>
                </div>

                <div className="line"></div>

                <div className="step">
                    <span className="step_num">3</span>
                    <span>Hoàn tất đặt phòng</span>
                </div>
            </div>
            <div className="ct_order_container">

                <div className="left_sec">
                    <div className="left_block">
                        <img
                            className="hotel_img"
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                            alt="Khách sạn ibis Styles Vung Tau"/>

                        <div className="left_block_conten">
                            <h1>ibis Styles Vung Tau</h1>

                            <p className="hotel_address">
                                117 Thuy Van Street, Vung Tau Ward,
                                790000 Vũng Tàu, Việt Nam
                            </p>

                            <p className="hotel_location">
                                Vị trí xuất sắc — 9,2
                            </p>

                            <div className="hotel_rating">
                                <p className="rating_number">8,3</p>
                                <span>Rất tốt · 878 đánh giá</span>
                            </div>

                            <div className="hotel_amenities">
                                <span>Giáp biển</span>
                                <span>Hồ bơi</span>
                                <span>Chỗ đỗ xe</span>
                                <span>Trung tâm thể dục</span>
                                <span>Điều hòa nhiệt độ</span>
                                <span>Dọn phòng hàng ngày</span>
                            </div>
                        </div>
                    </div>

                    <div className="left_block">
                        <div className="left_block_conten">
                            <h1>Chi tiết đặt phòng của bạn</h1>
                            <div className="booking_dates">
                                <div className="booking_date_item">
                                    <span>Nhận phòng</span>
                                    <h3>T6, 27 tháng 11</h3>
                                    <p>Từ 14:00</p>
                                </div>

                                <div className="booking_date_item">
                                    <span>Trả phòng</span>
                                    <h3>CN, 29 tháng 11</h3>
                                    <p>Trước 12:00</p>
                                </div>
                            </div>

                            <div className="all_room">
                                <h3>Bạn đã chọn</h3>
                                <h2>2 đêm, 4 phòng cho 6 người lớn</h2>

                                <p>2 x Phòng Superior có giường cỡ king nhìn ra biển</p>
                                <p>2 x Standard Room with Two Single Bed</p>

                                <button type="button" className="text_button">
                                    Đổi lựa chọn của bạn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_sec">
                    <div className="right_block">
                        <div className="logged_in_card">
                            <img
                                src="https:i.pravatar.cc/100?img=12"
                                alt="Ảnh đại diện"
                            />

                            <div className="logged_in_info">
                                <h2>Bạn đã được đăng nhập</h2>
                                <p>Thanh hải</p>
                            </div>
                        </div>
                    </div>


                    <div className="right_block">
                        <h2>Nhập thông tin chi tiết của bạn</h2>

                        <div className="guest_form">
                            <div className="form_row">
                                <div className="form_group">
                                    <label>
                                        Họ (tiếng Anh) <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ví dụ: Nguyễn"
                                        required
                                    />
                                </div>

                                <div className="form_group">
                                    <label>
                                        Tên (tiếng Anh) <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Thanh hải"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form_group form_half">
                                <label>
                                    Địa chỉ email <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    defaultValue="nguyenthai221204@gmail.com"
                                    required
                                />
                                <p className="form_description">
                                    Email xác nhận đặt phòng sẽ được gửi đến địa chỉ này
                                </p>
                            </div>

                            <div className="form_group form_half">
                                <label>
                                    Địa chỉ <span className="required">*</span>
                                </label>
                                <input type="text" required/>
                            </div>

                            <div className="form_group form_half">
                                <label>
                                    Thành phố <span className="required">*</span>
                                </label>
                                <input type="text" required/>
                            </div>

                            <div className="form_group form_half">
                                <label>
                                    Quốc gia / Khu vực <span className="required">*</span>
                                </label>
                                <select defaultValue="Vietnam" required>
                                    <option value="Vietnam">Việt Nam</option>
                                    <option value="Thailand">Thái Lan</option>
                                    <option value="Japan">Nhật Bản</option>
                                    <option value="Korea">Hàn Quốc</option>
                                    <option value="USA">Hoa Kỳ</option>
                                </select>
                            </div>

                            <div className="form_group form_half">
                                <label>
                                    Số điện thoại <span className="required">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Ví dụ: 0912345678"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label>
                                    Yêu cầu đặc biệt (không bắt buộc)
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Nhập yêu cầu của bạn tại đây..."
                                />
                            </div>

                            <div className="booking_submit">
                                <div className="booking_submit_info">
                                    <span>Tổng thanh toán</span>
                                    <p>2.450.000 ₫</p>
                                </div>

                                <button type="submit">
                                    Tiếp tục
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}