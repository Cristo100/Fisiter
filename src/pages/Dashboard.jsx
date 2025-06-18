import React, { useEffect, useState } from 'react';
import { obtenerPuntosTotales, obtenerUsuarioActual, obtenerActividades } from '../utils/storage';

export default function Dashboard() {
  const [puntos, setPuntos] = useState(0);
  const [nombre, setNombre] = useState('');
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const user = obtenerUsuarioActual();
    if (!user) {
      setNombre('Desconocido');
      setPuntos(0);
      setActividades([]);
      return;
    }

    setNombre(user.nombre);
    setPuntos(obtenerPuntosTotales());
    setActividades(obtenerActividades());
  }, []);

  const totalActividades = actividades.length;
  const promedio = totalActividades ? (puntos / totalActividades).toFixed(1) : 0;
  const ultima = actividades[actividades.length - 1];

  return (
    <div className="page-container text-center" style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>¡Hola, {nombre}!</h2>
      <p><strong>{puntos}</strong> puntos acumulados</p>
      <p>Total de actividades: <strong>{totalActividades}</strong></p>
      <p>Promedio por actividad: <strong>{promedio}</strong> pts</p>
      {ultima && (
        <div style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h4>Última actividad:</h4>
          <p><strong>{ultima.nombre}</strong> - {ultima.puntos} pts</p>
        </div>
      )}
    </div>
  );
}
