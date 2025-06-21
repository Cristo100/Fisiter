import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cerrarSesion, obtenerUsuarioActual } from '../utils/storage';

export default function Navbar() {
  const navigate = useNavigate();
  const usuario = obtenerUsuarioActual();

  const handleLogout = () => {
    cerrarSesion();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Marca */}
        <NavLink to="/" className="navbar-brand">
          Fisiter
        </NavLink>

        {/* Enlaces principales */}
        <div className="navbar-links">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          {usuario && (
            <>
              <NavLink to="/registrar-actividad" className="nav-link">Registrar Actividad</NavLink>
              <NavLink to="/historial" className="nav-link">Historial</NavLink>
              <NavLink to="/ranking" className="nav-link">Ranking</NavLink>
              <NavLink to="/recompensas" className="nav-link">Recompensas</NavLink>
              <NavLink to="/inventario"          className="nav-link">Inventario</NavLink>
              <NavLink to="/sobre-nosotros"      className="nav-link">Sobre Nosotros</NavLink>
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
              <button onClick={handleLogout} className="nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                Cerrar Sesión
              </button>
            </>
          )}
          {!usuario && (
            <NavLink to="/login" className="nav-link">Iniciar Sesión</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
