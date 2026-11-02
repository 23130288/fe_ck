import "../../css/components/search/SearchBar.css"

export default function SearchBarTour() {
    const date = new Date();
    const today = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");

    return (<>
        <div className="search-box">
            <div className="search-filters-box">
                <div className="search-field">
                    <i className="fa-solid fa-map"></i>
                    <div className="input-field">
                        <label>Điểm đến</label>
                        <input type="text" placeholder="Bạn sẽ đi đâu?"/>
                    </div>
                </div>
                <div className="search-field">
                    <i className="fa-solid fa-location-arrow"></i>
                    <div className="input-field">
                        <label>Nơi bắt đầu</label>
                        <input type="text" placeholder="Bạn sẽ bắt đầu ở đâu?"/>
                    </div>
                </div>
                <div className="search-field">
                    <i className="fa-solid fa-calendar"></i>
                    <div className="input-field">
                        <label>Thời gian</label>
                        <input type="date" defaultValue={today}/>
                    </div>
                </div>
                <button className="search-button">Tìm kiếm</button>
            </div>
        </div>
    </>);
}