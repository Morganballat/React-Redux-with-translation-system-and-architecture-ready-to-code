import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

const Routing = () => {
  return (
    <Router>
       <Routes>
        <Route  path="/" Component={Home} />
         {/* <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         <Route component={NotFound} /> */}
       </Routes>
    </Router>
  );
};

export default Routing;
