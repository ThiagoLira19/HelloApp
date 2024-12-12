import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {app, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut};