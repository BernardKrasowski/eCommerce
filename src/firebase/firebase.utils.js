import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClCaIMYSn_Cfr-F93jJIDEewcDpexufNI",
  authDomain: "ecommerce-a69f9.firebaseapp.com",
  projectId: "ecommerce-a69f9",
  storageBucket: "ecommerce-a69f9.appspot.com",
  messagingSenderId: "198147867309",
  appId: "1:198147867309:web:708c6c805032cb13f3fc24",
};
// login using popup/////////////////////////////////////////////
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log("to jest logowanie", result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const db = getFirestore();
////////// creating users /////////////
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log(`User exist:`, docSnap.data());
  } else {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        createDate,
        ...additionalData,
      });
      console.log(`New User Created: ${displayName}`);
    } catch (error) {
      console.log(`Error creating user: ${displayName}`, error.message);
    }
  }
  return userRef;
};
