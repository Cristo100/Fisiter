import React from 'react';
import { getPurchases } from '../utils/usuarios';

export default function Inventory() {
  const compras = getPurchases();

  return (
    <div className="page-container text-center" style={{ maxWidth: 600 }}>
      <h2>Inventario</h2>
      {compras.length === 0 ? (
        <p>Aún no has canjeado recompensas.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {compras.map(c => {
            const d = new Date(c.fechaHora);
            return (
              <li key={c.id} style={{ marginBottom: '.7rem' }}>
                <strong>{c.nombre}</strong> — {c.costo} pts &nbsp;
                <span style={{ color: 'var(--color-muted)', fontSize: '.85rem' }}>
                  ({d.toLocaleDateString()}&nbsp;{d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})})
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
