import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedBg from "../components/AnimatedBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

const icon = {
  idCard: <FontAwesomeIcon icon={faIdCard} />,
};

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
              <span>Je m'appelle Melvin !</span>
            </div>
            <div className="intro-right">
              <div className="intro-part">
                <img src="./img/formation-pic.avif" alt="infos img" />

                <div className="text-content">
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
            </div>
          </div>
          <div className="intro-card">
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
