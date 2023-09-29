import { useRef, useState } from 'react'
import classes from '../user/registrationForm.module.css'
import data from '../../pages/api/data/countryData'
import { useRouter } from 'next/router'


function RegistrationForm() {
// console.log(data)
    //there are two ways to get the input of a form feild
    //useRef , and second method is by using the two binding which involves onChange event
    //useRef when you want to get the input after submittion
    //you use the onChange method when you want to get the input value while typing in the form field this is good for searching a page or  post and it good for instant password validation before submittion
    //
    const [emailErr, setEmailErr] = useState(' ')
    const [passErr, setPassErr] = useState(' ')
    const [show, setShow] = useState(false)
    const [showCity, setShowCity] = useState (' ')
    const [cCode, setCcode] = useState(' ')
    const router = useRouter()

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const cPasswordInputRef = useRef()
    const cityInputRef = useRef()
    const countryInputRef = useRef()
    const phoneInputRef = useRef()
    const codeInputRef = useRef()

    
    function showFnc() {
        setShow(!show)
        
    }
function getCity(e){
 
    setShowCity(e.target.value)
}
    

   async function submitHadler(e) {
        e.preventDefault()


        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const enteredCPassword = cPasswordInputRef.current.value
        const enteredCity = cityInputRef.current.value
        const enteredCountry = countryInputRef.current.value
        const enteredPhone = phoneInputRef.current.value
        const enteredCode = codeInputRef.current.value

        let userPh
      //0908923455

        if(enteredPhone[0]==0){
            userPh =  enteredPhone.slice(1,100)
            
        }else{
            userPh = enteredPhone
        }
        const userPhone = `${enteredCode}${userPh}`

        if (enteredEmail.length < 13) {
            setEmailErr(<p className={classes.red}>EMAIL TOO SHORT</p>)
            return

        } else {
            setEmailErr(<p className={classes.green}>EMAIL CORRECT</p>)
        }

        console.log({ enteredEmail, enteredPassword, enteredCPassword, enteredCity,enteredCountry,userPhone })

        const data = {
            email:enteredEmail,
            password:enteredPassword,
            city:enteredCity,
            country:enteredCountry,
            phone:userPhone
        }

        const response = await fetch('api/register/register-form',{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json',
            }
        })
        const userMsg = await response.json()
       if(response.ok){
        router.push('/login')
       }else{
        setPassErr(userMsg.message)
        
       }
        
       

    
    }

    function fncCountry(e){
        const foundCountry = data.find((el)=>{
            return el.country === e.target.value
        })

        setCcode(foundCountry.code)
    }

    let nCode = `+${cCode}`

    return (
        <div className={classes.section}>

            <form className={classes.form} onSubmit={submitHadler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>

                    <div>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            required
                            ref={emailInputRef}

                        />
                        {emailErr}
                    </div>

                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                        <h2 style={{color:"red"}}>{passErr}</h2>
                    <div>
                        <input
                            type={show ? 'text' : 'password'}
                            name='password'
                            id='password'
                            required
                            ref={passwordInputRef}
                        />
                        
                        <span><button type='button' onClick={showFnc}>{show ? 'Hide' : 'Show'}</button></span>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='cPassword'>Confirm Password</label>

                    <div>
                        <input
                            type='password'
                            name='cPassword'
                            id='cPassword'
                            required
                            ref={cPasswordInputRef}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='country'>Country</label>

                    <div>
                         <select
                         required
                         name='country'
                         id='country'
                         ref={countryInputRef}
                         onChange={fncCountry}
                         >
                            <option>--select country--</option>

                            {data.map((el,i)=>{
                                return <option key={i}>{el.country}</option>
                            })}
                         </select>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='city'>City</label>
                        <h2>{showCity}</h2>
                    <div>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            required
                            ref={cityInputRef}
                            // onChange={(e)=>{console.log(e.target.value)}}
                            onChange={getCity}

                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phone'>Phone</label>
                         
                    <div className={classes.codePhone}>
                        <div className={classes.code}>
                        <input
                            type='text'
                            name='code'
                            id='code'
                            required
                            ref={codeInputRef}
                            value={nCode}
                            readOnly

                        />
                        </div>
                        <div className={classes.phone}>
                        <input
                            type='text'
                            name='phone'
                            id='phone'
                            required
                            ref={phoneInputRef}
                            

                        />
                    </div>
                      
                    </div>
                    
                </div>
                <div className={classes.action}>
                    <button type='submit'>Submit</button>
                </div>


            </form>

        </div>
    )
}

export default RegistrationForm