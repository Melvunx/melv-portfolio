import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll) {
        setIsScrollingUp(true); // L'utilisateur défile vers le haut
      } else {
        setIsScrollingUp(false); // L'utilisateur défile vers le bas
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div className={`navigation ${isScrollingUp ? "nav-up" : "nav-down"}`}>
      <h3> {"< Portfolio Melvin Augustine />"} </h3>
      <ul className="navbar">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/projet"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/formation"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Formations</li>
        </NavLink>
        <NavLink
          to="/experience"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Expériences</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
