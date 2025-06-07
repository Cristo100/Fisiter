import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password: contraseña });
      localStorage.setItem('token', response.data.token);
      setError('');
      navigate('/dashboard');
    } catch (err) {
      setError('Correo o contraseña incorrectos');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label><br />
          <input
            type="password"
            value={contraseña}
            onChange={e => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        ¿No tienes cuenta?{' '}
        <Link to="/registro" style={{ color: 'blue', textDecoration: 'underline' }}>
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
