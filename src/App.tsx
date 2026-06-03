import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Generalsettings } from './Components/settings/generalsettings'

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Generalsettings />} />
      </Routes>
    </Router>
    
  )
}

export default App
