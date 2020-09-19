import React from 'react'
import { SearchRounded } from '@material-ui/icons'

export default function Search() {
    return (
        <div className='sidebar__search'>
            <label className='sidebar__searchLabel'>
                <SearchRounded />

                <input
                    className='sidebar__searchInput'
                    placeholder='Search or start new chat'
                />
            </label>
        </div>
    )
}
