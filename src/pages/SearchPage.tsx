import {useSearchParams} from "react-router-dom";

import SearchBarTour from "../components/search/SearchBarTour.tsx";
import SearchBarFlight from "../components/search/SearchBarFlight.tsx";
import SearchBarHotel from "../components/search/SearchBarHotel.tsx";
import SearchBarAttractions from "../components/search/SearchBarAttractions.tsx";
import SearchBarADay from "../components/search/SearchBarADay.tsx";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "tour";

    return (<>
        <div className="container">
            <div className="search-bar">
                {type === "tour" && <SearchBarTour/>}
                {type === "flight" && <SearchBarFlight />}
                {type === "hotel" && <SearchBarHotel />}
                {type === "attraction" && <SearchBarAttractions />}
                {type === "a-day-tour" && <SearchBarADay />}
            </div>
            <div className="list-products">
                
            </div>
        </div>
    </>);
}