import React from 'react';
import {
  USUARIOS as BASE_USERS,
  getBalancePoints,
} from '../utils/usuarios';

/* ------------------------------------------------------------------ */
/* Arreglo seguro de usuarios                                         */
/* ------------------------------------------------------------------ */
const SAFE_USERS = Array.isArray(BASE_USERS) && BASE_USERS.length > 0
  ? BASE_USERS
  : [
      { id: 'cristobal', nombre: 'Cristobal Pichara' },
      { id: 'estefania', nombre: 'Estefania Sandoval' },
      { id: 'juan',      nombre: 'Juan Perez' },
    ];

/* ------------------------------------------------------------------ */
/* Ranking                                                            */
/* ------------------------------------------------------------------ */
export default function Ranking() {
  /* Mapa nombre → puntos (si algún id es nuevo, devuelve 0) */
  const ranking = SAFE_USERS
    .map(({ id, nombre }) => ({
      nombre,
      puntos: getBalancePoints(id) || 0,
    }))
    .sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="page-container text-center">
      <h2>Ranking de Empleados</h2>

      <ol style={{ textAlign: 'left', maxWidth: 400, margin: '1rem auto' }}>
        {ranking.map(({ nombre, puntos }) => (
          <li key={nombre}>
            {nombre} — <strong>{puntos} pts</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
