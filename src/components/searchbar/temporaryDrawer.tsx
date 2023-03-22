import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaceIcon from '@mui/icons-material/Place';
import './temporaryDrawer.css'
import { useDispatch } from 'react-redux';
import { GET_PROPERTIES } from '../../redux/actions/get_properties'
import { CLEAN_PROPERTIES } from "../../redux/actions/clean_filter";
import staysArr from '../properties/stays.json'

const TemporaryDrawer: React.FC = () => {
    
    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
    let placeIcon: JSX.Element = <PlaceIcon/>

    interface state {
        left: any
    }

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

    const handleSubmit = () => {
        if(location.length > 0){
            dispatch({type: GET_PROPERTIES, payload: location})
        } else {
            dispatch({type: CLEAN_PROPERTIES, payload: 'Finland'})
        }
        setLocation('')
    }

  const citiesList = staysArr.map((stay) => stay.city)
  const cleanedCitiesList = citiesList.filter((city, index) => (citiesList.indexOf(city) === index))


    
    const list = (anchor: any) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
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
                  value={location}
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
            <div className="TemporaryDrawer-Input">
                <div>GUESTS</div>
                <input 
                    className="TemporaryDrawer-Input-Guests"
                    type='text'
                    placeholder="Add guests"
                />

            </div>
            <div className="TemporaryDrawer-SearchButton" onClick={handleSubmit}>
                {searchRoundedIcon} Search
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