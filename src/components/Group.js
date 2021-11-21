import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub  } from 'react-icons/fa';
import { MdComputer } from "react-icons/md";
import foto from "../assets/foto.jpg"
import './group.css';


const Group = () => {
  return (
    <div className="container">
      <img src={foto} alt="foto" />

      <h3 className="text">
        Talita Beneves <br/> 19 anos <br/>Rio de Janeiro
      </h3>

      <div className="social" id="portfolio">
        <h2><a href="https://talitabeneves.github.io/Portifolio/" rel="noreferre" target="_blank" ><MdComputer id="icon"/> Portfólio </a> </h2> 
      </div>

      <div className="social" id="github" >
        <h2><a href="https://github.com/TalitaBeneves" rel="noreferre" target="_blank" ><FaGithub id="icon"/> Github </a> </h2> 
      </div>
        
      <div className="social" id="linkedin">
      <h2><a href="https://www.linkedin.com/in/talitabeneves/" rel="noreferre" target="_blank" ><FaLinkedinIn id="icon"/> Linkedin </a> </h2> 
      </div>

      <div className="social" id="instagram">
        <h2><a href="https://www.instagram.com/talita_beneves/" rel="noreferre" target="_blank" ><FaInstagram id="icon"/> Instagram </a> </h2> 
      </div>

    </div>
  );
}

export default Group;
