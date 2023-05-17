import React from 'react';
import Header from './components/Header.tsx'
import Routes from './Routing.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;