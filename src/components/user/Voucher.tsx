import "../../css/User.css"

export default function Voucher() {
    return (<>
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
        </>
    );
}