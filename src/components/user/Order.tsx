import {Link, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

export function Order() {
    const [searchParams] = useSearchParams();

    const subType1 = searchParams.get("subType1") || "all";
    const subType2 = searchParams.get("subType2") || "all_order";

    const orders = useSelector(
        (state: RootState) => state.orders.orders
    );
    const filteredOrders = orders.filter(item => {
        const matchType =
            subType1 === "all" || item.type === subType1;
        const matchStatus =
            subType2 === "all_order" || item.status === subType2;
        return matchType && matchStatus;
    });
    return (
        <>
            <div className="sub_header">
                <div>
                    <h2>Order của tôi</h2>
                    <div className="sub_menu">
                        <div className="sub_menu_item">
                            <Link to="/user?type=order&subType1=all&subType2=all_order"
                                  className={subType1 === "all" ? "selected" : "item"}>Tất cả dịch vụ</Link>
                            <Link to="/user?type=order&subType1=flight&subType2=all_order"
                                  className={subType1 === "flight" ? "selected" : "item"}>Vé máy bay</Link>
                            <Link to="/user?type=order&subType1=hotel&subType2=all_order"
                                  className={subType1 === "hotel" ? "selected" : "item"}>Khách sạn</Link>
                            <Link to="/user?type=order&subType1=tour&subType2=all_order"
                                  className={subType1 === "tour" ? "selected" : "item"}>Tour</Link>
                        </div>
                    </div>

                    <div className="sub_menu">
                        <div className="sub_menu_item">
                            <Link to={`/user?type=order&subType1=${subType1}&subType2=all_order`}
                                  className={subType2 === "all_order" ? "selected" : "item"}>Tất cả</Link>
                            <Link to={`/user?type=order&subType1=${subType1}&subType2=processing`}
                                  className={subType2 === "processing" ? "selected" : "item"}>Đang đặt</Link>
                            <Link to={`/user?type=order&subType1=${subType1}&subType2=cancelled`}
                                  className={subType2 === "cancelled" ? "selected" : "item"}>Đã hủy</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info_list">
                {filteredOrders.map(item => (
                    <div className="info_row" data-nid={item.id} key={item.id}>
                        <div className="info">
                            <h3>{item.code}</h3>
                            <div className="info_value">{item.description}</div>
                            <span>Hạn sử dụng: {item.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}