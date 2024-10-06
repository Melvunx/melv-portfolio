export class Calendar {
  constructor(name, start, end) {
    this.name = name;
    this.start = new Date(start);
    this.end = new Date(end);
  }

  getStartDate() {
    return this.start;
  }

  getEndDate() {
    return this.end;
  }

  getYearsGap() {
    const yearsDifference = this.end.getFullYear() - this.start.getFullYear();

    if (yearsDifference > 1) {
      return `${yearsDifference} années`;
    } else {
      return `${yearsDifference} année`;
    }
  }

  getMonthsGap() {
    const yearsDifference = this.end.getFullYear() - this.start.getFullYear();
    const monthsDifference = this.end.getMonth() - this.start.getMonth();

    const totalMonths = yearsDifference * 12 + monthsDifference;
    return `${totalMonths} mois`;
  }

  getWeeksGap() {
    const week = 1000 * 60 * 60 * 24 * 7;
    const timeDifference = Math.abs(this.end - this.start);
    const weekNumber = Math.ceil(timeDifference / week);

    if (weekNumber > 1) {
      return `${weekNumber} semaines`;
    } else {
      return `${weekNumber} semaine`;
    }
  }

  getDaysGap() {
    const day = 1000 * 60 * 60 * 24;
    const timeDifference = Math.abs(this.end.getTime() - this.start.getTime());
    const dayNumber = Math.ceil(timeDifference / day);

    if (dayNumber > 1) {
      return `${dayNumber} jours`;
    } else {
      return `${dayNumber} jour`;
    }
  }

  setFrenchStartDate() {
    return this.start.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  setFrenchEndDate() {
    return this.end.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
