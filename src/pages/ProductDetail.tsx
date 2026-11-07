import {useParams} from "react-router";
import {useSelector} from "react-redux";

import "../css/ProductDetail.css";

import image from '../images/adminb.jpg';

import PassangerNumber from "../components/PassangerNumber.tsx";
import DatePicker from "../components/DatePicker.tsx";

export default function ProductDetail() {
    const {id} = useParams();

    const product = useSelector((state: any) => state.products.find((item: any) => item.id == id));

    return (<div className="container">
        <div className="product-detail-main">
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
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
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
                        <span className="comment">comment</span>
                        <div className="user-box flex horizontal">
                            <img src={image} alt=""/>
                            <span className="username">username</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-information flex vertical">
                <h1>Tổng quan hành trình</h1>
                <div className="features-box">
                    <div className="feature">
                        <i className="fa-solid fa-wifi"></i>
                        <span>Wifi miễn phí và mạnh</span>
                    </div>
                    <div className="feature">
                        <i className="fa-solid fa-mountain"></i>
                        <span>Cảnh đẹp</span>
                    </div>
                    <div className="feature">
                        <i className="fa-solid fa-utensils"></i>
                        <span>Đồ ăn chuẩn bị đầy đủ</span>
                    </div>
                </div>
                <div className="description-box flex vertical">
                    <span className="description">description</span>
                    <span className="description">description</span>
                </div>
            </section>
            <section className="section-schedule flex vertical">
                <h1>Lịch chuyến đi</h1>
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
                    <div className="tour-date">
                        <span className="tour-date-item departure-date">15/12/2026</span>
                        <span className="tour-date-item tour-information">{product.name}</span>
                        <span className="tour-date-item tour-status">Còn chỗ</span>
                        <span className="tour-date-item tour-price">{product.money}</span>
                    </div>
                    <div className="tour-date">
                        <span className="tour-date-item departure-date">15/12/2026</span>
                        <span className="tour-date-item tour-information">{product.name}</span>
                        <span className="tour-date-item tour-status">Còn chỗ</span>
                        <span className="tour-date-item tour-price">{product.money}</span>
                    </div>
                </div>
            </section>
            <section className="section-review flex vertical">
                <div className="review-comments-box flex horizontal space-between">
                    <div className="review flex vertical">
                        <div className="user-box flex horizontal">
                            <img src={image} alt=""/>
                            <span className="username">username</span>
                        </div>
                        <span className="comment">comment</span>
                    </div>
                    <div className="review">
                        <div className="user-box flex horizontal">
                            <img src={image} alt=""/>
                            <span className="username">username</span>
                        </div>
                        <span className="comment">comment</span>
                    </div>
                    <div className="review">
                        <div className="user-box flex horizontal">
                            <img src={image} alt=""/>
                            <span className="username">username</span>
                        </div>
                        <span className="comment">comment</span>
                    </div>
                </div>
                <button className="read-all-reviews">Tất cả đánh giá</button>
            </section>
        </div>
    </div>);
}