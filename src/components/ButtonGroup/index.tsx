import React from "react";
import { Button } from '../Button';
import './ButtonGroup.css';

export const ButtonGroup = () => {
  return (
    <div className="App-buttonGroup">
      <button type="button">Самый дешевый</button>
      <button type="button">Самый быстрый</button>
      <button type="button">Оптимальный</button>
    </div>
  )
};