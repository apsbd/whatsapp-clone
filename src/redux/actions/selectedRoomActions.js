import * as types from './types'

export function setSelectedRoom(room) {
    return (dispatch) => {
        dispatch({
            type: types.ROOM_SELECTED,
            room,
        })
    }
}
