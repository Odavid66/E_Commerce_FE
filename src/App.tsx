import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Auth/Login/Login'
import { CreateAccount } from './Pages/Auth/CreateAccount/CreateAccount'
import { Layout } from './Components/Layout/Layout'
import { AdminLayout } from './Components/Layout/AdminLayout'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'
// import { ProductsPage } from './Pages/Customer/Product/ProductPage'
import { ProductInfoPage } from './Pages/Customer/Product/ProductInfoPage'
import { HomePage } from './Pages/Customer/HomePage/HomePage'
import { Cart } from './Pages/Customer/Cart/Cart'
import { Profile } from './Pages/Customer/Profile/Profile'
import { Basebutton } from './Components/button/button'
import { Customers } from './Pages/Admin/Customers/Customers'
import { ProductInventory } from './Pages/Admin/Product/ProductInventory/ProductInventory'
import { CreateProduct } from './Pages/Admin/Product/CreateProduct/CreateProduct'
import { EditProduct } from './Pages/Admin/Product/EditProduct/EditProduct'
import { Order } from './Pages/Customer/Order/Order'
import { Overview } from './Pages/Admin/Overview/Overview'
import { Orders } from './Pages/Admin/Orders/Orders'
import { Generalsettings } from './Pages/Admin/settings/generalsettings'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        {/* Protected Customer Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductInfoPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Overview />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/products" element={<ProductInventory />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/settings" element={<Generalsettings />} />
            <Route path="/admin/products/create" element={<CreateProduct />} />
            <Route path="/admin/products/edit/:id" element={<EditProduct />} />
          </Route>
        </Route>

        {/* Public Routes (no auth required) */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/button" element={<Basebutton onClick={() => alert('Button clicked!')}>Click Me</Basebutton>} />
      </Routes>
    </Router>
  )
}

export default App
