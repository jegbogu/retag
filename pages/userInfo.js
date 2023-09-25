import classes from '../pages/allUsers.module.css'
import { useRouter } from 'next/router'

export const getStaticProps = async ()=>{
 const response =  await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await response.json()
 console.log(data)

 return{
    props:{userData:data}
 }
}

function UserInfo({userData}){
const router = useRouter()

    return(
        <div className={classes.section}>

        { userData.map((el) => {
            let lastname = (el.name.slice(el.name.indexOf(' '), 100)).trim()
            return (
                <div className={classes.card} key={el.email}>
                    <p>{el.username}</p>
                    <div className={classes.main}>
                        <div className={classes.figure}>

                            <h2>{el.name.slice(0, 1)} {lastname.slice(0, 1)}</h2>
                        </div>
                        <hr />
                        <h3>{el.name}</h3>
                        <p>{el.email}</p>
                        <p>{el.address.street}</p>
                        <p>Age: {el.age}</p>

                        <h4>{el.address.street}</h4>
                    </div>
                    <button onClick={()=>{router.push('/clients/' + el.id)}}>View User Detail Page</button>

                </div>
            )
        })}
    </div>
    )
}

export default UserInfo