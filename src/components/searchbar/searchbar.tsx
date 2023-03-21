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

    return(
        <div className='Searchbar'>

            <div className='Searchbar-icons'>
                <div className='Searchbar-icons-location'>
                    {currentLocation as string}
                </div>
                <div className='Searchbar-icons-guests'>
                    Guests
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