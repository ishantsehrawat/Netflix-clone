export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginStart = (user) => ({
  type: "LOGIN_SUCCESS",
  patload: user,
});
export const loginStart = () => ({
  type: "LOGIN_FAILURE",
});
