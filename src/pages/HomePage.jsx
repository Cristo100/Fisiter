import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  obtenerUsuarioActual,
  obtenerUsuarios,
  obtenerPuntosTotales,
  setUsuarioActual
} from '../utils/storage';

export default function HomePage() {
  const [usuarios, setUsuarios] = useState([]);
  const [userId, setUserId] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const actual = obtenerUsuarioActual();
    const all = obtenerUsuarios();
    if (actual) {
      setUserId(actual.id);
      setNombre(actual.nombre);
      setPuntos(obtenerPuntosTotales());
    } else {
      setUserId(null);
      setNombre('');
      setPuntos(0);
    }
    setUsuarios(all);
  }, []);

  // Redirigir al login si no hay usuario actual
  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
  }, [userId, navigate]);

  // Actualizar nombre y puntos cuando cambia el userId o lista de usuarios
  useEffect(() => {
    if (userId) {
      const nuevoUser = usuarios.find(u => u.id === userId);
      setNombre(nuevoUser?.nombre ?? '');
      setPuntos(obtenerPuntosTotales());
    }
  }, [userId, usuarios]);

  const handleUserChange = (e) => {
    const nuevoId = e.target.value;
    setUserId(nuevoId);
    setUsuarioActual(nuevoId);
  };

  const cardCss = {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    width: 180, height: 140, margin: 10, textDecoration: 'none', color: 'inherit',
    background: '#fff', border: '1px solid #ccc', borderRadius: 8, boxShadow: 'var(--shadow)',
    transition: 'transform 0.2s',
  };

  const gridCss = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 20, maxWidth: 800, margin: '2rem auto',
  };

  return (
    <div className="page-container text-center" style={{ maxWidth: 900 }}>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Usuario activo:&nbsp;
        <select value={userId || ''} onChange={handleUserChange}>
          {usuarios.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
        </select>
      </label>

      <h1>¡Hola {nombre?.split(' ')[0] || 'invitado'}!</h1>
      <p className="subtitle">
        Puntos acumulados: <strong>{puntos}</strong>
      </p>

      <div style={gridCss}>
        <Link to="/registrar-actividad" style={cardCss}><h3>Registrar</h3><p>Agregar ejercicio</p></Link>
        <Link to="/historial"           style={cardCss}><h3>Historial</h3><p>Tus registros</p></Link>
        <Link to="/recompensas"         style={cardCss}><h3>Recompensas</h3><p>Catálogo</p></Link>
        <Link to="/ranking"             style={cardCss}><h3>Ranking</h3><p>Entre colegas</p></Link>
        <Link to="/dashboard"           style={cardCss}><h3>Dashboard</h3><p>Estadísticas</p></Link>
      </div>
    </div>
  );
}
