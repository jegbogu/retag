import { useRouter } from 'next/router'
import classes from '../weather.module.css'
import { useEffect, useRef, useState } from 'react'
 
 

function Contact() {
    const router = useRouter()
 const{contact} = router.query
 
const[countryCode, setCountryCode] = useState('')
const[main,setMain] = useState(' ')
const[desc,setDesc] = useState(' ')
const[temp,setTemp] = useState(' ')
const[city, setCity] = useState('lagos')

 
 useEffect(()=>{
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city && setCity(contact)}&appid=31feb07016c25910ad14a06ee29ddc67`)
    .then(res=>res.json())
    .then(data=>(setCountryCode(data.sys.country), setMain(data.weather[0].main), setDesc(data.weather[0].description), setTemp(data.main.temp) ,console.log(data)))
 },[city])
 

  
 
 




    return (
        <div className={classes.card}>
            <div className={classes.info}>
                <h3>Country</h3>
                <hr/>
                <h4>{countryCode}</h4>
            </div>
            <div className={classes.info}>
                <h3>Weather and Description</h3>
                <hr/>
                <h4>{main}</h4>
                <p>{desc}</p>
            </div >
            <div className={classes.info}>
                <h3>Temprature</h3>
                <hr/>
                <h4>{temp}</h4>
            </div>
           
        </div>
    )
}

export default Contact