import {Outlet} from 'react-router'

import Header from "../components/shareStuffs/header.tsx";
import Footer from "../components/shareStuffs/footer.tsx";

export default function Layout() {
    return (<>
        <Header/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
    </>);
}