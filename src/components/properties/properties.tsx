import Property from './property/property'
import './properties.css'
import { useSelector } from 'react-redux'
// import stays from './stays.json'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'

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

interface Location {
    currentLocation: string
}

const Properties: React.FC = () => {

    const stays = useSelector<RootState, Property[]>((state) => state.stays)

    const currentLocation = useSelector<RootState>((state) => state.currentLocation)

    return(
        <div>
            <div className='Properties-header'>
                <h2>
                    Stays in {currentLocation as string}
                </h2>
                <p className='Properties-count'>
                    {stays.length} stays
                </p>
            </div>
            <div className='Properties'>
                {stays.map((stay: any) => 
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
        </div>
    )
}

export default Properties