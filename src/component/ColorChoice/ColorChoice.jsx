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
                <p className="div_color">Цвет</p>
                <div className="button-group">
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
                                        <p className="p_text_num">
                                            Цвет корпуса
                                        </p>
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
                                <path
                                    d="M37 14.5L22 29.5L7 14.5"
                                    stroke="#333333"
                                    strokeWidth="3"
                                />
                            </svg>

                        </button>
                        {isDropdownDoors && (
                            <div className="dropdown-content2">
                                <div className="button_choice">
                                    <div className="label-frame">
                                        <p className="p_text_num">
                                            Цвет дверцы
                                        </p>
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
