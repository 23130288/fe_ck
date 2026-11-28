import FilterTour from "./search/FilterTour.tsx";
import FilterFlight from "./search/FilterFlight.tsx";
import FilterHotel from "./search/FilterHotel.tsx";

interface FiltersProps {
    type?: string
}

export default function Filters({type}: FiltersProps) {
    return (<>
        {type === "tour" && (<FilterTour/>)}
        {type === "flight" && (<FilterFlight/>)}
        {type === "hotel" && (<FilterHotel/>)}
    </>)
}