import logo from './logo.svg';
import './App.css';
const greet ="hello everyone";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>{greet}</h1>
       
      </header>
    </div>
  );
}

export default App;
