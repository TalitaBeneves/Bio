import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import foto from "../assets/foto.jpg";
import "./group.css";

const Group = () => {
  const dataAtual = new Date().getFullYear();
  const nascimento = 2002;
  const idade = dataAtual - nascimento;
  return (
    <div className="container">
      <img src={foto} alt="foto" />

      <h3 className="text">
        Talita Beneves <br /> {idade} anos <br />
        Rio de Janeiro
      </h3>

      <a
        className="social"
        id="portfolio"
        href="https://talitabeneves.github.io/Portfolio/"
        rel="noreferre"
        target="_blank"
      >
        <h2>
          <MdComputer id="icon" /> Portfólio{" "}
        </h2>
      </a>

      <a
        className="social"
        id="github"
        href="https://github.com/TalitaBeneves"
        rel="noreferre"
        target="_blank"
      >
        <h2>
          <FaGithub id="icon" /> Github{" "}
        </h2>
      </a>

      <a
        className="social"
        id="linkedin"
        href="https://www.linkedin.com/in/talitabeneves/"
        rel="noreferre"
        target="_blank"
      >
        <h2>
          <FaLinkedinIn id="icon" /> Linkedin{" "}
        </h2>
      </a>
    </div>
  );
};

export default Group;
