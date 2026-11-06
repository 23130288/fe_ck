import "../../css/User.css"

export default function Notification() {
    return (<>
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
        </>
    );
}