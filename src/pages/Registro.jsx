import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', { email, password: contraseña });
      setMensaje('Usuario registrado correctamente. Ahora inicia sesión.');
      setError('');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError('Error al registrar. Puede que el usuario ya exista.');
      setMensaje('');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={contraseña} 
          onChange={e => setContraseña(e.target.value)} 
          required 
        />
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p style={{color:'green'}}>{mensaje}</p>}
      {error && <p style={{color:'red'}}>{error}</p>}

      <p>
        ¿Ya tienes cuenta?{' '}
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
