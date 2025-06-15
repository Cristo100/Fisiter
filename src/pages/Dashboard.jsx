import React, { useEffect, useState } from 'react';
import { getBalancePoints } from '../utils/usuarios';

export default function Dashboard() {
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    setPuntos(getBalancePoints());
  }, []);

  return (
    <div className="page-container text-center">
      <h2>Dashboard</h2>
      <p>
        Puntos disponibles: <strong>{puntos}</strong>
      </p>
    </div>
  );
}
