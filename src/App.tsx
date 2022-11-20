import React from 'react';
import { Filters } from './components/Filters';
import { Button } from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import './App.css';
import Logo from './Logo.svg';
import { Tickets } from './components/Tickets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} />
      </header>
      <section className="App-body">
        <aside className="App-menu">
          {/* todo: Заголовок сделай частью фильтров   */}
          Количество пересадок
          <Filters />
        </aside>
        <section className="App-content">
          <ButtonGroup />
          <Tickets />
          <Button>Показать еще 5 билетов!</Button>
        </section>
      </section>
    </div>
  );
}

export default App;
