import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { USUARIOS, getCurrentUserId, setCurrentUserId, getTotalPoints } from '../utils/usuarios';

export default function HomePage() {
  const [userId, setUserId] = useState(getCurrentUserId());
  const [puntos, setPuntos] = useState(getTotalPoints(userId));

  /*  Cuando cambia userId, recalculamos puntos y guardamos selección */
  useEffect(() => {
    setCurrentUserId(userId);
    setPuntos(getTotalPoints(userId));
  }, [userId]);

  const cardCss = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 140,
    margin: 10,
    textDecoration: 'none',
    color: 'inherit',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: 8,
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.2s',
  };

  const gridCss = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 20,
    maxWidth: 800,
    margin: '2rem auto',
  };

  const nombreActual = USUARIOS.find(u => u.id === userId)?.nombre;

  return (
    <div className="page-container text-center" style={{ maxWidth: 900 }}>
      {/* Selector de usuario */}
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Usuario activo:&nbsp;
        <select value={userId} onChange={e => setUserId(e.target.value)}>
          {USUARIOS.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
        </select>
      </label>

      <h1>¡Hola {nombreActual.split(' ')[0]}!</h1>
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
