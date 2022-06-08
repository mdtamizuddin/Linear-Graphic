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
        <button className="flex items-center  w-full justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div className="px-4 py-2">
               <p className='loading w-5 text-red-500'>d</p>
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
        </button>
    )
}

export default Social