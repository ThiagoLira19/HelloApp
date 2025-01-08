// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, initializeAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
//import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, initializeAuth, getReactNativePersistence } from 'firebase/auth';
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvYW9WQ3NdNFtOQJjZx5TEHXIpreMgLP8",
  authDomain: "helloapp-fa1e7.firebaseapp.com",
  projectId: "helloapp-fa1e7",
  storageBucket: "helloapp-fa1e7.firebasestorage.app",
  messagingSenderId: "112786305736",
  appId: "1:112786305736:web:08bd9e5478c84e40c1ebfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const banco = getFirestore(app);

export {app, auth, banco, signInWithEmailAndPassword};
/*
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {app, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut};
*/