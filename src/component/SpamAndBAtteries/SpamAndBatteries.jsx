import './SpamAndBatteries';

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
        <p>Дополнительно</p>
        <div>
            <label htmlFor="yes">Бокс для сбора спама и макулатуры</label>
                <input 
                    type="checkbox" 
                    id="yes" 
                    name="yes" 
                    onChange={handleCheckboxChange} 
                />
        </div>
        <div>
            <label htmlFor="yes">Бокс для сбора батареек</label>
            <input 
                type="checkbox" 
                id="yes" 
                name="yes" 
                onChange={handleCheckboxChange} 
            />
        </div>
        </>
    );
}

export default SpamAndBatteries;
