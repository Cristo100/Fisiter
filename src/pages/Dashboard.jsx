import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.get('/actividades')
      .then(res => {
        setActividades(res.data);
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError('Error al cargar las actividades.');
        // Si el error es 401 (no autorizado), redirigir a login
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
        }
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) return <p>Cargando actividades...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && actividades.length === 0 && <p>No hay actividades registradas.</p>}
      <ul>
        {actividades.map(act => (
          <li key={act.id}>{act.tipo} - {act.duracion} min</li>
        ))}
      </ul>
    </div>
  );
}
