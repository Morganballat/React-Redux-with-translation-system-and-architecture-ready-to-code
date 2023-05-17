import React from "react";
import { getTranslation } from "../services/Translations";

const LogIn = () => {
  const logInNavTitle = getTranslation("fr", "logIn");
  return <h2 className="d-flex justify-content-center">{logInNavTitle}</h2>;
};

export default LogIn;