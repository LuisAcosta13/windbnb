export const CLEAN_PROPERTIES = 'CLEAN_PROPERTIES'

export interface CleanProperties {
    type: typeof CLEAN_PROPERTIES;
    payload: {
        location: string,
        adultGuests: number,
        childGuests: number
    }
}

export type InputActionTypes = CleanProperties