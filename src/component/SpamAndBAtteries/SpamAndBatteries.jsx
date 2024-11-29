import './SpamAndBatteries.css';

import React, { useState } from 'react';

const SpamAndBatteries = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <div className='number_yes'>
                <label htmlFor="yes">Нумерация</label>
                <input
                    type="checkbox"
                    id="yes"
                    name="yes"
                    onChange={handleCheckboxChange}
                />
            </div>
            <p className='number_yes'>Дополнительно</p>
            <div className='doubleSpam'>
                <div className='spam'>
                    <label htmlFor="yes">Бокс для сбора спама и макулатуры</label>
                    <input
                        type="checkbox"
                        id="yes"
                        name="yes"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className='spam'>
                    <label htmlFor="yes">Бокс для сбора батареек</label>
                    <input
                        type="checkbox"
                        id="yes"
                        name="yes"
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>


        </>
    );
}

export default SpamAndBatteries;
