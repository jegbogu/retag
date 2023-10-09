import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession, signOut} from "next-auth/react";
import classes from './signUp.module.css'





const ChangePasswordForm = () => {
    const router = useRouter()
    const [passCheck, setPassCheck] = useState(" ")
     const{data:session, status} = useSession()

    
    const passwordInputRef = useRef()
    const newPassportInputRef = useRef()

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = session.user.username
        const enteredPassword = passwordInputRef.current.value;
        const enterednewPassword = newPassportInputRef.current.value;

        if (enteredPassword === enterednewPassword) {
            setPassCheck("Password Matched, please hold on")
        } else {
            setPassCheck("Password do not Match")
            return;
        }

        const response = await fetch('api/changePass/password', {
            method: 'POST',
            body: JSON.stringify({ enteredEmail, enteredPassword, enterednewPassword }),
            headers: {
                'Content-type': 'application/json'
            },

        });
        let user = await response.json()
        if(!user.ok){
            setPassCheck(user.message)
        }
       
        await signOut()

    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                <p className={classes.register}> Change Password</p>
                    <h3>{passCheck}</h3>
                     
                    <div className={classes.control}>


                        <label htmlFor="password">New Password</label>
                        <input type='password'
                            required id="passpord"
                            name="passpord"

                            ref={passwordInputRef} />

                    </div>
                    <div className={classes.control}>


                        <label htmlFor="newpassword"> Confirm New Password</label>
                        <input type='password'
                            required id="newpasspord"
                            name="newpasspord"

                            ref={newPassportInputRef} />

                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default ChangePasswordForm;