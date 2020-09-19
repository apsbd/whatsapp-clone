import * as types from '../actions/types'
import initialState from './initialState'

export default function roomsReducer(state = initialState.rooms, action) {
    switch (action.type) {
        case types.ROOMS_LOADING_SUCCESS:
            return action.rooms
        default:
            return state
    }
}
