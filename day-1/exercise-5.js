export const my_array_alpha = (str) => {
  let arr = [];

  if (typeof str !== "string") {
    return arr;
  }

  for (const character of str) {
    arr = [...arr, character];
  }

  return arr;
};
