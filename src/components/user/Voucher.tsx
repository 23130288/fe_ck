import {Link, useSearchParams} from "react-router-dom";

export default function Voucher() {
    const [searchParams] = useSearchParams();
    const subType = searchParams.get("subtype") || "all_voucher";

    // ===== DỮ LIỆU VOUCHER =====
    const vouchers = [
        {
            id: 1,
            code: "FLIGHT20",
            description: "Giảm 20% khi đặt vé máy bay nội địa, tối đa 500.000đ.",
            expiry: "15/12/2026",
            status: "available"
        },
        {
            id: 2,
            code: "HOTEL150",
            description: "Giảm 150.000đ cho đơn đặt phòng từ 1.000.000đ.",
            expiry: "20/12/2026",
            status: "available"
        },
        {
            id: 3,
            code: "TOUR30",
            description: "Ưu đãi cho các tour Đà Lạt, Đà Nẵng và Phú Quốc.",
            expiry: "25/12/2026",
            status: "used"
        },
        {
            id: 4,
            code: "FOOD50",
            description: "Giảm 50.000đ khi đặt dịch vụ ăn uống trong chuyến đi.",
            expiry: "10/01/2027",
            status: "available"
        },
        {
            id: 5,
            code: "WEEKEND15",
            description: "Giảm 15% cho các chuyến du lịch vào thứ 7 và chủ nhật.",
            expiry: "15/01/2027",
            status: "expired"
        },
        {
            id: 6,
            code: "WELCOME20",
            description: "Giảm 20% cho đơn đặt dịch vụ du lịch đầu tiên.",
            expiry: "31/01/2027",
            status: "available"
        }
    ];

    // ===== LỌC VOUCHER =====
    const filteredVouchers = vouchers.filter(item => {
        if (subType === "available_voucher") {
            return item.status === "available";
        }

        if (subType === "used_voucher") {
            return item.status === "used";
        }

        if (subType === "expired_voucher") {
            return item.status === "expired";
        }

        return true;
    });

    return (
        <>
            {/* ===== HEADER ===== */}
            <div className="sub_header">
                <div>
                    <h2>Voucher của tôi</h2>

                    <div className="sub_menu">
                        <div className="sub_menu_item">
                            <Link to="/user?type=voucher&subtype=all_voucher"
                                  className={subType === "all_voucher" ? "selected" : "item"}>Tất cả</Link>
                            <Link to="/user?type=voucher&subtype=available_voucher"
                                  className={subType === "available_voucher" ? "selected" : "item"}>Còn hạn</Link>
                            <Link to="/user?type=voucher&subtype=used_voucher"
                                  className={subType === "used_voucher" ? "selected" : "item"}>Đã sử dụng</Link>
                            <Link to="/user?type=voucher&subtype=expired_voucher"
                                  className={subType === "expired_voucher" ? "selected" : "item"}>Hết hạn</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info_list">
                {filteredVouchers.map(item => (
                    <div className="info_row" data-nid={item.id} key={item.id}>
                        <div className={`info ${item.status === "available" ? "unread" : ""}`}>
                            <h3>{item.code}</h3>
                            <div className="info_value">{item.description}</div>
                            <span>Hạn sử dụng: {item.expiry}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}