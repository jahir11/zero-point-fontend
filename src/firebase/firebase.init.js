import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializationApp = () => {
    initializeApp(firebaseConfig)
}

export default firebaseInitializationApp;