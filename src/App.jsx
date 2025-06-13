import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/NavBar';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Ahora se muestra siempre */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
