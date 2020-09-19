import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setRooms } from '../../redux/actions/roomsAction'
import { setSelectedRoom } from '../../redux/actions/selectedRoomActions'
import RoomListItem from './RoomListItem'

function RoomList({ rooms, setRooms, setSelectedRoom }) {
    useEffect(() => {
        let unsubscribe = setRooms()

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className='sidebar__roomList'>
            {rooms.map((room) => (
                <RoomListItem
                    room={room}
                    key={room.id}
                    handleClick={() => {
                        setSelectedRoom(room)
                    }}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    }
}

const mapDispatchToProps = {
    setRooms,
    setSelectedRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
