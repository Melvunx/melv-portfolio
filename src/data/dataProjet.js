import { Calendar } from "../assets/class/Calendar";

const projects = [
  {
    id: 1,
    name: "Gaming Campus",
    description: "Ce projet est un exemple de site d'événement orienté gaming.",
    technologies: ["html", "css", "scss"],
    image: require("../assets/projects/img-projet/Gaming-campus-img.png"),
    alt: "Image gaming Campus",
    link: {
      http: "https://melvunx.github.io/Projet-Gaming-Campus/",
      name: "Gaming Campus",
    },
    video: require("../assets/projects/video-projet/gaming-campus-video.mp4"),
    date: new Calendar(
      "Dates projet Gaming Campus",
      [2024, 8, 22],
      [2024, 8, 24]
    ),
  },
  {
    id: 2,
    name: "Projet Montagne",
    description:
      "Ce projet est un site regroupant des exemples d'articles sur des randonnées en montagne.",
    technologies: ["html", "css", "scss"],
    image: require("../assets/projects/img-projet/Montagne-img.png"),
    alt: "Image E-commerce",
    link: {
      http: "https://melvunx.github.io/Projet-Montagne/",
      name: "La Montagne",
    },
    video: require("../assets/projects/video-projet/montagne-video.mp4"),
    date: new Calendar(
      "Dates Projet La Montagne",
      [2024, 8, 25],
      [2024, 8, 28]
    ),
  },
  {
    id: 3,
    name: "Projet Resto",
    description: "Ce projet est un exemple d'une carte d'un restaurant.",
    technologies: ["html", "css", "scss"],
    image: require("../assets/projects/img-projet/Resto-img.png"),
    alt: "Image Resto",
    link: {
      http: "https://melvunx.github.io/Projet-Resto/",
      name: "Resto",
    },
    video: require("../assets/projects/video-projet/resto-video.mp4"),
    date: new Calendar("Dates Projet Le Resto", [2024, 8, 28], [2024, 8, 30]),
  },
  {
    id: 4,
    name: "Projet Starmation",
    description:
      "Ce projet permet à l'utilisateur de se renseigner sur notre système solaire et de pouvoir créer le sien en toute sécurité.",
    technologies: ["html", "css", "javascript", "node.js", "mySql"],
    image: require("../assets/projects/img-projet/Starmation-Img.png"),
    alt: "Image Starmation",
    link: {
      http: "#",
      name: "Non disponible",
    },
    video: require("../assets/projects/video-projet/starmation-video.mp4"),
    date: new Calendar("Dates Projet Starmation", [2024, 4, 20], [2024, 5, 15]),
  },
  {
    id: 5,
    name: "Todo-list",
    description: "Ce projet est un exemple de liste de tâches.",
    technologies: [
      "html",
      "pug",
      "css",
      "javascript",
      "node.js",
      "mySql",
      "vue.js",
    ],
    image: require("../assets/projects/img-projet/Melvunx-todolist-img.png"),
    alt: "Image Todo-list",
    link: {
      http: "#",
      name: "Non disponible",
    },
    video: require("../assets/projects/video-projet/melvunx-todolist-video.mp4"),
    date: new Calendar("Dates Projet Todo-list", [2024, 3, 25], [2024, 4, 7]),
  },
  {
    id: 6,
    name: "Projet Quiz'Antilles",
    description: "Ce projet est un exemple de quiz intéractif.",
    technologies: ["html", "css", "javascript"],
    image: require("../assets/projects/img-projet/newQuiz.png"),
    alt: "Image quiz'Antilles",
    link: {
      http: "https://melvunx.github.io/QuizAntilles/",
      name: "Quiz'Antilles",
    },
    video: require("../assets/projects/video-projet/newQuiz.mp4"),
    date: new Calendar(
      "Dates Projet Quiz'Antilles",
      [2024, 9, 27],
      [2024, 10, 2]
    ),
  },
  {
    id: 7,
    name: "Country application",
    description:
      "Ce projet est une application qui répertorie tous les pays du monde grâce à l'API https://restcountries.com/v3.1/all.",
    technologies: ["html", "scss", "api", "javascript", "react"],
    image: require("../assets/projects/img-projet/Country-app-img.png"),
    alt: "Image Country Application",
    link: {
      http: "#",
      name: "Non disponible",
    },
    video: require("../assets/projects/video-projet/country-app-video.mp4"),
    date: new Calendar("Dates Country App", [2024, 9, 9], [2024, 9, 10]),
  },
  {
    id: 8,
    name: "User application",
    description:
      "Ce projet est une application qui simule des utilisateurs avec leurs données grâce à l'API https://randomuser.me/api/?results=24.",
    technologies: ["html", "css", "javascript", "api"],
    image: require("../assets/projects/img-projet/User-app-img.png"),
    alt: "Image User Application",
    link: {
      http: "https://melvunx.github.io/User-Api/",
      name: "User App",
    },
    video: require("../assets/projects/video-projet/user-app-video.mp4"),
    date: new Calendar("Dates User App", [2024, 9, 7], [2024, 9, 8]),
  },
  {
    id: 9,
    name: "Bubble shooter",
    description:
      "Ce mini projet est mini jeu où il faut tirer sur le plus de bulle possible.",
    technologies: ["html", "css", "javascript"],
    image: require("../assets/projects/img-projet/Bubble-shooter-img.png"),
    alt: "Image Bubble Shooter",
    link: {
      http: "https://melvunx.github.io/Mini-bubble-shooter/",
      name: "Bubble shooter",
    },
    video: require("../assets/projects/video-projet/bubble-shooter-video.mp4"),
    date: new Calendar("Dates Bubble Shooter", [2024, 9, 7], [2024, 9, 8]),
  },
];

export default projects;
