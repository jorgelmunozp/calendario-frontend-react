import { types } from "c:/Users/JORGE MUÑOZ/Downloads/MERN-Calendar-Front-2.0.0/MERN-Calendar-Front-2.0.0/src/types/types";

const initialState = {
    modalOpen: false,
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }


}