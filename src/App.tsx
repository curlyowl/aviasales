import React from 'react';
import { Button } from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import './App.css';
import Logo from './Logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} />
      </header>
      <section className="App-body">
        <aside className="App-menu">
          Фильтры
        </aside>
        <section className="App-content">
          <ButtonGroup />
          <div className="App-tickets">Билеты</div>
          <Button>Показать еще 5 билетов!</Button>
        </section>
      </section>
    </div>
  );
}

export default App;
