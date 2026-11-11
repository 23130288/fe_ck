export default function Logout() {
    return (<>
            {/* =============================== LOG OUT =============================== */}
            <div className="information-container" id="log-out">
                <h2>Đăng xuất</h2>
                <p>Bạn có chắc muốn đăng xuất không?</p>
                <button className="bt_xac_nhan" id="btn-dang-xuat" type="button">
                    Đăng xuất
                </button>
            </div>

        </>
    );
}