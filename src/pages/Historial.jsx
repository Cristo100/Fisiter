import React, { useEffect, useState } from 'react';
import { getActivities, getPurchases, getBalancePoints } from '../utils/usuarios';

export default function Historial() {
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const acts = getActivities().map(a => ({ ...a, tipo: 'actividad' }));
    const pur = getPurchases().map(p => ({ ...p, tipo: 'compra', puntos: -p.costo }));
    const todos = [...acts, ...pur].sort((a, b) => new Date(b.fechaHora) - new Date(a.fechaHora));
    setItems(todos);
    setBalance(getBalancePoints());
  }, []);

  return (
    <div className="page-container text-center" style={{ maxWidth: 750 }}>
      <h2>Historial</h2>
      <p><strong>Saldo actual: {balance} pts</strong></p>

      {items.length === 0 ? (
        <p>No existen registros.</p>
      ) : (
        <table style={{ margin:'auto', width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th>Fecha</th><th>Hora</th><th>Descripción</th><th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {items.map(it => {
              const d = new Date(it.fechaHora);
              const desc = it.tipo === 'actividad'
                ? `${it.tipo.charAt(0).toUpperCase()}${it.tipo.slice(1)} – ${it.duracion} min de ${it.tipo === 'actividad' ? it.tipo : it.nombre}`
                : `Compra – ${it.nombre}`;
              return (
                <tr key={it.id}>
                  <td>{d.toLocaleDateString()}</td>
                  <td>{d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</td>
                  <td>{desc}</td>
                  <td style={{ color: it.puntos < 0 ? 'red' : 'inherit' }}>
                    {it.puntos > 0 ? `+${it.puntos}` : it.puntos}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
