import React, { useEffect, useState } from 'react';
import { getActivities, getTotalPoints } from '../utils/usuarios';

export default function Historial() {
  const [actividades, setActividades] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setActividades(getActivities());
    setTotal(getTotalPoints());
  }, []);

  return (
    <div className="page-container text-center" style={{ maxWidth: 700 }}>
      <h2>Historial de Actividades</h2>
      <p><strong>Puntos acumulados: {total}</strong></p>

      {actividades.length === 0 ? (
        <p>No tienes actividades registradas.</p>
      ) : (
        <table style={{ margin: 'auto', width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Fecha</th><th>Hora</th><th>Ejercicio</th><th>Duración</th><th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {actividades.map(a => {
              const d = new Date(a.fechaHora);
              return (
                <tr key={a.id}>
                  <td>{d.toLocaleDateString()}</td>
                  <td>{d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</td>
                  <td>{a.tipo}</td>
                  <td>{a.duracion} min</td>
                  <td>{a.puntos}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
