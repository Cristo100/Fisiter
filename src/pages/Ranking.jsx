import React from 'react';
import { USUARIOS, getTotalPoints } from '../utils/usuarios';

export default function Ranking() {
  /* Calculamos puntos de cada usuario y los ordenamos descendente */
  const ranking = USUARIOS
    .map(u => ({ nombre: u.nombre, puntos: getTotalPoints(u.id) }))
    .sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="page-container text-center">
      <h2>Ranking de Empleados</h2>
      <ol style={{ textAlign: 'left', maxWidth: 400, margin: '1rem auto' }}>
        {ranking.map(({ nombre, puntos }) => (
          <li key={nombre}>{nombre} – <strong>{puntos} pts</strong></li>
        ))}
      </ol>
    </div>
  );
}
