import "../css/MainPage.css"
import ListProducts from "../components/ListProducts.tsx"

export default function MainPage() {
    return (<>
        <div className="container">
            <div className="main-page">
                <section className="section-trending">
                    <h1>Tour hot</h1>
                    <ListProducts tours={null}/>
                </section>
                <section className="section-tours-this-week">
                    <h1>Tour trong tuần</h1>
                    <ListProducts tours={null}/>
                </section>
                <section className="section-tours-inland">
                    <h1>Tour trong nước</h1>
                    <ListProducts tours={null}/>
                </section>
                <section className="section-tours-foreign">
                    <h1>Tour nước ngoài</h1>
                    <ListProducts tours={null}/>
                </section>
                <section className="section-hotels">
                    <h1>Khách sạn nổi bật</h1>
                    <ListProducts tours={null}/>
                </section>
            </div>
        </div>
    </>);
}