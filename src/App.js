import './App.css';
import EntranceForm from './component/EntranceForm/EntranceForm';
import SizeMailbox from './component/SizeMailbox';
import ChoiceModel from './component/ChoiceModel/ChoiceModel';
import SpamAndBatteries from './component/SpamAndBatteries';

function App() {
  return (
    <div className="App container section">
      <header className="App-header">
        <h1 className='title_1'>Конструктор почтовых ящиков</h1>
        
      </header>
      <body>
        <ChoiceModel/>
        <EntranceForm/>
        <SizeMailbox/>
        <SpamAndBatteries/>
      </body>
    </div>
  );
}

export default App;
