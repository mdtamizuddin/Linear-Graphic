import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)

    if (user) {
        return children
    }
    else if (loading) {
        return <Loading />
    }
}

export default RequireAuth