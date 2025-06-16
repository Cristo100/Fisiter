import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Componentes & páginas */
import Navbar          from './components/Navbar.jsx';
import PrivateRoute    from './components/PrivateRoute.jsx';
import Home            from './pages/Home.jsx';             // ← CORRECTO
import Login           from './pages/Login.jsx';
import Registro        from './pages/Registro.jsx';
import Dashboard       from './pages/Dashboard.jsx';
import Historial       from './pages/Historial.jsx';
import Ranking         from './pages/Ranking.jsx';
import Recompensas     from './pages/Recompensas.jsx';
import RegistrarActividad from './pages/RegistrarActividad.jsx';
import Inventory       from './pages/Inventory.jsx';
import SobreNosotros   from './pages/SobreNosotros.jsx';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/registro"    element={<Registro />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />

        {/* Públicas por ahora, pero envueltas en PrivateRoute para futuro */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/registrar-actividad" element={<RegistrarActividad />} />
        <Route path="/historial"           element={<Historial />} />
        <Route path="/ranking"             element={<Ranking />} />
        <Route path="/recompensas"         element={<Recompensas />} />
        <Route path="/inventario"          element={<Inventory />} />

        {/* 404 */}
        <Route
          path="*"
          element={<h2 style={{ padding: '2rem' }}>Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}
