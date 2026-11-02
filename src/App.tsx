import {RouterProvider} from "react-router-dom";

import './App.css'
import './index.css'

import {router} from "./router/Router.tsx";

function App() {
    return (
        <div className="app">
            <RouterProvider router={router}/>
        </div>
    )
}

export default App