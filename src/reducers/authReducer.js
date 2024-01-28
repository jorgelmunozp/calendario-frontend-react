import { types } from 'c:/Users/JORGE MUÑOZ/Downloads/MERN-Calendar-Front-2.0.0/MERN-Calendar-Front-2.0.0/src/types/types';

const initialState = {
    checking: true,
    // uid: null,
    // name: null
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }


        default:
            return state;
    }

}


