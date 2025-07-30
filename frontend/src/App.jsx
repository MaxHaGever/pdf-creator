import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      <div className="min-h-[calc(100vh-64px)] bg-gray-100 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-4xl">Welcome to the Home Page</h1>} />
          <Route path="/about" element={<h1 className="text-4xl">About Us</h1>} />
          <Route path="/contact" element={<h1 className="text-4xl">Contact Us</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
