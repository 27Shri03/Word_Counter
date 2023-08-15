import './App.css'
import CssBaselines from "@mui/material/CssBaseline"
import ResponsiveAppBar from './Navbar'
import { useState } from 'react'
import Mainlogic from './Logic'
import Alert_system from './Alert'
import About from './About'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [checked, setChecked] = useState(false);
  const [msg, setmsg] = useState(null);
  const handleswitch = () => {
    if (checked === true) {
      showalert("Darkmode Disabled");
    }
    else {
      showalert("Darkmode Enabled");
    }
    setChecked((prev) => {
      return !prev;
    })
  }
  const showalert = (message) => {
    setmsg(message);
    setTimeout(() => {
      setmsg(null);
    }, 1500)
  }
  return (
    <>
      <Router Basename='/Word_counter'>
        <CssBaselines />
        <ResponsiveAppBar checked={checked} change={handleswitch} />
        <Alert_system msg={msg} />
        <Mainlogic checked={checked} msg={showalert} change={handleswitch} />
        <Routes>
          <Route exact path="/" element={<Mainlogic checked={checked} msg={showalert} change={handleswitch} />} />
          <Route path="/about" element={<About checked={checked} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;