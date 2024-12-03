import './App.css';
import EntranceForm from './component/EntranceForm/EntranceForm';
import SizeMailbox from './component/SizeMailbox';
import ChoiceModel from './component/ChoiceModel/ChoiceModel';
import SpamAndBatteries from './component/SpamAndBAtteries/SpamAndBatteries';
import ColorChoice from './component/ColorChoice/ColorChoice';

function App() {
  return (
    <div className="App container section">
      <header className="App-header">
        <h1 className='title_1'>Конструктор почтовых ящиков</h1>
        
      </header>
      <body>
        <ChoiceModel/>
        <EntranceForm/>
        <div className='div_leftAndRight'>
          <div className='div_box'>
            1
          </div>
          <div>
            <SizeMailbox/>
            <ColorChoice/>
            <SpamAndBatteries/>
          </div>
        </div>
      </body>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
