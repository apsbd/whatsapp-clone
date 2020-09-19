import React from 'react'

import Info from './Info'
import Message from './Message'

export default function ChatList({ roomId, user, chats }) {
    // filter all chats
    chats = chats.filter((chat) => chat.roomId === roomId)

    return (
        <div className='chatWindow__content'>
            {roomId ? (
                <>
                    <div className='chatWindow__start'></div>
                    {chats.map((chat) => (
                        <Message
                            user={chat.user}
                            message={chat.message}
                            key={chat.id}
                            incomming={chat.user.uid !== user.uid}
                        />
                    ))}
                </>
            ) : (
                <Info />
            )}
        </div>
    )
}
