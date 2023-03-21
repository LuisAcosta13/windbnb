import logo from './logo.png';
import './App.css';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
        <div  className="App-header">
          <div className='App-logo'>
            <img src={logo} alt="Windbnb"></img>
          </div>
          <div>
            <Searchbar/>
          </div>
        </div>
        <div>
          Home
        </div>
    </div>
  );
}

export default App;
