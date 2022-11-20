import React from 'react';
import './Filters.css';

// todo: Кастомизировать чекбокс по макету
// todo: выровнять лейбл по центру чекбокса
export const Filters = () => {
  return (
    <ul className="App-filters">
      <li>
        <label><input type="checkbox" />Все</label>
      </li>
      <li>
        <label><input type="checkbox" />Без пересадок</label>
      </li>
      <li>
        <label><input type="checkbox" />1 пересадка</label>
      </li>
      <li>
        <label><input type="checkbox" />2 пересадки</label>
      </li>
      <li>
        <label><input type="checkbox" />3 пересадки</label>
      </li>
    </ul>
  )
};