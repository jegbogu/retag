import Link from "next/link"
import userContext from "@/store/userContext"
import { useContext } from "react"
function MainNavigation(){
    const{qty}  = useContext(userContext)
    return(
        <div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><Link href='/admin/adminDashboard'>Admin Dashboard</Link></li>
                <li><Link href='/users'>Users Dashboard</Link></li>
                <li><Link href='/allUsers'>All Users</Link></li>
                <li><Link href='/users/users-login'>Users Login</Link></li>
                <li><Link href='/shop'>{qty}</Link></li>
                
            </ul>
        </div>
    )
}

export default MainNavigation