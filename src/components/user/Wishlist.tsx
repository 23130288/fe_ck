import {Link} from "react-router-dom";
import {useWishlist} from "../../api/Wishlist.ts";

export default function Wishlist() {
    const {entries, removeFromWishlist} = useWishlist();

    return (
        <div className="wishlist-page">
            <div className="sub_header">
                <h2>Danh sách yêu thích</h2>
            </div>
            {entries.length === 0 ? (
                <p className="wishlist-empty">Bạn chưa có tour hoặc khách sạn yêu thích.</p>
            ) : (
                <div className="wishlist-list">
                    {entries.map(item => (
                        <article className="wishlist-item" key={`${item.type}-${item.id}`}>
                            <Link to={`/product-detail/${item.type}/${item.id}`} className="wishlist-item-link">
                                <img src={item.image} alt={item.name}/>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.place}</p>
                                    <strong>{item.price.toLocaleString("vi-VN")}đ</strong>
                                </div>
                            </Link>
                            <button
                                type="button"
                                onClick={() => removeFromWishlist(item.type, item.id)}
                                aria-label={`Xóa ${item.name} khỏi danh sách yêu thích`}
                            >
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
