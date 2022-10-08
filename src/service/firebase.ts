import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.PROJECT_ID,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID
  apiKey: "AIzaSyA-ul64SSJX7s2PXbe3A98CXRpY1YTlhbc",
  authDomain: "planning-points.firebaseapp.com",
  databaseURL: "https://planning-points-default-rtdb.firebaseio.com",
  projectId: "planning-points",
  storageBucket: "planning-points.appspot.com",
  messagingSenderId: "817772778558",
  appId: "1:817772778558:web:270b9949e033a31262ad6f",
  measurementId: "G-SWJ63G6F42"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()
const provider = new GoogleAuthProvider();

export {app, analytics, auth, provider}