import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    const firebaseConfig = {

        apiKey: "AIzaSyDCPFn-4c0PxB1GImyjwyzf22-LLMduMG0",
        authDomain: "block-chain-b1b7b.firebaseapp.com",
        projectId: "block-chain-b1b7b",
        storageBucket: "block-chain-b1b7b.appspot.com",
        messagingSenderId: "749057147458",
        appId: "1:749057147458:web:19366a8f80ec106887a3db",
        measurementId: "G-GLL9H25NZX"

      };
      
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export{firebase}
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const auth = getAuth();