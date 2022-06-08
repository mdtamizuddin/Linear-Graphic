import React from 'react'
import auth from '../firebase/firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if (user) {
        return (
            children
        )
    }
    else if (loading) {
        return (
            <h1>Loading ....</h1>
        )
    }
    else if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

}

export default RequireAuth