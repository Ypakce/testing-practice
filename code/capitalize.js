export function capitalize(str) {
  if (typeof str != "string") {
    return "";
  }
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1);
  return firstLetter + rest;
}
