import { useState } from 'react'; // Ensure useState is imported
import './App.css';
import Start from './pages/Start'
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0); // Correctly initialized useState

  return (
    <Router>
      <Routes>
      <Route path="/*" element={<Start />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
