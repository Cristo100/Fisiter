import React from 'react';
import { Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
/* Componentes & páginas */
import Nav          from './components/Nav.jsx';
import PrivateRoute    from './components/PrivateRoute.jsx';
import Home            from './pages/Home.jsx';             // ← CORRECTO
import Login           from './pages/Login.jsx';
import Registro        from './pages/Registro.jsx';
import Dashboard       from './pages/Dashboard.jsx';
import Historial       from './pages/Historial.jsx';
import Ranking         from './pages/Ranking.jsx';
import Recompensas     from './pages/Recompensas.jsx';
=======
import Navbar             from './components/NavBar.jsx';
import PrivateRoute       from './components/PrivateRoute.jsx';

import HomePage           from './pages/HomePage.jsx';
import Login              from './pages/Login.jsx';
import Registro           from './pages/Registro.jsx';
import Dashboard          from './pages/Dashboard.jsx';
import Historial          from './pages/Historial.jsx';
import Ranking            from './pages/Ranking.jsx';
import Recompensas        from './pages/Recompensas.jsx';
>>>>>>> SANDOVAL
import RegistrarActividad from './pages/RegistrarActividad.jsx';
import Inventory       from './pages/Inventory.jsx';
import SobreNosotros   from './pages/SobreNosotros.jsx';

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
<<<<<<< HEAD
        <Route path="/"            element={<Home />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/registro"    element={<Registro />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
=======
        <Route path="/"                    element={<HomePage />} />
        <Route path="/login"               element={<Login />} />
        <Route path="/registro"            element={<Registro />} />
        <Route path="/sobre-nosotros"      element={<SobreNosotros />} />

        {/*  Pública por ahora; envuelta en PrivateRoute para el futuro */}
        <Route path="/dashboard"           element={<Dashboard />} />
>>>>>>> SANDOVAL

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
