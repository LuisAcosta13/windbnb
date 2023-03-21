import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './searchbar.css'

const Searchbar: React.FC = () => {

    let searchRoundedIcon: JSX.Element = <SearchRoundedIcon/>

    return(
        <div className='Searchbar'>

            <div className='Searchbar-icons'>
                <div className='Searchbar-icons-location'>
                    Location
                </div>
                <div className='Searchbar-icons-guests'>
                    Guests
                </div>
                <div className='Searchbar-icons-icon'>
                    {searchRoundedIcon}
                </div>
            </div>

            {/* <div className='Searchbar-inputs'>
                <div>
                    <input type='text'
                        placeholder="Add location"
                    />
                </div>
                <div>
                    <input type='text'
                        placeholder="Add guests"
                    />
                </div>
            </div>
            <div>
                <div>
                    {searchRoundedIcon} Search
                </div>
            </div> */}
        </div>
    )
}

export default Searchbar