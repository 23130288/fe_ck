import "../css/ct_Order.css"

export default function OrderItem(props: {
    order:  {
        image: any,
        name: String,
        price: number,
        quantity: number,
        total: number
    }}) {
    return (<>
        <div className="container-product-items">
            <div className="product-item">
                <div className="product-item-title">
                    <img src={props.order.image} className="img_Show"/>
                </div>
                <div className="product-item-more">
                    <span className="price">{props.order.price} đ</span>
                </div>
                <div className="product-item-quantity">
                    <span className="quantity">{props.order.quantity}</span>
                </div>
                <div className="product-item-more">
                    <span className="total">{props.order.total} đ</span>
                </div>
            </div>
        </div>
    </>);
}