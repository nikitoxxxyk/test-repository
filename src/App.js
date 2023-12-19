import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Никиты Купрысь";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}  
          feat
          doc
          chore
      </header>
    </div>
  );
}

export default App;
