import { useEffect, useState } from "react"
import classes from '../pages/allUsers.module.css'

function ClientUsers(){
const [allUsers, SetAllUsers] = useState([])
    useEffect(()=>{
        const response = fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            return res.json()
        })
        .then(data=>(console.log(data), SetAllUsers(data)))
    },[])



    return(
        <div className={classes.section}>

                { allUsers.map((el) => {
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


                        </div>
                    )
                })}
            </div>
       
    )
}

export default ClientUsers