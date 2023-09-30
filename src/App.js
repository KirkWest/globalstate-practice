import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext from './context/ConnectionContext';

function App() {



  return (
    <div className="App">

      <ConnectionContext.Provider>
        <h1>Connection URL goes here</h1>
      </ConnectionContext.Provider>

      <ApiTester />
    </div>
  );
}

export default App;
