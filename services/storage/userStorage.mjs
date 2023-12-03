export function isSessionActive() {
  const session = sessionStorage.getItem("session");
  return session ? true : false;
}

export function saveSession() {
  sessionStorage.setItem("session", "true");
  return true;
}

export function closeSession() {
  sessionStorage.removeItem("session");
}
