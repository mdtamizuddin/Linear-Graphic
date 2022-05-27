import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.init';

const Social = () => {
    const [loading, setLoading] = useState(false)
    const signin = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

            }).catch((error) => {
                const errorCode = error.code;

            });
    }

    return (

        <>
            <button button className="flex items-center  w-full justify-center mt-4 border loading" >
                
            </button >
        </>

    )
}

export default Social