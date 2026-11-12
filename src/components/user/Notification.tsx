import { Link, useSearchParams } from "react-router-dom";

export default function Notification() {
    const [searchParams] = useSearchParams();
    const subType = searchParams.get("subtype") || "all_notification";

    // ===== DỮ LIỆU THÔNG BÁO =====
    const notifications = [
        {
            id: 1,
            title: "Đặt hàng thành công",
            content: "Đơn hàng #1001 đã được xác nhận.",
            date: "05/11/2026",
            status: "unread"
        },
        {
            id: 2,
            title: "Khuyến mãi mới",
            content: "Bạn đang có chương trình khuyến mãi mới.",
            date: "05/11/2026",
            status: "read"
        },
        {
            id: 3,
            title: "Đơn hàng đang giao",
            content: "Đơn hàng #1001 đang được vận chuyển.",
            date: "05/11/2026",
            status: "unread"
        }
    ];

    // ===== LỌC THÔNG BÁO =====
    const filteredNotifications = notifications.filter(item => {
        if (subType === "unread_notification") {
            return item.status === "unread";
        }

        if (subType === "read_notification") {
            return item.status === "read";
        }

        return true;
    });

    return (
        <>
            <div className="sub_header">
                <div>
                    <h2>Thông báo</h2>
                    <div className="sub_menu">
                        <div className="sub_menu_item">
                            <Link to="/user?type=notification&subtype=all_notification" className={subType === "all_notification" ? "selected" : "item"}>Tất cả</Link>
                            <Link to="/user?type=notification&subtype=unread_notification" className={subType === "unread_notification" ? "selected" : "item"}>Chưa đọc</Link>
                            <Link to="/user?type=notification&subtype=read_notification" className={subType === "read_notification" ? "selected" : "item"}>Đã đọc</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info_list">
                {filteredNotifications.map(item => (
                    <div className="info_row" data-nid={item.id} key={item.id}>
                        <div className={`info ${item.status === "unread" ? "unread" : ""}`}>
                            <h3>{item.title}</h3>
                            <div className="info_value">{item.content}</div>
                            <span>{item.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}