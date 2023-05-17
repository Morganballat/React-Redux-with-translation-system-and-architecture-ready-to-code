import React from "react";
import { getTranslation } from "../services/Translations";

const Home = () => {
  const homeNavTitle = getTranslation("home");
  return <h2 className="d-flex justify-content-center">{homeNavTitle}</h2>;
};

export default Home;