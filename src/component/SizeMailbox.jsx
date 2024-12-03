import React, { useState } from 'react';
import './SizeMailbox.css';

const SizeMailbox = () => {
  const [columns, setColumns] = useState(1); // Состояние для количества столбцов

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setColumns(value); // Обновляем состояние
    }
  };

  return (
    <div className="dimensions-container">
      <h2>Габариты</h2>
      <div className="dimensions">
        <div className="dimension-item">
          <span>Ширина</span>
          <strong>340 мм</strong>
        </div>
        <div className="dimension-item">
          <span>Глубина</span>
          <strong>196 мм</strong>
        </div>
        <div className="dimension-item">
          <span>Высота</span>
          <strong>205 мм</strong>
        </div>
      </div>
      <div className="columns-input">
        <label htmlFor="columns">Количество столбцов ящиков</label>
        <input
          id="columns"
          type="number"
          value={columns}
          onChange={handleInputChange}
          min="1"
        />
      </div>
    </div>
  );
};

export default SizeMailbox;
