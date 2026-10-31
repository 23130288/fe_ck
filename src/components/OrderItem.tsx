import "../css/ct_Order.css";

export default function OrderItem(props: {
    order: {
        image: any;
        name: string;
        price: any;
        quantity: number;
        total: any;
    };
}) {
    return (
        <>
            <div className="container-product-items">
                <div className="product-item">
                    <div className="product-item-title">
                        <img src={props.order.image} className="img_Show" alt={props.order.name}/>
                        <span>{props.order.name}</span>
                    </div>

                    <div className="product-item-more">
                        <span className="price">
                            {props.order.price}
                        </span>
                    </div>

                    <div className="product-item-quantity">
                        <span className="quantity">
                            {props.order.quantity}
                        </span>
                    </div>

                    <div className="product-item-more">
                        <span className="total">
                            {props.order.total}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}