import React, { useContext } from 'react';
import Icons from "../Atom/Icons";
import AppsIcon from '../../public/svg/apps.svg';
import AccountIcon from '../../public/svg/account.svg';
import Link from 'next/link';

import { UserContext } from '../../Context/UserContext'; 
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/router';


const RightFrag = () => {
  const {users} = useContext(UserContext);
  const router = useRouter();

  const logout = () =>{
    auth.signOut();
    console.log(users.email,"Signout")
    router.push("/login");
  }


  return (
    <div className='right-icons'>
      <Icons photos={AppsIcon} />
      <Icons photos={AccountIcon} />
      <div className='user'></div>
      {users ? (
        <p>{users.email}</p>
      ) : (
        <p>No User</p>
      )}
  {users ?(
          <button type="submit" className="signup-btn" onClick={logout}>logout</button>
      ): (
        <Link href="/signup">
        <button type="submit" className="signup-btn">Signup</button>
        </Link>
      )
      }
      
    </div>
  );
}

export default RightFrag;
