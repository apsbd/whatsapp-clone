import React from 'react'
import { Avatar } from '@material-ui/core'

import MessageTailIn from './MessageTailIn'
import MessageTailOut from './MessageTailOut'

export default function Message({ user, message, incomming }) {
    const className = incomming ? 'message message__in' : 'message message__out'
    const avatarEl = (
        <Avatar src={user.photoUrl} className='message__avatar'></Avatar>
    )
    const messageEl = <div className='message__box'>{message}</div>
    const nameEl = (
        <div className='message__sender'>
            {user.name} {message.createdAt}
        </div>
    )

    console.log(message)

    return (
        <div className={className}>
            {incomming ? (
                <>
                    {avatarEl}
                    <div className='message__wrapper'>
                        {nameEl}
                        <div className='message__content'>
                            <MessageTailIn />
                            {messageEl}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='message__wrapper'>
                        {nameEl}
                        <div className='message__content'>
                            {messageEl}
                            <MessageTailOut />
                        </div>
                    </div>
                    {avatarEl}
                </>
            )}
        </div>
    )
}
