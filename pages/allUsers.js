 
import { useState } from 'react'
import humanData from '../pages/api/humanData'
import classes from './allUsers.module.css'
import { useContext } from "react"
import userContext from "@/store/userContext"

function AllUsers() {
    const[allUsers,setAllUsers] = useState([])
    const { qty } = useContext(userContext)
    const { SetQty } = useContext(userContext)
    function addProd(){
        SetQty(qty+1)
    }
     
function searchFnc(e){
 const foundUser = humanData.filter((el)=>{
    return el.email.includes(e.target.value)
 })

 setAllUsers(foundUser)

 
}

const userAge = humanData.map((el)=>Number(el.age)).reduce((cv,acv)=>cv+acv)
 const uA = userAge/humanData.length
 



    return (
        <div style={{padding:'50px'}}>
            <h3>{qty}</h3>
             <button onClick={addProd}>Add one Product</button>
             <hr/>
            <h3>Average Age: {uA}</h3>
            <form style={{marginLeft:'50px'}}>
                <input
                placeholder='search email'
                style={{padding:'20px'}}
                onChange={searchFnc}
                >
                
                </input>
            </form>
             
            <div className={classes.section}>

                {  allUsers.length===0? setAllUsers(humanData): allUsers.map((el) => {
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
        </div>

    )
}

export default AllUsers