import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
 
  setDoc,doc
} from "../../firebase/firebaseConfig";

const Signup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;
    
      await setDoc(doc(db, "users",uid), {
        uid,
        name,
        email,
      });

 
      console.log(`${user.email} signed up successfully.`);
      router.push("/");

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p>Log In to Continue</p>
          <p>
            <Link href={"/login"}>LogIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;