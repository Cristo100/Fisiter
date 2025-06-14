/** --------------------------------------------------------------------
 *  Catálogo de usuarios “demo” (sin login todavía)
 * -------------------------------------------------------------------- */
export const USUARIOS = [
  { id: 'cristobal',  nombre: 'Cristobal Pichara'  },
  { id: 'estefania',  nombre: 'Estefania Sandoval' },
  { id: 'juan',       nombre: 'Juan Perez'         },
];

/* --- Helpers de almacenamiento en localStorage ---------------------- */
const KEY_CURRENT = 'fisiterCurrentUser';         // id del usuario activo
const KEY_PREFIX  = 'fisiterActivities_';         // actividades por usuario

export function getCurrentUserId() {
  return localStorage.getItem(KEY_CURRENT) || USUARIOS[0].id;
}
export function setCurrentUserId(id) {
  localStorage.setItem(KEY_CURRENT, id);
}

/* Actividades -------------------------------------------------------- */
export function getActivities(userId = getCurrentUserId()) {
  return JSON.parse(localStorage.getItem(KEY_PREFIX + userId) || '[]');
}
export function saveActivities(userId, array) {
  localStorage.setItem(KEY_PREFIX + userId, JSON.stringify(array));
}
export function addActivity(userId, actividad) {
  const arr = getActivities(userId);
  arr.unshift(actividad);              // más reciente al inicio
  saveActivities(userId, arr);
}

/* Puntos totales ----------------------------------------------------- */
export function getTotalPoints(userId = getCurrentUserId()) {
  return getActivities(userId).reduce((s, a) => s + (a.puntos || 0), 0);
}
