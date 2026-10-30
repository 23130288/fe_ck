import TourItem from "../components/TourItem.tsx";

import "../css/components/ListProducts.css";

type Tour = {
    id: number;
    image: string;
    name: string;
    place: string;
    reviewPoints: number;
    reviewNumbers: number;
    duration: string;
    money: string;
};

export default function ListProducts({tours}: { tours: Tour[] | null }) {
    tours = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            name: "Tour Đà Lạt - Thành phố ngàn hoa",
            place: "Đà Lạt, Lâm Đồng",
            reviewPoints: 9.2,
            reviewNumbers: 120,
            duration: "3 ngày 2 đêm",
            money: "2.500.000đ"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
            name: "Tour Phú Quốc - Thiên đường biển đảo",
            place: "Phú Quốc, Kiên Giang",
            reviewPoints: 9.5,
            reviewNumbers: 245,
            duration: "4 ngày 3 đêm",
            money: "4.200.000đ"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1555921015-5532091f6026",
            name: "Tour Đà Nẵng - Hội An - Bà Nà Hills",
            place: "Đà Nẵng",
            reviewPoints: 9.0,
            reviewNumbers: 186,
            duration: "4 ngày 3 đêm",
            money: "3.800.000đ"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1528127269322-539801943592",
            name: "Tour Vịnh Hạ Long khám phá kỳ quan",
            place: "Quảng Ninh",
            reviewPoints: 9.4,
            reviewNumbers: 312,
            duration: "2 ngày 1 đêm",
            money: "2.900.000đ"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            name: "Tour Sapa - Chinh phục Fansipan",
            place: "Sapa, Lào Cai",
            reviewPoints: 8.9,
            reviewNumbers: 156,
            duration: "3 ngày 2 đêm",
            money: "3.100.000đ"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
            name: "Tour Nha Trang - Khám phá đảo",
            place: "Nha Trang, Khánh Hòa",
            reviewPoints: 9.1,
            reviewNumbers: 198,
            duration: "3 ngày 2 đêm",
            money: "3.000.000đ"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            name: "Tour Quy Nhơn - Biển xanh cát trắng",
            place: "Quy Nhơn, Bình Định",
            reviewPoints: 8.8,
            reviewNumbers: 94,
            duration: "3 ngày 2 đêm",
            money: "2.700.000đ"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            name: "Tour Hà Giang - Khám phá cao nguyên đá",
            place: "Hà Giang",
            reviewPoints: 9.3,
            reviewNumbers: 178,
            duration: "4 ngày 3 đêm",
            money: "3.500.000đ"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            name: "Tour Mộc Châu - Mùa hoa Tây Bắc",
            place: "Mộc Châu, Sơn La",
            reviewPoints: 8.7,
            reviewNumbers: 76,
            duration: "2 ngày 1 đêm",
            money: "1.800.000đ"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
            name: "Tour Côn Đảo - Hành trình khám phá",
            place: "Côn Đảo, Bà Rịa - Vũng Tàu",
            reviewPoints: 9.6,
            reviewNumbers: 220,
            duration: "3 ngày 2 đêm",
            money: "4.500.000đ"
        }
    ];
    return (<>
        <div className="list-products">
            {tours.slice(0, 4).map((tour) => (
                <TourItem key={tour.id} tour={tour}/>
            ))}
        </div>
    </>);
}