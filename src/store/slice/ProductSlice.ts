import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface Tour {
    id: number;
    product_type: "tour";
    name: string;
    image: string;
    images: string[];
    place: string;
    departure_place: string;
    tour_type: "domestic" | "international";
    duration: string;
    departure_date: string[];
    price: number;
    reviewPoints: number;
    reviewNumbers: number;
    reviews: object[];
    description: string;
    schedule: object[];
    included: string[];
    excluded: string[];
    max_guests: number;
    status: string;
}

export interface Hotel {
    id: number;
    product_type: "hotel";
    name: string;
    image: string;
    images: string[];
    place: string;
    city: string;
    country: string;
    hotel_type: "hotel" | "resort" | "homestay" | "villa";
    star_rating: number;
    price: number;
    reviewPoints: number;
    reviewNumbers: number;
    description: string;
    amenities: string[];
    room_types: object[];
    check_in: string;
    check_out: string;
    status: string;
}

export interface Flight {
    id: number;
    product_type: "flight";
    flight_type: "domestic" | "international";
    airline: string;
    airline_logo: string;
    flight_number: string;
    departure: {
        airport: string;
        airport_code: string;
        city: string;
        country: string;
        date: string;
        time: string;
    };
    arrival: {
        airport: string;
        airport_code: string;
        city: string;
        country: string;
        date: string;
        time: string;
    };
    duration: string;
    stops: number;
    cabin_class: string[];
    price: number;
    seats_available: number;
    baggage: {
        carry_on: string;
        checked: string;
    };
    status: string;
}

interface ProductState {
    tours: Tour[];
    flights: Flight[];
    hotels: Hotel[];
    attractions: Tour[];
    aDayTours: Tour[];
}

const initialState: ProductState = {
    tours: [],
    flights: [],
    hotels: [],
    attractions: [],
    aDayTours: []
};

const productSlice = createSlice({
    initialState,
    name: 'ListProduct',
    reducers: {
        loadTours: (state, action: PayloadAction<Tour[]>) => {
            state.tours = action.payload;
        },

        loadFlights: (state, action: PayloadAction<Flight[]>) => {
            state.flights = action.payload;
        },

        loadHotels: (state, action: PayloadAction<Hotel[]>) => {
            state.hotels = action.payload;
        },

        loadAttractions: (state, action: PayloadAction<Tour[]>) => {
            state.attractions = action.payload;
        },

        loadADayTours: (state, action: PayloadAction<Tour[]>) => {
            state.aDayTours = action.payload;
        }
    }
})
export const {
    loadTours,
    loadFlights,
    loadHotels,
    loadAttractions,
    loadADayTours
} = productSlice.actions;
export default productSlice.reducer;