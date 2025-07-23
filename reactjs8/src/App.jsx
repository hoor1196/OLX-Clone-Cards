
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
