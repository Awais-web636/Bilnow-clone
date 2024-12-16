import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contactus from './Components/Contactus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;