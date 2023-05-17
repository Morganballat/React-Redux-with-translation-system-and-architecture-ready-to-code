import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTranslation } from "../services/Translations";

const Header: React.FC = () => {
  const homeNavTitle = getTranslation("fr", "home");
  const catalogueNavTitle = getTranslation("fr", "catalogue");
  const signInNavTitle = getTranslation("fr", "signIn");
  const logInNavTitle = getTranslation("fr", "logIn");
  const accountNavTitle = getTranslation("fr", "myAccount");


  return (
    <header className="bg-warning">
      <nav>
        <ul className="d-flex justify-content-center">
          <li className="p-4">
            <a href="/">{homeNavTitle}</a>
          </li>
          <li className="p-4">
            <a href="/catalogue">{catalogueNavTitle}</a>
          </li>
          <li className="p-4">
            <a href="/signin">{signInNavTitle}</a> |{" "}
            <a href="/login">{logInNavTitle}</a>
          </li>
          <li className="p-4">
            <a href="/account">{accountNavTitle}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
