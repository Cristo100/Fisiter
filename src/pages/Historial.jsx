import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Historial = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    // Simulación: cambiar por API real
    const dataSimulada = [
      { id: 1, tipo: 'Caminata', duracion: 30, fecha: '2025-06-10' },
      { id: 2, tipo: 'Bicicleta', duracion: 45, fecha: '2025-06-12' },
    ];
    setActividades(dataSimulada);
  }, []);

  return (
    <div className="page-container text-center">
      <h2>Historial de Actividades</h2>
      <p>Revisa todas tus actividades registradas.</p>
      <table style={{ margin: '1rem auto', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Duración (min)</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((act) => (
            <tr key={act.id}>
              <td>{act.fecha}</td>
              <td>{act.tipo}</td>
              <td>{act.duracion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
