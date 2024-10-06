import React from "react";
import formations from "../../data/dataForm";

const CardFormation = () => {
  return (
    <div className="background-section">
      <div className="formations">
        {formations
          .sort((a, b) => b.date.getEndDate() - a.date.getStartDate())
          .map((formation) => {
            return (
              <div key={formation.id} className="card-formation">
                <div className="card-formation-content">
                  <h2>{formation.name}</h2>
                  <h4>
                    {formation.level} - domaine {formation.domain.toLowerCase()}
                  </h4>
                  <h4>{formation.date.getYearsGap()}</h4>
                  <h4 className="localisations">
                    {formation.localisations.join(" - ")}
                  </h4>
                  <p>{formation.description}</p>
                  <div className="formation-date">
                    <span className="date">
                      {formation.date.setFrenchStartDate()} -{" "}
                      {formation.date.setFrenchEndDate()}
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
