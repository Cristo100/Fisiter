import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="page-container text-center">
      <h1>Bienvenido a Fisiter</h1>
      <p className="subtitle">
        Fisiter es una plataforma para incentivar y registrar la actividad física en entornos empresariales.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2>¿Por qué Fisiter?</h2>
        <p>El sedentarismo en el trabajo afecta la salud, la motivación y la productividad. Fisiter combate esto promoviendo el movimiento diario con una plataforma tecnológica gamificada.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>¿Qué puedes hacer?</h2>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li> Registrar actividades físicas manualmente o vía Google Fit</li>
          <li> Visualizar tu progreso y compararte con tus colegas</li>
          <li> Acumular puntos y canjear recompensas</li>
          <li> Permitir a RRHH acceder a informes agregados</li>
        </ul>
      </section>

      <div className="main-actions" style={{ marginTop: '2rem' }}>
        <Link to="/login" className="button" style={{ marginRight: '1rem' }}>Iniciar Sesión</Link>
        <Link to="/registro" className="button" style={{ backgroundColor: 'var(--color-secondary)' }}>Registrarse</Link>
      </div>
    </div>
  );
};

export default HomePage;
