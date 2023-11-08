import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, auth, collection, db, onSnapshot, doc, where, query } from "../firebase/firebaseConfig";

export const UserContext = createContext();

const UserFromDB = ({ children }) => {
  const [users, setUsers] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const userRef = doc(db, "users", authUser.uid);
      onSnapshot(userRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            // console.log(userData)
            setUsers(userData);
          } 
          else {
            console.log("User document does not exist.");
          }
        });
      }

      //   return () => unsubscribeSnapshot();
      // } else {
      //   setUsers(null);
      //   console.log("Logged Out");
      // }
    }, []);



  }, []);
  
  
  
  useEffect(() => {
    if (users) {
      const notesRef = collection(db, "notes");
      const q = query(notesRef, where("ownId", "==", users.uid));
      
      onSnapshot(q, (querySnapshot) => {
        const c = [];
        querySnapshot.forEach((doc) => {
          c.push({ ...doc.data(), id: doc.id });
          // console.log(users.email)
        });
        setNotes(c);
      });
    }

  }, [users]);
  

  useEffect(() => {
    if (users.role=== "admin") {
      const notesRef = collection(db, "notes");
      const q = query(notesRef);
      
      onSnapshot(q, (querySnapshot) => {
        const c = [];
        querySnapshot.forEach((doc) => {
          c.push({ ...doc.data(), id: doc.id });
          console.log(c)
        });
        setNotes(c);
      });
    }
  }, [users]);
  return (
    <UserContext.Provider value={{ users, setUsers, notes }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserFromDB;
