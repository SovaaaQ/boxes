import React, { useState } from "react";
import "./ColorChoice.css";

const ColorChoice = () => {
  const [isDropdownBody, setIsDropdownBody] = useState(false);
  const [isDropdownDoors, setIsDropdownDoors] = useState(false);

  const toggleDropdownBody = () => {
    setIsDropdownBody(!isDropdownBody);
  };

  const toggleDropdownDoors = () => {
    setIsDropdownDoors(!isDropdownDoors);
  };

  return (
    <div className="color-choice">
      <div className="content-wrapper">
        <label className="div_color">Цвет</label>
        <div className="button-group">
          <div className="drop">
            <button className="dropdown-btn" onClick={toggleDropdownBody}>
              Корпус
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 14.5L22 29.5L7 14.5"
                    stroke="#333333"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </button>
            {isDropdownBody && (
              <div className="dropdown-content">
                <div className="button_choice">
                  <div className="label-frame">
                    <label htmlFor="yes" className="label_text_num">
                      Цвет корпуса
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="drop">
            <button className="dropdown-btn" onClick={toggleDropdownDoors}>
              Дверцы
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 14.5L22 29.5L7 14.5"
                    stroke="#333333"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </button>
            {isDropdownDoors && (
              <div className="dropdown-content">
                <div className="button_choice">
                  <div className="label-frame">
                    <label htmlFor="yes" className="label_text_num">
                      Цвет дверцы
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChoice;
