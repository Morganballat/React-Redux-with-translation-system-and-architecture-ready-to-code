import React from "react";
import { getTranslation } from "../services/Translations";

const Catalogue = () => {
  const catalogueNavTitle = getTranslation("catalogue");
  return <h2 className="d-flex justify-content-center">{catalogueNavTitle}</h2>;
};

export default Catalogue;