import Property from './property/property'
import './properties.css'
import stays from './stays.json'

const Properties: React.FC = () => {

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

    return(
        <div className='Properties'>
            {stays.map((stay) => 
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
    )
}

export default Properties