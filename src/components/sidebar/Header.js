import React from 'react'
import { Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { DonutLarge, Chat, MoreVert } from '@material-ui/icons'

export default function Header({ src }) {
    return (
        <header className='sidebar__header'>
            <Avatar src={src} />

            <div className='side__headerActions'>
                <IconButton>
                    <DonutLarge />
                </IconButton>

                <IconButton>
                    <Chat />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </header>
    )
}
