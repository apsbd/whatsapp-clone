import * as types from '../actions/types'
import initialState from './initialState'

export default function chatsReducer(state = initialState.chats, action) {
    switch (action.type) {
        case types.CHATS_LOADING_SUCCESS:
            return action.chats
        default:
            return state
    }
}
