import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Ventas } from '../pages/ventas/Ventas'
export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/" element={<Navigate to="/home" />} />
            
        </Routes>
    )
}