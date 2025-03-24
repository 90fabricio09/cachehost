import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from '../assets/404.svg'

const NotFound = () => {
    const navigate = useNavigate();

    return (
      <div className="home-container">
        <div className="grid-overlay"></div>
        <img src={Image} alt="CacheHost Logo" className="notfound-image"/>
        
        <p className="home-subtitle">Essa página não foi encontrada :(</p>
        
        <button 
          className="discord-button"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-house-fill"></i> Voltar ao início
        </button>
      </div>
    );
};
  
export default NotFound;