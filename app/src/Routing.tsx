import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Catalogue from "./components/Catalogue";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn.tsx";
import Account from "./components/Account.tsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/catalogue" Component={Catalogue} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/login" Component={LogIn} />
        <Route path="/account" Component={Account} />
      </Routes>
    </Router>
  );
};

export default Routing;
