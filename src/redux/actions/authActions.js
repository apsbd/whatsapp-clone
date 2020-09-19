import * as types from '../actions/types'
import { auth, provider } from '../../firebase/config'

const userSigninSuccess = (user) => {
    return {
        type: types.AUTH_SIGNIN_SUCCESS,
        user,
    }
}

export const signin = () => {
    return (dispatch) => {
        return auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(
                userSigninSuccess({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                    emailVerified: user.emailVerified,
                })
            )
        })
    }
}
