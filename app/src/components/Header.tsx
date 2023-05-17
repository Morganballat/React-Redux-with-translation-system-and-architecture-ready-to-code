import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTranslation } from "../services/Translations";
import { useResolvedPath } from "react-router-dom";

const Header: React.FC = () => {
  const homeNavTitle = getTranslation("home");
  const catalogueNavTitle = getTranslation("catalogue");
  const signInNavTitle = getTranslation("signIn");
  const logInNavTitle = getTranslation("logIn");
  const accountNavTitle = getTranslation("myAccount");

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
