import logo from './logo.png';
import './App.css';
import Searchbar from './components/searchbar/searchbar';
import Properties from './components/properties/properties';
import { CLEAN_PROPERTIES } from './redux/actions/clean_filter';
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const cleanFilters = () => {
    dispatch({type: CLEAN_PROPERTIES, payload: {location: 'Finland', adultGuests: 0, childGuests: 0}})
  }

  return (
    <div className="App">
        <div className="App-header">
          <div className='App-logo'>
            <img src={logo} alt="Windbnb" onClick={cleanFilters}></img>
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
