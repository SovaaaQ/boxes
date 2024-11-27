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

  return <>
    <p className='text_title'>Подъезд</p>
    <p><span className='red'>По умолчанию параметры применяются ко всем подъездам,</span><br /> но возможно выбрать любой подъезд и изменить его параметры</p>
    <div className='entrance-buttons'>{renderButtons()}</div>
  </>

};

export default ButtonEntrance;
