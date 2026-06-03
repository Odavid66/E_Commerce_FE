import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartItemCard } from './Components/CartItemCard/card'
import { Success } from './Components/Success & Error cards/errormodal'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Success />} />
      </Routes>
    </Router>
    
  )
}

export default App
