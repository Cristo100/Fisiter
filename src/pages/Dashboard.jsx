import React, { useEffect, useState } from 'react';
import { getTotalPoints } from '../utils/usuarios';

export default function Dashboard() {
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    setPuntos(getTotalPoints());
  }, []);

  return (
    <div className="page-container text-center">
      <h2>Dashboard</h2>
      <p>Puntos acumulados: <strong>{puntos}</strong></p>
    </div>
  );
}
