import "../css/components/ListProductReview.css"

import ProductReview from "./ProductReview.tsx";

import type Review from "../type/Review.tsx";

interface ListProductReviewsProps {
    reviews: Review[];
    start?: number;
    end?: number;
}

export default function ListProductReviews({reviews, start = 0, end}: ListProductReviewsProps) {
    return (<>
        <div className="list-reviews-box flex horizontal space-between">
            {reviews.length > 0 ? (reviews.slice(start, end).map((review) => (<ProductReview key={review.id} review={review}/>))
            ) : (
                <p>Chưa có đánh giá nào.</p>
            )}
        </div>
    </>);
}