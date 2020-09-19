import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import RoomList from './RoomList'

import './SideBar.css'

function SideBar({ user }) {
    return (
        <div className='sidebar'>
            <Header src={user.photoUrl} />
            <Search />
            <RoomList />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(SideBar)
