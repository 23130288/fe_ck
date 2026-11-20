export default interface Order {
    id: number;
    code: string;
    type: "flight" | "hotel" | "tour";
    name: string;
    description: string;
    price: number;
    date: string;
    status: "processing" | "cancelled";
}

export interface OrderState {
    orders: Order[];
}