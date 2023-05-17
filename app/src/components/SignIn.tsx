import React from "react";
import { getTranslation } from "../services/Translations";

const SignIn = () => {
  const signInNavTitle = getTranslation("fr", "signIn");
  return <h2 className="d-flex justify-content-center">{signInNavTitle}</h2>;
};

export default SignIn;