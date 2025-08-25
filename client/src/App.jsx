
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fixture from './components/Fixture';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
