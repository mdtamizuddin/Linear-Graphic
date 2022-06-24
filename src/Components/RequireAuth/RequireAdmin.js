import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
import Loading from '../Loading/Loading'

const RequireAdmin = ({ children }) => {
    const [fatching, setLoading] = useState(false)
    const [user, loading] = useAuthState(auth)
    const [data, setData] = useState({ role: 'am-public' })

    useEffect(() => {
        if (user) {
            setLoading(true)
            const url = `http://localhost:5000/users/${user?.email}`
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setLoading(false)
                    setData(json)
                })
        }
    }, [user])

    if (data?.role === "admin") {
        return children
    }
    else if (loading || fatching) {
        return <Loading />
    }
}

export default RequireAdmin