import React from 'react';
import './ButtonFooter.css';
const ButtonFooter = () => {
  return (
    <div className="button-container">
      <button className="button save-button">
        Сохранить проект и вернуться позже
      </button>
      <button className="button submit-button">
        Отправить проект менеджеру на просчет
      </button>
    </div>
  );
};

export default ButtonFooter;