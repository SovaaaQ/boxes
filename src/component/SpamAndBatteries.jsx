
import React, { useState } from 'react';

const SpamAndBatteries = () => {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
        <div>
            <label htmlFor="yes">Вам нужен бокс для сбора спама и макулатуры? Да</label>
                <input 
                    type="checkbox" 
                    id="yes" 
                    name="yes" 
                    onChange={handleCheckboxChange} 
                />
        </div>
        <div>
            <label htmlFor="yes">Вам нужен бокс для сбора батареек? Да</label>
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
