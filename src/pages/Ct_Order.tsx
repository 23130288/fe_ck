import "../css/ct_Order.css"
import OrderItem from "../components/OrderItem";

type Order = {
    id: number;
    image: string;
    name: string;
    price: string;
    quantity: number;
    total: string;
};
export default function Ct_OrderPage({orders}: { orders: Order[] | null }) {
    orders = [
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
            name: "Tour Phú Quốc - Thiên đường biển đảo",
            price: "4200000đ",
            quantity: 2,
            total: "8400000đ"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1555921015-5532091f6026",
            name: "Tour Đà Nẵng - Hội An - Bà Nà Hills",
            price: "3800000đ",
            quantity: 1,
            total: "3800000đ"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1528127269322-539801943592",
            name: "Tour Vịnh Hạ Long khám phá kỳ quan",
            price: "2900000đ",
            quantity: 2,
            total: "5800000đ"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            name: "Tour Sapa - Chinh phục Fansipan",
            price: "3100000đ",
            quantity: 1,
            total: "3100000đ"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            name: "Tour Nha Trang - Khám phá đảo",
            price: "3000000đ",
            quantity: 1,
            total: "3000000đ"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            name: "Tour Quy Nhơn - Biển xanh cát trắng",
            price: "2700000đ",
            quantity: 2,
            total: "5400000đ"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            name: "Tour Hà Giang - Khám phá cao nguyên đá",
            price: "3500000đ",
            quantity: 1,
            total: "3500000đ"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            name: "Tour Mộc Châu - Mùa hoa Tây Bắc",
            price: "1800000đ",
            quantity: 1,
            total: "1800000đ"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
            name: "Tour Côn Đảo - Hành trình khám phá",
            price: "4500000đ",
            quantity: 2,
            total: "9000000đ"
        }
    ];
    return (<>
        <div className="container">
            <h2 className="thanks-message">Cảm ơn bạn đã thanh toán</h2>
            <h3 className="title">Đơn hàng 1111</h3>
            <p className="date">20/12/2004</p>
            <div className="customer-info">
                <p className="customer-name">Nguyễn Văn A</p>
            </div>
            <div className="product-info">
                <div className="product-header">
                    <div className="product-header-content" id="product-header-title">Sản phẩm</div>
                    <div className="product-header-content" id="product-header-price">Đơn giá</div>
                    <div className="product-header-content" id="product-header-quantity">Số lượng</div>
                    <div className="product-header-content" id="product-header-total">Tổng</div>
                </div>
                <div className="list-Orders">
                    {orders.slice(0, 4).map((order) => (
                        <OrderItem key={order.id} order={order}/>
                    ))}
                </div>

                <div className="container-product-price">
                    <div className="container-price">
                        <label>Tổng tiền:</label>
                        <label>100000 đ</label>
                    </div>
                    <div className="container-price" id="final-price">
                        <label className="title">Tổng thanh toán:</label>
                        <label className="price">10000000 đ</label>
                    </div>
                    <div className="container-status">
                        <label className="title">Trạng thái đơn hàng: đã thanh toán</label>
                    </div>
                </div>
            </div>
        </div>
    </>);
}