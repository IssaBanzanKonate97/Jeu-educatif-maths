import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Multiplication from './pages/Multiplication';
import Addition from './pages/Addition';
import Soustraction from './pages/Soustraction';
import Division from './pages/Division';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/soustraction" element={<Soustraction />} />
        <Route path="/division" element={<Division />} />
      </Routes>
    </Router>
  );
};

export default App;
