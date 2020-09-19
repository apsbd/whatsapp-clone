import React from 'react'
import { Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { MoreVert } from '@material-ui/icons'

export default function Header({ room }) {
    return (
        <header className='chatWindow__header'>
            <div className='chatWindow__headerLeft'>
                <div className='chatWindow__headerLeft__avatar'>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/human/${room.id}.svg`}
                    />
                </div>

                <div className='chatWindow__headerLeft__text'>
                    <div className='chatWindow__headerLeft__textHeader'>
                        <span className='chatWindow__headerLeft__textHeaderName'>
                            {room.name}
                        </span>
                    </div>
                </div>
            </div>

            <div className='chatWindow__headerRight'>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </header>
    )
}
