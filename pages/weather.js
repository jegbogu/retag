 
import { useRef, useState } from 'react'
import classes from './weather.module.css'
 



function Weather(){
    const cityInputRef = useRef()
    console.log(process.env.APIKEY)
    const[countryData, SetCountryData] = useState('')
    const[temp, SetTemp] = useState('')
    const[main, SetMain] = useState('')
    const[desc, SetDesc] = useState('')
  const [errMsg, SetErrMsg] = useState(' ')
    const[display, setDisplay] = useState(classes.allInfoHide)

 function submitHandler(e){
e.preventDefault()
 const enteredCity = cityInputRef.current.value
 const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=31feb07016c25910ad14a06ee29ddc67`)
 .then ((res)=>{
    console.log(res)
    if(!res.ok){
        throw Error('Invalid Input')
        // setDisplay(classes.allInfoHide)
        // SetErrMsg('Invalid Input')
       
    }else{
        setDisplay(classes.allInfoShow)
        SetErrMsg('VALID CITY')
    }

    return res.json()
 } )
 
 .then(data=>
 (SetCountryData(data.sys.country),
 SetTemp(data.main.feels_like) ,
 SetMain(data.weather[0].main),
 SetDesc(data.weather[0].description),
 console.log(data))).catch((err)=>{
    console.log(err)
    SetErrMsg(err.message)
    // console.log(err.message)
   
 }) 
 
   
     

 
}

    return(
        <div className={classes.card}>
          <p>{errMsg}</p>
             <div className={display}>
                <div>
                    <h5>Country</h5>
                    <hr/>
                    <p>{countryData}</p>
                </div>
                <div>
                    <h5>Temperature</h5>
                    <hr/>
                    <p>{(temp-273.150).toFixed(2)} C</p>
                </div>
                <div>
                    <h5>Weather Description</h5>
                    <hr/>
                    <p>{main}</p>
                    <p>{desc}</p>
                </div>
             </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='city'>Enter city</label>
                </div>
                <div className={classes.formControl}>
                    <input 
                    id='city'
                    name='city'
                    ref={cityInputRef}
                    >

                    </input>
                </div>
                <div className={classes.formControl}>
                     <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}
export default Weather