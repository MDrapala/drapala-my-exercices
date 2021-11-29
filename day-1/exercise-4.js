export const my_size_alpha = (str) => {
  let count = 0;

  if (typeof str !== "string") {
    return count;
  }

  for (let character of str) {
    count++;
  }

  return count;
};
