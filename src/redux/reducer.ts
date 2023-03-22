import staysArr from '../components/properties/stays.json'
import { SetProperties, GET_PROPERTIES } from './actions/get_properties'
import { CleanProperties, CLEAN_PROPERTIES } from './actions/clean_filter'

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

export interface RootState {
    stays: Property[],
    currentLocation: string,
    adultGuests: number,
    childGuests: number
}

const initialState: RootState = {
    stays: staysArr,
    currentLocation: 'Finland',
    adultGuests: 0,
    childGuests: 0
}

const reducer = (state = initialState, action: SetProperties | CleanProperties): RootState => {
    switch(action.type){
        case GET_PROPERTIES:
        return {
            ...state,
            stays: staysArr.filter((stay: any) => stay.city === action.payload.location),
            currentLocation: action.payload.location[0].toUpperCase() + action.payload.location.slice(1),
            adultGuests: action.payload.adultGuests,
            childGuests: action.payload.childGuests
        }
        case CLEAN_PROPERTIES:
            return {
                ...state,
                stays: staysArr,
                currentLocation: action.payload.location,
                adultGuests: action.payload.adultGuests,
                childGuests: action.payload.childGuests
            }
        default:
        return state;
    }
}

export default reducer;