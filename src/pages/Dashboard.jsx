import React, { useEffect, useState } from 'react';
import { obtenerPuntosTotales, obtenerUsuarioActual } from '../utils/storage';

export default function Dashboard() {
  const [puntos, setPuntos] = useState(0);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const user = obtenerUsuarioActual();
    if (!user) {
      setNombre('Desconocido');
      setPuntos(0);
      return;
    }

    setNombre(user.nombre);
    setPuntos(obtenerPuntosTotales());
  }, []);

  return (
    <div className="page-container text-center">
      <h2>¡Hola, {nombre}!</h2>
      <p>Puntos acumulados: <strong>{puntos}</strong></p>
    </div>
  );
}
