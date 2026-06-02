import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart } from './Pages/Customer/Cart/Cart'
import { Basebutton } from './Components/button/button'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/button" element={<Basebutton onClick={() => alert('Button clicked!')}>Click Me</Basebutton>} />
      </Routes>
    </Router>
    
  )
}

export default App
