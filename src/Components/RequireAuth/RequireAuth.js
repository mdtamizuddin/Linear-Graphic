import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../firebase/firebase.init'
import NotFound from '../NotFound/NotFound'
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