export const my_is_posi_neg = (nbr) => {
  if (typeof nbr !== "number" && nbr !== null && nbr !== undefined) {
    return "";
  }

  if (nbr === null || nbr === undefined || nbr > 0) {
    return "POSITIF";
  }

  if (nbr === 0) {
    return "NEUTRAL";
  }

  return "NEGATIF";
};
