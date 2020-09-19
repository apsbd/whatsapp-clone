import React from 'react'

import SideBar from '../components/sidebar/SideBar'
import ChatWindow from '../components/chat-window/ChatWindow'

import './Chat.css'

export default function Chat({ user }) {
    return (
        <div className='chat__container'>
            <SideBar />
            <ChatWindow />
        </div>
    )
}
