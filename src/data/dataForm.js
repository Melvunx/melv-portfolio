const formations = [
  {
    id: 1,
    name: "Baccalauréat Générale",
    level: "Bac",
    school: ["Lycée Nord Antlantique"],
    description: "Bac générale avec mention assez bien.",
    domain: "Général",
    localisations: ["Martinique", "Sainte-Marie"],
    date: {
      start: new Date([2018, 9, 2]),
      end: new Date([2021, 6, 18]),
    },
  },
  {
    id: 2,
    name: "Classe Préparatoire au grandes écoles",
    level: "Bac +2",
    school: ["Lycée Bellevue"],
    description: "Première année en MPSI, seconde année en MP.",
    domain: "Scientifique",
    localisations: ["Martinique", "Fort-de-France"],
    date: {
      start: new Date([2021, 9, 2]),
      end: new Date([2023, 4, 5]),
    },
  },
  {
    id: 3,
    name: "L3 New",
    level: "Bac +3",
    school: ["Efrei", "Asia Pacific University"],
    description:
      "Premier semestre à l'Efrei et second semestre à l'Asia Pacific University",
    domain: "Informatique",
    localisations: ["Paris", "Kuala Lumpur"],
    date: {
      start: new Date([2023, 9, 2]),
      end: new Date([2024, 7, 5]),
    },
  },
  {
    id: 4,
    name: "Développeur Concepteur D'application",
    level: "Bac +3/4",
    school: ["OpenClassroom"],
    description: "Formation développeur d'application JavaScript React",
    domain: "Informatique - Développement Web",
    localisations: ["Paris"],
    date: {
      start: new Date([2024, 9, 5]),
      end: new Date([2025, 9, 2]),
    },
  },
];

export default formations;
