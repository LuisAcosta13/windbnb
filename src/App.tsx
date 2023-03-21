import logo from './logo.png';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Properties from './components/properties/properties';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <div className='App-logo'>
            <img src={logo} alt="Windbnb"></img>
          </div>
          <div className='App-Searchbar'>
            <Searchbar/>
          </div>
        </div>
        <div className='App-Properties'>
          <Properties/>
        </div>
    </div>
  );
}

export default App;
