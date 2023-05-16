import React from "react";
import { getTranslation } from "../services/Translations";

const Home = () => {
  const homeNavTitle = getTranslation("fr", "home");
  return <h2>{homeNavTitle}</h2>;
};

export default Home;
