import React, {useState} from 'react';
import './EntranceForm.css';
import ButtonEntrance from '../ButtonEntrance/ButtonEntrance';

const EntranceForm = () => {
  const [numEntrances, setNumEntrances] = useState(1);
  const [entrances, setEntrances] = useState([{id: 1, numApartments: 0}]);
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
        newEntrances.push({id: i, numApartments: 0});
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
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className='container div_num_entrances'>
        <label className='num_entrances'>
          Количество подъездов
          <input type="number" className='num_entrances-input' value={numEntrances}
                 onChange={handleNumEntrancesChange}/>
        </label>
        <div className='dropdown'>
          <button className='dropdown-button' onClick={handleButtonClick}>
            Количество квартир в подъездах
            <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 14.5L22 29.5L7 14.5" stroke="#333333" stroke-width="3"/>
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
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className={`entrance-grid`}>
                  <div>
                    {entrances.filter((x, i) => i < entrances.length / 2).map((entrance, index) => (
                      <div key={entrance.id} className='entrance-item'>
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
                    ))}
                  </div>
                  <div>
                    {entrances.filter((x, i) => i >= entrances.length / 2).map((entrance, index) => (
                      <div key={entrance.id} className='entrance-item'>
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonEntrance numEntrances={numEntrances}/>
    </div>
  );
};

export default EntranceForm;
