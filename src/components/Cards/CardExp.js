import React from "react";
import experiences from "../../data/dataExp";
import dateFormative from "../../assets/function/date";
import durationCalc from "../../assets/function/duration";

const CardExp = () => {
  return (
    <div className="background-section">
      <div className="experiences">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="card-exp">
              <div className="card-exp-content">
                <h2>
                  {experience.job} - {experience.contract} de{" "}
                  {durationCalc(
                    experience.duration.start,
                    experience.duration.end
                  )}{" "}
                  mois
                </h2>
                <h4 className="company">
                  Entreprise : {experience.company} - {experience.sector}
                </h4>
                <h4>{experience.lieu.join(" - ")}</h4>
                <ul className="skills">
                  {experience.skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <h5>{skill}</h5>
                      </li>
                    );
                  })}
                </ul>
                <ul className="tasks">
                  {experience.tasks.map((task, index) => {
                    return (
                      <li key={index}>
                        <h5>{task}</h5>
                      </li>
                    );
                  })}
                </ul>
                <span className="date">
                  {dateFormative(experience.duration.start)} -{" "}
                  {dateFormative(experience.duration.end)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardExp;
