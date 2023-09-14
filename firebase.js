import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyANidNV1siXUcyxMp7ByPR0RRnpavDl_lM",
    authDomain: "faceboo-2-yt.firebaseapp.com",
    projectId: "faceboo-2-yt",
    storageBucket: "faceboo-2-yt.appspot.com",
    messagingSenderId: "5485243688",
    appId: "1:5485243688:web:3de0c75c126307bb83341d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, "gs://facebook-2-yt.appspot.com");


export {db, storage}; 




