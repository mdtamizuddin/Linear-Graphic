import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.init';

const Social = () => {
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
       
    )
}

export default Social