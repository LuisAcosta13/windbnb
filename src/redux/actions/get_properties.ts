export const GET_PROPERTIES = 'GET_PROPERTIES'

export interface SetProperties {
    type: typeof GET_PROPERTIES;
    payload: string
}

export type InputActionTypes = SetProperties