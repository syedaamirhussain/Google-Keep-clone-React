import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";
import {auth,signInWithEmailAndPassword} from '../../firebase/firebaseConfig'


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(`${user.email} signed In successfully.`);
      router.push("/");
      
    } catch (error) {
      setError(error.message);
    }
  };

      return (
        <div>
          <div className="container">
            <h1>Log In</h1>
            <form onSubmit={handleSignin}>
            
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />  </div>
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
                
                <button type="submit" className="signup-btn">Log In</button>
                <p>Dont have Any Account Please Signup</p><Link href={'/signup'}><p>Signup</p></Link>
            </form>
        </div>
          
        </div>
    
  );
}

export default Login;
