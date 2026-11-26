import {useState} from "react";
import {useNavigate} from "react-router";

import "../../css/ProductDetail/HotelDetail.css";

import ListProductReviews from "../../components/ListProductReviews.tsx";
import ProductReview from "../../components/ProductReview.tsx";
import type Review from "../../type/Review.tsx";
import {useWishlist} from "../../api/Wishlist.ts";
import LoginPopup from "../../components/LoginPopup.tsx";

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
    const navigate = useNavigate();
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const {entries, toggleWishlist, loading, error, isPending, isAuthenticated} = useWishlist();
    const isInWishlist = entries.some(item => item.type === "hotel" && item.id === product.id);
    const [selectedRooms, setSelectedRooms] = useState<Record<number, number>>({});

    const handleWishlistToggle = () => {
        if (!isAuthenticated) {
            setShowLoginModal(true);
            return;
        }
        void toggleWishlist({
            id: product.id,
            type: "hotel",
            name: product.name,
            image: product.image,
            place: `${product.place}, ${product.city}, ${product.country}`,
            price: product.price
        });
    };

    let totalPrice = 0;
    for (const room of product.room_types) {
        const quantity = selectedRooms[room.id] || 0;
        const roomTotal = room.price * quantity;
        totalPrice += roomTotal;
    }
    let totalRooms = 0;
    for (const quantity of Object.values(selectedRooms)) {
        totalRooms += quantity;
    }

    const starRate = [];
    for (let i = 0; i < product.star_rating; i++) {
        starRate.push(<i key={i} className="fa-solid fa-star"></i>);
    }

    const handleBooking = () => {
        const roomList = [];
        for (const room of product.room_types) {
            const quantity = selectedRooms[room.id] || 0;
            if (quantity > 0) {
                const total = room.price * quantity;
                roomList.push({
                    id: room.id,
                    name: room.name,
                    image: room.image,
                    price: room.price,
                    quantity: quantity,
                    total: total
                });
            }
        }

        let totalRooms = 0;
        for (const room of roomList) {
            totalRooms = totalRooms + room.quantity;
        }
        let totalPrice = 0;
        for (const room of roomList) {
            totalPrice = totalPrice + room.total;
        }
        navigate("/ct_orderPage", {
            state: {
                type: "hotel",
                product: product,
                roomList: roomList,
                totalRooms: totalRooms,
                totalPrice: totalPrice
            }
        });
    };

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
                    disabled={loading || isPending("hotel", product.id)}
                    onClick={handleWishlistToggle}
                >
                    <i className="fa-solid fa-heart"></i>
                </button>
                {error && <p role="alert">{error}</p>}
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
            <h1>Danh sách phòng</h1>
            <div className="section-header">
                <div><span>Loại phòng</span></div>
                <div><span>Giá cả</span></div>
                <div><span>Chọn số lượng</span></div>
                <div></div>
            </div>
            <div className="split-box flex horizontal">
                <div className="room-list flex vertical">
                    {product.room_types.map((room) => (
                        <div className="room-item" key={room.id}>
                            <div className="room-info flex horizontal">
                                <img src={room.image} alt={room.name}/>
                                <div className="more-info flex vertical">
                                    <h2>{room.name}</h2>
                                    <p>{room.description}</p>
                                    <p>Sức chứa: {room.capacity} khách</p>
                                    <div className="amenities-box flex horizontal">
                                        {product.amenities.map((amenity, index) => (
                                            <div className="amenity" key={index}>
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="room-price">
                                <span>{room.price.toLocaleString("vi-VN")} VNĐ</span>
                            </div>
                            <div className="room-amount">
                                <select name="roomAmount" value={selectedRooms[room.id] || 0} onChange={(e) => {
                                    const quantity = Number(e.target.value);
                                    setSelectedRooms({...selectedRooms, [room.id]: quantity});
                                }}>
                                    <option value="0">0</option>
                                    {Array.from({length: room.quantity}, (_, index) => index + 1).map(index => (
                                        <option key={index} value={index}>
                                            {index} - {(room.price * index).toLocaleString("vi-VN")} VNĐ
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pricing-box flex vertical">
                    <div className="total-price-box">
                        <span className="bold">{totalRooms} </span><span>phòng - </span>
                        <span className="bold">{totalPrice.toLocaleString("vi-VN")} VNĐ</span>
                    </div>
                    <button className="reserve-button" onClick={handleBooking} disabled={totalRooms === 0}>Đặt phòng</button>
                    <span>Bạn chưa phải trả tiền</span>
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
        {showLoginModal && <LoginPopup onClose={() => setShowLoginModal(false)}/>}
    </div>);
}
