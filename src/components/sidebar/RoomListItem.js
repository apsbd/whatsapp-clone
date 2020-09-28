import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

import './RoomListItem.css'

export default function RoomListItem({ addNewRoom, room, handleClick }) {
    return addNewRoom ? (
        <div className='roomListItem' onClick={addNewRoom}>
            <h3>Add New Room</h3>
        </div>
    ) : (
        <NavLink
            to={`/app/rooms/${room.id}`}
            className='roomListItem'
            onClick={handleClick}>
            <div className='roomListItem__avatar'>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${room.id}.svg`}
                />
            </div>

            <div className='roomListItem__text'>
                <div className='roomListItem__textHeader'>
                    <span className='roomListItem__textHeaderName'>
                        {room.name}
                    </span>
                </div>
                <span className='roomListItem__textLatestChat'>
                    {room.lastMessage}
                </span>
            </div>
        </NavLink>
    )
}
