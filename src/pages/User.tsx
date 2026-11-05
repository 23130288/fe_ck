import "../css/User.css";
import "../js/user.js";

export default function User() {
    return (
        <div className="selection_2" id="selection_2">

            {/* =============================== MENU =============================== */}
            <div className="menu" id="menu">
                <div className="avata">
                    <img src="/images/adminb.jpg" alt="avatar" />
                    <h3 className="username">Nguyễn Văn A</h3>
                </div>

                <div className="menu_item">
                    <a className="item" href="#user-info">Thông tin tài khoản</a>
                    <a className="item" href="#notification">Thông báo</a>
                    <a className="item" href="#order">Đơn hàng</a>
                    <a className="item" href="#voucher">Voucher</a>
                    <a className="item" href="#support">Hỗ trợ</a>
                    <a className="item" href="#change-password">Đổi mật khẩu</a>
                    <a className="item" href="#log-out">Đăng xuất</a>
                </div>
            </div>

            <div className="infomation">

                {/* =============================== USER INFO =============================== */}
                <div className="information-container" id="user-info">
                    <h2>Thông tin tài khoản</h2>

                    <div className="in4">
                        <div className="in4_row">
                            <label className="in4_label" htmlFor="email">Thông tin đăng nhập</label>
                            <input className="in4_input" type="email" id="email" name="email"
                                   value="nguyenvana@gmail.com" readOnly />
                        </div>

                        <div className="in4_row">
                            <label className="in4_label" htmlFor="name">Tên tài khoản</label>
                            <input className="in4_input info2" type="text" id="name" name="name"
                                   value="Nguyễn Văn A" readOnly />
                        </div>

                        <div className="in4_row">
                            <label className="in4_label" htmlFor="sdt">Số điện thoại *</label>
                            <input className="in4_input info2" type="text" id="sdt" name="sdt"
                                   value="096329472" readOnly />
                        </div>

                        <div className="in4_row">
                            <label className="in4_label" htmlFor="address">Địa chỉ *</label>
                            <input className="in4_input info2" type="text" id="address" name="address"
                                   value="Quận 1, TP. Hồ Chí Minh" readOnly />
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="button" className="change-btn">Đổi thông tin</button>
                    </div>
                </div>

                {/* =============================== NOTIFICATION =============================== */}
                <div className="information-container" id="notification">
                    <h2>Thông báo</h2>
                    <div className="container">
                        <div className="products">

                            <div className="notification_item unread" data-nid="1">
                                <div className="info">
                                    <h4>Đặt hàng thành công</h4>
                                    <p>Đơn hàng #1001 đã được xác nhận.</p>
                                    <span>05/11/2026</span>
                                </div>
                            </div>

                            <div className="notification_item" data-nid="2">
                                <div className="info">
                                    <h4>Khuyến mãi mới</h4>
                                    <p>Bạn nhận được voucher giảm giá 20%.</p>
                                    <span>04/11/2026</span>
                                </div>
                            </div>

                            <div className="notification_item unread" data-nid="3">
                                <div className="info">
                                    <h4>Đơn hàng đang giao</h4>
                                    <p>Đơn hàng #1002 đang được vận chuyển.</p>
                                    <span>03/11/2026</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =============================== ORDER =============================== */}
                <div className="information-container" id="order">
                    <h2>Đơn hàng</h2>
                    <div className="container" id="Order">

                        <div className="tab-nav-menu">
                            <a href="#all-orders" className="tab-menu active">Tất cả</a>
                            <a href="#delivered-orders" className="tab-menu">Đã giao</a>
                            <a href="#shipping-orders" className="tab-menu">Đang giao</a>
                            <a href="#cancelled-orders" className="tab-menu">Đã hủy</a>
                        </div>

                        {/* Tất cả đơn hàng */}
                        <div className="product-content all active" id="all-orders">
                            <div className="product-header">
                                <div className="product-header-title">Sản phẩm</div>
                                <div className="product-header-price">Đơn giá</div>
                                <div className="product-header-status">Tình trạng</div>
                                <div className="product-header-date">Ngày tạo</div>
                            </div>

                            <div className="products">
                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1001"><label>Đơn hàng 1001</label></a>
                                    </div>
                                    <div className="product-price">2.500.000 đ</div>
                                    <div className="product-status-delivered">Đã giao</div>
                                    <div className="product-date">01/11/2026</div>
                                </div>

                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1002"><label>Đơn hàng 1002</label></a>
                                    </div>
                                    <div className="product-price">1.800.000 đ</div>
                                    <div className="product-status-shipping">Đang giao</div>
                                    <div className="product-date">03/11/2026</div>
                                </div>

                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1003"><label>Đơn hàng 1003</label></a>
                                    </div>
                                    <div className="product-price">3.200.000 đ</div>
                                    <div className="product-status-cancelled">Đã hủy</div>
                                    <div className="product-date">25/10/2026</div>
                                </div>
                            </div>
                        </div>

                        {/* Đơn hàng đã giao */}
                        <div className="product-content delivered" id="delivered-orders">
                            <div className="product-header">
                                <div className="product-header-title">Sản phẩm</div>
                                <div className="product-header-price">Đơn giá</div>
                                <div className="product-header-date">Ngày tạo</div>
                            </div>
                            <div className="products">
                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1001"><label>Đơn hàng 1001</label></a>
                                    </div>
                                    <div className="product-price">2.500.000 đ</div>
                                    <div className="product-date">01/11/2026</div>
                                </div>
                            </div>
                        </div>

                        {/* Đơn hàng đang giao */}
                        <div className="product-content shipping" id="shipping-orders">
                            <div className="product-header">
                                <div className="product-header-title">Sản phẩm</div>
                                <div className="product-header-price">Đơn giá</div>
                                <div className="product-header-date">Ngày tạo</div>
                            </div>
                            <div className="products">
                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1002"><label>Đơn hàng 1002</label></a>
                                    </div>
                                    <div className="product-price">1.800.000 đ</div>
                                    <div className="product-date">03/11/2026</div>
                                </div>
                            </div>
                        </div>

                        {/* Đơn hàng đã hủy */}
                        <div className="product-content cancelled" id="cancelled-orders">
                            <div className="product-header">
                                <div className="product-header-title">Sản phẩm</div>
                                <div className="product-header-price">Đơn giá</div>
                                <div className="product-header-date">Ngày tạo</div>
                            </div>
                            <div className="products">
                                <div className="product">
                                    <div className="product-title">
                                        <a href="show-order?oid=1003"><label>Đơn hàng 1003</label></a>
                                    </div>
                                    <div className="product-price">3.200.000 đ</div>
                                    <div className="product-date">25/10/2026</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* =============================== VOUCHER =============================== */}
                <div className="information-container" id="voucher">
                    <h2>Voucher</h2>
                    <div className="products">

                        <div className="notification_item">
                            <div className="info">
                                <h4>WELCOME20</h4>
                                <p>Giảm 20% cho đơn hàng đầu tiên.</p>
                                <span>Hạn sử dụng: 30/11/2026</span>
                            </div>
                        </div>

                        <div className="notification_item">
                            <div className="info">
                                <h4>FREESHIP</h4>
                                <p>Miễn phí vận chuyển.</p>
                                <span>Hạn sử dụng: 15/12/2026</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* =============================== SUPPORT =============================== */}
                <div className="information-container" id="support">
                    <div className="container" id="Order">
                        <h2>Hỗ trợ</h2>

                        <div className="tab-nav-menu">
                            <a href="#all-support" className="tab-menu active">Tất cả</a>
                            <a href="#processing-support" className="tab-menu">Đang chờ xử lý</a>
                            <a href="#done-support" className="tab-menu">Xử lý xong</a>
                        </div>

                        <div className="container-contents">
                            <div className="product-content all active" id="all-support">
                                <div className="products">
                                    <a href="show-support?spid=1" className="notification_item">
                                        <div className="info">
                                            <h4>Yêu cầu hoàn tiền</h4>
                                            <p>Đơn hàng #1003</p>
                                            <span>02/11/2026 - Đang xử lý</span>
                                        </div>
                                    </a>

                                    <a href="show-support?spid=2" className="notification_item">
                                        <div className="info">
                                            <h4>Thắc mắc về sản phẩm</h4>
                                            <p>Thông tin sản phẩm</p>
                                            <span>01/11/2026 - Đã xử lý</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="product-content processing" id="processing-support">
                                <div className="products">
                                    <a href="show-support?spid=1" className="notification_item">
                                        <div className="info">
                                            <h4>Yêu cầu hoàn tiền</h4>
                                            <p>Đơn hàng #1003</p>
                                            <span>02/11/2026 - Đang xử lý</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="product-content done" id="done-support">
                                <div className="products">
                                    <a href="show-support?spid=2" className="notification_item">
                                        <div className="info">
                                            <h4>Thắc mắc về sản phẩm</h4>
                                            <p>Thông tin sản phẩm</p>
                                            <span>01/11/2026 - Đã xử lý</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== CHANGE PASSWORD =============================== */}
                <div className="information-container" id="change-password">
                    <h2>Đổi mật khẩu</h2>
                    <form className="in4">
                        <div className="in4_row">
                            <label className="in4_label" htmlFor="old_password">Mật khẩu cũ</label>
                            <input className="in4_input" id="old_password" type="password" name="old_password" />
                        </div>

                        <div className="in4_row">
                            <label className="in4_label" htmlFor="password">Mật khẩu mới</label>
                            <input className="in4_input" id="password" type="password" name="password" />
                        </div>

                        <div className="in4_row">
                            <label className="in4_label" htmlFor="confirm_password">Xác nhận mật khẩu mới</label>
                            <input className="in4_input" id="confirm_password" type="password"
                                   name="confirm_password" />
                        </div>

                        <div className="in4_row" id="password-info-button">
                            <button className="bt_xac_nhan" id="btn-doi-mk" type="button">Xác nhận</button>
                        </div>
                    </form>
                </div>

                {/* =============================== LOG OUT =============================== */}
                <div className="information-container" id="log-out">
                    <h2>Đăng xuất</h2>
                    <p>Bạn có chắc muốn đăng xuất không?</p>
                    <button className="bt_xac_nhan" id="btn-dang-xuat" type="button">
                        Đăng xuất
                    </button>
                </div>

            </div>
        </div>
    );
}