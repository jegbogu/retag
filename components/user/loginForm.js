import { useRef, useState } from 'react'
import classes from './registrationForm.module.css'
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react";


function LoginForm() {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [emailErr, setEmailErr] = useState(' ')
    const [passErr, setPassErr] = useState(' ')
     
    // const [check,setCheck] = useState(' ')

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    
    function setFnc() {
        setShow(!show)
    }

  async  function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        

        if (enteredEmail.toLowerCase().trim().length >= 16) {
            setEmailErr(<p style={{ color: 'green' }}>Email Correct</p>)
        } else {
            setEmailErr(<p style={{ color: 'red' }}>Email too  Short</p>)
            return;
        }
        if (enteredPassword.trim().length >= 8) {
            setPassErr(<p style={{ color: 'green' }}>Password Correct</p>)
        } else {
            setPassErr(<p style={{ color: 'red' }}>Password too  Short</p>)
            return;
        }
        
        console.log({ enteredEmail, enteredPassword, })
        const data = {
            email: enteredEmail,
            password:enteredPassword
        }
         console.log(data)



         const handleSign = async ()=>{
            try {
                const result  = await signIn("credentials",{
                    email: enteredEmail,
                    password: enteredPassword,
                    role:'user',
                    redirect: false,
                   
                }) 
                if(!result.ok){
                    throw new Error('Invalid Username or Password')
                }else{
                    router.push('/dashboard')
                }
             

            } catch (error) {
                
                setEmailErr(error.message)
                 
                setPassErr('')
                return;
            }
        }
        
        
        handleSign()
     

    }

    return (
        <div className={classes.section}>
         
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='email'>Eamil</label>
                    {emailErr}
                    <div>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            required
                            ref={emailInputRef}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    {passErr}
                    <div>
                        <input
                            type={show ? "text" : "password"}
                            name='password'
                            id='password'
                            required
                            ref={passwordInputRef}
                        />
                        <span><button type='button' onClick={setFnc}>{show ? "Hide" : "Show"}</button></span>
                    </div>
                </div>
                 
               
                <div className={classes.action}>
                    <button type='submit'>Submit</button>
                </div>


            </form>

        </div>
    )
}

export default LoginForm