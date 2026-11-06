import "../../css/User.css"

export default function Order() {
    return (<>
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
        </>
    );
}