import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './property.css'

interface Props {
    city: string,
    country: string,
    superHost: boolean,
    title: string,
    rating: number,
    maxGuests: number,
    type: string,
    beds: any,
    photo: string
}

const Property: React.FC<Props> = ({city, country, superHost, title, rating, maxGuests, type, beds, photo}) => {
    
    let starRateRoundedIcon: JSX.Element = <StarRateRoundedIcon/>

    return(
        <div className='Property'>
            <div>
                <img src={photo} alt='Photo' className='Property-photo'/>
            </div>
            <div className='Property-header'>
                {superHost && <span className='Property-superHost'>SUPER HOST</span>}
                <span>{type}{beds && <span>. {beds} {beds === 1 ? 'bed' : 'beds'}</span>}</span>
                
                <span className='Property-rating'>
                    <span className='Property-ratingIcon'>{starRateRoundedIcon} </span>
                    <span>{rating}</span>
                </span>
            </div>
            <div className='Property-title'>
                {title}
            </div>
        </div>
    )
}

export default Property