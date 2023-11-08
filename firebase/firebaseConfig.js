import { initializeApp } from 'firebase/app';

import { firebaseConfig } from './firebaseinit';


import {getFirestore,collection,addDoc,doc,onSnapshot,getDoc,where,query,setDoc,deleteDoc} from 'firebase/firestore'

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  

  // const db = getFirestore(app);


  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,db,collection,addDoc,deleteDoc,where,query,onAuthStateChanged,doc,onSnapshot,getDoc,setDoc};
