import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
// import { ProductsPage } from './Pages/Customer/Product/ProductPage'
import { ProductInfoPage } from './Pages/Customer/Product/ProductInfoPage'
import { HomePage } from './Pages/Customer/HomePage/HomePage'

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
    </Router>
  )
}

export default App