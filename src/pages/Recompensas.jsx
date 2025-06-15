import React, { useState } from 'react';
import { RECOMPENSAS } from '../utils/recompensas';
import { getCurrentUserId, addPurchase, getBalancePoints } from '../utils/usuarios';

export default function Recompensas() {
  const [balance, setBalance] = useState(getBalancePoints());
  const uid = getCurrentUserId();

  const handleCanje = (recompensa) => {
    if (balance < recompensa.costo) {
      alert('No tienes puntos suficientes.');
      return;
    }
    /* registrar compra */
    addPurchase(uid, {
      id: Date.now(),
      nombre: recompensa.nombre,
      costo: recompensa.costo,
      fechaHora: new Date().toISOString(),
    });
    setBalance(balance - recompensa.costo);
    alert(`¡Canje exitoso! Obtuviste “${recompensa.nombre}”.`);
  };

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
