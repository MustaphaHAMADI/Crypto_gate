export const accHash = (str) => {
  return str.replace(str.substring(4, 38), "...");
};
