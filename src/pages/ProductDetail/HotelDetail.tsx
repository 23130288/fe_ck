import {useState} from "react";

import "../../css/ProductDetail/HotelDetail.css";

import ListProductReviews from "../../components/ListProductReviews.tsx";
import ProductReview from "../../components/ProductReview.tsx";
import type Review from "../../type/Review.tsx";
import {useWishlist} from "../../api/Wishlist.ts";

interface HotelDetailProps {
    product: {
        id: number;
        product_type: string;
        name: string;
        image: string;
        images: string[];
        place: string;
        city: string;
        country: string;
        hotel_type: string;
        star_rating: number;
        price: number;
        reviewPoints: number;
        reviewNumbers: number;
        reviews: Review[];
        description: string;
        amenities: string[];
        room_types: {
            id: number;
            name: string;
            image: string;
            price: number;
            capacity: number;
            quantity: number;
            description: string;
        }[];
        check_in: string;
        check_out: string;
        status: string;
    };
}

export default function HotelDetail({product}: HotelDetailProps) {
    const [showAllReviews, setShowAllReviews] = useState(false);
    const {entries, toggleWishlist} = useWishlist();
    const isInWishlist = entries.some(item => item.type === "hotel" && item.id === product.id);

    const starRate = [];
    for (let i = 0; i < product.star_rating; i++) {
        starRate.push(<i key={i} className="fa-solid fa-star"></i>);
    }

    return (<div className="product-detail-main hotel-main">
        <section className="section-header flex space-between">
            <div className="left-box flex">
                <h1>{product.name}</h1>
                <span>{product.place}, {product.city}, {product.country}</span>
                <div className="star-rating">{starRate}</div>
            </div>

            <div className="right-box">
                <button
                    className={`wishlist-button${isInWishlist ? " is-active" : ""}`}
                    type="button"
                    aria-label={isInWishlist ? "Xóa khỏi danh sách yêu thích" : "Thêm vào danh sách yêu thích"}
                    aria-pressed={isInWishlist}
                    onClick={() => toggleWishlist({
                        id: product.id,
                        type: "hotel",
                        name: product.name,
                        image: product.image,
                        place: `${product.place}, ${product.city}, ${product.country}`,
                        price: product.price
                    })}
                >
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        </section>
        <section className="section-overview flex">
            <div className="image-box">
                <img src={product.image} alt=""/>
                {product.images.map((img) => (<img src={img} alt=""/>))}
            </div>
            <div className="review-box">
                <div className="review-points-box flex">
                    <div className="flex vertical">
                        <span className="review-text">Tốt</span>
                        <span className="review-numbers">{product.reviewNumbers} đánh giá</span>
                    </div>
                    <span className="review-points">{product.reviewPoints}</span>
                </div>
                <div className="review-comments-box">
                    {product.reviews ? (
                        <ProductReview review={product.reviews[0]}/>
                    ) : (
                        <p>Chưa có đánh giá nào.</p>
                    )}
                </div>
            </div>
        </section>
        <section className="section-information flex vertical">
            <h1>Tổng quan khách sạn</h1>
            <div className="features-box">
                {product.amenities.map((amenity, index) => (
                    <div className="feature" key={index}>
                        <i className="fa-solid fa-check"></i>
                        <span>{amenity}</span>
                    </div>
                ))}
            </div>
            <div className="description-box flex vertical">
                <span className="description">{product.description}</span>
            </div>
        </section>
        <section className="section-room-types flex vertical">
            <h1>Danh sách loại phòng</h1>
            <div className="split-box flex horizontal">
                <div className="room-list flex vertical">
                    {product.room_types.map((room) => (
                        <div className="room-item" key={room.id}>
                            <img src={room.image} alt={room.name}/>
                            <div className="room-info">
                                <h2>{room.name}</h2>
                                <p>{room.description}</p>
                                <p>Sức chứa: {room.capacity} khách</p>
                                <p>Số lượng phòng: {room.quantity}</p>
                                <p className="hotel-price">{room.price.toLocaleString("vi-VN")}đ / đêm</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pricing-box">

                </div>
            </div>
        </section>
        <section className="section-review flex vertical">
            <h1>Đánh giá</h1>
            {product.reviews && (<>
                <ListProductReviews reviews={product.reviews} start={0}
                                    end={showAllReviews ? product.reviews.length : 3}/>
                {product.reviews.length > 3 && (
                    <button className="read-all-reviews" onClick={() => setShowAllReviews(!showAllReviews)}>
                        {showAllReviews ? "Thu gọn đánh giá" : "Tất cả đánh giá"}
                    </button>
                )}
            </>)}
        </section>
    </div>);
}
