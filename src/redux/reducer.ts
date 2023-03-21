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
    currentLocation: string
}

const initialState: RootState = {
    stays: staysArr,
    currentLocation: 'Finland'
}

const reducer = (state = initialState, action: SetProperties | CleanProperties): RootState => {
    switch(action.type){
        case GET_PROPERTIES:
        return {
            ...state,
            stays: staysArr.filter((stay: any) => stay.city === action.payload),
            currentLocation: action.payload
        }
        case CLEAN_PROPERTIES:
            return {
                ...state,
                stays: staysArr,
                currentLocation: action.payload
            }
        default:
        return state;
    }
}

export default reducer;