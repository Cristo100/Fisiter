/* … catálogo y helpers previos … */
export const USUARIOS = [/* igual que antes */];

const KEY_CURRENT = 'fisiterCurrentUser';
const ACT_PREFIX = 'fisiterActivities_';
const PUR_PREFIX = 'fisiterPurchases_';

/* --- usuario activo --- */
export const getCurrentUserId = () => localStorage.getItem(KEY_CURRENT) || USUARIOS[0].id;
export const setCurrentUserId = (id)   => localStorage.setItem(KEY_CURRENT, id);

/* --- actividades --- */
export const getActivities = (uid = getCurrentUserId()) =>
  JSON.parse(localStorage.getItem(ACT_PREFIX + uid) || '[]');

export const saveActivities = (uid, arr) =>
  localStorage.setItem(ACT_PREFIX + uid, JSON.stringify(arr));

export const addActivity = (uid, act) => {
  const arr = getActivities(uid);
  arr.unshift(act);
  saveActivities(uid, arr);
};

/* --- compras --- */
export const getPurchases = (uid = getCurrentUserId()) =>
  JSON.parse(localStorage.getItem(PUR_PREFIX + uid) || '[]');

export const savePurchases = (uid, arr) =>
  localStorage.setItem(PUR_PREFIX + uid, JSON.stringify(arr));

export const addPurchase = (uid, compra) => {
  const arr = getPurchases(uid);
  arr.unshift(compra);
  savePurchases(uid, arr);
};

/* --- puntos --- */
export const getEarnedPoints = (uid = getCurrentUserId()) =>
  getActivities(uid).reduce((s, a) => s + (a.puntos || 0), 0);

export const getSpentPoints = (uid = getCurrentUserId()) =>
  getPurchases(uid).reduce((s, p) => s + (p.costo || 0), 0);

export const getBalancePoints = (uid = getCurrentUserId()) =>
  getEarnedPoints(uid) - getSpentPoints(uid);
