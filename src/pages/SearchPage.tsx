import "../css/SearchPage.css";

import {useState} from "react";
import {useSearchParams} from "react-router-dom";

import SearchBarTour from "../components/search/SearchBarTour.tsx";
import SearchBarFlight from "../components/search/SearchBarFlight.tsx";
import SearchBarHotel from "../components/search/SearchBarHotel.tsx";
import SearchBarAttractions from "../components/search/SearchBarAttractions.tsx";
import SearchBarADay from "../components/search/SearchBarADay.tsx";
import Filters from "../components/Filters.tsx";

import ListProducts from "../components/ListProducts.tsx";
import ListFlights from "../components/flight/ListFlight.tsx";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type") || "tour";

    const [tripType, setTripType] = useState("round_trip");

    return (<>
        <div className="container">
            <div className="search-bar">
                {type === "tour" && <SearchBarTour/>}
                {type === "flight" && (<SearchBarFlight tripType={tripType} setTripType={setTripType}/>)}
                {type === "hotel" && <SearchBarHotel/>}
                {type === "attraction" && <SearchBarAttractions/>}
                {type === "a-day-tour" && <SearchBarADay/>}
            </div>
            <div className="split-box-search grid">
                <div className="filter-box">
                    <Filters type={type}/>
                    {type === "attraction" && (<Filters type="tour"/>)}
                    {type === "a-day-tour" && (<Filters type="tour"/>)}
                </div>
                <div className="search-main">
                    {type === "tour" && (<ListProducts type="tour" pagination={true}/>)}
                    {type === "flight" && (<ListFlights tripType={tripType}/>)}
                    {type === "hotel" && (<ListProducts type="hotel" pagination={true}/>)}
                    {type === "attraction" && (<ListProducts type="attraction" pagination={true}/>)}
                    {type === "a-day-tour" && (<ListProducts type="a-day-tour" pagination={true}/>)}
                </div>
            </div>
        </div>
    </>);
}