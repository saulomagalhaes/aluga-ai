import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ProductDetail } from './pages/ProductDetail'
import { Register } from './pages/Register'
import { Signatures } from './pages/Signatures'
import { User } from './pages/User'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/signatures" element={<Signatures />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
