import React from 'react';
import './ButtonFooter.css';
const ButtonFooter = () => {
  return (
    <div className="button-container">
      <button className="button save-button" type="button">
        Сохранить проект и вернуться позже
      </button>
      <button className="button submit-button" type="submit">
        Отправить проект менеджеру на просчет
      </button>
    </div>
  );
};

export default ButtonFooter;