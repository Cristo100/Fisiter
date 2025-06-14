import React, { useEffect, useState } from 'react';

const Recompensas = () => {
  const [recompensas, setRecompensas] = useState([]);

  useEffect(() => {
    // Mock data
    const recompensasMock = [
      { nombre: 'Taza Fisiter', puntos: 100 },
      { nombre: 'Día libre', puntos: 500 },
      { nombre: 'Gift Card $20.000', puntos: 700 },
    ];
    setRecompensas(recompensasMock);
  }, []);

  return (
    <div className="page-container text-center">
      <h2>Catálogo de Recompensas</h2>
      <p>Canjea tus puntos por recompensas que fomentan tu bienestar.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {recompensas.map((r, idx) => (
          <div key={idx} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
          }}>
            <strong>{r.nombre}</strong><br />
            <span>{r.puntos} puntos</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recompensas;
