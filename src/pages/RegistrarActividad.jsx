import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { EJERCICIOS, calcularPuntos } from '../utils/ejercicios';
import { getCurrentUserId, addActivity } from '../utils/usuarios';

export default function RegistrarActividad() {
  const [idEjercicio, setIdEjercicio] = useState(EJERCICIOS[0].id);
  const [duracion, setDuracion]       = useState('');
  const navigate = useNavigate();
  const userId = getCurrentUserId();

  const puntosPreview = useMemo(
    () => calcularPuntos(idEjercicio, parseInt(duracion, 10)),
    [idEjercicio, duracion]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const minutos = parseInt(duracion, 10);
    if (!minutos || minutos <= 0) {
      alert('Duración inválida');
      return;
    }

    const puntos = calcularPuntos(idEjercicio, minutos);
    addActivity(userId, {
      id: Date.now(),
      tipo: EJERCICIOS.find(e => e.id === idEjercicio).nombre,
      duracion: minutos,
      fechaHora: new Date().toISOString(),
      puntos,
    });

    alert(`¡Registrado! Ganaste ${puntos} puntos.`);
    navigate('/historial');
  };

  return (
    <div className="page-container">
      <h2>Registrar Actividad</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <select value={idEjercicio} onChange={e => setIdEjercicio(e.target.value)}>
          {EJERCICIOS.map(({ id, nombre }) => <option key={id} value={id}>{nombre}</option>)}
        </select>

        <input
          type="number"
          placeholder="Duración (min)"
          value={duracion}
          onChange={e => setDuracion(e.target.value)}
          min={1}
        />

        <p style={{ margin: 0, fontStyle: 'italic' }}>
          Puntos a ganar: <strong>{puntosPreview}</strong>
        </p>
        <button className="button">Registrar</button>
      </form>
    </div>
  );
}
