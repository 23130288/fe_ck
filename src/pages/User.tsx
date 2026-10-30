import '../css/User.css'

import Header from "../components/shareStuffs/header.tsx";
import Footer from "../components/shareStuffs/footer.tsx";

// let user = {
//     avatar: "",
//     name: "Nguyễn Văn A"
// }
export default function User() {
    return (<>
        <Header/>
        <div className="selection_2" id="selection_2">
            <div className="menu" id="menu">
                <div className="avata">
                    <img src="../images/adminb.jpg" alt="avatar"/>
                    <h3 className="username">Nguyễn Văn A</h3>
                </div>
                <div className="menu_item">
                    <a className="item" data-target="user-info" href="#">Thông tin tài khoản</a>
                    <a className="item" data-target="notification" href="#">Thông báo</a>
                    <a className="item" data-target="order" href="#">Đơn hàng</a>
                    <a className="item" data-target="voucher" href="#">Voucher</a>
                    <a className="item" data-target="support" href="#">Hỗ trợ</a>
                    <a className="item" data-target="change-password" href="#">Đổi mật khẩu</a>
                    <a className="item" data-target="log-out" id="dang_xuat" href="#">Đăng xuất</a>
                </div>
            </div>
            <div className="infomation">
                {/*===============================- USER INFO -===============================*/}
                <div className="information-container" id="user-info">
                    <h2>Thông tin tài khoản</h2>
                    {/*<form action="change-user-information" method="post" id="userForm">*/}
                        <div className="in4">
                            <div className="in4_row">
                                <label className="in4_label" htmlFor="email">Thông tin đăng nhập</label>
                                <input className="in4_input" type="email" id="email" name="email" value="${user.email}"
                                       readOnly/>
                            </div>

                            <div className="in4_row">
                                <label className="in4_label" htmlFor="email">Tên tài khoản</label>
                                <input className="in4_input info2" type="text" id="email" name="name"
                                       value="$Nguyễn Văn A"
                                       readOnly/>
                            </div>

                            <div className="in4_row">
                                <label className="in4_label" htmlFor="sdt">Số điện thoại *</label>
                                <input className="in4_input info2" type="text" id="sdt" name="sdt"
                                       placeholder="Bạn chưa nhập sdt"
                                       value="096329472" inputMode="numeric" pattern="[0-9]*"
                                       readOnly/>
                            </div>

                            <div className="in4_row">
                                <label className="in4_label" htmlFor="address">Địa chỉ *</label>
                                <input className="in4_input info2" type="text" id="address" name="address"
                                       placeholder="Bạn chưa nhập địa chỉ"
                                       value="" readOnly/>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="change-btn" id="btn-edit">Đổi thông tin</button>
                            <button type="submit" className="save-btn" id="btn-save">Lưu</button>
                            <button type="button" className="cancel-btn" id="btn-cancel">Hủy</button>
                        </div>
                    {/*</form>*/}
                </div>
            </div>

            {/*    /!*===============================- NOTIFICATION -===============================*!/*/}
            {/*    <div className="information-container" id="notification">*/}
            {/*        <h2>Thông báo</h2>*/}
            {/*        <div className="container">*/}
            {/*            <div className="products">*/}
            {/*                <c:forEach var="n" items="${notifications}">*/}
            {/*                    <div className="notification_item ${!n.isRead ? 'unread' : ''}" data-nid="${n.nid}">*/}
            {/*                        <div className="info">*/}
            {/*                            <h4>${n.title}</h4>*/}
            {/*                            <p>${n.content}</p>*/}
            {/*                            <span>${n.receivedDate}</span>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </c:forEach>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*===============================- ORDER -===============================*!/*/}
            {/*    <div className="information-container" id="order">*/}
            {/*        <div className="container" id="Order">*/}
            {/*            <div className="tab-nav-menu">*/}
            {/*                <a href="#" className="tab-menu active" data-tab="all">Tất cả</a>*/}
            {/*                <a href="#" className="tab-menu" data-tab="delivered">Đã giao</a>*/}
            {/*                <a href="#" className="tab-menu" data-tab="shipping">Đang giao</a>*/}
            {/*                <a href="#" className="tab-menu" data-tab="cancelled">Hủy</a>*/}
            {/*            </div>*/}
            {/*            <div className="container-contents">*/}
            {/*                <div className="product-content all active">*/}
            {/*                    <!--header-->*/}
            {/*                    <div className="product-header">*/}
            {/*                        <div className="product-header-title">Sản phẩm</div>*/}
            {/*                        <div className="product-header-price">Đơn giá</div>*/}
            {/*                        <div className="product-header-status">Tình trạng</div>*/}
            {/*                        <div className="product-header-date">Ngày tạo</div>*/}
            {/*                    </div>*/}
            {/*                    <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="order" items="${orders}">*/}
            {/*                            <div className="product">*/}
            {/*                                <div className="product-title">*/}
            {/*                                    <a href="show-order?oid=${order.oid}"><label>Đơn hàng*/}
            {/*                                        ${order.oid}</label></a>*/}
            {/*                                </div>*/}
            {/*                                <div className="product-price">*/}
            {/*                                    <fmt:formatNumber value="${order.finalPrice}"*/}
            {/*                                                      type="number"*/}
            {/*                                                      groupingUsed="true"/>*/}
            {/*                                    đ*/}
            {/*                                </div>*/}
            {/*                                <div className="product-status-${order.status}">${order.status}</div>*/}
            {/*                                <div className="product-date">${order.createdDate}</div>*/}
            {/*                            </div>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <!-- Delivered -->*/}
            {/*                <div className="product-content delivered">*/}
            {/*                    <!--header-->*/}
            {/*                    <div className="product-header">*/}
            {/*                        <div className="product-header-title">Tiêu đề</div>*/}
            {/*                        <div className="product-header-price">Đơn giá</div>*/}
            {/*                        <div className="product-header-date">Ngày tạo</div>*/}
            {/*                    </div>*/}
            {/*                    <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="order" items="${deliveredOrders}">*/}
            {/*                            <div className="product">*/}
            {/*                                <div className="product-title">*/}
            {/*                                    <div className="product-info">*/}
            {/*                                        <a href="show-order?oid=${order.oid}"><label>Đơn*/}
            {/*                                            hàng ${order.oid}</label></a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="product-price">*/}
            {/*                                    <fmt:formatNumber value="${order.finalPrice}"*/}
            {/*                                                      type="number"*/}
            {/*                                                      groupingUsed="true"/>*/}
            {/*                                    đ*/}
            {/*                                </div>*/}
            {/*                                <div className="product-date">${order.createdDate}</div>*/}
            {/*                            </div>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <!-- Shipping -->*/}
            {/*                <div className="product-content shipping">*/}
            {/*                    <!--header-->*/}
            {/*                    <div className="product-header">*/}
            {/*                        <div className="product-header-title">Tiêu đề</div>*/}
            {/*                        <div className="product-header-price">Đơn giá</div>*/}
            {/*                        <div className="product-header-date">Ngày tạo</div>*/}
            {/*                    </div>*/}
            {/*                    <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="order" items="${deliveringOrder}">*/}
            {/*                            <div className="product">*/}
            {/*                                <div className="product-title">*/}
            {/*                                    <div className="product-info">*/}
            {/*                                        <a href="show-order?oid=${order.oid}"><label>Đơn*/}
            {/*                                            hàng ${order.oid}</label></a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="product-price">*/}
            {/*                                    <fmt:formatNumber value="${order.finalPrice}"*/}
            {/*                                                      type="number"*/}
            {/*                                                      groupingUsed="true"/>*/}
            {/*                                    đ*/}
            {/*                                </div>*/}
            {/*                                <div className="product-date">${order.createdDate}</div>*/}
            {/*                            </div>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="product-content cancelled">*/}
            {/*                    <!--header-->*/}
            {/*                    <div className="product-header">*/}
            {/*                        <div className="product-header-title">Tiêu đề</div>*/}
            {/*                        <div className="product-header-price">Đơn giá</div>*/}
            {/*                        <div className="product-header-date">Ngày tạo</div>*/}
            {/*                    </div>*/}
            {/*                    <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="order" items="${canceledOrder}">*/}
            {/*                            <div className="product">*/}
            {/*                                <div className="product-title">*/}
            {/*                                    <div className="product-info">*/}
            {/*                                        <a href="show-order?oid=${order.oid}"><label>Đơn*/}
            {/*                                            hàng ${order.oid}</label></a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="product-price">*/}
            {/*                                    <fmt:formatNumber value="${order.finalPrice}"*/}
            {/*                                                      type="number"*/}
            {/*                                                      groupingUsed="true"/>*/}
            {/*                                    đ*/}
            {/*                                </div>*/}
            {/*                                <div className="product-date">${order.createdDate}</div>*/}
            {/*                            </div>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*===============================- SUPPORT -===============================*!/*/}
            {/*    <div className="information-container" id="support">*/}
            {/*        <div className="container" id="Order">*/}
            {/*            <div className="tab-nav-menu">*/}
            {/*                <a href="#" className="tab-menu active" data-tab="all">Tất cả</a>*/}
            {/*                <a href="#" className="tab-menu" data-tab="processing">Đang chờ xử lý</a>*/}
            {/*                <a href="#" className="tab-menu" data-tab="done">Xử lý xong</a>*/}
            {/*            </div>*/}
            {/*            <div className="container-contents">*/}
            {/*                <h2>Hỗ trợ</h2>*/}
            {/*                <div className="product-content all active">*/}
            {/*                    // <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="support" items="${supports}">*/}
            {/*                            <a href="show-support?spid=${support.spid}" className="notification_item">*/}
            {/*                                <div className="info">*/}
            {/*                                    <h4>${support.title}</h4>*/}
            {/*                                    <p>${support.topic}</p>*/}
            {/*                                    <span>${support.createdDate} - ${support.status}</span>*/}
            {/*                                </div>*/}
            {/*                            </a>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="product-content processing">*/}
            {/*                    // <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="support" items="${supports}">*/}
            {/*                            <c:if test="${support.status == 'processing'}">*/}
            {/*                                <a href="show-support?spid=${support.spid}" className="notification_item">*/}
            {/*                                    <div className="info">*/}
            {/*                                        <h4>${support.title}</h4>*/}
            {/*                                        <p>${support.topic}</p>*/}
            {/*                                        <span>${support.createdDate} - ${support.status}</span>*/}
            {/*                                    </div>*/}
            {/*                                </a>*/}
            {/*                            </c:if>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="product-content done">*/}
            {/*                    // <!--content-->*/}
            {/*                    <div className="products">*/}
            {/*                        <c:forEach var="support" items="${supports}">*/}
            {/*                            <c:if test="${support.status == 'done'}">*/}
            {/*                                <a href="show-support?spid=${support.spid}" className="notification_item">*/}
            {/*                                    <div className="info">*/}
            {/*                                        <h4>${support.title}</h4>*/}
            {/*                                        <p>${support.topic}</p>*/}
            {/*                                        <span>${support.createdDate} - ${support.status}</span>*/}
            {/*                                    </div>*/}
            {/*                                </a>*/}
            {/*                            </c:if>*/}
            {/*                        </c:forEach>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*===============================- CHANGE PASSWORD -===============================*!/*/}
            {/*    <div className="information-container" id="change-password">*/}
            {/*        <h2>Đổi mật khẩu</h2>*/}
            {/*        <form className="in4" method="post" action="change-password">*/}
            {/*            <div className="in4_row">*/}
            {/*                <label className="in4_label" htmlFor="old_password">Mật khẩu cũ</label>*/}
            {/*                <div className="password-wrapper">*/}
            {/*                    <input className="in4_input" id="old_password" type="password" name="old_password"/>*/}
            {/*                    <button type="button" id="toggleOldPassword">👁</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="in4_row">*/}
            {/*                <label className="in4_label" htmlFor="password">Mật khẩu mới</label>*/}
            {/*                <div className="password-wrapper">*/}
            {/*                    <input className="in4_input" id="password" type="password" name="password"/>*/}
            {/*                    <button type="button" id="togglePassword">👁</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="in4_row">*/}
            {/*                <label className="in4_label" htmlFor="confirm_password">Xác nhận mật khẩu mới</label>*/}
            {/*                <div className="password-wrapper">*/}
            {/*                    <input className="in4_input" id="confirm_password" type="password"*/}
            {/*                           name="confirm_password"/>*/}
            {/*                    <button type="button" id="toggleConfirmPassword">👁</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="in4_row" id="password-info-button">*/}
            {/*                <c:if test="${not empty sessionScope.error}">*/}
            {/*                    <p className="password-error">${sessionScope.error}</p>*/}
            {/*                    <c:remove var="error" scope="session"/>*/}
            {/*                </c:if>*/}

            {/*                <c:if test="${not empty sessionScope.success}">*/}
            {/*                    <p className="password-success">${sessionScope.success}</p>*/}
            {/*                    <c:remove var="success" scope="session"/>*/}
            {/*                </c:if>*/}
            {/*                <button className="bt_xac_nhan" id="btn-doi-mk">Xác nhận</button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}

            {/*    /!*===============================- LOG OUT -===============================*!/*/}
            {/*    <div className="information-container" id="log-out">*/}
            {/*        <h2>Đăng xuất</h2>*/}
            {/*        <p>Bạn có chắc muốn đăng xuất không?</p>*/}
            {/*        <form method="post" action="log-out">*/}
            {/*            <button className="bt_xac_nhan" id="btn-dang-xuat">Đăng xuất</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        {/*Popup đổi thông tin*/}
        <div id="adminPopup" className="popup">
            <div className="popup-content">
                <h2 id="popup-title">Tiêu đề</h2>

                <div id="popup-body">

                </div>

                <div className="popup-actions">
                    <button id="popup-confirm" className="btn confirm">Xác nhận</button>
                    <button id="popup-cancel" className="btn cancel">Hủy</button>
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}