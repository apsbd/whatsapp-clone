import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setRooms, addNewRoom } from '../../redux/actions/roomsAction'
import { setSelectedRoom } from '../../redux/actions/selectedRoomActions'
import RoomListItem from './RoomListItem'

function RoomList({ rooms, setRooms, setSelectedRoom, addNewRoom }) {
    useEffect(() => {
        let unsubscribe = setRooms()

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className='sidebar__roomList'>
            <RoomListItem addNewRoom addNewRoom={addNewRoom} />
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
    addNewRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
