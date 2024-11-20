import React from 'react';
import './ButtonEntrance.css';

const ButtonEntrance = ({ numEntrances }) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= numEntrances; i++) {
      buttons.push(
        <button key={i} className='entrance-button'>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div className='entrance-buttons'>{renderButtons()}</div>;
};

export default ButtonEntrance;
