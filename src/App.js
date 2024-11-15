import './App.css';
import EntranceForm from './component/EntranceForm/EntranceForm';
import SizeMailbox from './component/SizeMailbox';
import ChoiceModel from './component/ChoiceModel';
import SpamAndBatteries from './component/SpamAndBatteries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title_1'>Конструктор почтовых ящиков</h1>
        <h2 className='title_2'>Выберите модель почтового ящика</h2>
      </header>
      <body>
        <EntranceForm/>
        <SizeMailbox/>
        <ChoiceModel/>
        <SpamAndBatteries/>
      </body>
    </div>
  );
}

export default App;
