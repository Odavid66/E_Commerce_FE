import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Auth/Login/Login'
import { CreateAccount } from './Pages/Auth/CreateAccount/CreateAccount'
import { Layout } from './Components/Layout/Layout'
// import { ProductsPage } from './Pages/Customer/Product/ProductPage'
import { ProductInfoPage } from './Pages/Customer/Product/ProductInfoPage'
import { HomePage } from './Pages/Customer/HomePage/HomePage'
import { Cart } from './Pages/Customer/Cart/Cart'
import { Basebutton } from './Components/Button/button'
import { Customers } from './Pages/Admin/Customers/Customers'
import { Order } from './Pages/Customer/Order/Order'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>

        {/* Standalone Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/button" element={<Basebutton onClick={() => alert('Button clicked!')}>Click Me</Basebutton>} />
        <Route path="/admin/customers" element={<Customers />} />
      </Routes>
    </Router>
  )
}

export default App