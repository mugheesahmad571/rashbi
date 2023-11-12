import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAzgkOzZA53xqDj7J_PhAkaiGjNRNPnwME",
    authDomain: "rashbi-a2b01.firebaseapp.com",
    projectId: "rashbi-a2b01",
    storageBucket: "rashbi-a2b01.appspot.com",
    messagingSenderId: "883565934112",
    appId: "1:883565934112:web:8cdd49df79e63b0c0dee45"
};

const app = initializeApp(firebaseConfig);

export { app };