import { my_display_alpha } from "./exercise-1.js";
export const my_display_alpha_reverse = () => {
  const alpha = my_display_alpha();

  let alpha_reverse = "";

  for (let chararacter of alpha) {
    alpha_reverse = chararacter + alpha_reverse;
  }

  return alpha_reverse;
};
