import "../css/components/ProductReview.css"

import type Review from "../type/Review.tsx";

interface ProductReviewProps {
    review: Review;
}

export default function ProductReview({review}: ProductReviewProps) {
    return (<>
        <div className="product-review flex vertical">
            <div className="user-box flex horizontal">
                <div className="inner-box flex horizontal">
                    <img src={review.user_avatar} alt=""/>
                    <span className="username">{review.user_name}</span>
                </div>
                <span className="rating">{review.rating}</span>
            </div>
            <span className="comment">{review.comment}</span>
        </div>
    </>);
}