import "../css/components/TourItem.css";

export default function TourItem(props: {
    tour:  {
    id: number;
    image: any,
    name: String,
    place: String,
    reviewPoints: number,
    reviewNumbers: number,
    duration: String,
    money: any
}}) {
    return (<>
        <div className="tour-item">
            <img src={props.tour.image} alt=""/>
            <div className="item-info-box">
                <span className="item-name">{props.tour.name}</span>
                <span className="place">{props.tour.place}</span>
                <div className="review-box">
                    <span className="review-points">{props.tour.reviewPoints}</span>
                    <span className="review-numbers">{props.tour.reviewNumbers} đánh giá</span>
                </div>
            </div>
            <div className="item-deal-box">
                <span className="duration">{props.tour.duration}</span>
                <span className="money">{props.tour.money}</span>
            </div>
        </div>
    </>);
}