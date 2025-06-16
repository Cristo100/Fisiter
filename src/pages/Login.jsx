import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { iniciarSesion } from '../utils/storage';

export default function Login() {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      iniciarSesion(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-container">
      <h2 className="text-center">Iniciar Sesión</h2>

      <form onSubmit={handleLogin} className="form-container">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <p className="text-center">
        ¿No tienes cuenta? <Link to="/registro" style={{ color: 'var(--color-secondary)' }}>Regístrate</Link>
      </p>
    </div>
  );
}
