import React from 'react'

export default function Info({ addNewRoom }) {
    return (
        <div className='chatWindow__info'>
            <div className='chatWindow__infoWrapper'>
                <h1>Select a room from left</h1>
                <span>or</span>
                <button onClick={addNewRoom}>Create New Room</button>
                <span>to start chat</span>
            </div>
        </div>
    )
}
