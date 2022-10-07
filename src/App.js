import { useState } from 'react'
import './App.css';
import HomePage from './pages/HomePage'
import POSPage from './pages/POSPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [discount, setDiscount] = useState(0)
  function onChange(e) {
    setDiscount(e.target.value)
  }

  return (
    <Router>
      <Routes>\
        <Route path="/" element={<HomePage discount={discount} setDiscount={setDiscount} onChange={onChange} />} />
        <Route path="/pos" element={<POSPage discount={discount} />} />
      </Routes>
    </Router>
  );
}

export default App;
