// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC59OrmpX3EXSIgiUDNzbKnC1ToFxILFxM",
  authDomain: "ad-laatste-opdracht.firebaseapp.com",
  projectId: "ad-laatste-opdracht",
  storageBucket: "ad-laatste-opdracht.appspot.com",
  messagingSenderId: "627687184824",
  appId: "1:627687184824:web:e2912afc769d389c39d74d",
  measurementId: "G-N3V7H2DBJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
