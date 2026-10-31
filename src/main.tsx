import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './pages/MainPage.tsx'
import SearchPage from './pages/SearchPage.tsx'
import Login from './pages/login.tsx'
import Register from './pages/register.tsx'

import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
