import {useNavigate} from "react-router";

import "../css/components/TourItem.css";

interface Product {
    id: number;
    image: string;
    name: string;
    place: string;
    reviewPoints: number;
    reviewNumbers: number;
    price: number;
    duration?: string;
}

interface ProductItemProps {
    product: Product;
    type: string;
}

export default function ProductItem({product, type}: ProductItemProps) {
    const navigate = useNavigate();
    return (<>
        <div className="tour-item" onClick={() => navigate(`/product-detail/${type}/${product.id}`)}>
            <img src={product.image} alt=""/>
            <div className="item-info-box">
                <span className="item-name">{product.name}</span>
                <span className="place">{product.place}</span>
                <div className="review-box">
                    <span className="review-points">{product.reviewPoints}</span>
                    <span className="review-numbers">{product.reviewNumbers} đánh giá</span>
                </div>
            </div>
            <div className="item-deal-box">
                {product.duration && (<span className="duration">{product.duration}</span>)}
                <span className="price">{product.price.toLocaleString("vi-VN")} đ</span>
            </div>
        </div>
    </>);
}