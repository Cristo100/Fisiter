import React from 'react';
import { obtenerUsuarios } from '../utils/storage';

export default function Ranking() {
  const usuarios = obtenerUsuarios();

  const ranking = usuarios
    .map(u => ({
      nombre: u.nombre,
      puntos: u.actividades.reduce((sum, a) => sum + a.puntos, 0)
    }))
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