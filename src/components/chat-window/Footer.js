import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { sendMessage } from '../../redux/actions/chatsAction'

function Footer({ user, sendMessage }) {
    const [message, setMessage] = useState('')
    const { roomId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()

        sendMessage({
            message,
            user,
            roomId,
        })

        setMessage('')
    }

    return (
        <div className='chatWindow__footer'>
            <label className='chatWindow__footerLabel'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='chatWindow__footerInput'
                        placeholder='Type a message'
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                    />
                </form>
            </label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    sendMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
