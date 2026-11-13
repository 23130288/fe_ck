export default interface Review {
    id: number;
    user_id: number;
    user_name: string;
    user_avatar: string;
    rating: number;
    comment: string;
}