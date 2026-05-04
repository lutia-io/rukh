import { Route, Routes } from 'react-router'
import { Home, Login } from './pages'
import './App.css'

export function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
