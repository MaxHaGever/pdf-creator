import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show Login at both "/" and "/login" */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected section */}
        <Route path="/protected" element={<PrivateRoute />}>
          {/* this nested Route will render inside <PrivateRoute>'s Outlet */}
        </Route>

        {/* Catch-all: send anything else back to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
