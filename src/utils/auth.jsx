// Save registered user (acts like DB)
export const saveRegisteredUser = (user) => {
  localStorage.setItem("registeredUser", JSON.stringify(user));
};

export const getRegisteredUser = () => {
  const user = localStorage.getItem("registeredUser");
  return user ? JSON.parse(user) : null;
};

// Login session
export const loginUser = (user) => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};

export const getLoggedInUser = () => {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
};

// Logout only clears session
export const logout = () => {
  localStorage.removeItem("loggedInUser");
};
