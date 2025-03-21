import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faMobileScreenButton,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const icon = {
  envelope: <FontAwesomeIcon icon={faEnvelope} />,
  phone: <FontAwesomeIcon icon={faMobileScreenButton} />,
  comments: <FontAwesomeIcon icon={faComments} />,
  user: <FontAwesomeIcon icon={faUser} />,
  github: <FontAwesomeIcon icon={faGithub} />,
  linkedIn: <FontAwesomeIcon icon={faLinkedin} />,
};

const Footer = () => {
  const [isTitleLinkHovering, setIsTitleLinkHovering] = useState(false);
  const [isTitleContactHovering, setIsTitleContactHovering] = useState(false);

  const handleHoverOver = (setHoverState) => () => setHoverState(true);

  const handleHoverLeave = (setHoverState) => () => setHoverState(false);

  return (
    <div className="footer">
      <div
        className="link-container"
        onMouseOver={handleHoverOver(setIsTitleLinkHovering)}
        onMouseLeave={handleHoverLeave(setIsTitleLinkHovering)}
      >
        <h3 className={isTitleLinkHovering ? "underline-in" : "underline-out"}>
          Mes liens <span>{icon.user}</span>
        </h3>
        <ul className="links">
          <li>
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/melvin-augustine/"
            >
              <span>{icon.linkedIn}</span>
            </a>
            <h5 className="icon-name">LinkedIn</h5>
          </li>
          <li>
            <a id="github" href="https://github.com/Melvunx">
              <span className="fa-icon">{icon.github}</span>
            </a>
            <h5 className="icon-name">Github</h5>
          </li>
        </ul>
      </div>
      <div
        className="contact-container"
        onMouseOver={handleHoverOver(setIsTitleContactHovering)}
        onMouseLeave={handleHoverLeave(setIsTitleContactHovering)}
      >
        <h3
          className={isTitleContactHovering ? "underline-in" : "underline-out"}
        >
          Pour me joindre <span className="fa-icon">{icon.comments}</span>
        </h3>
        <ul id="contact" className="contacts">
          <li>
            <a
              className="fa-icon"
              href="mailto:augustine.melv@gmail.com"
              id="iconEmail"
            >
              {icon.envelope}
            </a>
            <h4>augustine.melv@gmail.com</h4>
          </li>
          <li>
            <a className="fa-icon" href="tel:+330786117368" id="iconPhone">
              {icon.phone}
            </a>
            <h4>07 86 11 73 68</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
