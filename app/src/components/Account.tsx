import React from "react";
import { getTranslation } from "../services/Translations";

const Account = () => {
  const accountNavTitle = getTranslation("myAccount");
  return <h2 className="d-flex justify-content-center">{accountNavTitle}</h2>;
};

export default Account;