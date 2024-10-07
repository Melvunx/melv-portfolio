import React, { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "../../data/dataProjet";

const CardProject = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [projectNumber, setProjectNumber] = useState(0);
  const videoRefs = useRef([]); // Références pour accéder aux vidéos
  const timeoutRef = useRef(null); // Référence pour stocker l'ID du timeout

  const radios = [
    "css",
    "scss",
    "javascript",
    "react",
    "vue.js",
    "node.js",
    "mySql",
  ];

  // Utiliser useEffect pour régler la vitesse de la vidéo
  useEffect(() => {
    if (hoveredProjectId !== null && videoRefs.current[hoveredProjectId]) {
      videoRefs.current[hoveredProjectId].playbackRate = 2; // Vitesse x2
    }
  }, [hoveredProjectId]);

  // Gérer les timeouts au moment du démontage du composant pour éviter les fuites de mémoire
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Fonction pour gérer l'entrée de la souris avec délai
  const handleMouseEnter = useCallback((projectId) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredProjectId(projectId);

      // Jouer la vidéo une fois visible
      const videoElement = videoRefs.current[projectId];
      if (videoElement) {
        videoElement.play();
      }
    }, 800); // Délai de 0.8 seconde
  }, []);

  // Fonction pour gérer la sortie de la souris
  const handleMouseLeave = useCallback((projectId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Annuler le timeout si la souris quitte avant le délai
    }
    setHoveredProjectId(null); // Remettre à l'état initial

    // Pause la vidéo si elle est en lecture
    const videoElement = videoRefs.current[projectId];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0; // Remettre la vidéo au début
    }
  }, []);

  //Filtrer les projets en fonction de la technologie sélectionnée
  const filteredProjects = projects.filter(
    (project) =>
      selectedRadio === "" || project.technologies.includes(selectedRadio)
  );

  useEffect(() => {
    setProjectNumber(filteredProjects.length);
  }, [filteredProjects]);

  const colorSelector = (number) => {
    if (number > 6) {
      return "high-number";
    } else if (number >= 4) {
      return "mid-number";
    } else if (number < 4) {
      return "low-number";
    }
  };

  return (
    <div className="background-section">
      <div className="filter">
        <h2 className="compteur">
          Nombre de projets :{" "}
          <span className={colorSelector(projectNumber)}>{projectNumber}</span>
        </h2>
        <div className="radio-inputs">
          {radios.map((techno, index) => {
            return (
              <label htmlFor={techno} className="radio" key={index}>
                <input
                  type="radio"
                  name="technoRadio"
                  id={techno}
                  checked={techno === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.id)}
                />
                <span className="name">{techno}</span>
              </label>
            );
          })}
        </div>

        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )}
      </div>

      <div className="project-container">
        {filteredProjects
          .sort((a, b) => b.date.getEndDate() - a.date.getStartDate())
          .map((project) => (
            <div
              key={project.id}
              className="project"
              onMouseEnter={() => handleMouseEnter(project.id)} // Délai pour afficher la vidéo
              onMouseLeave={() => handleMouseLeave(project.id)} // Annuler la vidéo et remettre l'image
            >
              <div className="card-project">
                <div className="card-project-content">
                  {hoveredProjectId === project.id ? (
                    <video
                      ref={(el) => (videoRefs.current[project.id] = el)} // Stockage de la référence
                      src={project.video}
                      loop
                      muted
                      className="project-video"
                    />
                  ) : (
                    <img src={project.image} alt={project.alt} />
                  )}
                  <div className="project-element">
                    <h4>
                      <a
                        href={project.url}
                        className={
                          project.url === "#" ? "simple-url" : "active-url"
                        }
                      >
                        {project.name}
                      </a>
                    </h4>
                    <h4>Durée : {project.date.getDaysGap()} </h4>
                    <p>{project.description}</p>
                    <h4>Technologies utilisées</h4>
                    <ul className="technologie">
                      {project.technologies.map((technologie, index) => (
                        <li key={technologie + index}>{technologie}</li>
                      ))}
                    </ul>
                    <span className="date">
                      Fait le {project.date.setFrenchStartDate()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardProject;
