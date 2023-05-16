import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTranslation } from "../services/Translations";

const Header: React.FC = () => {
  const homeNavTitle = getTranslation("fr", "home");

  return (
    <header className="bg-warning">
      <nav>
        <ul>
          <li><a href="/">{homeNavTitle}</a></li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
