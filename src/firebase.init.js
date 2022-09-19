// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_vgNXBrb8_LJ7_y5mEhlgOAcSDQqBcU8",
    authDomain: "international-provider.firebaseapp.com",
    projectId: "international-provider",
    storageBucket: "international-provider.appspot.com",
    messagingSenderId: "533157844512",
    appId: "1:533157844512:web:be20a98fb73b7c1f898e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;