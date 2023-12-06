import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQVo36H2TUB2XIyp0S5jYWrpd_96B4G3w",
  authDomain: "news-app-react-1934d.firebaseapp.com",
  projectId: "news-app-react-1934d",
  storageBucket: "news-app-react-1934d.appspot.com",
  messagingSenderId: "713995864225",
  appId: "1:713995864225:web:388dd2b388d8fb729008e0",
  measurementId: "G-93F6JHS9BL"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };