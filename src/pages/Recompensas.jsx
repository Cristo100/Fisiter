import React from 'react';

export default function Recompensas() {
  const recompensas = [
    { nombre: 'Taza Fisiter',     puntos: 100 },
    { nombre: 'Día libre',        puntos: 500 },
    { nombre: 'Gift Card $20.000', puntos: 700 },
  ];

  return (
    <div className="page-container text-center">
      <h2>Catálogo de Recompensas</h2>
      <div style={{ marginTop: '1rem' }}>
        {recompensas.map((r, i) => (
          <div key={i} style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
            <strong>{r.nombre}</strong><br />
            <span>{r.puntos} puntos</span>
          </div>
        ))}
      </div>
    </div>
  );
}
