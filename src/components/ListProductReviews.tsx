import "../css/components/ListProductReview.css"

import ProductReview from "./ProductReview.tsx";

import type Review from "../type/Review.tsx";

interface ListProductReviewsProps {
    reviews: Review[];
}

export default function ListProductReviews({reviews}: ListProductReviewsProps) {
    return (<>
        <div className="list-reviews-box flex horizontal space-between">
            {reviews.length > 0 ? (reviews.slice(0, 3).map((review) => (<ProductReview key={review.id} review={review}/>))
            ) : (
                <p>Chưa có đánh giá nào.</p>
            )}
        </div>
    </>);
}