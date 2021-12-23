import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClCaIMYSn_Cfr-F93jJIDEewcDpexufNI",
  authDomain: "ecommerce-a69f9.firebaseapp.com",
  projectId: "ecommerce-a69f9",
  storageBucket: "ecommerce-a69f9.appspot.com",
  messagingSenderId: "198147867309",
  appId: "1:198147867309:web:708c6c805032cb13f3fc24",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
