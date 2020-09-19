import { combineReducers } from 'redux'

import auth from './authReducer'
import rooms from './roomsReducer'
import chats from './chatsReducer'
import selectedRoom from './selectedRoomReducer'

const rootReducer = combineReducers({
    auth,
    rooms,
    chats,
    selectedRoom,
})

export default rootReducer
