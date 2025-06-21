import React, { useState } from 'react';
import { RECOMPENSAS } from '../utils/recompensas';
import {
  obtenerUsuarioActual,
  obtenerPuntosTotales,
  agregarActividad,
} from '../utils/storage';

export default function Recompensas() {
  const [balance, setBalance] = useState(obtenerPuntosTotales());
  const usuario = obtenerUsuarioActual();

  const handleCanje = (recompensa) => {
    if (balance < recompensa.costo) {
      alert('No tienes puntos suficientes.');
      return;
    }

    // Registrar el canje como una actividad
    agregarActividad({
      id: Date.now(),
      nombre: `Canje: ${recompensa.nombre}`,
      puntos: -recompensa.costo,
      fechaHora: new Date().toISOString(),
    });

    setBalance(balance - recompensa.costo);
    alert(`¡Canje exitoso! Obtuviste “${recompensa.nombre}”.`);
  };

  if (!usuario) {
    return <p>No hay sesión activa.</p>;
  }

  return (
    <div className="page-container text-center">
      <h2>Catálogo de Recompensas</h2>
      <p>Puntos disponibles: <strong>{balance}</strong></p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
        {RECOMPENSAS.map(r => {
          const disabled = balance < r.costo;
          return (
            <div key={r.id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
              <h4>{r.nombre}</h4>
              <p>{r.costo} pts</p>
              <button
                className="button"
                onClick={() => handleCanje(r)}
                disabled={disabled}
                style={disabled ? { opacity: .5, cursor: 'not-allowed' } : {}}
              >
                {disabled ? 'Sin puntos' : 'Canjear'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
