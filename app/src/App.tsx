import React from 'react';
import Header from './components/Header.tsx'
import Routes from './Routing.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  );
};

export default App;