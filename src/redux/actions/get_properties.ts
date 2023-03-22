export const GET_PROPERTIES = 'GET_PROPERTIES'

export interface SetProperties {
    type: typeof GET_PROPERTIES;
    payload: {
        location: string,
        adultGuests: number,
        childGuests: number
    }
}

export type InputActionTypes = SetProperties