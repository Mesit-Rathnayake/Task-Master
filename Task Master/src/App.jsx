import { useState } from 'react'; // Ensure useState is imported
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0); // Correctly initialized useState

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
