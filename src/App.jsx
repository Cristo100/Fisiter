import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import SobreNosotros from './pages/SobreNosotros';
import Historial from './pages/Historial';
import Ranking from './pages/Ranking';
import Recompensas from './pages/Recompensas.jsx';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
