import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartItemCard } from './Components/CartItemCard/card'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<CartItemCard />} />
      </Routes>
    </Router>
    
  )
}

export default App
