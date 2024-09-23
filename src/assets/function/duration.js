const durationCalc = (start, end) => {
  let yearsDifference = end.getFullYear() - start.getFullYear();
  let monthsDifference = end.getMonth() - start.getMonth();

  // Calculer la différence totale en mois
  let totalMonths = yearsDifference * 12 + monthsDifference;

  return totalMonths;
};

export default durationCalc;
