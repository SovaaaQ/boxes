import React, { useState } from 'react';
import './EntranceForm.css';

const EntranceForm = () => {
  const [numEntrances, setNumEntrances] = useState(1);
  const [entrances, setEntrances] = useState([{ id: 1, numApartments: 0 }]);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        newEntrances.push({ id: i, numApartments: 0 });
      }
      setEntrances(newEntrances);
    } else if (newNumEntrances < entrances.length) {
      setEntrances(entrances.slice(0, newNumEntrances));
    }
  };

  const handleNumApartmentsChange = (event, index) => {
    const newNumApartments = parseInt(event.target.value);
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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='container div_num_entrances'>
        <label className='num_entrances'>
          Количество подъездов
          <input type="number" className='num_entrances-input' value={numEntrances} onChange={handleNumEntrancesChange} />
        </label>
        <button className='button_text_num' onClick={handleButtonClick}>
          Количество квартир в подъездах
          <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" stroke-width="3" />
          </svg>
        </button>
      </div>
      <div className='button_choise'>
        <label htmlFor="yes" className='label_text_num'>Одинаковое количетсво квартир</label>
        <input
          type="checkbox"
          id="yes"
          name="yes"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        {entrances.map((entrance, index) => (
          <div key={entrance.id}>
            <div>
              <div className='quntity_entrance'>
                {entrance.id} подъезд
                <input
                  type="number"
                  className='num_entrances-input'
                  value={entrance.numApartments}
                  onChange={(event) => handleNumApartmentsChange(event, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Количество квартир в подъездах</h2>
            {entrances.map((entrance, index) => (
              <div key={entrance.id}>
                <p>{entrance.id} подъезд: {entrance.numApartments} квартир</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EntranceForm;
