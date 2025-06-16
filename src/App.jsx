import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomePage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Historial from './pages/Historial.jsx';
import Ranking from './pages/Ranking.jsx';
import Recompensas from './pages/Recompensas.jsx';
import RegistrarActividad from './pages/RegistrarActividad.jsx';
import Inventory from './pages/Inventory.jsx';
import SobreNosotros from './pages/SobreNosotros.jsx';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />

        {/* Rutas públicas por ahora */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/registrar-actividad" element={<RegistrarActividad />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/inventario" element={<Inventory />} />

        <Route
          path="*"
          element={<h2 style={{ padding: '2rem' }}>Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}
