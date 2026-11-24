import {useState} from "react";
import {useNavigate} from "react-router";

import PassangerNumber from "../../components/PassangerNumber.tsx";
import DatePicker from "../../components/DatePicker.tsx";
import ProductReview from "../../components/ProductReview.tsx";
import ListProductReviews from "../../components/ListProductReviews.tsx";

import type Review from "../../type/Review.tsx";
import type Schedule from "../../type/Schedule.tsx";

interface TourDetailProps {
    product: {
        id: number;
        product_type: string;
        name: string;
        image: string;
        images: string[];
        place: string;
        departure_place: string;
        tour_type: string;
        duration: string;
        departure_date: string[];
        price: number;
        reviewPoints: number;
        reviewNumbers: number;
        reviews: Review[];
        description: string;
        schedule: Schedule[];
        included: string[];
        excluded: string[];
        max_guests: number;
        status: string;
    };
}

export default function TourDetail({product}: TourDetailProps) {
    const navigate = useNavigate();

    const [openDay, setOpenDay] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [passengers, setPassengers] = useState({adults: 1, teens: 0, kids: 0});
    const [showAllReviews, setShowAllReviews] = useState(false);

    const formatPrice = (price: number) => {
        return price.toLocaleString("vi-VN") + "đ";
    };
    return (<div className="product-detail-main">
        <section className="section-header flex space-between">
            <div className="left-box flex">
                <h1>{product.name}</h1>
                <span>{product.place}</span>
            </div>
            <div className="right-box">
                <button className="wishlist-button"><i className="fa-solid fa-heart"></i></button>
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
            <h1>Tổng quan hành trình</h1>
            <div className="features-box">
                {product.included.map((feature, index) => (
                    <div className="feature" key={index}>
                        <i className="fa-solid fa-check"></i>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
            <div className="excluded-box flex vertical">
                <span>Không bao gồm</span>
                <div className="features-box">
                    {product.excluded.map((item, index) => (
                        <div className="feature" key={index}>
                            <i className="fa-solid fa-xmark"></i>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="description-box flex vertical">
                <span className="description">{product.description}</span>
            </div>
        </section>
        <section className="section-schedule flex vertical">
            <h1>Lịch trình chi tiết</h1>
            <div className="schedule-list flex vertical">
                {product.schedule.map((item) => (
                    <div className="schedule-day" key={item.day}>
                        <div className="schedule-header"
                             onClick={() => setOpenDay(openDay === item.day ? null : item.day)}>
                            <span>Ngày {item.day}: {item.title}</span>
                            <i className={`fa-solid ${openDay === item.day ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}`}></i>
                        </div>
                        {openDay === item.day && (
                            <div className="schedule-content flex vertical">
                                {item.activities.map((activity, index) => (
                                    <div className="schedule-activity" key={index}>
                                        <p>{activity}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
        <section className="section-date-pick flex vertical">
            <h1>Lịch khởi hành</h1>
            <div className="search-filters-box flex horizontal space-between">
                <DatePicker type="range" label="Thời gian" placeholder="Chọn ngày đi - về"/>
                <PassangerNumber/>
                <button className="search-button">Tìm kiếm</button>
            </div>
            <div className="header-tour-date">
                <span>Ngày khởi hành</span>
                <span>Thông tin</span>
                <span>Tình trạng</span>
                <span>Giá tour</span>
            </div>
            <div className="list-tour-date flex vertical">
                {product.departure_date.map((date, index) => (
                    <div className={`tour-date ${selectedDate === date ? "selected" : ""}`} key={index}
                         onClick={() => setSelectedDate(date)}>
                        <span className="tour-date-item departure-date">{date}</span>
                        <span className="tour-date-item tour-information">{product.name}</span>
                        <span className="tour-date-item tour-status">{product.status || "Đang mở bán"}</span>
                        <span className="tour-date-item tour-price">{formatPrice(product.price)}</span>
                    </div>
                ))}
            </div>
            {selectedDate && (
                <div className="booking-action flex horizontal">
                    <PassangerNumber onChange={setPassengers}/>
                    <button className="booking-button" onClick={() => navigate("/ct_orderPage", {
                        state: {type: "tour", product, departureDate: selectedDate, passengers}
                    })}>
                        Đặt tour
                    </button>
                </div>
            )}
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