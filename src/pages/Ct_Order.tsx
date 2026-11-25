import "../css/ct_Order.css";
import {useLocation} from "react-router";

type BookingState = {
    type: "tour" | "hotel";
    product: any;
    departureDate?: string;
    passengers?: number;
    checkIn?: string;
    checkOut?: string;
    rooms?: number;
    adults?: number;
};

type User = {
    address: string;
    avatar: string;
    birthDate: any;
    displayName: string;
    email: string;
    emailVerified: boolean;
    fullName: string;
    gender: string;
    id: number;
    nationality: string;
    passport: {
        expiryDate: any;
        issueDate: any;
        issuingCountry: string;
        passportNumber: string;
    };
    phone: string;
    username: string;
};

export default function Ct_OrderPage() {
    const storedUser = sessionStorage.getItem("userInfo");
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;
    if (!user) {
        return (
            <div className="container">
                <h2>Vui lòng đăng nhập để tiếp tục đặt tour.</h2>
            </div>
        );
    }

    const location = useLocation();
    const booking = location.state as BookingState | null;

    if (!booking || !booking.product) {
        return (
            <div className="container">
                <h2>Không tìm thấy thông tin đặt hàng.</h2>
                <p>Vui lòng quay lại trang sản phẩm và thực hiện đặt hàng.</p>
            </div>
        );
    }

    const {type, product} = booking;
    const productImage = product.image || product.images?.[0];
    const price = Number(product.price) || 0;
    const formatPrice = (value: number) => value.toLocaleString("vi-VN") + " ₫";

    if (type === "tour") {
        const passengers = Number(booking.passengers) || 1;
        const total = price * passengers;
        const fullName = user.fullName || "";
        const nameParts = fullName.trim().split(/\s+/).filter(Boolean);

        const firstName = nameParts.pop() || "";
        const lastName = nameParts.join(" ");

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
                        <span>Hoàn tất đặt tour</span>
                    </div>
                </div>

                <div className="ct_order_container">

                    <div className="left_sec">

                        <div className="left_block">
                            <img className="hotel_img" src={productImage} alt={product.name}/>

                            <div className="left_block_conten">
                                <h1>{product.name}</h1>
                                <p className="hotel_address">{product.location}</p>
                                <p className="hotel_location">Nơi khởi hành: {product.departureLocation}</p>

                                <div className="hotel_rating">
                                    <p className="rating_number">{product.reviewPoints}</p>
                                    <span>{product.reviewNumbers} đánh giá</span>
                                </div>

                                <p>{product.description}</p>
                            </div>
                        </div>

                        <div className="left_block">
                            <div className="left_block_conten">
                                <h1>Chi tiết chuyến đi của bạn</h1>

                                <div className="booking_dates">
                                    <div className="booking_date_item">
                                        <span>Ngày khởi hành</span>
                                        <h3>{booking.departureDate}</h3>
                                    </div>

                                    <div className="booking_date_item">
                                        <span>Thời gian</span>
                                        <h3>{product.duration}</h3>
                                    </div>
                                </div>

                                <div className="all_room">
                                    <h3>Thông tin đặt tour</h3>
                                    <h2>{passengers} hành khách</h2>
                                    <p>Giá mỗi người: {formatPrice(price)}</p>
                                    <p>Tổng tiền: {formatPrice(total)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="left_block">
                            <div className="left_block_conten">
                                <h1>Lịch trình Tour</h1>

                                {product.itinerary?.map(
                                    (day: any, index: number) => (
                                        <div key={index}>
                                            <h3>Ngày {day.day}: {day.title}</h3>
                                            {day.activities?.map((activity: string, i: number) => (
                                                <p key={i}>• {activity}</p>))}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {product.includes && (
                            <div className="left_block">
                                <div className="left_block_conten">
                                    <h1>Dịch vụ bao gồm</h1>

                                    {product.includes.map(
                                        (item: string, index: number) => (
                                            <p key={index}>✓ {item}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {product.excludes && (
                            <div className="left_block">
                                <div className="left_block_conten">
                                    <h1>Chi phí không bao gồm</h1>

                                    {product.excludes.map(
                                        (item: string, index: number) => (
                                            <p key={index}>• {item}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="right_sec">
                        <div className="right_block">
                            <div className="logged_in_card">
                                <img src={user.avatar || "/images/default-avatar.png"} alt="Ảnh đại diện"/>
                                <div className="logged_in_info">
                                    <h2>Bạn đã được đăng nhập</h2>
                                    <p>{user.displayName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="right_block">
                            <h2>Nhập thông tin chi tiết của bạn</h2>
                            <div className="guest_form">
                                <div className="form_row">
                                    <div className="form_group">
                                        <label>
                                            Họ và tên đệm <span className="required">*</span>
                                        </label>
                                        <input type="text" defaultValue={lastName} placeholder="Nhập họ và tên đệm"
                                               required/>
                                    </div>

                                    <div className="form_group">
                                        <label>
                                            Tên <span className="required">*</span>
                                        </label>
                                        <input type="text" defaultValue={firstName} placeholder="Nhập tên" required/>
                                    </div>
                                </div>

                                <div className="form_row">
                                    <div className="form_group">
                                        <label>
                                            Email <span className="required">*</span>
                                        </label>
                                        <input type="email" defaultValue={user.email} required/>
                                    </div>

                                    <div className="form_group">
                                        <label>
                                            Số điện thoại <span className="required">*</span>
                                        </label>
                                        <input type="tel" defaultValue={user.phone} required/>
                                    </div>
                                </div>

                                <div className="form_row">
                                    <div className="form_group">
                                        <label>
                                            Địa chỉ <span className="required">*</span>
                                        </label>
                                        <input type="text" defaultValue={user.address} required/>
                                    </div>

                                    <div className="form_group">
                                        <label>Quốc tịch</label>
                                        <input type="text" defaultValue={user.nationality}/>
                                    </div>
                                </div>

                                <div className="form_group">
                                    <label>Yêu cầu đặc biệt (không bắt buộc)</label>
                                    <textarea rows={4} placeholder="Nhập yêu cầu của bạn tại đây..."/>
                                </div>
                                <div className="form_group">
                                    <div className="booking_submit">
                                        <div className="booking_submit_info">
                                            <span>Tổng thanh toán</span>
                                            <p>{formatPrice(total)}</p>
                                        </div>

                                        <button type="button">
                                            Tiếp tục
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

    if (type === "hotel") {

    }

    return (
        <div className="container">
            <h2>Loại đặt hàng không hợp lệ.</h2>
        </div>
    );
}