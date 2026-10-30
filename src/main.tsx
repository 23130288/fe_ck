import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import MainPage from './pages/MainPage.tsx'
import SearchPage from './pages/SearchPage.tsx'

import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
