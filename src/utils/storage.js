
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'fisiter_data';

function getData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { usuarios: [], usuarioActualId: null };
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function registrarUsuario({ nombre, email, password }) {
  const data = getData();
  const existe = data.usuarios.some((u) => u.email === email);
  if (existe) throw new Error('Correo ya registrado');

  const nuevo = { id: uuidv4(), nombre, email, password, actividades: [] };
  data.usuarios.push(nuevo);
  saveData(data);
}

export function iniciarSesion(email, password) {
  const data = getData();
  const user = data.usuarios.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error('Credenciales inválidas');
  data.usuarioActualId = user.id;
  saveData(data);
}

export function cerrarSesion() {
  const data = getData();
  data.usuarioActualId = null;
  saveData(data);
}

export function obtenerUsuarioActual() {
  const data = getData();
  return data.usuarios.find((u) => u.id === data.usuarioActualId) || null;
}

export function agregarActividad(actividad) {
  const data = getData();
  const user = data.usuarios.find((u) => u.id === data.usuarioActualId);
  if (!user) throw new Error('Usuario no autenticado');

  user.actividades.push(actividad);
  saveData(data);
}

export function obtenerActividades() {
  const user = obtenerUsuarioActual();
  return user ? user.actividades : [];
}

export function obtenerPuntosTotales() {
  return obtenerActividades().reduce((sum, act) => sum + act.puntos, 0);
}

// 🔽 Estas dos funciones te faltaban:
export function obtenerUsuarios() {
  return getData().usuarios;
}

export function setUsuarioActual(id) {
  const data = getData();
  data.usuarioActualId = id;
  saveData(data);
}
