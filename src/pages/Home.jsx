import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { obtenerUsuarioActual, obtenerPuntosTotales } from '../utils/storage';

export default function HomePage() {
  const [nombre, setNombre] = useState('');
  const [puntos, setPuntos] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const user = obtenerUsuarioActual();
    if (!user) {
      navigate('/login');
    } else {
      setNombre(user.nombre);
      setPuntos(obtenerPuntosTotales());
    }
  }, [navigate]);

  const cardCss = {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    width: 180, height: 140, margin: 10, textDecoration: 'none', color: 'inherit',
    background: '#fff', border: '1px solid #ccc', borderRadius: 8, boxShadow: 'var(--shadow)',
    transition: 'transform 0.2s',
  };

  const gridCss = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 20, maxWidth: 800, margin: '2rem auto',
  };

  return (
    <div className="page-container text-center" style={{ maxWidth: 900 }}>
      <h1>¡Hola {nombre.split(' ')[0]}!</h1>
      <p className="subtitle">
        Puntos acumulados: <strong>{puntos}</strong>
      </p>

      <div style={gridCss}>
        <Link to="/registrar-actividad" style={cardCss}><h3>Registrar</h3><p>Agregar ejercicio</p></Link>
        <Link to="/historial"           style={cardCss}><h3>Historial</h3><p>Tus registros</p></Link>
        <Link to="/recompensas"         style={cardCss}><h3>Recompensas</h3><p>Catálogo</p></Link>
        <Link to="/ranking"             style={cardCss}><h3>Ranking</h3><p>Entre colegas</p></Link>
        <Link to="/dashboard"           style={cardCss}><h3>Dashboard</h3><p>Estadísticas</p></Link>
      </div>
    </div>
  );
}
