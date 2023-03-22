import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaceIcon from '@mui/icons-material/Place';
import './temporaryDrawer.css'
import { useDispatch, useSelector } from 'react-redux';
import { GET_PROPERTIES } from '../../redux/actions/get_properties'
import { CLEAN_PROPERTIES } from "../../redux/actions/clean_filter";
import staysArr from '../properties/stays.json'
import { RootState } from '../../redux/store'

const TemporaryDrawer: React.FC = () => {
  
  let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
  let placeIcon: JSX.Element = <PlaceIcon/>

  const currentLocation = useSelector<RootState, string>((state) => state.currentLocation)
  const adultsGlobalState = useSelector<RootState, number>((state) => state.adultGuests as any)
  const childGlobalState = useSelector<RootState, number>((state) => state.childGuests as any)

  interface state {
    left: any
  }

  const citiesList = staysArr.map((stay) => stay.city)
  const cleanedCitiesList = citiesList.filter((city, index) => (citiesList.indexOf(city) === index))

  const [state, setState] = useState({
    left: false,
  });
  
  const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
    
  const dispatch = useDispatch()
  const [location, setLocation] = useState('')
  const [adultGuests, setAdultGuests] = useState(0)
  const [childGuests, setChildGuests] = useState(0)

  const handleSubmit = (anchor: any) => {
    if(location.length > 0){
      dispatch({type: GET_PROPERTIES, payload: {location: location, adultGuests: adultGuests, childGuests: childGuests}})
    } else {
      dispatch({type: CLEAN_PROPERTIES, payload: {location: 'Finland', adultGuests: adultGuests, childGuests: childGuests}})
    }
    setLocation('')
    setAdultGuests(0)
    setChildGuests(0)
  }


  const addGuest = (person: string) => {
    person === 'adult' && setAdultGuests(adultGuests + 1)
    person === 'child' && setChildGuests(childGuests + 1)
  }

  const removeGuest = (person: string) => {
    person === 'adult' && adultGuests > 0 && setAdultGuests(adultGuests - 1)
    person === 'child' && childGuests > 0 && setChildGuests(childGuests - 1)
  }
    
  const list = (anchor: any) => (
    <Box
    className='TemporaryDrawer'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, paddingBottom: '10px' }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='TemporaryDrawer-inputs'>
          <div> 
            <div className="TemporaryDrawer-Input">
              <div>LOCATION</div>
          
              <input
                className="TemporaryDrawer-Input-Location"
                type='text'
                placeholder="Add location"
                autoComplete='off'
                disabled
                value={location ? location : currentLocation}
                onChange={e => setLocation(e.target.value)}
              />
            </div>                
            <div className="TemporaryDraw-CitiesList">
              {cleanedCitiesList.map(city => 
                <p className="TemporaryDraw-City" onClick={() => setLocation(city)}>
                  {placeIcon} {city}
                </p>)
              }
            </div>
          </div>
          <div>
            <div className="TemporaryDrawer-Input">
              <div>GUESTS</div>
              <input 
                  className="TemporaryDrawer-Input-Guests"
                  type='text'
                  placeholder="Add guests"
                  value={adultGuests + childGuests > 0 ? adultGuests + childGuests : adultsGlobalState + childGlobalState}
                  disabled
              />
            </div>
            <div className="TemporaryDraw-Guests-Options">
              <div>
                <p className="TemporaryDraw-Guests-Text-1">Adults</p>
                <p className="TemporaryDraw-Guests-Text-2">Ages 13 or above</p>
                <div className="TemporaryDraw-Guests-Buttons">
                  <button onClick={() => removeGuest('adult')} className="TemporaryDraw-Guests-Button-Minus">-</button>
                  <span className="TemporaryDraw-Guests-Number">{adultGuests > 0 ? adultGuests : adultsGlobalState}</span>
                  <button onClick={() => addGuest('adult')} className="TemporaryDraw-Guests-Button-Plus">+</button>
                </div>
              </div>
              <div>
                <p className="TemporaryDraw-Guests-Text-1">Children</p>
                <p className="TemporaryDraw-Guests-Text-2">Ages 2-12</p>
                <div className="TemporaryDraw-Guests-Buttons">
                  <button id='child' onClick={() => removeGuest('child')} className="TemporaryDraw-Guests-Button-Minus">-</button>
                  <span className="TemporaryDraw-Guests-Number">{childGuests > 0 ? childGuests : childGlobalState}</span>
                  <button id='child' onClick={() => addGuest('child')} className="TemporaryDraw-Guests-Button-Plus">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="TemporaryDrawer-SearchButton" onClick={handleSubmit}>
              <>{searchRoundedIcon} Search </>
          </div>
      </div>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor: any) => (
        <div key={anchor}>
            
          <div className='menuIcon' onClick={toggleDrawer(anchor, true)}>{searchRoundedIcon}</div>
          <Drawer
            anchor={anchor}
            open={state[anchor as keyof state]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}

export default TemporaryDrawer