import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyC7apP84NTUCbrBIhFbRVikfMPush7jFTE",

  authDomain: "guru-fruit-shop.firebaseapp.com",

  projectId: "guru-fruit-shop",

  storageBucket: "guru-fruit-shop.firebasestorage.app",

  messagingSenderId: "676907983131",

  appId: "1:676907983131:web:28c30a23e29037ffa773be",

  measurementId: "G-SS3FED6KPK"
};

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);