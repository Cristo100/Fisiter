import React, { useEffect, useState } from 'react';

const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Datos simulados
    const rankingMock = [
      { nombre: 'Ana López', puntos: 320 },
      { nombre: 'Juan Pérez', puntos: 295 },
      { nombre: 'Carla Ríos', puntos: 280 },
    ];
    setUsuarios(rankingMock);
  }, []);

  return (
    <div className="page-container text-center">
      <h2>Ranking de Participación</h2>
      <p>Consulta el listado de los usuarios con mayor actividad registrada.</p>
      <ol style={{ textAlign: 'left', maxWidth: '400px', margin: '1rem auto' }}>
        {usuarios.map((u, idx) => (
          <li key={idx}>
            {u.nombre} – <strong>{u.puntos} pts</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Ranking;
