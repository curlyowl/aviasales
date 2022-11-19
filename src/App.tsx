import React from 'react';
import { Button } from './components/Button';
import './App.css';
import Logo from './Logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} />
      </header>
      <section className="App-content">
        <Button>Показать еще 5 билетов!</Button>
      </section>
    </div>
  );
}

export default App;
