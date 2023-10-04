import { useSession } from "next-auth/react"

function Dashboard(){
const{data:session, status} = useSession()
if(status==='loading'){
    return <p>Loading...</p>
}else if(status==='unauthenticated'){
    return <p>Unauthourised</p>
}else{
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

   
}

export default Dashboard