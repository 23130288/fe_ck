export default function Support() {
    return (<>
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
        </>
    );
}