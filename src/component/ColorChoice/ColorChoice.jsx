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

    const [selectedDoor, setSelectedDoor] = useState(null);

    const handleDoorClick = (doorNumber) => {
      setSelectedDoor(doorNumber);
    };
  
    const closePopup = () => {
      setSelectedDoor(null);
    };

    return (
        <div className="color-choice">
            <div className="content-wrapper">
                <p className="div_color">Цвет</p>
                <div className="button-group">
                    {/* Dropdown for Корпус */}
                    <div className="drop">
                        <button className="dropdown-btn" onClick={toggleDropdownBody}>
                            Корпус
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
                        </button>
                        {isDropdownBody && (
                            <div className="dropdown-content2">
                                <div className="button_choice">
                                    <div className="label-frame">
                                        <p className="p_text_num">Цвет корпуса</p>
                                    </div>
                                    <div className="color-grid">
                                        <div className="color-box" data-color="10000" title="Зелёно-бежевый"></div>
                                        <div className="color-box" data-color="1001" title="Бежевый"></div>
                                        <div className="color-box" data-color="1002" title="Песочно-жёлтый"></div>
                                        <div className="color-box" data-color="1003" title="Сигнальный жёлтый"></div>
                                        <div className="color-box" data-color="1004" title="Жёлто-золотой"></div>
                                        <div className="color-box" data-color="1015" title="Светлая слоновая кость"></div>
                                        <div className="color-box" data-color="1016" title="Жёлтая сера"></div>
                                        <div className="color-box" data-color="1017" title="Шафраново-жёлтый"></div>
                                        <div className="color-box" data-color="1018" title="Цинково-жёлтый"></div>
                                        <div className="color-box" data-color="1019" title="Серо-бежевый"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="drop">
                    <button className="dropdown-btn" onClick={toggleDropdownDoors}>
                        Дверцы
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" strokeWidth="3" />
                        </svg>
                    </button>

                    {isDropdownDoors && (
                        <div className="dropdown-content2">
                        <div className="button_choice">
                            <div className="label-frame">
                            <p className="p_text_num">Цвет дверцы</p>
                            </div>
                            <div className="doors-container">
                            {Array.from({ length: 2 }, (_, i) => (
                                <button
                                key={i}
                                className="door"
                                onClick={() => handleDoorClick(i + 1)}
                                >
                                {i + 1} дверца
                                </button>
                            ))}
                            </div>
                        </div>
                        </div>
                    )}

                    {selectedDoor && (
                        <div className="popup">
                        <div className="popup-content">
                            <h2>Цвет {selectedDoor} дверки</h2>
                            <p>Вы выбрали дверцу {selectedDoor}.</p>
                            <div className="color-grid">
                                        <div className="color-box" data-color="10000" title="Зелёно-бежевый"></div>
                                        <div className="color-box" data-color="1001" title="Бежевый"></div>
                                        <div className="color-box" data-color="1002" title="Песочно-жёлтый"></div>
                                        <div className="color-box" data-color="1003" title="Сигнальный жёлтый"></div>
                                        <div className="color-box" data-color="1004" title="Жёлто-золотой"></div>
                                        <div className="color-box" data-color="1015" title="Светлая слоновая кость"></div>
                                        <div className="color-box" data-color="1016" title="Жёлтая сера"></div>
                                        <div className="color-box" data-color="1017" title="Шафраново-жёлтый"></div>
                                        <div className="color-box" data-color="1018" title="Цинково-жёлтый"></div>
                                        <div className="color-box" data-color="1019" title="Серо-бежевый"></div>
                                    </div>

                            <button className="close" onClick={closePopup}>Закрыть</button>
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
