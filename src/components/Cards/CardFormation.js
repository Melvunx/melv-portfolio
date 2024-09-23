import React from "react";
import formations from "../../data/dataForm";
import dateFormative from "../../assets/function/date";

const CardFormation = () => {
  return (
    <div className="background-section">
      <div className="formations">
        {formations
          .sort((a, b) => b.date.start - a.date.start)
          .map((formation) => {
            return (
              <div key={formation.id} className="card-formation">
                <div className="card-formation-content">
                  <h2>{formation.name}</h2>
                  <h4>
                    {formation.level} - domaine {formation.domain.toLowerCase()}
                  </h4>
                  <h4 className="localisations">
                    {formation.localisations.join(" - ")}
                  </h4>
                  <p>{formation.description}</p>
                  <div className="formation-date">
                    <span className="date">
                      {dateFormative(formation.date.start)} -{" "}
                      {dateFormative(formation.date.end)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CardFormation;
