import UserDetails from "@/components/userDetails"

function UserClient(props){
    return(
    <UserDetails id={props.userData.id}
    username={props.userData.username}
    email={props.userData.email}/>
    )
}

export default UserClient

export const getStaticPaths = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json({},{id:1})

    // console.log(data)
    return{
        fallback: 'blocking',
        paths: data.map((client)=>({
            params:{clientsId:client.id.toString()}
        }))
    }
}

export const getStaticProps = async (context) =>{
const clientsId = context.params.clientsId
console.log(clientsId)
const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const selectedUser = data.find((el)=>{
        return el.id == clientsId
    })

    console.log(selectedUser)

    return{
        props:{
            userData:{
                id: selectedUser.id.toString(),
                username:selectedUser.username,
                email: selectedUser.email
            }
        }
    }
}