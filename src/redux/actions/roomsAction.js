import * as types from './types'
import { fireStore } from '../../firebase/config'

const loadRoomsSuccess = (rooms) => {
    return {
        type: types.ROOMS_LOADING_SUCCESS,
        rooms,
    }
}

export const setRooms = () => {
    return (dispatch) => {
        return fireStore.collection('rooms').onSnapshot((snap) => {
            let rooms = snap.docs.map((room) => ({
                id: room.id,
                ...room.data(),
            }))

            dispatch(loadRoomsSuccess(rooms))
        })
    }
}
