import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">Fisiter</NavLink>
        <div className="navbar-links">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/sobre-nosotros" className="nav-link">Sobre Nosotros</NavLink>
          {!token && (
            <>
              <NavLink to="/login" className="nav-link">Iniciar Sesión</NavLink>
              <NavLink to="/registro" className="nav-link">Registrarse</NavLink>
            </>
          )}
          {token && (
            <>
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
              <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
