import { Outlet } from 'react-router-dom'

import './App.css'
import './index.css'

import Header from "./components/shareStuffs/header.tsx";
import Footer from "./components/shareStuffs/footer.tsx";

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
export default App