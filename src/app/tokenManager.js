const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

const getToken = () => {
  let now = new Date(Date.now()).getTime();
  let thirtyMinutes = 1000 * 60 * 30;
  let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem("token");
  }
}

export { setToken, getToken };
