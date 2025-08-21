export const usernameValidator = (value) => {
  if (!value.trim()) return "Username is required";
  if (value.length < 3) return "Username must be at least 3 characters";
  return "";
};

export const passwordValidator = (value) => {
  if (!value.trim()) return "Password is required";
  if (value.length < 6) return "Password must be at least 6 characters";
  return "";
};
