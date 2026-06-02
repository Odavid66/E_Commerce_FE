import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Auth/Login/Login'
import { CreateAccount } from './Pages/Auth/CreateAccount/CreateAccount'
import { Layout } from './Components/Layout/Layout'
// import { ProductsPage } from './Pages/Customer/Product/ProductPage'
import { ProductInfoPage } from './Pages/Customer/Product/ProductInfoPage'
import { HomePage } from './Pages/Customer/HomePage/HomePage'
import { Cart } from './Pages/Customer/Cart/Cart'
import { Basebutton } from './Components/button/button'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
        </Routes>
      </Layout>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/" element={<Cart />} />
        <Route path="/button" element={<Basebutton onClick={() => alert('Button clicked!')}>Click Me</Basebutton>} />
      </Routes>
    </Router>
  )
}

export default App