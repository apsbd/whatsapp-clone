import * as types from './types'
import { fireStore, timestamp } from '../../firebase/config'

const loadRoomsSuccess = (rooms) => {
    return {
        type: types.ROOMS_LOADING_SUCCESS,
        rooms,
    }
}

export const addNewRoom = () => {
    return (dispatch) => {
        const name = prompt('Please, enter a room name')
        if (name) {
            fireStore.collection('rooms').add({
                name,
                createdAt: timestamp(),
            })
        }
    }
}

export const setRooms = () => {
    return (dispatch) => {
        return fireStore
            .collection('rooms')
            .orderBy('createdAt', 'asc')
            .onSnapshot((snap) => {
                let rooms = snap.docs.map((room) => ({
                    id: room.id,
                    ...room.data(),
                }))

                dispatch(loadRoomsSuccess(rooms))
            })
    }
}
