import React, { useState } from 'react';
import './SizeMailbox.css';

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
    <div class="dimensions-container">
  <div class="header">Габариты</div>
  <div class="dimensions-block">
    <div class="dimension">
      <div class="label">Ширина</div>
      <div class="value">340 мм</div>
    </div>
    <div class="divider"></div>
    <div class="dimension">
      <div class="label">Глубина</div>
      <div class="value">196 мм</div>
    </div>
    <div class="divider"></div>
    <div class="dimension">
      <div class="label">Высота</div>
      <div class="value">205 мм</div>
    </div>
  </div>
</div>
  );
};

export default SizeMailbox;
