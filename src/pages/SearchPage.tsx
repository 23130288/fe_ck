import "../css/SearchPage.css";

import {useSearchParams} from "react-router-dom";

import SearchBarTour from "../components/search/SearchBarTour.tsx";
import SearchBarFlight from "../components/search/SearchBarFlight.tsx";
import SearchBarHotel from "../components/search/SearchBarHotel.tsx";
import SearchBarAttractions from "../components/search/SearchBarAttractions.tsx";
import SearchBarADay from "../components/search/SearchBarADay.tsx";

import ListProducts from "../components/ListProducts.tsx";
import ListFlights from "../components/ListFlight.tsx";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "tour";

    return (<>
        <div className="container">
            <div className="search-bar">
                {type === "tour" && <SearchBarTour/>}
                {type === "flight" && <SearchBarFlight/>}
                {type === "hotel" && <SearchBarHotel/>}
                {type === "attraction" && <SearchBarAttractions/>}
                {type === "a-day-tour" && <SearchBarADay/>}
            </div>
            <div className="search-main">
                {type === "tour" && (<ListProducts type="tour"/>)}
                {type === "flight" && (<ListFlights/>)}
                {type === "hotel" && (<ListProducts type="hotel"/>)}
                {type === "attraction" && (<ListProducts type="attraction"/>)}
                {type === "a-day-tour" && (<ListProducts type="a-day-tour"/>)}
            </div>
        </div>
    </>);
}