export const my_length_array = (arr) => {
  let count = 0;

  if (typeof arr !== "object" || arr?.constructor !== Array) {
    return count;
  }

  for (let item of arr) {
    count++;
  }

  return count;
};
