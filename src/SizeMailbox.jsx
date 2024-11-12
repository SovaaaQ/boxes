import React, { useState } from 'react';

const SizeMailbox = () => {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  const handleWidthChange = (event) => {
    const newWidth = parseFloat(event.target.value);
    setWidth(newWidth);
  };

  const handleLengthChange = (event) => {
    const newLength = parseFloat(event.target.value);
    setLength(newLength);
  };

  return (
    <div>
      <label>
      Укажите габаритные размеры области монтажа почтовых ящиков -
        Ширина
        <input type="number" value={width} onChange={handleWidthChange} />
      </label>
      <label>
        Высота
        <input type="number" value={length} onChange={handleLengthChange} />
      </label>
    </div>
  );
};

export default SizeMailbox;
