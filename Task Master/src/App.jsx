import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    </Router>

  )
}

export default App
