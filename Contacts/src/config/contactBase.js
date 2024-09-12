// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqbXlk5I0PTfF3BB5fjR2bmNsG2YmaIC0',
  authDomain: 'contactbase-65bb5.firebaseapp.com',
  projectId: 'contactbase-65bb5',
  storageBucket: 'contactbase-65bb5.appspot.com',
  messagingSenderId: '782953294508',
  appId: '1:782953294508:web:e66f523811173be76b0d09',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
