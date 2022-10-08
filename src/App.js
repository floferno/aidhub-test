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

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage discount={discount} setDiscount={setDiscount} onChange={onChange} numberWithCommas={numberWithCommas} />} />
        <Route path="/pos" element={<POSPage discount={discount} numberWithCommas={numberWithCommas} />} />
      </Routes>
    </Router>
  );
}

export default App;
