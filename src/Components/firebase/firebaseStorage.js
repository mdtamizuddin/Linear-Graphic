
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBZeknWov-e4YAhk-f8Acb7aeODVxCTCVk",
    authDomain: "linear-graphic.firebaseapp.com",
    projectId: "linear-graphic",
    storageBucket: "linear-graphic.appspot.com",
    messagingSenderId: "344463603170",
    appId: "1:344463603170:web:c63693dfb8f876734935bb",
    measurementId: "G-67445V46XC"
};


const app = initializeApp(firebaseConfig);

const storage = getStorage(app)



export default storage
