import {Link, useSearchParams} from "react-router-dom";

export default function Support() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("subtype") || "all_support";

    // Dữ liệu mẫu
    const supports = [
        {
            id: 1,
            title: "Yêu cầu hoàn tiền",
            order: "Đơn hàng #1003",
            date: "02/11/2026",
            status: "processing",
            statusText: "Đang xử lý"
        },
        {
            id: 2,
            title: "Yêu cầu đổi thông tin",
            order: "Đơn hàng #1004",
            date: "03/11/2026",
            status: "done",
            statusText: "Đã xử lý"
        },
        {
            id: 3,
            title: "Yêu cầu hoàn tiền",
            order: "Đơn hàng #1005",
            date: "04/11/2026",
            status: "processing",
            statusText: "Đang xử lý"
        }
    ];

    const filteredSupports = supports.filter(item => {
        if (type === "processing_support") {
            return item.status === "processing";
        }

        if (type === "done_support") {
            return item.status === "done";
        }

        return true;
    });

    return (
        <>
            <div className="sub_header">
                <h2>Hỗ trợ</h2>
                <div className="sub_menu">
                    <div className="sub_menu_item">
                        <Link to="/user?type=support&subtype=all_support"
                              className={type === "all_support" ? "selected" : "item"}>Tất cả</Link>
                        <Link to="/user?type=support&subtype=processing_support"
                              className={type === "processing_support" ? "selected" : "item"}>Đang chờ xử lý</Link>
                        <Link to="/user?type=support&subtype=done_support"
                              className={type === "done_support" ? "selected" : "item"}>Đã xử lý</Link>
                    </div>
                </div>
            </div>

            <div className="info_list">
                {filteredSupports.map(item => (
                    <div className="info_row" data-nid={item.id} key={item.id}>
                        <div className={`info ${item.status === "processing" ? "unread" : ""}`}>
                            <h3>{item.title}</h3>
                            <div className="info_value">{item.order}</div>
                            <span>{item.date} - {item.statusText}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}