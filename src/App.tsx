import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Auth/Login/Login'
import { CreateAccount } from './Pages/Auth/CreateAccount/CreateAccount'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    
    <Router basename={basename}>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Default Route */}
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </Router>
    
  )
}

export default App
