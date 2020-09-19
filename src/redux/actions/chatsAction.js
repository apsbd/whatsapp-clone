import * as types from './types'
import { fireStore, timestamp } from '../../firebase/config'

const chatLoadingSuccess = (chats) => {
    return {
        type: types.CHATS_LOADING_SUCCESS,
        chats,
    }
}

export const sendMessage = (message) => {
    return (dispatch) => {
        dispatch(() => {
            fireStore.collection('chats').add({
                ...message,
                createdAt: timestamp(),
            })
        })
    }
}

export const setChats = () => {
    return (dispatch) => {
        return fireStore
            .collection('chats')
            .orderBy('createdAt', 'asc')
            .onSnapshot((snap) => {
                let chats = snap.docs.map((chat) => ({
                    id: chat.id,
                    ...chat.data(),
                }))

                dispatch(chatLoadingSuccess(chats))
            })
    }
}
