import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          Fisiter
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/registrar-actividad" className="nav-link">
            Registrar Actividad
          </NavLink>
          <NavLink to="/historial" className="nav-link">
            Historial
          </NavLink>
          <NavLink to="/ranking" className="nav-link">
            Ranking
          </NavLink>
          <NavLink to="/recompensas" className="nav-link">
            Recompensas
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/inventario" className="nav-link">
            Inventario
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Iniciar Sesión
          </NavLink>
          {/* 
          {token && (
            <button
              onClick={handleLogout}
              className="nav-link"
              style={{ background: 'none', border: 0, cursor: 'pointer' }}
            >
              Cerrar Sesión
            </button>
          )} 
          */}
        </div>
      </div>
    </nav>
  );
}
