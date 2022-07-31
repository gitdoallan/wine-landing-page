import React from "react";
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import '../style/Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="img-header">
        <img src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="logo Wine" />
      </div>
      <nav className="nav-header">
        <ul className="nav-ul">
          <li>Clube</li>
          <li>Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://www.youtube.com/user/WineVinhos">
          <AiFillYoutube className="icons-header" size="44px" />
        </a>
        <a href="https://www.instagram.com/winevinhos/">
          <AiFillInstagram className="icons-header" size="44px" />
        </a>
        <a href="https://www.linkedin.com/company/wine.com.br/">
          <AiFillLinkedin className="icons-header" size="44px" />
        </a>
      </div>
    </div>
  );
}