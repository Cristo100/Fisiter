import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/actividades')
      .then(res => {
        setActividades(res.data);
        setError('');
      })
      .catch(err => {
        setError('Error al cargar las actividades.');
        if (err.response?.status === 401) {
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

  return (
    <div className="page-container">
      <h2 className="text-center">Dashboard</h2>
      <button className="button" onClick={handleLogout}>Cerrar sesión</button>
      {loading && <p>Cargando actividades...</p>}
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
