import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import MainLayout from '../components/layout/main-layout'
import HomePage from '../components/page/home'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}  >
                <Route path='/' element={ <HomePage/>} />
            </Route>
        </Routes>
    )
}