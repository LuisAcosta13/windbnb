import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './searchbar.css'
import TemporaryDrawer from './temporaryDrawer';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';

const Searchbar: React.FC = () => {

    interface Location {
        currentLocation: string
    }

    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>
    const currentLocation = useSelector<RootState>((state) => state.currentLocation)
    const adultsGlobalState = useSelector<RootState, number>((state) => state.adultGuests as any)
    const childGlobalState = useSelector<RootState, number>((state) => state.childGuests as any)

    return(
        <div className='Searchbar'>

            <div className='Searchbar-icons'>
                <div className='Searchbar-icons-location'>
                    {currentLocation as string}
                </div>
                <div className='Searchbar-icons-guests'>
                    
                    {adultsGlobalState + childGlobalState === 0 ? 'Add guests' 
                        : 
                        adultsGlobalState + childGlobalState > 1 ? 
                        `${adultsGlobalState + childGlobalState} guests` 
                        : 
                        `${adultsGlobalState + childGlobalState} guest`
                    }
                </div>
                <div className='Searchbar-icons-icon'>
                    {/* {searchRoundedIcon} */}
                    <TemporaryDrawer/>
                </div>
            </div>
        </div>
    )
}

export default Searchbar