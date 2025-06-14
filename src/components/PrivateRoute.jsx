import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Protege rutas envolviendo el elemento.
 *  - Hoy la app es pública; lo dejamos listo para el futuro.
 */
export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}
