import '../../css/shareStuffs/footer.css'

export default function Header() {
    return (<>
        <footer className="footer">
            <div className="container">
                <div className="list-sections">
                    <div className="section">
                        <span className="label">Hỗ trợ</span>
                        <div className="list-contents">
                            <span>Quản lý chuyến đi</span>
                            <span>Liên hệ dịch vụ khách hàng</span>
                        </div>
                    </div>
                    <div className="section">
                        <span className="label">Đối tác</span>
                        <div className="list-contents">
                            <span>Chương trình cho đại lý</span>
                            <span>Hợp tác với Du lịch Việt</span>
                        </div>
                    </div>
                    <div className="section">
                        <span className="label">Góc khách hàng</span>
                        <div className="list-contents">
                            <span>Chính sách đặt tour</span>
                            <span>Chính sách bảo mật</span>
                            <span>Liên hệ</span>
                        </div>
                    </div>
                </div>
                <div className="copyright-box">
                    <span>Travel.com is part of Booking Holdings Inc., the world leader in online travel and related services. </span>
                    <span>Copyright © 1996–2026 Travel.com™. All rights reserved.</span>
                </div>
            </div>
        </footer>
    </>);
}