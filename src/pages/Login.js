import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signin } from '../redux/actions/authActions'
import './Login.css'

function Login({ signin }) {
    const history = useHistory()

    const handleClick = () => {
        signin().then(() => {
            history.push('/app')
        })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <p className='login__welcomeMessage'>Login to WhatsApp</p>
                <button className='login__button' onClick={handleClick}>
                    SIGNIN WITH GOOGLE
                </button>
            </div>
        </div>
    )
}

let mapDispatchToProps = {
    signin,
}

export default connect(null, mapDispatchToProps)(Login)
