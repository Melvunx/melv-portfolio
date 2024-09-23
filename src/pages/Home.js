import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedBg from "../components/AnimatedBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

const icon = {
  idCard: <FontAwesomeIcon icon={faIdCard} />,
};

const information = [
  {
    objectif: "Recherche d'une alternance en informatique",
    delay: "12 mois",
    rythme: "4 jours en entreprise et 1 jour de formation",
    sectors: ["Industrie", "Banque", "Conseil"],
    localisation: "Île-de-France",
  },
];

const Home = () => {
  return (
    <div>
      <Navigation />
      <AnimatedBg />
      <main id="main">
        <h2>
          Bienvenue sur mon portfolio{" "}
          <span className="fa-icon">{icon.idCard}</span>
        </h2>
        <div className="infos">
          <div className="info-content-top">
            <div className="img-container">
              <img src="./img/header-img.jpg" alt="head img" />
              <span>Qui suis-je ?</span>
            </div>
            <div className="about-me-container">
              {information.map((info) => {
                return (
                  <div className="information" key={info.objectif}>
                    <ul>
                      <li>
                        <h5>Objectif : {info.objectif}</h5>{" "}
                      </li>
                      <li>
                        {" "}
                        <h5>Durée : {info.delay}</h5>
                      </li>
                      <li>
                        <h5>Rythme: {info.rythme}</h5>
                      </li>
                      <li>
                        <h5>Localisation : {info.localisation}</h5>
                      </li>
                      <li className="sectors">
                        {" "}
                        Secteurs :
                        {info.sectors.sort().map((sector, id) => {
                          return <h5 key={id}>{sector}</h5>;
                        })}
                      </li>
                    </ul>
                  </div>
                );
              })}
              <div className="parcours">
                <h3 className="bubble-title">Mon parcours</h3>
                <p>
                  Mon parcours a commencé par une formation en tant
                  qu'ingénieur, mais c'est au fil de mes études que j'ai
                  découvert une véritable passion pour l'informatique, et plus
                  particulièrement pour le développement web.
                </p>
              </div>
            </div>
            {/* <div className="intro-right">
              <div className="intro-part">
                <img src="./img/formation-pic.avif" alt="infos img" />
                <div className="text-content">
                  <h3 className="bubble-title">Qui suis-je ?</h3>
                  <p>
                    Je suis étudiant en informatique inscrit sur{" "}
                    <span id="open-classroom">Open Classroom</span> et je suis
                    en recherche d'alternance. J'ai découvert ma passion pour la
                    progammation web durant ma mobilitée en Malaisie, lors de
                    mon second semestre à l'Efrei. Cela m'a fasciné de pouvoir,
                    soi-même, créer des sites internet et des applications
                    mobiles à partir du codage. J'ai décidé d'en faire mon
                    métier et d'y consacrer mon temps ainsi que mon énergie.
                  </p>
                </div>
              </div>
              <div className="intro-part">
                <img src="./img/computer-img.avif" alt="computer" />
                <div className="text-content">
                  // <h3 className="bubble-title">Mon parcours</h3>
                  <p>
                    Je me suis orienté vers le développement web, notament en
                    full stack afin de travailler sur des projets de la
                    conception à la mise en service. J'ai donc suivie plusieurs
                    formations en autodidact, comme{" "}
                    <span id="from-scratch">From Scratch</span> qui m'a permis
                    de renforcer mes compétences et mes connaissances dans le
                    développement front end.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="intro-card">
            <h3 className="bubble-title">Pourquoi moi ?</h3>
            <p>
              Je souhaite poursuivre mon apprentissage en{" "}
              <span id="alternance">alternance</span> au sein d'une entreprise
              qualifiée afin d'apprendre parmi des développeurs et des
              développeuses expérimentés.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
