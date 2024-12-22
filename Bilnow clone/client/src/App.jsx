import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contactus from './Pages/Contactus';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;