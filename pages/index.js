import { Inter } from 'next/font/google'
import Dashboard from './dashboard'
import Signup from './signup'
import UserFromDB from '@/Context/UserContext'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <UserFromDB>
    <Dashboard/>
    {/* <Signup/> */}
    </UserFromDB>
    </>
  )
}
