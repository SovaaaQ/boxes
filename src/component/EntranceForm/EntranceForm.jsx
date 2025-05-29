import React, { useState } from 'react';
import './EntranceForm.css';
import ButtonEntrance from '../ButtonEntrance/ButtonEntrance';

const EntranceForm = () => {
  const [numEntrances, setNumEntrances] = useState(1);
  const [entrances, setEntrances] = useState([{ id: 1, numApartments: '' }]);
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleNumEntrancesChange = (event) => {
    const newNumEntrances = parseInt(event.target.value);
    setNumEntrances(newNumEntrances);

    if (newNumEntrances > entrances.length) {
      const newEntrances = [...entrances];
      for (let i = entrances.length + 1; i <= newNumEntrances; i++) {
        newEntrances.push({ id: i, numApartments: '' });
      }
      setEntrances(newEntrances);
    } else if (newNumEntrances < entrances.length) {
      setEntrances(entrances.slice(0, newNumEntrances));
    }
  };

  const handleNumApartmentsChange = (event, index) => {
    let newNumApartments = event.target.value;

    // Remove leading zeros unless the value is "0"
    if (newNumApartments.startsWith('0') && newNumApartments.length > 1) {
      newNumApartments = newNumApartments.substring(1);
    }

    const newEntrances = [...entrances];
    newEntrances[index].numApartments = newNumApartments;

    if (isChecked) {
      newEntrances.forEach(entrance => {
        entrance.numApartments = newNumApartments;
      });
    }

    setEntrances(newEntrances);
  };

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Helper to render entrance inputs
  const renderEntranceInputs = (entrancesSlice, offset = 0) =>
    entrancesSlice.map((entrance, index) => (
      <div key={entrance.id} className='entrance-item'>
        <div className='quntity_entrance'>
          {entrance.id} подъезд
          <input
            placeholder='0'
            type="number"
            className='num_entrances-input'
            min="0"
            step="1"
            value={entrance.numApartments}
            aria-label={`Количество квартир для ${entrance.id} подъезда`}
            autoFocus={index === 0 && offset === 0 && isDropdownOpen}
            onBlur={e => {
              if (e.target.value === '' || Number(e.target.value) < 0) {
                handleNumApartmentsChange({ target: { value: '0' } }, index + offset);
              }
            }}
            onChange={event => handleNumApartmentsChange(event, index + offset)}
          />
        </div>
      </div>
    ));

  return (
    <div>
      <div className='container div_num_entrances'>
        <label className='num_entrances'>
          Количество подъездов
          <input type="number" className='num_entrances-input' value={numEntrances}
            onChange={handleNumEntrancesChange} />
        </label>
        <div className='dropdown'>
          <button
            className='dropdown-button'
            onClick={handleButtonClick}
            aria-label="Открыть выбор количества квартир в подъездах"
          >
            Количество квартир в подъездах
            <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" stroke-width="3" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className='dropdown-content'>
              <div className='button_choise'>
                <div className='label_apartment'>
                  <label htmlFor="yes" className='label_text_num'>Одинаковое количество квартир</label>
                  <input
                    type="checkbox"
                    id="yes"
                    name="yes"
                    checked={isChecked}
                    aria-label="Одинаковое количество квартир во всех подъездах"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className={`entrance-grid`}>
                  <div>
                    {renderEntranceInputs(entrances.filter((x, i) => i < Math.ceil(entrances.length / 2)))}
                  </div>
                  <div>
                    {renderEntranceInputs(entrances.filter((x, i) => i >= Math.ceil(entrances.length / 2)), Math.ceil(entrances.length / 2))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonEntrance numEntrances={numEntrances} />
    </div>
  );
};

export default EntranceForm;
