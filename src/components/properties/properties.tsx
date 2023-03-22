import Property from './property/property'
import './properties.css'
import { useSelector } from 'react-redux'
// import stays from './stays.json'
import { RootState } from '../../redux/store'

interface Property {
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

const Properties: React.FC = () => {

    const stays = useSelector<RootState, Property[]>((state) => state.stays)
    const currentLocation = useSelector<RootState>((state) => state.currentLocation)
    const adultsGlobalState = useSelector<RootState, number>((state) => state.adultGuests as any)
    const childGlobalState = useSelector<RootState, number>((state) => state.childGuests as any)

    const staysByGuests = () => {
        return stays.filter((stay) => stay.maxGuests >= adultsGlobalState + childGlobalState)
    }

    return(
        staysByGuests().length > 0 ? <div>
            <div className='Properties-header'>
                <h2>
                    Stays in {currentLocation as string}
                </h2>
                <p className='Properties-count'>
                    {staysByGuests().length} stays
                </p>
            </div>
            <div className='Properties'>
                {staysByGuests().map((stay: any) => 
                    <Property 
                        city={stay.city} 
                        country={stay.country} 
                        superHost={stay.superHost}
                        title={stay.title}
                        rating={stay.rating}
                        maxGuests={stay.maxGuests}
                        type={stay.type}
                        beds={stay.beds}
                        photo={stay.photo}
                    />
                )}
            </div>
        </div> : <div>No results</div>
    )
}

export default Properties