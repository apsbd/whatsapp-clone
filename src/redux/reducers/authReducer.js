import * as types from '../actions/types'
import initialState from './initialState'

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.AUTH_SIGNIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    ...action.user,
                },
            }
        default:
            return state
    }
}
