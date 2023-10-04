import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
function Dashboard(){
const{data:session, status} = useSession()
const router = useRouter()
function signOutFnc(){
    signOut()
    router.push('/login')
}

if(status==='loading'){
    return <p>Loading...</p>
}else if(status==='unauthenticated'){
    return <p>Unauthourised</p>
}else{
    console.log(session.user)
    return(
        <div>
            <h1>{session.user.email}</h1>
            <h1>{session.user.phone}</h1>
            <h1>{session.user.country}</h1>
            <h1>{session.user.city}</h1>
            <h1>Dashboard</h1>
            <button onClick={signOutFnc}>Sign Out</button>
        </div>
    )
}

   
}

export default Dashboard