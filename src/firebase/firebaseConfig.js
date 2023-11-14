import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzgkOzZA53xqDj7J_PhAkaiGjNRNPnwME",
    authDomain: "rashbi-a2b01.firebaseapp.com",
    projectId: "rashbi-a2b01",
    storageBucket: "rashbi-a2b01.appspot.com",
    messagingSenderId: "883565934112",
    appId: "1:883565934112:web:8cdd49df79e63b0c0dee45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);


export { db, storage };