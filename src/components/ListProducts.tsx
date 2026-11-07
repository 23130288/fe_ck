import TourItem from "../components/TourItem.tsx";

import "../css/components/ListProducts.css";
import {useSelector} from "react-redux";

export default function ListProducts() {
    const tours = useSelector((state: any) => state.products);
    return (<>
        <div className="list-products">
            {tours.slice(0, 4).map((tour: any) => (
                <TourItem key={tour.id} tour={tour}/>
            ))}
        </div>
    </>);
}