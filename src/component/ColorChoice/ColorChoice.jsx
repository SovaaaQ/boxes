import React, {useState} from 'react';
import './ColorChoice.css';

const ColorChoice = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [entrances, setEntrances] = useState([{id: 1, numApartments: 0}]);
    const [isDropdown, setIsDropdown] = useState(false);
    
    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
    
        if (checked) {
          const sameApartments = entrances[0].numApartments;
          const newEntrances = entrances.map(entrance => ({
            ...entrance,
            numApartments: sameApartments
          }));
          setEntrances(newEntrances);
        }
      };

    const ButtonClick = () => {
        setIsDropdown(!isDropdown);
    };

    return (
        <div>
            <div>
               <label className='div_color'>
                Цвет
                </label> 
                <div className='drop&down'>
                    <button className='drop&down-button' onClick={ButtonClick}>
                        Корпус
                        <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" stroke-width="3"/>
                        </svg>
                    </button>
                    {isDropdown && (
                        <div className='dropdown-content'>
                            <div className='button_choise'>
                                <div className='label-frame'>
                                    <label htmlFor="yes" className='label_text_num'>Цвет корпуса</label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='drop&down'>
                    <button className='drop&down-button' onClick={ButtonClick}>
                        Дверцы
                        <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" stroke-width="3"/>
                        </svg>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};


export default ColorChoice;