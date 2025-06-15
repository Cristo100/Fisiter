import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  USUARIOS as BASE_USERS,          // podría venir undefined
  getCurrentUserId,
  setCurrentUserId,
  getBalancePoints,
} from '../utils/usuarios';

/* ------------------------------------------------------------------ */
/* 1. Arreglo seguro de usuarios  (fallback si la importación falla)   */
/* ------------------------------------------------------------------ */
const SAFE_USERS = Array.isArray(BASE_USERS) && BASE_USERS.length > 0
  ? BASE_USERS
  : [
      { id: 'cristobal', nombre: 'Cristobal Pichara' },
      { id: 'estefania', nombre: 'Estefania Sandoval' },
      { id: 'juan',      nombre: 'Juan Perez' },
    ];

/* Helper para validar IDs */
const isValidId = (id) => SAFE_USERS.some((u) => u.id === id);

export default function HomePage() {
  /* ------------------------------------------------------------------ */
  /* 2. Usuario activo con fallback seguro                              */
  /* ------------------------------------------------------------------ */
  const initialId = (() => {
    const saved = getCurrentUserId();
    return isValidId(saved) ? saved : SAFE_USERS[0].id;
  })();

  const [userId, setUserId]   = useState(initialId);
  const [puntos, setPuntos]   = useState(getBalancePoints(initialId));

  /* ------------------------------------------------------------------ */
  /* 3. Sincronizar cuando cambia userId                                */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    setCurrentUserId(userId);
    setPuntos(getBalancePoints(userId));
  }, [userId]);

  /* ------------------------------------------------------------------ */
  /* 4. Nombre seguro y fragmento para saludo                           */
  /* ------------------------------------------------------------------ */
  const nombreActual =
    SAFE_USERS.find((u) => u.id === userId)?.nombre ?? 'Usuario';
  const saludo = nombreActual.split(' ')[0];   // siempre string

  /* ------------------------------------------------------------------ */
  /* 5. Estilos reutilizados                                            */
  /* ------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------ */
  /* 6. Render                                                          */
  /* ------------------------------------------------------------------ */
  return (
    <div className="page-container text-center" style={{ maxWidth: 900 }}>
      {/* Selector de usuario */}
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Usuario activo:&nbsp;
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          {SAFE_USERS.map((u) => (
            <option key={u.id} value={u.id}>
              {u.nombre}
            </option>
          ))}
        </select>
      </label>

      <h1>¡Hola {saludo}!</h1>
      <p className="subtitle">
        Puntos disponibles: <strong>{puntos}</strong>
      </p>

      <div style={gridCss}>
        <Link to="/registrar-actividad" style={cardCss}>
          <h3>Registrar</h3>
          <p>Agregar ejercicio</p>
        </Link>
        <Link to="/historial" style={cardCss}>
          <h3>Historial</h3>
          <p>Registros</p>
        </Link>
        <Link to="/recompensas" style={cardCss}>
          <h3>Recompensas</h3>
          <p>Catálogo</p>
        </Link>
        <Link to="/ranking" style={cardCss}>
          <h3>Ranking</h3>
          <p>Entre colegas</p>
        </Link>
        <Link to="/dashboard" style={cardCss}>
          <h3>Dashboard</h3>
          <p>Estadísticas</p>
        </Link>
        <Link to="/inventario" style={cardCss}>
          <h3>Inventario</h3>
          <p>Tus objetos</p>
        </Link>
      </div>
    </div>
  );
}
