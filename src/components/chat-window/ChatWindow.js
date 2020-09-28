import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setChats } from '../../redux/actions/chatsAction'
import { addNewRoom } from '../../redux/actions/roomsAction'

import Header from './Header'
import ChatList from './ChatList'
import Footer from './Footer'

import './ChatWindow.css'

function ChatWindow({ room, user, chats, setChats, addNewRoom }) {
    useEffect(() => {
        const unsubscribe = setChats()
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className='chatWindow'>
            <div className='chatWindow__background'></div>
            {room.id && <Header room={room} />}
            <ChatList
                roomId={room.id}
                user={user}
                chats={chats}
                addNewRoom={addNewRoom}
            />
            {room.id && <Footer />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        chats: state.chats,
        room: state.selectedRoom,
    }
}

const mapDispatchToProps = {
    setChats,
    addNewRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
