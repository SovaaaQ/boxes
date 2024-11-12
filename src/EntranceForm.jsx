import React, { useState } from 'react';
import './styles.css';

const EntranceForm = () => {
  const [numEntrances, setNumEntrances] = useState(1);
  const [entrances, setEntrances] = useState([{ id: 1, numApartments: 0 }]);

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
    setEntrances(newEntrances);
  };

  return (
    <div>
      <label>
        Укажите количество подъездов
        <input type="number" value={numEntrances} onChange={handleNumEntrancesChange} />
      </label>
      {entrances.map((entrance, index) => (
        <div key={entrance.id}>
          <label>
            Укажите количество квартир в {entrance.id} подъезде
            <input type="number" value={entrance.numApartments} onChange={(event) => handleNumApartmentsChange(event, index)} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default EntranceForm;
