import * as types from '../actions/types'
import initialState from './initialState'

export default function selectedRoomReducer(
    state = initialState.selectedRoom,
    action
) {
    switch (action.type) {
        case types.ROOM_SELECTED:
            return action.room
        default:
            return state
    }
}
